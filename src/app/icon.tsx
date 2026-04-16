import { ImageResponse } from 'next/og'

export const size = { width: 64, height: 64 }
export const contentType = 'image/png'

export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          background: '#FDFCFB',
          color: '#4A3728',
          fontSize: 44,
          fontFamily: 'Georgia, "Times New Roman", serif',
          fontWeight: 600,
        }}
      >
        D
      </div>
    ),
    { ...size },
  )
}
