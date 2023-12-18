import React, { useState } from "react";
import withReactContent from 'sweetalert2-react-content'
import Swal from 'sweetalert2'

const Editar = () => {
  const [form, setForm] = useState({
    crucero: "",
    categoria:"",
    salida: "",
    finaliza: "",
    itinerario: "",
    precio: "",
  });

  const addData = (e) => {
    const { name, value } = e.target;
    setForm({
      ...form,
      [name]: value,
    });
  };

  const handleSubmit = (e)=>{
    e.preventDefault();

    withReactContent(Swal).fire({
      title: "Tour creado!",
      icon: "success"
    });
  }

  return (
    <form onSubmit={handleSubmit} className="w-11/12 md:w-10/12 lg:w-4/12 mx-auto mt-10 flex flex-col gap-5">
      <fieldset className="text-2xl font-bold text-center">Editar tour</fieldset>
      <div className="flex flex-col gap-2">
        <label htmlFor="crucero" className="font-bold">
            Nombre del crucero
        </label>
        <input
          onChange={addData}
          value={form.crucero}
          type="text"
          name="crucero"
          id="crucero"
          className="border rounded-lg p-2"
          placeholder="Ingrese el nombre del crucero"
        />
      </div>
      <div className="flex flex-col gap-2">
        <label htmlFor="categoria" className="font-bold">
            Nombre del categoria
        </label>
        <input
          onChange={addData}
          value={form.categoria}
          type="text"
          name="categoria"
          id="categoria"
          className="border rounded-lg p-2"
          placeholder="Ingrese el nombre de la categoria"
        />
      </div>
      <div className="flex flex-col gap-2">
        <label htmlFor="salida" className="font-bold">
          Salida
        </label>
        <input
          onChange={addData}
          value={form.salida}
          type="date"
          name="salida"
          id="salida"
          className="border rounded-lg p-2"
        />
      </div>
      <div className="flex flex-col gap-2">
        <label htmlFor="finaliza" className="font-bold">
          Finaliza
        </label>
        <input
          onChange={addData}
          value={form.finaliza}
          type="date"
          name="finaliza"
          id="finaliza"
          className="border rounded-lg p-2"
        />
      </div>
      <div className="flex flex-col gap-2">
        <label htmlFor="itinerario" className="font-bold">
            Itinerario
        </label>
        <input
          onChange={addData}
          value={form.itinerario}
          type="text"
          name="itinerario"
          id="itinerario"
          className="border rounded-lg p-2"
          placeholder="Ingrese el itinerario"
        />
      </div>
      <div className="flex flex-col gap-2">
        <label htmlFor="precio" className="font-bold">
          Precio por persona
        </label>
        <input
          onChange={addData}
          value={form.precio}
          type="number"
          name="precio"
          id="precio"
          className="border rounded-lg p-2"
          placeholder="Ingrese el precio"
        />
      </div>
      <button
        type="submit"
        className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center"
      >
        Actualizar
      </button>
    </form>
  );
};

export default Editar;