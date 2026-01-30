import type { FC, ReactNode } from 'react';
import TopBar from '../../components/topbar/TopBar';

type CommonTablePageProps = {
  children: ReactNode;
};
const CommonTablePage: FC<CommonTablePageProps> = ({ children }) => {
  return (
    <div className="w-full h-full flex flex-col items-center justify-start gap-y-10">
      <h1 className="text-3xl font-semibold">Optimized React Table</h1>

      <TopBar />

      <div className="w-full overflow-hidden">{children}</div>
    </div>
  );
};

export default CommonTablePage;
