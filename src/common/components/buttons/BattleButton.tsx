import {CSSProperties} from "react";


const battleButtonStyle: CSSProperties = {
  display: 'flex',
  flexDirection: 'row',
  alignContent: 'center',
  alignItems: 'center',
  cursor: 'pointer',
}

export function BattleButton() {
  return (
    <div style={battleButtonStyle} className={'hover-bright'}>
      <img
        style={{ width: '34px', height: '34px' }}
        src={'https://static.wikia.nocookie.net/logopedia/images/f/f6/Battle.net_2021_Icon.svg'}
        alt={'Settings'}
      />
      <img
        style={{ width: '10px', height: '10px', opacity: '60%', marginLeft: '8px' }}
        src={'https://www.kusd.edu/wp-content/uploads/2021/09/Drop-down-arrow-icon-rounded.png'}
        alt={'Down Arrow'}
      />
    </div>
  );
}
