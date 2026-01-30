import type { FC } from 'react';
import DataTable from '../../components/table/DataTable';
import CommonTablePage from '../common-table/CommonTablePage';

const BasicTablePage: FC = () => {
  return (
    <CommonTablePage>
      <DataTable />
    </CommonTablePage>
  );
};

export default BasicTablePage;
