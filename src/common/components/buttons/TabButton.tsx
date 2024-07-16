import {CSSProperties} from "react";

const tabButtonStyle: CSSProperties = {
  position: 'relative',
}

const tabButtonUnderlineStyle: CSSProperties = {
  position: 'absolute',
  width: 'calc(100% - 40px)',
  height: '2px',
  backgroundColor: '#148EFF',
  bottom: '5px',
  left: '50%',
  right: '50%',
  transform: 'translate(-50%, -50%)',
}

export function TabButton({ text = '', selected = false, onClick = () => {} }) {
  return (
    <div style={tabButtonStyle}>
      <button
        onClick={onClick}
        style={{ backgroundColor: 'transparent', fontWeight: '600' }}
        className={ selected ? '' : 'hover-opacity'}
      >
        {text}
      </button>

      <div style={{
        ...tabButtonUnderlineStyle,
        width: selected ? tabButtonUnderlineStyle.width : '0',
        transition: selected ? 'width 0.5s' : '',
      }}></div>
    </div>
  );
}
