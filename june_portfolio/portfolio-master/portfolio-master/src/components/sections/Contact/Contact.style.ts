import styled from 'styled-components';
import { Section } from '../About/About.style';
import { SMDown } from '../../../styles/responsive';
const Container = styled(Section)`
  
`;
const Main = styled.div`
`;
const Title = styled.p`
  font-size:1.5rem;
  line-height:1.3;
  text-align:center;
`;
const ContactBtn = styled.a`
  border: 1px solid ${({ theme }) => theme.palette.primary.main};
  color:${({ theme }) => theme.palette.common.white};
  outline:0;
  padding: 12px 16px;
  background-color:${({ theme }) => theme.palette.primary.main};
  border-radius:${({ theme }) => theme.borderRadius.small};
  cursor:pointer;
  font-size:1rem;
  transition: all 500ms ease;
  display:block;
  max-width:200px;
  text-align:center;
  margin: 24px auto 0;
  text-transform:capitalize;
  &:hover {
    opacity:0.8;
  }
`;
export {
  Container,
  Main,
  Title,
  ContactBtn,
}