import { SvgIconProps } from '@material-ui/core'
import React, { ReactElement, ReactNode } from 'react'

interface TextIconActionProps {
  Icon: React.FC<SvgIconProps>
  text: string | number
  action: () => void
}

export default function TextIconAction({ Icon, text, action }: TextIconActionProps) {
  return (
    <button className='cursor-pointer text-chambray-500 hover:text-chambray-400' onClick={action}>
      <Icon fontSize='inherit' className='mr-1 ' />
      <span className='text-xs mr-3  transition-colors'>{text}</span>
    </button>
  )
}
