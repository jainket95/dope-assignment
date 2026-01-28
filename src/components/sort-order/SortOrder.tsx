import type { FC } from 'react';
import { useCharacterStore } from '../../store/useCharacterStore';

const SortOrder: FC = () => {
  const sortOrder = useCharacterStore((s) => s.sortOrder);
  const setOrder = useCharacterStore((s) => s.setSortOrder);

  const toggleSortOrder = () => {
    setOrder(sortOrder === 'asc' ? 'desc' : 'asc');
  };

  return (
    <span
      data-testid="sort-toggle"
      aria-label="Sort by power"
      onClick={toggleSortOrder}
      className="cursor-pointer"
    >
      {sortOrder === 'asc' ? '▲' : '▼'}
    </span>
  );
};

export default SortOrder;
