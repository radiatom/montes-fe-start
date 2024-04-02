import { ImageResponse } from 'next/og'

export const contentType = 'image/png'
export const size = {
  width: 32,
  height: 32,
}

// icon
const icon = () => {
  // return
  return new ImageResponse(
    (
      <div
        style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          width: '100%',
          height: '100%',
          paddingLeft: '2px',
          backgroundColor: '#e23047',
          borderRadius: '5px',
          fontSize: 20,
          color: '#ffffff',
        }}
      >
        U
      </div>
    ),
    size,
  )
}

export default icon
