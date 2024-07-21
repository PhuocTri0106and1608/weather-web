import { Box, Typography } from '@mui/material'

function TodayWeather({ todayWeather }) {
  return (
    <Box sx={{
      display:'flex',
      borderRadius:1,
      justifyContent:'space-between',
      alignItems: 'center',
      backgroundColor:(theme) => theme.palette.primary.main,
      p:2,
      my:2
    }}>
      <Box sx={{
        display: 'flex',
        alignItems: 'flex-start',
        flexDirection: 'column'
      }}>
        <Typography variant='h6' sx={{ fontWeight: 'bold', color: 'white', mb: 1 }}>
          {`${todayWeather?.location} (${todayWeather?.time})`}
        </Typography>
        <Typography variant='body1' sx={{ color: 'white', mb: 1 }}>
          {`Temperature: ${todayWeather?.temperature}`}&#176;C
        </Typography>
        <Typography variant='body1' sx={{ color: 'white', mb: 1 }}>
          {`Wind: ${todayWeather?.wind} M/S`}
        </Typography>
        <Typography variant='body1' sx={{ color: 'white' }}>
          {`Humidity: ${todayWeather?.humidity}%`}
        </Typography>
      </Box>
      <Box sx={{
        display:'flex',
        paddingRight:8,
        alignItems:'center',
        justifyContent:'center',
        flexDirection:'column',
        height: '100%'
      }}>
        <img src={`https:${todayWeather?.icon}`} sizes={100}/>
        <Typography sx={{ color: 'white' }}>
          {todayWeather?.text}
        </Typography>
      </Box>
    </Box>
  )
}

export default TodayWeather