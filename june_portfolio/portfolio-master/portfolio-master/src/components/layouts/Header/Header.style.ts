// Header Style
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { LGDown, MDDown, SMDown, XLDown, XSDown } from '../../../styles/responsive';
interface ContainerProps {
  isNearSticky: boolean;
  isSticky: boolean;
  isMenuOpen: boolean;
}
const Container = styled.header<ContainerProps>`
width:100%;
height:70px;
display:flex;
position: sticky;
top: ${({ isNearSticky, isSticky }) => isNearSticky || isSticky ? 0 : "-100%"};
transition:all 0.25s cubic-bezier(0.645,0.045,0.355,1);
background-color:${({ isMenuOpen, theme, isSticky }) => isMenuOpen || !isSticky ? "transparent" : theme.palette.secondary.main};
box-shadow: ${({ isSticky }) => isSticky ? "0 2px 4px rgba(0,0,0,0.075)" : "none"};
z-index:9;
`;

const DefaultWrapper = styled.div`
  max-width:1320px;
  width:100%;
  margin: 0 auto;
  padding: 0 12px;
  ${XLDown({
  maxWidth: 1140
})}
  ${LGDown({
  maxWidth: 960
})}
  ${MDDown({
  maxWidth: 720
})}
  ${SMDown({
  maxWidth: 540
})}
  ${XSDown({
  maxWidth: "auto"
})}
`;
const Wrapper = styled.div`
  opacity:0;
  padding:0px 50px;
  display:flex;
  flex:1;
  align-items:center;
  justify-content:space-between;
  transition:all 500ms ease;
  ${MDDown({
  padding: "0 40px"
})
  }
  ${SMDown({
    padding: "0 25px"
  })};
`;
const LogoContainer = styled(Link)`
z-index:10;

`;
const Logo = styled.h1`
  font-size:2.25rem;
  color:${({ theme }) => theme.palette.common.white};
  font-family: "Tillana", "sans-serif";
  font-weight:400;
  color:${({ theme }) => theme.palette.primary.main};
`;
interface NavProps {
  isVisible: boolean;
}
const Nav = styled.nav<NavProps>`
  display:flex;
  flex-wrap:wrap;
  align-items:center;
  position:relative;
  z-index:9;
  transition: all 0.25s cubic-bezier(0.645,0.045,0.355,1);
  ${({ theme, isVisible }) => SMDown({
  position: "fixed",
  backgroundColor: theme.palette.secondary.main,
  top: 0,
  right: isVisible ? 0 : "-100%",
  height: "100%",
  width: "100%",
  maxWidth: 400,
  padding: "50px 0",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
})}
`;
const NavItemContainer = styled.div`
  display:flex;
    ${SMDown({
  width: "100%"
})
  }
`;
const NavItemWrapper = styled.div`
  display:flex;
  &:hover{
    //navlink
    & > a:not(.navLink-active) {
      opacity:0.5;
    }
    }
    ${SMDown({
  flexDirection: "column",
  alignItems: "center",
  width: "100%"
})}
`;
interface NavItemProps {
  index: number
}

