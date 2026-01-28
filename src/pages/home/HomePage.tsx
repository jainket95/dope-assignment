import TopBar from '../../components/topbar/TopBar';
import DataTable from '../../components/table/DataTable';

const HomePage = () => {
  return (
    <div className="w-full h-full flex flex-col items-center justify-center gap-y-10">
      <h1 className="text-5xl font-semibold">
        Large Data Table & Management (FE Assignment)
      </h1>

      <TopBar />

      <div className="w-full overflow-hidden">
        <DataTable />
      </div>
    </div>
  );
};

export default HomePage;
