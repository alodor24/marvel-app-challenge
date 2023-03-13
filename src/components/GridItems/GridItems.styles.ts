import styled from 'styled-components';

export const Wrapper = styled.div`
  margin: 3rem 0;
  display: grid;
  gap: 1rem;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: repeat(3, 1fr);
  height: 45rem;

  @media (max-width: 540px) {
    height: 25rem;
  }

  div:nth-child(2) {
    grid-column-start: 2;
    grid-column-end: 4;
  }

  div:nth-child(3) {
    grid-column-start: 1;
    grid-column-end: 3;
  }

  div:nth-child(4) {
    grid-column-start: 3;
    grid-row-start: 2;
    grid-row-end: 4;
  }
`;

export const Item = styled.div<{ image?: string }>`
  background-image: ${(props) => `url(${props.image})`};
  background-size: cover;
  background-position: center;
  position: relative;

  &::before {
    content: '';
    position: absolute;
    background-color: ${(props) => props.theme.colors.grey[2]};
    width: 100%;
    height: 100%;
  }
`;
