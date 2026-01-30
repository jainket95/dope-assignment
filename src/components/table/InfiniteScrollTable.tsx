import { useRef, useState } from 'react';
import { useTableFilter } from '../../hooks/useTableFilter';
import Table from './Table';
import TableBody from './TableBody';
import TableHeader from './TableHeader';
import { useIntersectionObserver } from '../../hooks/useIntersectionObserver';
import { useCharacterStore } from '../../store/useCharacterStore';

const ROWS_SIZE = 20;

const InfiniteScrollTable = () => {
  const [visibleCount, setVisibleCount] = useState(ROWS_SIZE);
  const targetRef = useRef<HTMLDivElement>(null);

  const filteredRows = useTableFilter();
  const { data: totalRow } = useCharacterStore();

  const visibleRows = filteredRows.slice(0, visibleCount);

  useIntersectionObserver({
    target: targetRef,
    onIntersect: () =>
      setVisibleCount((prev) => Math.min(prev + ROWS_SIZE, totalRow.length)),
    enabled: visibleCount < totalRow.length,
  });

  return (
    <Table targetRef={<div ref={targetRef} className="h-10" />}>
      <TableHeader />
      <TableBody rows={visibleRows} />
    </Table>
  );
};

export default InfiniteScrollTable;
