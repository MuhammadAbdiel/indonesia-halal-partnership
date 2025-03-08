import { useForm } from 'react-hook-form';
import DashboardLayout from "../../layouts/DashboardLayout";
import { createKafas } from '../../store/kafas/kafasAction';
import { useDispatch } from 'react-redux';
import { AppDispatch } from '../../store';
import Swal from 'sweetalert2';
import { useNavigate } from 'react-router-dom';

export default function KafasCreate() {
  const navigate = useNavigate();
  const { register, handleSubmit, formState: { errors } } = useForm();
  const dispatch: AppDispatch = useDispatch();

  const onSubmit = async (data: any) => {
    const body = Object.assign({}, {
      code: data.kodeFasilitator,
      quota: parseInt(data.kuota)
    })

    await dispatch(createKafas({ data: body })).then((res: any) => {
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
        text: res.payload.message,
        icon: "success",
      });

      navigate("/main-dashboard/kafas");
    })
  };

  return (
    <DashboardLayout>
      <div className="p-6">
        <h1 className="text-2xl font-bold text-gray-800 mb-4 uppercase">Tambah Kode Fasilitator</h1>

        <div className="bg-white p-4 rounded-lg">
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="mb-4">
              <label htmlFor="kodeFasilitator" className="block text-gray-700 font-bold mb-2">Kode Fasilitator</label>
              <input
                type="text"
                id="kodeFasilitator"
                className="w-full px-3 py-2 border rounded-md"
                placeholder="Masukkan Kode Fasilitator"
                {...register("kodeFasilitator", { required: "Kode Fasilitator wajib diisi" })}
              />
              {errors.kodeFasilitator && <p className="text-red-500 text-sm mt-1">{`${errors.kodeFasilitator.message}`}</p>}
            </div>
            <div className="mb-4">
              <label htmlFor="kuota" className="block text-gray-700 font-bold mb-2">Kuota</label>
              <input
                type="number"
                id="kuota"
                className="w-full px-3 py-2 border rounded-md"
                placeholder="Masukkan Kuota"
                {...register("kuota", { required: "Kuota wajib diisi" })}
              />
              {errors.kuota && <p className="text-red-500 text-sm mt-1">{`${errors.kuota.message}`}</p>}
            </div>
            <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded-md">Tambah</button>
          </form>
        </div>
      </div>
    </DashboardLayout>
  );
}