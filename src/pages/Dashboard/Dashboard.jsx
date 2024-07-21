/* eslint-disable no-console */
import { useEffect, useState } from 'react'
import { toast } from 'react-toastify'
import { Box, CircularProgress, Container, Typography } from '@mui/material'
import Header from '~/components/Header/Header'
import SearchCity from './SearchCity/SearchCity'
import Weather from './Weather/Weather'
import { createNewUserAPI, fetchWeatherWithinEmailAPI, fetchWeatherWithoutEmailAPI } from '~/apis'

function Dashboard() {
  const [data, setData] = useState(null)
  const [userId, setUserId] = useState(null)
  const days = 5
  const emailAddress = localStorage.getItem('emailAddress')
  const [city, setCity] = useState('Saigon')
  // To get current city name if have more time
  /*
  const [latitude, setLatitude] = useState(null)
  const [longitude, setLongitude] = useState(null)
  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((position) => {
        setLatitude(position.coords.latitude)
        setLongitude(position.coords.longitude)
      }, (error) => {
        console.error('Error getting the location:', error)
      })
    } else {
      console.error('Geolocation is not supported by this browser.')
    }
  }, [])
  */
  const createNewUser = async (email) => {
    try {
      const user = await createNewUserAPI({ email })
      setUserId(user?._id)
      toast.success(`Create new user by email ${email} successfully!`)
    } catch (error) {
      toast.error(error.response.data.message)
    }
  }
  useEffect(() => {
    const getWeather = async (userId, city, days) => {
      try {
        if (!userId) {
          const result = await fetchWeatherWithoutEmailAPI(city, days)
          setData(result)
        } else {
          const result = await fetchWeatherWithinEmailAPI(userId, city, days)
          setData(result)
          localStorage.setItem('emailAddress', data?.email)
        }
      } catch (error) {
        toast.error(error.response.data.message)
      }
    }
    getWeather(userId, city, days)
  }, [city, userId, data?.email])
  if (!data) {
    return (
      <Box sx={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        gap: 2,
        width: '100vw',
        height: '100vh',
        backgroundColor: (theme) => theme.palette.secondary.main
      }}>
        <CircularProgress />
        <Typography>Loading Board...</Typography>
      </Box>
    )
  }
  return (
    <Container disableGutters maxWidth={false}
      sx={{ backgroundColor: (theme) => theme.palette.secondary.main }}>
      <Header email={emailAddress} createNewUser={createNewUser}/>
      <Box sx={{
        display: 'flex',
        flexWrap: 'wrap',
        gap: 16,
        marginTop: 6,
        paddingBottom:15,
        justifyContent: 'center'
      }}>
        <SearchCity setCity={setCity}/>
        <Weather weather={data?.weather}/>
      </Box>
    </Container>
  )
}

export default Dashboard