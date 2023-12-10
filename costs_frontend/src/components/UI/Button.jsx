import React from 'react'
import './Button.css'

function Button(props) {
    const { children, ...restProps } = props;
  return (
    <button className='button' {...restProps}>{children}</button>
  )
}

export default Button