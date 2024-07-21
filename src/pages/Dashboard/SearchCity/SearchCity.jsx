import { useState } from 'react'
import { Box, Button, Divider, TextField, Typography } from '@mui/material'

function SearchCity({ setCity }) {
  const [location, setLocation] = useState('')
  const setLocationToGetWeather = () => {
    setCity(location)
  }
  const setCurrentLocationToGetWeather = () => {
    setCity('Saigon')
  }
  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', flex: '1 1 100%', maxWidth: '300px', my: 2 }}>
      <Typography variant='h6' sx={{ fontWeight:'bold', color: 'black', mb: 1 }}>
        Enter a City Name
      </Typography>
      <TextField
        autoFocus
        id="outlined-search"
        label="E.g., New York, London, Tokyo"
        type="text"
        size='small'
        value={location}
        onChange={(e) => setLocation(e.target.value)}
        sx={{
          backgroundColor:'white',
          my: 1,
          width: '100%',
          '& label': { color:(theme) => theme.palette.primary.placeholder },
          '& input': { color:(theme) => theme.palette.secondary.contrastText },
          '& label.Mui-focused': { color:(theme) => theme.palette.secondary.contrastText },
          '& .MuiOutlinedInput-root': {
            '& fieldset': { borderColor: (theme) => theme.palette.primary.placeholder },
            '&:hover fieldset': { borderColor: (theme) => theme.palette.secondary.contrastText },
            '&.Mui-focused fieldset': { borderColor: (theme) => theme.palette.secondary.contrastText }
          }
        }}
      />
      <Button
        variant='contained'
        onClick={setLocationToGetWeather}
        disabled={location === ''}
        sx={{
          backgroundColor: (theme) => location === '' ? theme.palette.primary.placeholder : theme.palette.primary.main,
          color: 'white',
          width:'100%',
          justifyContent:'center',
          my: 1
        }}
      >
        Search
      </Button>
      <Divider sx={{
        width: '100%',
        color: (theme) => theme.palette.primary.placeholder
      }}>
        <Typography variant='span' sx={{ fontSize:'0.8rem', fontWeight:'bold', color: (theme) => theme.palette.primary.placeholder }}>or</Typography>
      </Divider>
      <Button
        onClick={setCurrentLocationToGetWeather}
        sx={{
          backgroundColor: (theme) => theme.palette.primary.placeholder,
          color: 'white',
          width:'100%',
          justifyContent:'center',
          my: 1
        }}
      >
        Use Current Location
      </Button>
    </Box>
  )
}

export default SearchCity