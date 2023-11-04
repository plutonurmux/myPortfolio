// Hero style
import styled from 'styled-components';
import { DefaultWrapper } from '../../layouts/Header/Header.style';
import { LGDown, MDDown, SMDown, XLDown, XSDown, XXSDown } from '../../../styles/responsive';

const Container = styled.section`
  height:calc(100vh - 70px);
  width:100%;
  padding: 0 25px 48px;
  margin-bottom:48px;
`;
const Wrapper = styled.div`
  height:100%;
  display:flex;
  flex-direction:column;
  align-items:center;
  justify-content:center;
`;
const ImageContainer = styled.div`
  width:100%;
  max-width:208px;
  aspect-ratio:1;
  display:flex;
  justify-content:center;
  align-items:center;
  transform: scale(0);
`;
const Image = styled.img`
  border-radius:${({ theme }) => theme.borderRadius.rounded};
  margin-bottom:25px;
  ${SMDown({
  maxHeight: 150,
  maxWidth: "100%",
  marginBottom: 15
})
  }
`;
const Title = styled.h1`
  font-size:7rem;
  text-transform:uppercase;
  text-shadow: 1px 3px 11px rgba(0,0,0,.3);
  transform:translateY(-100%);
  opacity:0;
  ${XLDown({
  fontSize: "6rem",
  marginBottom: 5
})}
  ${LGDown({
  fontSize: "5rem"
})}
  ${MDDown({
  fontSize: "calc(0.3rem + 6vw)"
})}
  ${XSDown({
  fontSize: "calc(0.3rem + 3vw)"
})}
  ${XXSDown({
  fontSize: 10
})}
`;
const SubTitle = styled.h2`
  font-size:3rem;
  text-transform:uppercase;
  text-shadow: 1px 3px 11px rgba(0,0,0,.3);
  transform:translateY(100%);
  opacity:0;
${XLDown({
  fontSize: "calc(0.2rem + 3.3vw)"
})}
${XXSDown({
  fontSize: 8
})}
`;
export {
  Container,
  Wrapper,
  ImageContainer,
  Image,
  Title,
  SubTitle,
}