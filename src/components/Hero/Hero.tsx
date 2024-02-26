import { StyledHero, StyledArcImg } from './styles';
import heroImg from '../../assets/imgs/hero-photo.jpeg'

const Hero = () => {
  return (
    <StyledHero>
      <h1>Where Exquisite Craftsmanship Meets Your Unique Essence</h1>

      <StyledArcImg>
        <img src={heroImg} alt="" />
      </StyledArcImg>

      <p>Gear up to give your hair a sporty premium boost! We're revving up to launch our sleek new website. Stay tuned and get ready, race to be the first to experience it!</p>
    </StyledHero>
  );
}
 
export default Hero;