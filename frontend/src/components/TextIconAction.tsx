import { SvgIconProps } from '@material-ui/core'
import {
  DefaultComponentProps,
  OverridableComponent,
  OverridableTypeMap
} from '@material-ui/core/OverridableComponent'
import React, { ReactElement, ReactNode } from 'react'

interface TextIconActionProps {
  Icon: React.FC<any>
  text: string | number
  action: () => void
}

export default function TextIconAction({ Icon, text, action }: TextIconActionProps) {
  return (
    <div>
      <Icon fontSize='inherit' className='mr-1' />
      <span className='text-xs mr-3 text-chambray-500 hover:text-chambray-400 transition-colors cursor-pointer'>
        {text}
      </span>
    </div>
  )
}
