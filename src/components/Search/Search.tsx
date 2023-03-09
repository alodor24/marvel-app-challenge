import { Container } from 'react-bootstrap';
import { PageViewMode } from '../constants';
import SearchIcon from '../../assets/images/search-icon.svg';
import * as SC from './Search.styles';

type props = {
  mode: PageViewMode;
  value: string;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
};

const Search: React.FC<props> = ({ mode, value, onChange }) => {
  return (
    <Container>
      <SC.Wrapper>
        <SC.SerachIcon src={SearchIcon} alt="Search Icon" />
        <SC.Input
          size="lg"
          placeholder={`Search ${
            mode === PageViewMode.CHARACTERS ? 'Character' : 'Comic'
          }`}
          onChange={onChange}
          value={value}
        />
      </SC.Wrapper>
    </Container>
  );
};

export default Search;
