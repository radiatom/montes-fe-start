import React, { FC } from 'react'

interface ITitleProps {
  size: 'h1' | 'h2' | 'h3'
  title: string
  className: string
}

const TitleComponent: FC<ITitleProps> = ({ size, title, className }) => {
  return (
    <>
      {['h1', 'h2', 'h3'].includes(size)
        ? React.createElement(size, { className: `${className}` }, title)
        : null}
    </>
  )
}

export default TitleComponent
