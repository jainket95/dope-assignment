import { useMemo } from 'react';

import { useCharacterStore } from '../store/useCharacterStore';

export const useTableFilter = () => {
  const { data, search, healthFilters, sortOrder } = useCharacterStore();
  const visibleRows = useMemo(() => {
    let rows = data;

    if (search) {
      const searchTerm = search.toLowerCase();
      rows = rows.filter(
        (row) =>
          row.name.toLowerCase().includes(searchTerm) ||
          row.location.toLowerCase().includes(searchTerm)
      );
    }

    if (healthFilters.length) {
      rows = rows.filter((row) => healthFilters.includes(row.health));
    }

    if (sortOrder) {
      rows = [...rows].sort((a, b) =>
        sortOrder === 'asc' ? a.power - b.power : b.power - a.power
      );
    }

    return rows;
  }, [data, search, healthFilters, sortOrder]);

  return visibleRows;
};
