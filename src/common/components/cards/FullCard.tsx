import {CSSProperties} from "react";
import {Space} from "../containers/Space.tsx";

const fullCardStyle: CSSProperties = {
  display: 'flex',
  flexDirection: 'column',
  backgroundColor: 'rgba(255, 255, 255, 0.05)',
  width: '357px',
  height: '387px',
  borderRadius: '4px',
  overflow: 'hidden',
}

export function FullCard({ tag, image, gameIcon, gameTitle, title, warning, description, footerText }) {
  return (
    <div style={fullCardStyle} className={'hover-bg-float'}>

      <div className={'hover-bg-bright-item'} style={{ position: 'relative', width: '100%', height: '200px' }}>
        <div style={{ position: 'absolute', top: '5px', left: '5px', borderRadius: '3px', backgroundColor: '#D30000', fontSize: '12px', fontWeight: 'bold', padding: '4px', paddingLeft: '6px', paddingRight: '6px', lineHeight: '12px'}}>{tag}</div>
        <img style={{ width: "inherit", height: "inherit", objectFit: 'cover' }} src={image} alt={gameTitle} />
      </div>

      <div className={'hover-bg-float-item'} style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', marginLeft: '16px', marginTop: '12px' }}>
        <img style={{ width: '18px', height: '18px' }} src={gameIcon} alt='Game Icon' />
        <span style={{ fontWeight: '800', marginLeft: '8px', fontSize: '12px', color: 'rgba(255, 255, 255, 0.4)'}}>{gameTitle}</span>
      </div>

      <span className={'hover-bg-float-item'} style={{ fontWeight: '800', fontSize: '16px', marginLeft: '16px', marginTop: '4px' }}>{title}</span>
      <span className={'hover-bg-float-item'} style={{ fontWeight: '500', fontSize: '12px', marginLeft: '16px', marginTop: '4px', color: '#CB940D' }}>{warning}</span>
      <span className={'hover-bg-float-item'} style={{ fontWeight: '500', fontSize: '11px', marginLeft: '16px', marginTop: '10px', color: 'rgba(255, 255, 255, 0.6)'}}>{description}</span>
      <Space height='100%' />
      <span className={'hover-bg-float-item'} style={{ fontWeight: '800', fontSize: '13px', marginLeft: '16px', marginTop: '10px', marginBottom: '16px', color: 'rgba(255, 255, 255, 0.6)'}}>{footerText}</span>

    </div>
  )
}