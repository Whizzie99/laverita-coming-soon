import { StyledWrapper, StyledImg } from "./styles";

import logo from '../../assets/imgs/logo.png'

const Navbar = () => {
  return (
    <StyledWrapper>
      <StyledImg>
        <img src={logo} alt="Laverita Hairs" />
      </StyledImg>
    </StyledWrapper>
  );
}
 
export default Navbar;