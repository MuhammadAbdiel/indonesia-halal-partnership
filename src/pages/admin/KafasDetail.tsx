// src/pages/admin/KafasDetail.tsx
import { useDispatch } from "react-redux";
import { AppDispatch } from "../../store";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { assignKafasToUser, getKafasById } from "../../store/kafas/kafasAction";
import DataTable from "react-data-table-component";
import { useAuth } from "../../context/AuthContext";
import DashboardLayout from "../../layouts/DashboardLayout";
export default function KafasDetail() {
  const { id } = useParams<{ id: string }>(); // Ambil ID Kafas dari URL
  const dispatch: AppDispatch = useDispatch();
  const { user } = useAuth();
  const [assignError, setAssignError] = useState<string | null>(null); // State untuk error assign
  const [kafasDetail, setKafasDetail] = useState<any>(null);

  const handleGetKafasById = async () => {
    await dispatch(getKafasById(id as string)).then((res) => {
      if (res.payload) {
        setKafasDetail(res.payload);
      }
    });
  }

  useEffect(() => {
    if (id) {
      handleGetKafasById();
    }
  }, [id, dispatch]);

  // Handle assign user to Kafas
  const handleAssignUser = async () => {
    await dispatch(assignKafasToUser({
      userId: user?.id,
      kafasId: id
    })).then((res) => {
      if (res.payload) {
        setAssignError(res.payload.message);
      }
    });
  };

  // Define columns for KafasUsage table
  const kafasUsageColumns = [
    {
      name: "User ID",
      selector: (row: any) => row.userId,
      sortable: true,
    },
    {
      name: "Nama User",
      selector: (row: any) => row.user.name, // Asumsikan user memiliki field `name`
      sortable: true,
    },
    {
      name: "Tanggal Assign",
      selector: (row: any) => new Date(row.createdAt).toLocaleString(),
      sortable: true,
    },
  ];

  return (
    <DashboardLayout>
      <div className="p-6">
        <h1 className="text-2xl font-bold text-gray-800 mb-4">Detail Kafas</h1>

        <div className="bg-white p-4 rounded-lg">
          {/* Detail Kafas */}
          <div className="mb-6">
            <h2 className="text-xl font-semibold text-gray-700">Informasi Kafas</h2>
            <p><strong>ID:</strong> {kafasDetail?.id}</p>
            <p><strong>Code:</strong> {kafasDetail?.code}</p>
            <p><strong>Quota:</strong> {kafasDetail?.quota}</p>
            <p><strong>Quota Tersedia:</strong> {kafasDetail?.quota - (kafasDetail?.KafasUsage?.length || 0)}</p>
          </div>

          {/* Daftar KafasUsage */}
          <div className="mb-6">
            <h2 className="text-xl font-semibold text-gray-700">Daftar Pengguna</h2>
            <DataTable
              columns={kafasUsageColumns}
              data={kafasDetail?.KafasUsage || []}
              pagination
              highlightOnHover
            />
          </div>

          {/* Form Assign User */}
          <div className="mb-6">
            <h2 className="text-xl font-semibold text-gray-700">Assign User ke Kafas</h2>
            <div className="flex items-center gap-4">
              <input type="number" placeholder="User ID" className="p-2 border rounded" />
              <button
                onClick={handleAssignUser}
                className="p-2 bg-blue-500 text-white rounded hover:bg-blue-600"
              >
                Assign User
              </button>
            </div>
            {assignError && <p className="text-red-500 mt-2">{assignError}</p>}
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
}