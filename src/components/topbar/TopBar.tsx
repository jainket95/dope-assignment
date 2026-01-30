import SearchInput from '../search-input/SearchInput';
import ActionButton from '../action-button/ActionButton';
import { useCharacterStore } from '../../store/useCharacterStore';

const TopBar = () => {
  const { reset } = useCharacterStore();

  return (
    <div className="w-full flex justify-between items-center">
      <SearchInput />
      <div className="w-full flex justify-end items-center gap-2">
        <ActionButton />
        <button
          className="bg-gray-500 text-white px-4 py-2 rounded disabled:opacity-50"
          onClick={reset}
        >
          Reset Filters
        </button>
      </div>
    </div>
  );
};

export default TopBar;
