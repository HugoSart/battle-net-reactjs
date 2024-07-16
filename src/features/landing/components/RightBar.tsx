import {CSSProperties} from "react";

const socialBarStyle: CSSProperties = {
  display: 'flex',
  flexDirection: 'column',
  width: '120px',
  height: '100%',
  borderLeftColor: 'rgba(255, 255, 255, 0.1)',
  borderLeftStyle: 'solid',
  borderLeftWidth: '1px'
}

export function RightBar() {
  return (
    <div style={socialBarStyle}>

    </div>
  )
}