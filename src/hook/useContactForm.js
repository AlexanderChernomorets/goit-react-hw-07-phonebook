import { useState } from 'react';
import {
  useGetContactsQuery,
  useAddContactMutation,
} from 'redux/itemsContacts';

export const useContactForm = () => {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [post] = useAddContactMutation();
  const { data: contactList } = useGetContactsQuery();

  const onSubmit = async e => {
    e.preventDefault();

    const isDuplicate = contactList.filter(x => x.name === name);
    if (isDuplicate.length) {
      alert(`${name} is already in contacts`);
      return;
    }
    const data = await post({ name, phone });
    if (data.error) {
      alert("Sorry, we couldn't add a new contact");
      return;
    }
    setName('');
    setPhone('');
  };

  return { name, phone, setName, setPhone, onSubmit };
};
