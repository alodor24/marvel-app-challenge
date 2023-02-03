import { Pagination } from "react-bootstrap";
import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 2rem;
`;

export const PaginationWrapper = styled(Pagination)`
  .page-item.active {
    .page-link {
      background-color: ${(props) => props.theme.colors.red[0]};
      color: ${(props) => props.theme.colors.white[0]};
      border: none;
    }
  }

  .page-link {
    color: ${(props) => props.theme.colors.grey[0]};
  }

  .page-link:focus {
    color: ${(props) => props.theme.colors.red[0]};
    box-shadow: none;
  }
`;
