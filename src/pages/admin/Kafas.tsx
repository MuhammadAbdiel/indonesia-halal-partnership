import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../../store";
import DashboardLayout from "../../layouts/DashboardLayout";
import { useEffect, useState } from "react";
import { getAllKafas } from "../../store/kafas/kafasAction";
import DataTable from "react-data-table-component";
import { useNavigate } from "react-router-dom";

export default function Kafas() {
  const navigate = useNavigate();
  const { isRefresh } = useSelector((state: RootState) => state.kafas);
  const dispatch: AppDispatch = useDispatch();
  const [kafas, setKafas] = useState<any[]>([]);

  // Handle fetching all Kafas data
  const handleGetAllKafas = async () => {
    const params: any = {}

    await dispatch(getAllKafas(params)).then((res) => {
      if (res.payload) {
        setKafas(res.payload);
      }
    });
  };

  // Fetch data on component mount and when isRefresh changes
  useEffect(() => {
    handleGetAllKafas();
  }, [isRefresh]);

  // Define columns for the DataTable
  const columns = [
    {
      name: "No",
      selector: (_row: any, index: number) => index + 1,
      sortable: true,
    },
    {
      name: "Code",
      selector: (row: any) => row.code,
      sortable: true,
    },
    {
      name: "Quota",
      selector: (row: any) => row.quota,
      sortable: true,
    },
    {
      name: "Action",
      selector: (_row: any) => (
        <div className="flex gap-2">
          <button onClick={() => navigate(`/main-dashboard/kafas/${_row.id}`)} className="bg-blue-500 text-white px-4 py-2 rounded-md">Edit</button>
        </div>
      ),
    },
  ];

  return (
    <DashboardLayout>
      <div className="p-6">
        <h1 className="text-2xl font-bold text-gray-800 mb-4">Kafas Management</h1>

        {/* white container */}
        <div className="bg-white p-4 rounded-lg">
          {/* <h1 className="text-2xl font-bold text-gray-800 mb-4">Kafas List</h1> */}

          <DataTable
            columns={columns as any}
            data={kafas}
            pagination
            highlightOnHover
            striped
            responsive
          />
        </div>
      </div>
    </DashboardLayout>
  );
}