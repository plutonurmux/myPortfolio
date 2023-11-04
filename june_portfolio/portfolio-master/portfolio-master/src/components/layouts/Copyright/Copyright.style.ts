import styled from 'styled-components';
import { XSDown } from '../../../styles/responsive';
const Container = styled.div`
  width:100%;
  padding: 12px;
  `;
const Wrapper = styled.div`
max-width: 280px;
margin: 0 auto;
${XSDown({
  maxWidth: "auto"
})
  }
  
`;
const Paragraph = styled.p`
  text-Align:center;
`;
export {
  Container,
  Wrapper,
  Paragraph,
}