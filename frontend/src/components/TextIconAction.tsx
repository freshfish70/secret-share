import React, { ReactElement, ReactNode } from 'react'
import Tooltip from '@mui/material/Tooltip'
import { SvgIconProps } from '@mui/material/SvgIcon'

interface TextIconActionProps {
  Icon: React.FC<SvgIconProps>
  text: string | number
  tooltipText?: string
  showTooltip?: boolean
  disableTooltipOnHover?: boolean
  action: () => void
}

export default function TextIconAction({
  Icon,
  text,
  action,
  showTooltip,
  disableTooltipOnHover,
  tooltipText
}: TextIconActionProps) {
  return (
    <>
      <button className='cursor-pointer text-chambray-500 hover:text-chambray-400' onClick={action}>
        <Tooltip
          title={tooltipText ?? ''}
          open={showTooltip}
          placement='top'
          disableHoverListener={disableTooltipOnHover}
          arrow
        >
          <div>
            <Icon fontSize='inherit' className='mr-1 ' />
            <span className='text-xs mr-3  transition-colors'>{text}</span>
          </div>
        </Tooltip>
      </button>
    </>
  )
}
