import {CSSProperties} from "react";

const iconButtonStyle: CSSProperties = {
  // empty
}

export function IconButton({ children }) {
  return (
    <div style={iconButtonStyle}>
      <button style={{ backgroundColor: 'transparent', padding: '10px', width: '40px', height: '40px'}}
              className={'hover-bg center'}>
        {children}
      </button>
    </div>
  );
}
