import { createFakeContact } from '../utils/createFakeContact.js';
import { writeContacts } from '../utils/writeContacts.js';
import { readContacts } from '../utils/readContacts.js';

export const generateContacts = async (number) => {
  const newContacts = [];
  for (let i = 1; i <= number; i++) {
    const contact = await createFakeContact();
    newContacts.push(contact);
  }

  try {
    let updatedContacts = await readContacts();
    if (!updatedContacts) {
      updatedContacts = [];
    }
    updatedContacts = [...updatedContacts, ...newContacts];
    await writeContacts(updatedContacts);
    console.log('Контакти успішно оновлено.');
  } catch (err) {
    console.log('Помилка при оновленні контактів:', err);
  }
};
