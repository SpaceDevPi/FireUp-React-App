import React, {useState} from 'react'
import Video from '../../assets/video/videoHero.mp4'
import { HeroContainer, HeroBg, VideoBg, HeroContent, HeroH1, HeroP, HeroBtnWrapper, ArrowForward, ArrowRight } from './HeroElements'
import { Button } from '../ButtonElement'
import { ReactComponent as LandingSvg} from '../../assets/svg/landing.svg'
import '../../styles/home.css'

const HeroSection = () => {
    const [hover, setHover] = useState(false)

    const onHover = () => {
        setHover(!hover)
    }

  return (
    <HeroContainer>
        <HeroBg>
            <LandingSvg className="landing-svg" />
            {/* <VideoBg autoPlay loop muted src={Video} type='video/mp4'/> */}
        </HeroBg>
        <HeroContent>
            <HeroH1>Turn your ideas into <br/> a <span className='spanSuccess'>Success</span></HeroH1>
            <HeroP>On FireUp , discover different investment opportunities and build your portfolio. It’s your turn to be the shark. </HeroP>
        </HeroContent>
        <HeroBtnWrapper>
            <Button to="signIn" onMouseEnter={onHover} onMouseLeave={onHover} primary='true' dark='true'>
                Get started {hover ? <ArrowForward /> : <ArrowRight />}
            </Button>
        </HeroBtnWrapper>    
    </HeroContainer>
  )
}

export default HeroSection