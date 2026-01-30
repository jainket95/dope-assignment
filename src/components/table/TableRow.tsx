import { memo, type FC } from 'react';
import type { Character } from '../../types/character.types';
import { useCharacterStore } from '../../store/useCharacterStore';

interface TableRowProps {
  row: Character;
  style?: React.CSSProperties;
}

const TableRow: FC<TableRowProps> = memo(({ row, style }) => {
  const selected = useCharacterStore((s) => s.selectedIds.has(row.id));
  const toggle = useCharacterStore((s) => s.toggleSelection);

  return (
    <tr
      style={style}
      className={`border-b ${selected ? 'bg-blue-100' : 'hover:bg-gray-300'}`}
    >
      <td className="w-10 p-3">
        <input
          data-testid={`row-checkbox-${row.id}`}
          aria-label={`Select ${row.name}`}
          type="checkbox"
          checked={selected}
          onChange={() => toggle(row.id)}
        />
      </td>
      <td className="">{row.name}</td>
      <td className="">{row.location}</td>
      <td className="">{row.health}</td>
      <td className="">{row.power}</td>
    </tr>
  );
});

export default TableRow;
