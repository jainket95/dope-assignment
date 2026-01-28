import api from './apiInstance';
import type { Character } from '../types/character.types';

export const fetchCharacters = async (): Promise<Character[]> => {
  const response = await api.get('/db.json');
  return response.data.characters;
};
