import React, { FC } from 'react'

interface InputProps
  extends React.DetailedHTMLProps<React.InputHTMLAttributes<HTMLInputElement>, HTMLInputElement> {}
const Input: FC<InputProps> = (props) => {
  let classes =
    'min-w-full rounded-md mb-5 bg-chambray-900 text-chambray-200 p-3 text-xs bg-opacity-30 focus:outline-none shadow-lg placeholder-chambray-600'
  if (props.className) classes += ` ${props.className}`
  return <input {...props} className={classes} />
}

export default Input
