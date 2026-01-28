import type { FC } from 'react';
import HealthFilterDropdown from '../filter-dropdown/HealthFilterDropdown';
import SortOrder from '../sort-order/SortOrder';

const TableHeader: FC = () => {
  return (
    <thead className="border-b bg-gray-100 p-2 sticky top-0 z-10">
      <tr>
        <th className="p-3 text-left w-10">#</th>
        <th className="p-3 text-left">Name</th>
        <th className="p-3 text-left">Location</th>
        <th className="p-3 text-left">
          <div className="flex items-center gap-x-4">
            Health <HealthFilterDropdown />
          </div>
        </th>
        <th className="p-3 text-left">
          <div className="flex items-center gap-x-4">
            Power <SortOrder />
          </div>
        </th>
      </tr>
    </thead>
  );
};

export default TableHeader;
