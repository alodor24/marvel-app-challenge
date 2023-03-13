import { Container } from 'react-bootstrap';
import { Character, Comic } from '../../hooks/types';
import { ImageExtensionEnum } from '../constants';
import * as SC from './GridItems.styles';

type Props = {
  data?: Character[] | Comic[];
};

const GridItems: React.FC<Props> = ({ data }) => {
  return (
    <Container>
      <SC.Wrapper>
        {(data || []).map((item, index) => (
          <SC.Item
            key={index}
            image={
              item.thumbnail.path +
              ImageExtensionEnum.STANDARD_FANTASTIC +
              item.thumbnail.extension
            }
          />
        ))}
      </SC.Wrapper>
    </Container>
  );
};

export default GridItems;
