import styled from 'styled-components';

import Slider from "react-slick"
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Section } from '../About/About.style';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { SMDown, XSDown } from '../../../styles/responsive';
const Container = styled(Section)`
`;
const SlideContainer = styled(Slider)`
& .slick-list {
  //z-index:-1;
}
`;
const SlideWrapper = styled.div`
padding:8px;
${SMDown({
  padding: 0
})}
`;
const SlideItem = styled.div`
display:flex;
align-items:center;
justify-content:center;
`;
const ImageWrapper = styled.div`
position:relative;
&:hover {
  & a {
    opacity:1;
    visibility:visible;
    // overlayWrapper
    & > div {
      transform:translateY(0)
    }
  }
}
`;
const Overlay = styled.a`
  position:absolute;
  top:0px;
  left:0px;
  width:100%;
  height:100%;
  display:flex;
  align-items:center;
  justify-content:center;
  background-color:rgba(0,0,0,0.5);
  transition: all 500ms ease;
  opacity:0;
  visibility:hidden;
`;
const OverlayWrapper = styled.div`
  display:flex;
  transform: translateY(100px);
  transition: transform 500ms ease;
`;
const OverlayIconLink = styled.a`
  margin-right:8px;
  background-color:${({ theme }) => theme.palette.common.white};
  border-radius:${({ theme }) => theme.borderRadius.rounded};
  padding:8px;
  transition:background-color 500ms ease;
  &:hover {
    background-color:${({ theme }) => theme.palette.primary.darker};
    & svg {
      color:${({ theme }) => theme.palette.common.white};
    }
  }
  ${XSDown({
  padding: 6
})
  }
`;
const OverlayIcon = styled(FontAwesomeIcon)`
  display:block;
  height:25px;
  width:25px;
  transition:color 500ms ease;
  color:${({ theme }) => theme.palette.common.black};
  ${XSDown({
  height: 16,
  width: 16
})
  }
`;
const SlideImage = styled.img`
  max-width:100%;
  object-fit:cover;
  z-index:-1;
`;

export {
  Container,
  SlideContainer,
  SlideWrapper,
  SlideItem,
  ImageWrapper,
  OverlayWrapper,
  Overlay,
  OverlayIconLink,
  OverlayIcon,
  SlideImage
}
