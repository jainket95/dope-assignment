import type { FC } from 'react';
import type { Character } from '../../types/character.types';
import TableRow from './TableRow';

interface TableBodyProps {
  rows: Character[];
}

const TableBody: FC<TableBodyProps> = ({ rows }) => {
  return (
    <tbody>
      {rows.map((row) => (
        <TableRow key={row.id} row={row} />
      ))}
    </tbody>
  );
};

export default TableBody;
