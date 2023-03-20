import { useContactForm } from 'hook/useContactForm';
import {
  Title,
  FormContact,
  FormLabel,
  FormButton,
  FormInput,
} from './ContactForm.styled';

function ContactForm() {
  const { name, setName, phone, setPhone, onSubmit } = useContactForm();

  return (
    <FormContact onSubmit={onSubmit}>
      <Title>Phonebook</Title>
      <FormLabel>
        Name
        <FormInput
          type="text"
          name="name"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          value={name}
          placeholder="🙍‍♂️ Enter contact name"
          onChange={e => setName(e.target.value)}
          required
        />
      </FormLabel>
      <FormLabel>
        Number
        <FormInput
          type="tel"
          name="number"
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          value={phone}
          placeholder="📞 Enter phone number"
          onChange={e => setPhone(e.target.value)}
          required
        />
      </FormLabel>
      <FormButton type="submit">Add contact</FormButton>
    </FormContact>
  );
}

export default ContactForm;
