import {CSSProperties} from "react";

const secondaryButtonStyle: CSSProperties = {
  height: '24px',
  backgroundColor: 'rgba(255, 255, 255, 0.1)',
  borderRadius: '3px',
  fontSize: '12px',
  lineHeight: '4px',
  fontWeight: '700',
}

export function SecondaryButton({ text, onClick }) {
  return (
    <button style={secondaryButtonStyle} className={'hover-border'} onClick={onClick}>
      {text}
    </button>
  )
}