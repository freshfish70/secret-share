import React, { FC, useState } from 'react'
interface DebounceClickerProps {
  debounceTime: number
  onClickHandle: (isInDebounce: boolean, click: boolean) => void
}

export const DebounceClicker: FC<DebounceClickerProps> = ({
  debounceTime,
  onClickHandle,
  children
}) => {
  const [timeout, setTimeoutKey] = useState<number | undefined>(undefined)
  const handle = (i?: number) => {
    onClickHandle(!!i, true)
    clearTimeout(i)
    const t = window.setTimeout(() => {
      onClickHandle(false, false)
      setTimeoutKey(undefined)
    }, debounceTime)
    setTimeoutKey(t)
  }
  return <div onClick={() => handle(timeout)}>{children}</div>
}
