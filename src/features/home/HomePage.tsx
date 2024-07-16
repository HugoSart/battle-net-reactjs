import {CSSProperties} from "react";
import {FullCard} from "../../common/components/cards/FullCard.tsx";
import {SecondaryButton} from "../../common/components/buttons/SecondaryButton.tsx";


// =====================================================================================================================
// Sections
// =====================================================================================================================
const homeSectionStyle: CSSProperties = {
  display: 'flex',
  flexDirection: 'column',
  marginLeft: '32px',
  marginBottom: '32px',
  width: 'calc(100% - 32px)'
}

function HomeSection({ title, actionText, children }) {
  return (
    <div style={homeSectionStyle}>
      <div style={{ display: 'flex', flexDirection: 'row', width: '100%', justifyContent: 'space-between' }}>
        <h3 style={{ marginTop: 0, marginBottom: '16px'}}>{title}</h3>
        {actionText && <SecondaryButton text={actionText} />}
      </div>
      <div style={{ display: 'flex', flexDirection: 'row', gap: '16px', paddingLeft: '12px', overflowX: 'scroll'}}>
        {children}
      </div>
    </div>
  );
}


// =====================================================================================================================
// Component
// =====================================================================================================================
const homePageStyle: CSSProperties = {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'start',
  alignContent: 'start',
  justifyContent: 'start',
  width: '100%'
}

export function HomePage() {
  return  (
    <div style={homePageStyle}>
      <HomeSection title="Recommended for You" actionText='Visit Shop'>
        <FullCard
          tag='NEW'
          image={'https://blz-contentstack-images.akamaized.net/v3/assets/blt3452e3b114fab0cd/blt5cb4459175d8cccd/605e5585dc086a0ccd39a4f9/IZ4YXQADBOF61472165795914.jpg'}
          gameIcon={'https://upload.wikimedia.org/wikipedia/commons/e/eb/WoW_icon.svg'}
          gameTitle='WORLD OF WARCRAFT'
          title='Name Change'
          warning='Also available in multiple packs.'
          description='Game Services'
          footerText='From R$29.90'
        />
        <FullCard
          tag='NEW'
          image={'https://blz-contentstack-images.akamaized.net/v3/assets/blt3452e3b114fab0cd/blt5cb4459175d8cccd/605e5585dc086a0ccd39a4f9/IZ4YXQADBOF61472165795914.jpg'}
          gameIcon={'https://upload.wikimedia.org/wikipedia/commons/e/eb/WoW_icon.svg'}
          gameTitle='WORLD OF WARCRAFT'
          title='Name Change'
          warning='Also available in multiple packs.'
          description='Game Services'
          footerText='From R$29.90'
        />
        <FullCard
          tag='NEW'
          image={'https://blz-contentstack-images.akamaized.net/v3/assets/blt3452e3b114fab0cd/blt5cb4459175d8cccd/605e5585dc086a0ccd39a4f9/IZ4YXQADBOF61472165795914.jpg'}
          gameIcon={'https://upload.wikimedia.org/wikipedia/commons/e/eb/WoW_icon.svg'}
          gameTitle='WORLD OF WARCRAFT'
          title='Name Change'
          warning='Also available in multiple packs.'
          description='Game Services'
          footerText='From R$29.90'
        />
      </HomeSection>
      <HomeSection title="Recommended for You" actionText='Visit Shop'>
        <FullCard
          tag='NEW'
          image={'https://blz-contentstack-images.akamaized.net/v3/assets/blt3452e3b114fab0cd/blt5cb4459175d8cccd/605e5585dc086a0ccd39a4f9/IZ4YXQADBOF61472165795914.jpg'}
          gameIcon={'https://upload.wikimedia.org/wikipedia/commons/e/eb/WoW_icon.svg'}
          gameTitle='WORLD OF WARCRAFT'
          title='Name Change'
          warning='Also available in multiple packs.'
          description='Game Services'
          footerText='From R$29.90'
        />
        <FullCard
          tag='NEW'
          image={'https://blz-contentstack-images.akamaized.net/v3/assets/blt3452e3b114fab0cd/blt5cb4459175d8cccd/605e5585dc086a0ccd39a4f9/IZ4YXQADBOF61472165795914.jpg'}
          gameIcon={'https://upload.wikimedia.org/wikipedia/commons/e/eb/WoW_icon.svg'}
          gameTitle='WORLD OF WARCRAFT'
          title='Name Change'
          warning='Also available in multiple packs.'
          description='Game Services'
          footerText='From R$29.90'
        />
      </HomeSection>
      <HomeSection title="Recommended for You" actionText='Visit Shop'>
        <FullCard
          tag='NEW'
          image={'https://blz-contentstack-images.akamaized.net/v3/assets/blt3452e3b114fab0cd/blt5cb4459175d8cccd/605e5585dc086a0ccd39a4f9/IZ4YXQADBOF61472165795914.jpg'}
          gameIcon={'https://upload.wikimedia.org/wikipedia/commons/e/eb/WoW_icon.svg'}
          gameTitle='WORLD OF WARCRAFT'
          title='Name Change'
          warning='Also available in multiple packs.'
          description='Game Services'
          footerText='From R$29.90'
        />
        <FullCard
          tag='NEW'
          image={'https://blz-contentstack-images.akamaized.net/v3/assets/blt3452e3b114fab0cd/blt5cb4459175d8cccd/605e5585dc086a0ccd39a4f9/IZ4YXQADBOF61472165795914.jpg'}
          gameIcon={'https://upload.wikimedia.org/wikipedia/commons/e/eb/WoW_icon.svg'}
          gameTitle='WORLD OF WARCRAFT'
          title='Name Change'
          warning='Also available in multiple packs.'
          description='Game Services'
          footerText='From R$29.90'
        />
      </HomeSection>
    </div>
  );
}
