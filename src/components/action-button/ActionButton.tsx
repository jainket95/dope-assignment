import type { FC } from 'react';
import { useCharacterStore } from '../../store/useCharacterStore';

const ActionButton: FC = () => {
  const selectedIds = useCharacterStore((s) => s.selectedIds);

  const handleSubmit = () => {
    console.log([...selectedIds]);
  };

  return (
    <button
      data-testid="submit-btn"
      aria-label="Submit selected characters"
      disabled={!selectedIds.size}
      className="bg-blue-500 text-white px-4 py-2 rounded disabled:opacity-50"
      onClick={handleSubmit}
    >
      Submit
    </button>
  );
};

export default ActionButton;
