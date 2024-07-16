import {CSSProperties} from "react";
import {BsDownload, BsBell, BsStarFill} from "react-icons/bs";
import {BattleButton} from "../../../common/components/./buttons/BattleButton.tsx";
import {TabButton} from "../../../common/components/./buttons/TabButton.tsx";
import {Space} from "../../../common/components/containers/Space.tsx";
import {IconButton} from "../../../common/components/./buttons/IconButton.tsx";
import {tabs} from "../landing-page.ts";
import {Link, useLocation} from "react-router-dom";


// =====================================================================================================================
// Nav
// =====================================================================================================================
const navStyle: CSSProperties = {
  display: 'flex',
  flexDirection: 'row',
  height: '40px',
}

function Nav() {
  const location = useLocation();
  return (
    <div style={navStyle}>
      <Space width='16px'/>
      <BattleButton/>
      <Space width='4px'/>
      {Object.keys(tabs).map((tab) =>
        <Link
          key={tabs[tab].path}
          to={tabs[tab].path}
          replace
        >
          <TabButton
            text={tabs[tab].title}
            selected={location.pathname.includes(tabs[tab].path)}
          />
        </Link>
      )}
      <Space width='100%'/>
      <IconButton><BsDownload size={'20px'}/></IconButton>
      <Space width='8px'/>
      <IconButton><BsBell size={'20px'}/></IconButton>
    </div>
  );
}


// =====================================================================================================================
// Games Bar
// =====================================================================================================================
const gamesBarStyle: CSSProperties = {
  display: 'flex',
  flexDirection: 'row',
  height: '55px',
  alignContent: 'center',
  alignItems: 'center',
  justifyContent: 'start',
  backgroundColor: 'rgba(255, 255, 255, 0.05)',
  borderRadius: '4px',
}

function GameButton({ name, imageSrc }) {
  return (
    <div className={'hover-bg-float center'} style={{ position: 'relative', width: '64px', height: '100%', cursor: 'pointer' }}>
      <span className={'hover-bg-appear-item hover-bg-float-item'} style={{ position: 'absolute', top: '1px', transform: 'translateY(-50%)', fontSize: '12px', letterSpacing: '1px', color: 'rgba(255, 255, 255, 0.3)' }}>....</span>
      <img className={'hover-bg-float-item'}
        style={{ width: '37px' }}
        src={imageSrc}
        alt={name}
      />
    </div>
  );
}

function GamesBar() {
  return (
    <div style={gamesBarStyle}>
      <BsStarFill size={'16px'} style={{opacity: 0.5, padding: '20px'}}/>
      <GameButton name='World of Warcraft' imageSrc='https://upload.wikimedia.org/wikipedia/commons/e/eb/WoW_icon.svg'></GameButton>
      <GameButton name='Diablo IV' imageSrc='https://cdn2.steamgriddb.com/icon_thumb/4d1180e592869543e75486faa4eb9d23.png'></GameButton>
      <GameButton name='Overwatch' imageSrc='https://nexustipsandtales.com/wp-content/uploads/2016/10/Overwatch-Icon.png'></GameButton>
    </div>
  )
}

// =====================================================================================================================
// Component
// =====================================================================================================================
const navigationBarStyle: CSSProperties = {
  display: 'flex',
  flexDirection: 'column',
  height: '150px',
  margin: '30px',
  marginTop: '32px',
}

export function NavigationBar() {
  return (
    <div style={navigationBarStyle}>
      <Nav/>
      <Space height='12px'/>
      <GamesBar/>
    </div>
  )
}