import { Snackbar, SnackbarProps } from '@mui/material'
import React, { FC } from 'react'
interface SnackProps extends SnackbarProps {
  isOpen: boolean
  onCloseHandler: () => void
}
export const Snack: FC<SnackProps> = ({ isOpen, onCloseHandler, ...rest }) => {
  return (
    <Snackbar
      open={isOpen}
      anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
      autoHideDuration={2000}
      onClose={onCloseHandler}
      className='bg-chambray-500'
      sx={{
        '.MuiPaper-elevation': {
          background: 'rgba(48, 67, 146)'
        }
      }}
      {...rest}
    />
  )
}
