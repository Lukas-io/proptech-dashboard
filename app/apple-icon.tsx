import { ImageResponse } from 'next/og'

// Image metadata
export const size = {
  width: 180,
  height: 180,
}
export const contentType = 'image/png'

// Image generation
export default function AppleIcon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          backgroundColor: '#105B48',
          borderRadius: '20%',
        }}
      >
        <svg
          width="140"
          height="140"
          viewBox="0 0 21 21"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M5.18408 0.972173L2.71094 3.44531L17.4669 18.2012L19.94 15.7281L5.18408 0.972173Z"
            fill="white"
          />
          <path
            d="M10.5118 7.92567L1.68945 16.748L4.16259 19.2212L12.985 10.3988L10.5118 7.92567Z"
            fill="white"
          />
          <path d="M11.1572 7.72266H0V11.2202H11.1572V7.72266Z" fill="white" />
          <path
            d="M13.2114 9.77734H9.71387V20.9346H13.2114V9.77734Z"
            fill="white"
          />
          <path
            d="M10.3915 3.76651H14.4191C15.77 3.76651 17.0646 3.23022 18.0199 2.27491L18.6375 2.8925C17.6822 3.84781 17.1459 5.1424 17.1459 6.49327V10.5209L20.9108 14.2858V0H6.625L10.3915 3.76651Z"
            fill="white"
          />
        </svg>
      </div>
    ),
    {
      ...size,
    }
  )
}
