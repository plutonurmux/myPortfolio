// About style
import styled from 'styled-components';
import { DefaultWrapper } from '../../layouts/Header/Header.style';
import { LGDown, MDDown, SMDown, XSDown, XXSDown } from '../../../styles/responsive';
const Section = styled.section`
 padding: 48px 150px;
  max-width:1600px;
  margin: 0 auto;
  ${MDDown({
  padding: "48px 100px"
})}
  ${SMDown({
  padding: "48px 50px"
})}
  ${XSDown({
  padding: "48px 25px"
})}
`
const Container = styled(Section)``;
const Wrapper = styled.div`
max-width:900px;
margin:0 auto;
`;
const SectionHeader = styled.div`
display:flex;
align-items:center;
margin-bottom:40px;
`;
interface SectionTitleProps {
  index: number;
}
const SectionTitle = styled.h2<SectionTitleProps>`
  font-size:2rem;
  position: relative;
  text-transform:capitalize;
  display:flex;
  align-items:center;
  white-space:nowrap;
  ${XXSDown({
  whiteSpace: "initial"
})}
  ${SMDown({
  fontSize: "calc(0.9rem + .8vw)"
})}
  ::before {
    content:"0${({ index }) => index}.";
    position:relative;
    margin-right:8px;
    bottom:0px;
    color:${({ theme }) => theme.palette.primary.darker};
  }

`;
const SectionHeaderBar = styled.div`
    flex:1;
    margin-left:20px;
    height:1px;
    background-color:${({ theme }) => theme.palette.primary.darker};
    max-width:40%;
`;
const Main = styled.div`
  display:flex;
  margin: 0 -12px;
  ${MDDown({
  flexDirection: "column",
  alignItems: "center"
})}
`;
const ParagraphContainer = styled.div`
  flex:1;
  padding:0 12px;
  margin-top:24px;
  ${MDDown({
  order: 2,
})}
`;

const Paragraph = styled.p`
  margin-bottom:16px;
  text-align:justify;
`;
const Strong = styled.strong`
  color:${({ theme }) => theme.palette.primary.main};
  font-weight:normal;
`;
const ImageContainer = styled.div`
  padding:0 12px;
  margin-top:24px;
  `;
const ImageWrapper = styled.div`
position:relative;
&:hover {
  ::after {
    left:10px;
    top:10px;
  }
}
${MDDown({
  marginBottom: 18
})
  }
    ::after {
    content:"";
    border: 2px solid ${({ theme }) => theme.palette.primary.darker};
    height:100%;
    width:100%;
    position:absolute;
    left:15px;
    top:15px;
    z-index:-1;
    }

`;
const Image = styled.img`
border-radius:${({ theme }) => theme.borderRadius.small};
  width:100%;
  height:100%;
  display:block;

  `;
export {
  Section,
  Container,
  Wrapper,
  Paragraph,
  Strong,
  SectionHeader,
  SectionTitle,
  SectionHeaderBar,
  Main,
  ParagraphContainer,
  ImageContainer,
  ImageWrapper,
  Image
}
