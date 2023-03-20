import Loader from 'components/Loader/Loader';
import { useContacts } from 'hook/useContacts';
import { ContactItem } from './ContactItem';
import { ContactsSection, ContList, ContTitle } from './ContactList.styled';

function ContactList() {
  const { filteredContacts, isLoading, error } = useContacts();
  console.log(filteredContacts);
  const isError = error ? (
    error.data
  ) : (
    <ContList>
      {filteredContacts.map(x => (
        <ContactItem data={x} key={`${x.id}${x.phone}`} />
      ))}
    </ContList>
  );

  return (
    <>
      <ContactsSection>
        <ContTitle>Contacts</ContTitle>
        {/* <Loader /> */}
        {isLoading ? <Loader /> : isError}
      </ContactsSection>
    </>
  );
}

export default ContactList;
