import PropTypes from 'prop-types';
import { useDelete } from 'hook/useDelete';
import { ContItem, ContName, ContNum, DelButton } from './ContactList.styled';

export const ContactItem = ({ data: { phone, id, name } }) => {
  const { deleteContact, isLoading } = useDelete();

  return (
    <>
      <ContItem>
        <ContName>{name}: </ContName>
        <ContNum>{phone}</ContNum>
        <DelButton
          type="button"
          onClick={() => deleteContact(id)}
          disabled={isLoading}
        >
          Delete
        </DelButton>
      </ContItem>
    </>
  );
};
ContactItem.propTypes = {
  data: PropTypes.shape({
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    phone: PropTypes.string.isRequired,
  }),
};
