import { Container } from 'react-bootstrap';
import { PageViewMode } from '../constants';
import SearchIcon from '../../assets/images/search-icon.svg';
import CloseIcon from '../../assets/images/close-icon.svg';
import * as SC from './Search.styles';

type props = {
  mode: PageViewMode;
  value: string;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
  handlerClear: () => void;
};

const Search: React.FC<props> = ({ mode, value, onChange, handlerClear }) => {
  return (
    <Container>
      <SC.Wrapper>
        <SC.SearchIcon src={SearchIcon} alt="Search Icon" />
        <SC.Input
          size="lg"
          placeholder={`Search ${
            mode === PageViewMode.CHARACTERS ? 'Character' : 'Comic'
          }`}
          onChange={onChange}
          value={value}
        />
        {value && (
          <SC.CloseIcon
            src={CloseIcon}
            alt="Close Icon"
            title="Clear Search"
            onClick={handlerClear}
          />
        )}
      </SC.Wrapper>
    </Container>
  );
};

export default Search;
