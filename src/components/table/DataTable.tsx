import TableHeader from './TableHeader';
import TableBody from './TableBody';
import { useTableFilter } from '../../hooks/useTableFilter';
import Table from './Table';
import type { FC } from 'react';

const DataTable: FC = () => {
  const visibleRows = useTableFilter();

  return (
    <Table>
      <TableHeader />
      <TableBody rows={visibleRows} />
    </Table>
  );
};

export default DataTable;
