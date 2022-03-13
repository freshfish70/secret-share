import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle
} from '@mui/material'
import { MainButton } from '@/components/MainButton'
import React, { FC } from 'react'
import { ErrorButton } from './ErrorButton'

interface PromptDialogProps {
  open: boolean
  onCancel: () => void
  onOk: () => void
  title: string
  body: string
}

export const PromptDialog: FC<PromptDialogProps> = ({ open, onCancel, onOk, title, body }) => {
  return (
    <Dialog
      open={open}
      onClose={onCancel}
      aria-labelledby='alert-dialog-title'
      aria-describedby='alert-dialog-description'
      sx={{
        '.MuiDialog-paper': {
          color: 'white',
          background: '#172045'
        }
      }}
    >
      <DialogTitle id='alert-dialog-title'>{title}</DialogTitle>
      <DialogContent className='text-white'>
        <DialogContentText
          id='alert-dialog-description'
          className='text-white'
          sx={{ color: '#ABB6E3' }}
        >
          {body}
        </DialogContentText>
      </DialogContent>
      <DialogActions className='m-3'>
        <ErrorButton className={'mr-3'} onClick={onOk}>
          Yes
        </ErrorButton>
        <MainButton onClick={onCancel}>No</MainButton>
      </DialogActions>
    </Dialog>
  )
}
