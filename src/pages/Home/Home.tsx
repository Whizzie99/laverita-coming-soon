import Hero from "../../components/Hero/Hero";
import Newsletter from "../../components/Newsletter/Newsletter";
import { StyledWrapper } from "./styles";

const Home = () => {
  return (
    <StyledWrapper>
      <Hero/>
      <Newsletter/>
    </StyledWrapper>
  );
}

export default Home;