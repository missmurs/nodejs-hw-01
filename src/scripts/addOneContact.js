import { createFakeContact } from '../utils/createFakeContact.js';
import { readContacts } from '../utils/readContacts.js';
import { writeContacts } from '../utils/writeContacts.js';

export const addOneContact = async () => {
  const generatedContact = createFakeContact();
  try {
    const updatedContacts = await readContacts();
    await writeContacts([...updatedContacts, generatedContact]);
    console.log('Один контакт успішно доданий.');
  } catch (err) {
    console.error('Помилка при додаванні контакту:', err);
  }
};

addOneContact();
