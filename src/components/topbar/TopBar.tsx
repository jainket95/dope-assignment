import SearchInput from '../search-input/SearchInput';
import ActionButton from '../action-button/ActionButton';

const TopBar = () => {
  return (
    <div className="w-full flex justify-between items-center">
      <SearchInput />
      <ActionButton />
    </div>
  );
};

export default TopBar;
