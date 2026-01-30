import { useRef } from 'react';
import { useTableFilter } from '../../hooks/useTableFilter';

import TableHeader from './TableHeader';

import { useVirtualizer } from '@tanstack/react-virtual';
import TableRow from './TableRow';

const VirtualizedTable = () => {
  const targetRef = useRef<HTMLDivElement>(null);

  const filteredRows = useTableFilter();

  // eslint-disable-next-line react-hooks/incompatible-library
  const rowVirtualizer = useVirtualizer({
    count: filteredRows.length,
    getScrollElement: () => targetRef.current,
    estimateSize: () => 48,
    overscan: 5,
  });

  return (
    <div className="border rounded-lg overflow-hidden">
      <div ref={targetRef} className="h-[70vh] overflow-auto relative">
        <table className="w-full border-collapse relative">
          <TableHeader />

          <tbody
            style={{
              height: `${rowVirtualizer.getTotalSize()}px`,
              position: 'relative',
            }}
          >
            {rowVirtualizer.getVirtualItems().map((virtualRow) => {
              const row = filteredRows[virtualRow.index];

              return (
                <TableRow
                  row={row}
                  style={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    width: '100%',
                    transform: `translateY(${virtualRow.start}px)`,
                    display: 'table',
                    tableLayout: 'fixed',
                  }}
                />
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default VirtualizedTable;
