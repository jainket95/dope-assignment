import { useMemo } from 'react';
import { useCharacterStore } from '../../store/useCharacterStore';
import TableHeader from './TableHeader';
import TableBody from './TableBody';

const DataTable = () => {
  const { data, loading, search, healthFilters, sortOrder } = useCharacterStore();

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

  if (loading) return <div className="py-10 text-center">Loading .....</div>;

  return (
    <div className="w-full h-full border rounded-lg overflow-hidden">
      <div className="w-full h-full overflow-auto">
        <table className="w-full h-auto border-collapse">
          <TableHeader />
          <TableBody rows={visibleRows} />
        </table>
      </div>
    </div>
  );
};

export default DataTable;
