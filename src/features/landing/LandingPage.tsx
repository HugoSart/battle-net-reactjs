import {CSSProperties} from "react";
import {NavigationBar} from "./components/NavigationBar.tsx";
import {RightBar} from "./components/RightBar.tsx";
import {NavigationContent} from "./components/NavigationContent.tsx";
import {BrowserRouter} from "react-router-dom";

const landingPageStyle: CSSProperties = {
  display: 'flex',
  flexDirection: 'row',
  width: '100%',
  height: '100%'
}

export function LandingPage() {
  return (
    <div style={landingPageStyle}>
      <BrowserRouter>
        <div style={{display: 'flex', flexDirection: 'column',  width: 'calc(100% - 120px)', height: '100%'}}>
          <NavigationBar/>
          <NavigationContent/>
        </div>
        <div style={{display: 'flex', flexDirection: 'column', width: '120px', height: '100%'}}>
          <RightBar />
        </div>
      </BrowserRouter>
    </div>
  );
}
