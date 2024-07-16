import {CSSProperties} from "react";
import {Route, Routes} from "react-router-dom";
import {HomePage} from "../../home/HomePage.tsx";
import {GamesPage} from "../../games/GamesPage.tsx";
import {ShopPage} from "../../shop/ShopPage.tsx";

const navigationContentStyle: CSSProperties = {
  position: 'relative',
  display: 'flex',
  flexDirection: 'column',
  width: 'calc(100% - 32px)',
  height: '100%',
  overflowX: 'hidden',
  overflowY: 'scroll',
}

export function NavigationContent() {
  return (
    <div style={navigationContentStyle}>
      <Routes>
        <Route path="/home" element={<HomePage/>}/>
        <Route path="/games" element={<GamesPage/>}/>
        <Route path="/shop" element={<ShopPage/>}/>
      </Routes>
    </div>
  )
}