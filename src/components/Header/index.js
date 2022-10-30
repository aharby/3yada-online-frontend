import React from 'react'
import HeaderTabs from './HeaderTabs'
import TextTransition, { presets } from "react-text-transition";


const TEXTS = [
  "Child",
  "Skin",
  "Teeth",
  "Psychiatry"
];



  
const Header = () => {
  const [index, setIndex] = React.useState(0);

  React.useEffect(() => {
    const intervalId = setInterval(() =>
      setIndex(index => index + 1),
      3000 // every 3 seconds
    );
    return () => clearTimeout(intervalId);
  }, []);
  return (
    <div className='Home-header'>
          <h1 className='header-content-h1'>Find the Best <TextTransition springConfig={presets.wobbly} inline="true">
        {TEXTS[index % TEXTS.length]}
      </TextTransition> Doctors on 3yada Online</h1>
          <HeaderTabs />
    </div>
  )
}

export default Header