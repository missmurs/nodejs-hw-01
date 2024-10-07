import { readContacts } from '../utils/readContacts.js';

export const getAllContacts = async () => {
  try {
    const contacts = await readContacts();
    console.log('Контакти успішно зчитані.');
    return contacts;
  } catch (err) {
    console.error('Помилка при зчитуванні контактів:', err);
  }
};

console.log(await getAllContacts());
