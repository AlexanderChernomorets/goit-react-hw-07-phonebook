import { useDispatch, useSelector } from 'react-redux';
import { getFilterContacts, setFilter } from 'redux/filterContacts';
import {
  FilterSection,
  FilterTitle,
  FilterInput,
} from './filterContact.styled';

function FilterContact() {
  const dispatch = useDispatch();
  const filter = useSelector(getFilterContacts);
  return (
    <FilterSection>
      <FilterTitle>
        Find contacts by name
        <FilterInput
          type="filter"
          name="filter"
          value={filter}
          placeholder="🔎 Enter name for Search"
          onChange={e => dispatch(setFilter(e.target.value.toLowerCase()))}
        />
      </FilterTitle>
    </FilterSection>
  );
}
export default FilterContact;
