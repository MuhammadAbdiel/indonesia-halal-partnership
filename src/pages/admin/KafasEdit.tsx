import { useForm } from 'react-hook-form';
import DashboardLayout from "../../layouts/DashboardLayout";
import { useDispatch } from 'react-redux';
import { AppDispatch } from '../../store';
import Swal from 'sweetalert2';
import { useNavigate, useParams } from 'react-router-dom';
import { getKafasById, updateKafas } from '../../store/kafas/kafasAction';
import { useEffect } from 'react';
import { useState } from 'react';

export default function KafasEdit() {
  const navigate = useNavigate();
  const { id } = useParams<{ id: string }>();
  const { register, handleSubmit, setValue, formState: { errors } } = useForm();
  const dispatch: AppDispatch = useDispatch();
  const [kafas, setKafas] = useState<any>(null);

  const handleGetKafasById = async () => {
    await dispatch(getKafasById(id as string)).then((res: any) => {
      if (res?.meta?.requestStatus !== "fulfilled") {
        Swal.fire({
          title: "Gagal",
          text: res.payload.response.data.error,
          icon: "error",
        });

        return
      }

      setKafas(res.payload);
    })
  }

  useEffect(() => {
    handleGetKafasById();
  }, [id, dispatch]);

  useEffect(() => {
    if (kafas) {
      setValue("kodeFasilitator", kafas.code);
      setValue("kuota", kafas.quota);
    }
  }, [kafas]);

  const onSubmit = async (data: any) => {
    const body = Object.assign({}, {
      code: data.kodeFasilitator,
      quota: parseInt(data.kuota)
    })

    await dispatch(updateKafas({ id: id as string, data: body })).then((res: any) => {
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
        <h1 className="text-2xl font-bold text-gray-800 mb-4 uppercase">Ubah Kode Fasilitator</h1>

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
            <button type="submit" className="bg-green-500 text-white px-4 py-2 rounded-md">Update</button>
          </form>
        </div>
      </div>
    </DashboardLayout>
  );
}