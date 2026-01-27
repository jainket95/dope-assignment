import type { Character } from './scripts.types';
import { faker } from '@faker-js/faker';
import fs from 'fs';

const locations = ['Konoha', 'Suna', 'Kiri', 'Iwa', 'Kumo'];
const health = ['Healthy', 'Injured', 'Critical'];

const generateCharacters = (): Character => ({
  id: faker.string.uuid(),
  name: faker.person.fullName(),
  location: faker.helpers.arrayElement(locations),
  health: faker.helpers.arrayElement(health),
  power: faker.number.int({ min: 1, max: 100 }),
  viewed: false,
});

const data: Character[] = Array.from({ length: 1100 }, generateCharacters);

console.log(data);

fs.writeFileSync('./db.json', JSON.stringify({ characters: data }, null, 2));

console.log('Data generated successfully!');
