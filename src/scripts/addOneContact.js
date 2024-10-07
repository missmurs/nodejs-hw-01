import { generateContacts } from '../scripts/generateContacts.js';

export const addOneContact = async () => {
  try {
    await generateContacts(1);
    console.log('Один контакт успішно доданий.');
  } catch (err) {
    console.error('Помилка при додаванні контакту:', err);
  }
};

addOneContact();
