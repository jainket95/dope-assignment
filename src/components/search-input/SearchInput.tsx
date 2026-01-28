import { useEffect, useState, type FC } from 'react';
import { useCharacterStore } from '../../store/useCharacterStore';
import { useDebounce } from '../../hooks/useDebounce';

const SearchInput: FC = () => {
  const search = useCharacterStore((s) => s.search);
  const setSearch = useCharacterStore((s) => s.setSearch);

  const [value, setValue] = useState(search);
  const debouncedSearch = useDebounce(value, 300);

  useEffect(() => {
    setSearch(debouncedSearch);
  }, [debouncedSearch, setSearch]);

  return (
    <input
      value={value}
      onChange={(e) => setValue(e.target.value)}
      placeholder="Search characters by name or location..."
      className="w-96 px-3 py-2 border rounded-lg"
    />
  );
};

export default SearchInput;
