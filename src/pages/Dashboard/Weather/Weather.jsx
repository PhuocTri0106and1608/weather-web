import { Box } from '@mui/material'
import TodayWeather from './TodayWeather/TodayWeather'
import FutureWeather from './FutureWeather/FutureWeather'

function Weather({ weather }) {

  return (
    <Box sx={{
      display: 'flex',
      flexDirection: 'column',
      flex: '1 1 100%',
      maxWidth: '700px',
      my: 2
    }}>
      <TodayWeather todayWeather={weather?.todayWeather}/>
      <FutureWeather futureWeather={weather?.futureWeather}/>
    </Box>
  )
}

export default Weather