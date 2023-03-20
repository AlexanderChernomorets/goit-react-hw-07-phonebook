// import { toast } from 'react-toastify';
import { useDeleteContactMutation } from 'redux/itemsContacts';

export const useDelete = () => {
  const [deleteMaterial, { isLoading }] = useDeleteContactMutation();

  async function deleteContact(id) {
    const data = await deleteMaterial(id);
    if (data.error) {
      alert("Sorry, we couldn't add a new contact");
      return;
    }
  }

  return { deleteContact, isLoading };
};
