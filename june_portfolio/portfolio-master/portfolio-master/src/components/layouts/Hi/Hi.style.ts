import styled from 'styled-components';
interface containerProps {
  visible: boolean
}
const Container = styled.div<containerProps>`
  height:100vh;
  max-height:${({ visible }) => visible ? 100 : 0}vh;
  visibility:${({ visible }) => visible ? "visible" : "hidden"};
  opacity:${({ visible }) => visible ? 1 : 0};
  display:flex;
  width:100%;
  justify-content:center;
  align-items:center;
  transition: all 500ms ease;
  background-color:${({ theme }) => theme.palette.secondary.darker};
`;
const Wrapper = styled.div`
  
`;
const TitleContainer = styled.div`
  overflow:hidden;
  width:250px;
  display:flex;
`;
interface TitleWrapperProps {
  index: number;
}
const TitleWrapper = styled.div<TitleWrapperProps>`
  display:flex;
  transform:translateX(${({ index }) => -250 * index}px);
  padding:0 20px;
`;
const Title = styled.h2`
  font-size:2rem;
  width:250px;
  height:100%;
  text-align:center;
`;
export {
  Container,
  TitleContainer,
  TitleWrapper,
  Title,
}