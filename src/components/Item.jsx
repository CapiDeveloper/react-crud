import { Link } from "react-router-dom"
import withReactContent from "sweetalert2-react-content";
import Swal from 'sweetalert2'

const Item = ({id,imagen,crucero,salida,llegada,itinerario,precio,formulario}) => {

    const onDelete = (tourId)=>{
        withReactContent(Swal).fire({
            title: "Estas seguro?",
            text: "¡No podrás revertir esto!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Si, eliminalo!"
          }).then((result) => {
            if (result.isConfirmed) {
              Swal.fire({
                title: "Eliminado!",
                text: "El tour ha sido eliminado.",
                icon: "success"
              });
            }
          });
    }

  return (
    <tr className="bg-white border-b  hover:bg-gray-50">
        <th scope="row" className="flex flex-col xl:flex-row items-center gap-3  px-6 py-4 font-medium text-blue-900 whitespace-nowrap">
            <img width={150} src={imagen} className="rounded-lg" />
            <a href="#" className="flex flex-col items-center mt-2 gap-2">
                {crucero}
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z" />
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
            </a>
        </th>
        <td className="px-6 py-4">
            {salida}
        </td>
        <td className="px-6 py-4">
            {llegada}
        </td>
        <td className="px-6 py-4">
            {itinerario}
        </td>
        <td className="px-6 py-4">
          <p className="font-bold text-sm text-blue-900">Precio Neto: <span className="font-normal text-black">${precio}</span></p>
          <p className="font-bold text-sm text-blue-900">Precio Neto + N&G: <span className="font-normal text-black">${precio+200}</span></p>
          <p className="font-bold text-sm text-blue-900">Precio Neto + N&G + WeTravel: <span className="font-normal text-black">${((precio+200)*(1+4.9/100)).toFixed(2)}</span></p>
          <p className="font-bold text-sm text-blue-900">Precio Final: <span className="font-normal text-black">${(((precio+200)*(1+4.9/100))+15).toFixed(2)}</span></p>
        </td>
        <td className="px-6 py-4 flex gap-2">
            <Link to={`/editar/${id}`} className="bg-blue-600 hover:bg-blue-700 text-white font-bold p-2 rounded">Editar</Link>
            <button onClick={()=>onDelete(id)} className="bg-red-600 hover:bg-red-700 text-white font-bold p-2 rounded">Eliminar</button>
        </td>
    </tr>
  )
}

export default Item