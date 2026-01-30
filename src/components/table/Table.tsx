import type { FC, ReactNode } from 'react';
import { useCharacterStore } from '../../store/useCharacterStore';

type TableProps = {
  children: ReactNode;
  targetRef?: ReactNode;
};
const Table: FC<TableProps> = ({ children, targetRef }) => {
  const { loading } = useCharacterStore();

  if (loading) return <div className="py-10 text-center">Loading .....</div>;

  return (
    <div className="w-full h-full border rounded-lg overflow-hidden">
      <div className="w-full h-full overflow-auto">
        <table className="w-full h-auto border-collapse">{children}</table>
        {targetRef}
      </div>
    </div>
  );
};

export default Table;
