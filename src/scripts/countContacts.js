import { getAllContacts } from '../scripts/getAllContacts.js';
export const countContacts = async () => {
  try {
    const count = await getAllContacts();
    return `Кількість контактів: ${count.length}`;
  } catch (error) {
    console.error('Помилка при зчитуванні контактів:', error);
  }
};

console.log(await countContacts());
