import { useState } from 'react'
import { Box, Button, TextField, Tooltip, Typography } from '@mui/material'
import MarkEmailUnreadIcon from '@mui/icons-material/MarkEmailUnread'
import Dialog from '@mui/material/Dialog'
import DialogActions from '@mui/material/DialogActions'
import DialogContent from '@mui/material/DialogContent'
import DialogTitle from '@mui/material/DialogTitle'

function Header({ email, createNewUser, verifyEmail }) {
  const [openEmailForm, setOpenEmailForm] = useState(false)
  const [openOTPForm, setOpenOTPForm] = useState(false)
  const toggleOpenEmailForm = () => setOpenEmailForm(!openEmailForm)
  const toggleOpenOTPForm = () => setOpenOTPForm(!openOTPForm)
  const addEmail = (mail) => {
    createNewUser(mail)
    toggleOpenEmailForm()
    toggleOpenOTPForm()
  }
  const verify = (otp) => {
    verifyEmail(otp)
    toggleOpenOTPForm()
  }
  return (
    <Box px={7} sx={{
      height: (theme) => theme.webCustom.appBarHeight,
      display: 'flex',
      alignItems: 'center',
      backgroundColor: (theme) => theme.palette.primary.main
    }}>
      {/* Add Email Dialog */}
      <Dialog
        open={openEmailForm}
        onClose={toggleOpenEmailForm}
        PaperProps={{
          component: 'form',
          onSubmit: (event) => {
            event.preventDefault()
            const formData = new FormData(event.currentTarget)
            const formJson = Object.fromEntries(formData.entries())
            const mail = formJson.email
            addEmail(mail)
          }
        }}
      >
        <DialogTitle >Add Email</DialogTitle>
        <DialogContent >
          <Typography variant='span'
            sx={{
              fontSize: '0.8rem',
              color: 'black',
              textAlign: 'center'
            }}>
            To receive weather alerts to your email, please enter your email address here. Every day we will send updates.
          </Typography>
          <TextField
            autoFocus
            required
            margin="dense"
            id="email"
            name="email"
            label="Email Address"
            type="email"
            fullWidth
            variant="standard"
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={toggleOpenEmailForm}>Cancel</Button>
          <Button type="submit">Submit</Button>
        </DialogActions>
      </Dialog>
      {/* Submit OTP Dialog */}
      <Dialog
        open={openOTPForm}
        onClose={toggleOpenOTPForm}
        PaperProps={{
          component: 'form',
          onSubmit: (event) => {
            event.preventDefault()
            const formData = new FormData(event.currentTarget)
            const formJson = Object.fromEntries(formData.entries())
            const otp = formJson.OTP
            verify(otp)
          }
        }}
      >
        <DialogTitle >Submit OTP</DialogTitle>
        <DialogContent >
          <Typography variant='span'
            sx={{
              fontSize: '0.8rem',
              color: 'black',
              textAlign: 'center'
            }}>
            Next, please enter OTP which be sent to your email address here!
          </Typography>
          <TextField
            autoFocus
            required
            margin="dense"
            id="otp"
            name="OTP"
            label="OTP"
            type="number"
            fullWidth
            variant="standard"
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={toggleOpenOTPForm}>Cancel</Button>
          <Button type="submit">Submit</Button>
        </DialogActions>
      </Dialog>
      <Typography variant='span'
        sx={{
          flex: 1,
          marginLeft:6,
          fontSize: '1.6rem',
          fontWeight: 'bold',
          color: 'white',
          textAlign: 'center'
        }}>
        Weather Dashboard
      </Typography>
      <Box sx={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection:'column'
      }}>
        <Button disabled={email} onClick={toggleOpenEmailForm}>
          <Tooltip title={email || 'Notify weather to your email'}>
            <MarkEmailUnreadIcon sx={{ color: 'white', fontSize: 35 }}/>
          </Tooltip>
        </Button>
        <Typography variant='span'
          sx={{
            fontSize: '0.8rem',
            color: 'white',
            textAlign: 'center'
          }}>
          {email || 'Notify weather to your email'}
        </Typography>
      </Box>
    </Box>
  )
}

export default Header