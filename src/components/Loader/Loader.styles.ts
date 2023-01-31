import styled from "styled-components";

export const Wrapper = styled.div`
  height: ${(props) => props.theme.minHeight};
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;
