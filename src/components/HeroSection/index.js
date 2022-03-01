import React, {useState} from 'react'
import Video from '../../assets/video/videoHero.mp4'
import { HeroContainer, HeroBg, VideoBg, HeroContent, HeroH1, HeroP, HeroBtnWrapper, ArrowForward, ArrowRight } from './HeroElements'
import { Button } from '../ButtonElement'

const HeroSection = () => {
    const [hover, setHover] = useState(false)

    const onHover = () => {
        setHover(!hover)
    }

  return (
    <HeroContainer>
        <HeroBg>
            <VideoBg autoPlay loop muted src={Video} type='video/mp4'/>
        </HeroBg>
        <HeroContent>
            <HeroH1>Turn your ideas into a </HeroH1>
            <HeroP>On FireUp , discover different investment opportunities and build your portfolio. It’s your turn to be the shark. </HeroP>
        </HeroContent>
        <HeroBtnWrapper>
            <Button to="signIn" onMouseEnter={onHover}>
                Get started {hover ? <ArrowForward /> : <ArrowRight />}
            </Button>
        </HeroBtnWrapper>    
    </HeroContainer>
  )
}

export default HeroSection