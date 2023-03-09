import { Form } from 'react-bootstrap';
import styled from 'styled-components';

export const Wrapper = styled.div`
  position: relative;
  background-color: ${(props) => props.theme.colors.grey[1]};
  margin: 0 auto;
  margin-top: 3em;
  padding: 2rem;
  border-radius: 0.3rem;
  box-shadow: ${(props) => props.theme.shadow[1]};
`;

export const SerachIcon = styled.img`
  width: 2rem;
  position: absolute;
  margin-top: 0.5rem;
  margin-left: 0.5rem;
`;

export const Input = styled(Form.Control)`
  border: none;
  border-radius: 0;
  padding: 0 1rem 0 3rem;

  &:focus {
    border-color: transparent;
    box-shadow: none;
  }
`;
