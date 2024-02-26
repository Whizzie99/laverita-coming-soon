import { StyledFooter } from "./styles";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <StyledFooter>
      <p>copyright &copy; {currentYear}. Laverita Hairs. All rights reserved.</p>
    </StyledFooter>
  );
}
 
export default Footer;