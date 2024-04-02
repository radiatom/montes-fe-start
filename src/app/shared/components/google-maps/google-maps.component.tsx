import { FC } from 'react'

interface IGoogleMapsComponentProps {
  width: string
  height?: string
  url: string
}

// component
const GoogleMapsComponent: FC<Readonly<IGoogleMapsComponentProps>> = ({ url, width, height }) => {
  const xy = url.split(', ')
  // return
  return (
    <iframe
      src={`https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d1410.3606569727497!2d${xy[1]}00000000!3d${xy[0]}00000000!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x809ad3fe30dc5543%3A0x2523f490b04b56bc!2s1635%20Cebrian%20St%2C%20West%20Sacramento%2C%20CA%2095691!5e1!3m2!1sen!2sus!4v1711351859238!5m2!1sen!2sus`}
      loading='lazy'
      style={{ aspectRatio: '2/1', width: width, height: height }}
      referrerPolicy='no-referrer-when-downgrade'
    ></iframe>
  )
}

export default GoogleMapsComponent
