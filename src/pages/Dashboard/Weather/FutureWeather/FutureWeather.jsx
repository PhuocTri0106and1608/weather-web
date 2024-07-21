import { Box, Typography } from '@mui/material'

function FutureWeather({ futureWeather }) {
  return (
    <Box sx={{
      display:'flex',
      flexDirection:'column',
      my: 2
    }}>
      <Typography variant='h6' sx={{ fontWeight:'bold', color: 'black', mb: 2 }}>
        4-Day Forecast
      </Typography>
      <Box sx={{
        display: 'grid',
        flexDirection:'row',
        gridTemplateColumns: 'repeat(auto-fit, minmax(150px, 1fr))',
        gap: 2
      }}>
        {futureWeather.map((item, index) => (
          <Box
            key={index}
            sx={{
              alignItems: 'flex-start',
              p: 2,
              borderRadius: 1,
              backgroundColor: theme => theme.palette.primary.placeholder
            }}
          >
            <Typography variant='subtitle1' sx={{ fontWeight: 'bold', color: 'white', mb: 1 }}>
              {`(${item?.time})`}
            </Typography>
            <img src={`https:${item?.icon}`} sizes={50}/>
            <Typography variant='body1' sx={{ color: 'white' }}>
              {`Temp: ${item?.temperature}`}&#176;C
            </Typography>
            <Typography variant='body1' sx={{ color: 'white' }}>
              {`Wind: ${item?.wind} M/S`}
            </Typography>
            <Typography variant='body1' sx={{ color: 'white' }}>
              {`Humidity: ${item.humidity}%`}
            </Typography>
          </Box>
        ))}
      </Box>
    </Box>
  )
}

export default FutureWeather