import { create } from 'zustand';
import type { Character, Health } from '../types/character.types';
import { fetchCharacters } from '../api/characters';

type SortOrder = 'asc' | 'desc' | null;

interface CharacterState {
  data: Character[];
  loading: boolean;

  search: string;
  healthFilters: Health[];
  sortOrder: SortOrder;

  selectedIds: Set<string>;

  fetchData: () => Promise<void>;
  setSearch: (value: string) => void;
  toggleHealthFilter: (value: Health) => void;
  setSortOrder: (value: SortOrder) => void;

  toggleSelection: (id: string) => void;
  clearSelection: () => void;
}

export const useCharacterStore = create<CharacterState>((set) => ({
  data: [],
  loading: false,
  search: '',
  healthFilters: [],
  sortOrder: null,
  selectedIds: new Set(),
  fetchData: async () => {
    set({ loading: true });
    const data = await fetchCharacters();
    set({ data, loading: false });
  },
  setSearch: (value: string) => set({ search: value }),

  toggleHealthFilter: (value: Health) => {
    set((state) => {
      const healthFilters = [...state.healthFilters];
      const index = healthFilters.indexOf(value);
      if (index === -1) {
        healthFilters.push(value);
      } else {
        healthFilters.splice(index, 1);
      }
      return { healthFilters };
    });
  },
  setSortOrder: (value: SortOrder) => set({ sortOrder: value }),
  toggleSelection: (id: string) => {
    set((state) => {
      const selectedIds = new Set(state.selectedIds);
      if (selectedIds.has(id)) {
        selectedIds.delete(id);
      } else {
        selectedIds.add(id);
      }
      return { selectedIds };
    });
  },
  clearSelection: () => set({ selectedIds: new Set() }),
}));
