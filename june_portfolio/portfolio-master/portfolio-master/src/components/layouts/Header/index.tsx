import {
  faGithub,
  faInstagram,
  faLinkedin,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";
import { IconDefinition, faArrowUp } from "@fortawesome/free-solid-svg-icons";
import { gsap } from "gsap";
import React, {
  useEffect,
  useLayoutEffect,
  useMemo,
  useRef,
  useState,
} from "react";
import { start, toFadeIn } from "../../shared/gsap";
import Hamburger from "./Hamburger";
import {
  Blur,
  Container,
  HamburgerContainer,
  Logo,
  LogoContainer,
  Mail,
  MailContainer,
  Nav,
  NavItem,
  NavItemContainer,
  NavItemWrapper,
  Resume,
  ScrollTopBtn,
  ScrollTopBtnIcon,
  SocialContainer,
  SocialIcon,
  SocialIconContainer,
  Wrapper,
} from "./Header.style";

type HeaderProps = {
  timelineIdx: number;
  onSetTlIdx: React.Dispatch<React.SetStateAction<number>>;
};

const Header: React.FC<HeaderProps> = ({ timelineIdx, onSetTlIdx }) => {
  // nav item
  const navItems: string[] = useMemo(
    () => ["about", "skills", "work", "contact"],
    []
  );
  const handleHover = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
    e.currentTarget.classList.toggle("navLink-active");
  };
  // Menu toggler
  const [toggleMenu, setToggleMenu] = useState(false);
  const handleToggleMenu = (
    e: React.MouseEvent<HTMLDivElement | HTMLAnchorElement, MouseEvent>
  ) => {
    setToggleMenu(!toggleMenu);
    const { style } = document.body;
    if (toggleMenu) {
      // when menu is closed
      style.height = "auto";
      style.overflow = "auto";
    } else {
      style.height = "100vh";
      style.overflow = "hidden";
    }
  };
  // close menu by clicking on body
  const blurEl = useRef<HTMLDivElement>(null);
  const handleCloseMenu = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    if (e.target === blurEl.current) {
      handleToggleMenu(e);
    }
  };
  // header scroll animation
  const [isNearSticky, setIsNearSticky] = useState(false);
  const [isSticky, setIsSticky] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY === 70) {
        setIsNearSticky(true);
      } else if (window.scrollY > 150) {
        setIsSticky(true);
      } else {
        setIsSticky(false);
        setIsNearSticky(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  // scroll top handler
  const handleScrollTop = () => {
    setTimeout(() => {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }, 500);
  };
  // Social Media container
  interface ISocialIcon {
    icon: IconDefinition;
    link: string;
  }

  const socialIcons: ISocialIcon[] = useMemo(
    () => [
      {
        icon: faGithub,
        link: "https://github.com/idembele70/",
      },
      {
        icon: faInstagram,
        link: "https://www.instagram.com/playmaker1710/",
      },
      {
        icon: faTwitter,
        link: "https://twitter.com/Playmaker26_7",
      },
      {
        icon: faLinkedin,
        link: "https://www.linkedin.com/in/ibrahim-dembele-2a91351b3/",
      },
    ],
    []
  );
  const wrapperEl = useRef<HTMLDivElement>(null);
  const socialContainerEl = useRef<HTMLDivElement>(null);
  const mailContainerEl = useRef<HTMLDivElement>(null);
  useLayoutEffect(() => {
    interface IHeaderScrollTrigger {
      trigger: HTMLDivElement | null;
      start: string;
    }
    const headerScrollTrigger: IHeaderScrollTrigger = {
      trigger: wrapperEl.current,
      start,
    };
    if (timelineIdx === 0) {
      gsap.to(wrapperEl.current, {
        ...toFadeIn,
        delay: 0.1,
        onComplete: () => {
          onSetTlIdx(1);
        },
        scrollTrigger: headerScrollTrigger,
      });
    }
    // socialContainer and mail
    else if (timelineIdx === 2) {
      const infoTl = gsap.timeline({
        scrollTrigger: headerScrollTrigger,
      });
      infoTl
        .to(socialContainerEl.current, { ...toFadeIn, x: 0 })
        .to(mailContainerEl.current, { ...toFadeIn, x: 0 });
    }
    return () => {};
  }, [timelineIdx]);
  // function to call on logo click
  const handleClickLogo = (
    e: React.MouseEvent<HTMLAnchorElement, MouseEvent>
  ) => {
    handleScrollTop();
    handleToggleMenu(e);
  };
  return (
    <>
      <ScrollTopBtn display={isSticky && !toggleMenu} onClick={handleScrollTop}>
        <ScrollTopBtnIcon icon={faArrowUp} />
      </ScrollTopBtn>
      <Container
        isMenuOpen={toggleMenu}
        isSticky={isSticky}
        isNearSticky={isNearSticky}
      >
        <Wrapper ref={wrapperEl}>
          <LogoContainer onClick={handleClickLogo} to="/">
            <Logo>IKD</Logo>
          </LogoContainer>
          <HamburgerContainer onClick={handleToggleMenu}>
            <Hamburger isMenuOpen={toggleMenu} ariaLabel="Main Menu" />
          </HamburgerContainer>
          <Nav isVisible={toggleMenu}>
            <NavItemContainer>
              <NavItemWrapper>
                {navItems.map((name, idx) => (
                  <NavItem
                    onMouseEnter={handleHover}
                    onMouseLeave={handleHover}
                    index={(idx += 1)}
                    href={`#${name}`}
                    onClick={(e) => {
                      if (window.innerWidth < 768) handleToggleMenu(e);
                    }}
                  >
                    {name}
                  </NavItem>
                ))}
              </NavItemWrapper>
            </NavItemContainer>
            <Resume>Resume</Resume>
          </Nav>
        </Wrapper>
        <Blur ref={blurEl} onClick={handleCloseMenu} isVisible={toggleMenu} />
      </Container>
      <SocialContainer ref={socialContainerEl}>
        {socialIcons.map(({ icon, link }, idx) => (
          <SocialIconContainer target="_blank" key={idx} href={link}>
            <SocialIcon icon={icon} />
          </SocialIconContainer>
        ))}
      </SocialContainer>
      <MailContainer ref={mailContainerEl}>
        <Mail href="mailto:idembele70@gmail.com">idembele70@gmail.com</Mail>
      </MailContainer>
    </>
  );
};

export default Header;
