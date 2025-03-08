import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../../store";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { assignKafasToUser, deleteAssignKafasToUser, getKafasById } from "../../store/kafas/kafasAction";
import DataTable from "react-data-table-component";
import DashboardLayout from "../../layouts/DashboardLayout";
import { getAllUser } from "../../store/users/userAction";
import Swal from "sweetalert2";
import { setIsDetailRefresh } from "../../store/kafas/kafasSlice";

export default function KafasDetail() {
  const { id } = useParams<{ id: string }>(); // Ambil ID Kafas dari URL
  const dispatch: AppDispatch = useDispatch();
  const [assignError, setAssignError] = useState<string | null>(null); // State untuk error assign
  const [kafasDetail, setKafasDetail] = useState<any>(null);
  const [users, setUsers] = useState<any[]>([]);
  const [selectedUserId, setSelectedUserId] = useState<string | null>(null); // State untuk menyimpan ID pengguna yang dipilih
  const { isRefresh, isDetailRefresh } = useSelector((state: RootState) => state.kafas);

  const handleGetAllUser = async () => {
    const params: any = {};

    await dispatch(getAllUser(params)).then((res) => {
      if (res.payload) {
        setUsers(res.payload);
      }
    });
  };

  useEffect(() => {
    handleGetAllUser();
  }, [dispatch]);

  const handleGetKafasById = async () => {
    await dispatch(getKafasById(id as string)).then((res) => {
      if (res.payload) {
        setKafasDetail(res.payload);
      }
    });
  };

  useEffect(() => {
    if (id) {
      handleGetKafasById();
    }
  }, [id, dispatch, isRefresh, isDetailRefresh]);

  // Handle assign user to Kafas
  const handleAssignUser = async () => {
    if (!selectedUserId) {
      setAssignError("Silakan pilih pengguna terlebih dahulu.");
      return;
    }

    const body = Object.assign({}, {
      userId: parseInt(selectedUserId),
      kafasId: parseInt(id as string),
    })

    await dispatch(
      assignKafasToUser({ data: body })
    ).then((res) => {
      if (res?.meta?.requestStatus !== "fulfilled") {
        setAssignError(res.payload.response.data.error);

        return
      }

      setAssignError(null);
      Swal.fire({
        title: "Berhasil",
        text: "Pengguna berhasil diassign ke Kafas",
        icon: "success",
      });
      // @ts-ignore
      dispatch(setIsDetailRefresh())
    });
  };

  const handleDeleteAssignUser = async (id: string) => {
    await dispatch(deleteAssignKafasToUser({ id })).then((res: any) => {
      if (res?.meta?.requestStatus !== "fulfilled") {
        Swal.fire({
          title: "Gagal",
          text: res.payload.response.data.error,
          icon: "error",
        });

        return
      }

      Swal.fire({
        title: "Berhasil",
        text: "Pengguna berhasil dihapus dari Kafas",
        icon: "success",
      });
      // @ts-ignore
      dispatch(setIsDetailRefresh())
    });
  };

  // Define columns for KafasUsage table
  const kafasUsageColumns = [
    {
      name: "User ID",
      selector: (row: any) => row.id,
      sortable: true,
    },
    {
      name: "Nama User",
      selector: (row: any) => row.fullName,
      sortable: true,
    },
    {
      name: "Tanggal Assign",
      selector: (row: any) => new Date(row.createdAt).toLocaleString(),
      sortable: true,
    },
    {
      name: "Aksi",
      cell: (row: any) => {
        return <button onClick={() => handleDeleteAssignUser(row.id)} className="bg-red-500 text-white px-2 py-1 rounded-md">
          Hapus
        </button>
      },
    },
  ];

  return (
    <DashboardLayout>
      <div className="p-6 bg-gray-50 min-h-screen">
        <h1 className="text-3xl font-bold text-gray-800 mb-6 uppercase">Detail Kafas</h1>

        {/* Card untuk Detail Kafas */}
        <div className="bg-white rounded-lg shadow-md p-6 mb-8">
          <h2 className="text-xl font-semibold text-gray-700 mb-4 uppercase">Informasi Kafas</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <p className="text-gray-600"><strong>Kode Fasilitator:</strong> {kafasDetail?.code}</p>
            </div>
            <div>
              <p className="text-gray-600"><strong>Kuota:</strong> {kafasDetail?.quota}</p>
              {/* <p className="text-gray-600">
                <strong>Quota Tersedia:</strong>{" "}
                {kafasDetail?.quota - (kafasDetail?.KafasUsage?.length || 0)}
              </p> */}
            </div>
          </div>
        </div>

        {/* Card untuk Daftar Pengguna */}
        <div className="bg-white rounded-lg shadow-md p-6 mb-8">
          <h2 className="text-xl font-semibold text-gray-700 mb-4 uppercase">Daftar Pengguna</h2>
          <DataTable
            columns={kafasUsageColumns}
            data={kafasDetail?.users || []}
            pagination
            highlightOnHover
            className="border rounded"
          />
        </div>

        {/* Card untuk Assign User */}
        <div className="bg-white rounded-lg shadow-md p-6">
          <h2 className="text-xl font-semibold text-gray-700 mb-4 uppercase">Assign Kafas</h2>
          <div className="flex flex-col md:flex-row items-center gap-4">
            <select
              value={selectedUserId || ""}
              onChange={(e) => setSelectedUserId(e.target.value)}
              className="w-full md:w-64 p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              <option value="">Pilih Pengguna</option>
              {users.map((user) => (
                <option key={user.id} value={user.id}>
                  {user.fullName}
                </option>
              ))}
            </select>
            <button
              onClick={handleAssignUser}
              className="w-full md:w-auto p-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition duration-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              Assign User
            </button>
          </div>
          {assignError && (
            <p className="text-red-500 mt-2 text-sm">{assignError}</p>
          )}
        </div>
      </div>
    </DashboardLayout>
  );
}