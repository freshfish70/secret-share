import React, { FC, useState } from 'react'
import { Snack } from './Snack'
interface DebounceClickerProps {
  onClickHandle?: () => void
  value: string
}

export const CopyToClipboard: FC<DebounceClickerProps> = ({ onClickHandle, value, children }) => {
  const [copied, setCopied] = useState<boolean>(false)
  const [copyIndex, setTimerValue] = useState<undefined | number>(undefined)
  const copy = () => {
    try {
      navigator.clipboard.writeText(value).then(
        function () {
          setCopied(true)
          window.clearTimeout(copyIndex)
          const q = window.setTimeout(() => {
            setCopied(false)
          }, 1000)
          setTimerValue(q)
          onClickHandle?.()
        },
        function (err) {}
      )
    } catch (error) {}
  }
  return (
    <span onClick={copy}>
      <Snack isOpen={copied} onCloseHandler={() => setCopied(false)} message='Copied' />
      {children}
    </span>
  )
}