const NavItem = styled.a <NavItemProps>`
  color:${({ theme }) => theme.palette.common.white};
  text-transform:Capitalize;
  padding:0 12px;
  position:relative;
  transition: all cubic-bezier(.4,0,.2,1) .4s;
  ::after {
    content:"${({ index }) => `0${index}`}";
    position:absolute;
    top:-12px;
    left:0;
    font-size:0.6rem;
    color:${({ theme }) => theme.palette.primary.main};
    ${SMDown({
  right: "0",
  top: 9,
})
  }
}
${SMDown({
    padding: "20px 12px",
    textAlign: "center",
    width: "100%"
  })
  }
`;
const Resume = styled.button`
  border: 1px solid ${({ theme }) => theme.palette.primary.main};
  color:${({ theme }) => theme.palette.common.white};
  outline:0;
  padding: 6px 16px;
  background-color:${({ theme }) => theme.palette.primary.main};
  border-radius:${({ theme }) => theme.borderRadius.small};
  cursor:pointer;
  font-size:1rem;
  transition: all 500ms ease;
  margin-left:16px;
  &:hover {
    opacity:0.8;
  }
  &:focus {
    box-shadow: 0 0 0 4px ${({ theme }) => theme.palette.primary.darker};
  }
  ${SMDown({
  marginLeft: 0,
  marginTop: 40,
})}
`;
const HamburgerContainer = styled.div`
 z-index:10;
  display: none;
  ${SMDown({
  display: "block"
})}
`;
interface BlurProps {
  isVisible: boolean;
}
const Blur = styled.div<BlurProps>`
  position:fixed;
  top:0;
  left:0;
  height:100vh;
  width:100vw;
  transition:all 0.25s cubic-bezier(0.645,0.045,0.355,1);
  backdrop-filter: ${({ isVisible }) => isVisible ? "blur(5px) brightness(0.7)" : "none"};
  visibility: ${({ isVisible }) => isVisible ? "visible" : "hidden"};
  z-index:5;
`;
// ScrollToTop Button
interface ScrollTopBtnProps {
  display: boolean;
}
const ScrollTopBtn = styled.button<ScrollTopBtnProps>`
  width: 48px;
  height: 48px;
  background-color: ${({ theme }) => theme.palette.primary.darker};
  border: 1px solid ${({ theme }) => theme.palette.primary.darker};
  opacity: ${({ display }) => (display === true ? 1 : 0)};
  border-radius: 50%;
  position: fixed;
  bottom: 30px;
  right: 60px;
  padding: 0;
  cursor: pointer;
  transition: all 1000ms ease;
  visibility: ${({ display }) => display ? "visible" : "hidden"};
  z-index: 5;
  &:hover {
    background-color: ${({ theme }) => theme.palette.primary.darker};
  }
  &:focus {
    box-shadow: 0 0 0 0.25rem rgba(83, 118, 252, 0.5);
  }
`;
const ScrollTopBtnIcon = styled(FontAwesomeIcon)`
  color: ${({ theme }) => theme.palette.common.white};
  font-size: 1.5rem;
`
// Social Media Container
const DefaultMediaContainer = styled.div`
position:fixed;
bottom:0;
display:flex;
${SMDown({
  display: "none"
})
  }
::after {
  content: "";
  display: block;
  width: 1px;
  height: 90px;
  margin: 0px auto;
  background-color:${({ theme }) => theme.palette.common.white};
}
`;

const SocialContainer = styled(DefaultMediaContainer)`
  left:40px;
  flex-direction:column;
  opacity:0;
  transform: translateX(-200px);
`;
const SocialIconContainer = styled.a`
  padding:10px;
  &:last-of-type {
    margin-bottom:20px;
  }
  transition:all 0.25s cubic-bezier(0.645,0.045,0.355,1);
  :hover {
    transform: translateY(-3px);
    // icon
    & svg {
      color:${({ theme }) => theme.palette.primary.main};
    }
  }
`;
const SocialIcon = styled(FontAwesomeIcon)`
  color:${({ theme }) => theme.palette.common.white};
  display:block;
  height:20px;
  width:20px;
`;
const SocialContainerBar = styled.div`
  height:100px;
  width:1px;
  background-color:${({ theme }) => theme.palette.common.white};
`;

const MailContainer = styled(DefaultMediaContainer)`
  right:40px;
  writing-mode:vertical-rl;
  opacity:0;
  transform: translateX(200px);
`;
const Mail = styled.a`
  font-size:0.75rem;
  color:${({ theme }) => theme.palette.common.white};
  margin-bottom:20px;
  transition:all 0.25s cubic-bezier(0.645,0.045,0.355,1);
  :hover {
    transform: translateY(-3px);
    color:${({ theme }) => theme.palette.primary.main};
  }
`;

export {
  Blur, Container,
  DefaultWrapper, HamburgerContainer, Logo, LogoContainer, Mail, MailContainer, Nav, NavItem, NavItemContainer,
  NavItemWrapper, Resume, ScrollTopBtn,
  ScrollTopBtnIcon,
  SocialContainer, SocialContainerBar, SocialIcon, SocialIconContainer, Wrapper
};
