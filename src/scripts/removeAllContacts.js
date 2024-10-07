import { writeContacts } from '../utils/writeContacts.js';
export const removeAllContacts = async () => {
  try {
    await writeContacts([]);
    console.log('Контакти успішно видалені.');
    return;
  } catch (err) {
    console.error('Помилка', err);
  }
};

removeAllContacts();
