import { memo, type FC } from 'react';
import type { Character } from '../../types/character.types';
import { useCharacterStore } from '../../store/useCharacterStore';

interface TableRowProps {
  row: Character;
}

const TableRow: FC<TableRowProps> = memo(({ row }) => {
  const selected = useCharacterStore((s) => s.selectedIds.has(row.id));
  const toggle = useCharacterStore((s) => s.toggleSelection);

  return (
    <tr className={`border-b ${selected ? 'bg-blue-100' : 'hover:bg-gray-300'}`}>
      <td className="p-3">
        <input type="checkbox" checked={selected} onChange={() => toggle(row.id)} />
      </td>
      <td className="p-3">{row.name}</td>
      <td className="p-3">{row.location}</td>
      <td className="p-3">{row.health}</td>
      <td className="p-3">{row.power}</td>
    </tr>
  );
});

export default TableRow;
