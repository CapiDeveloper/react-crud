import { Link } from "react-router-dom"
import withReactContent from 'sweetalert2-react-content'
import Swal from 'sweetalert2'

const ItemMovil = ({id,imagen,crucero,salida,llegada,itinerario,precio}) => {

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
    <li className="p-2 border-2 rounded-lg">
        <p className="font-bold text-center my-2">{crucero}</p>
        <div className="">
            <img className="rounded-lg mx-auto mb-2" width={150} src={imagen} alt="imagen" />
            <div>
                <p className="font-bold text-sm text-blue-900">Salida: <span className="font-normal text-black">{salida}</span></p>
                <p className="font-bold text-sm text-blue-900">Finaliza: <span className="font-normal text-black">{llegada}</span></p>
                <p className="font-bold text-sm text-blue-900">Itinerario: <span className="font-normal text-black">{itinerario}</span></p>
                <p className="font-bold text-sm text-blue-900">Precio Neto: <span className="font-normal text-black">${precio}</span></p>
                <p className="font-bold text-sm text-blue-900">Precio Neto + N&G: <span className="font-normal text-black">${precio+200}</span></p>
                <p className="font-bold text-sm text-blue-900">Precio Neto + N&G + WeTravel: <span className="font-normal text-black">${((precio+200)*(1+4.9/100)).toFixed(2)}</span></p>
                <p className="font-bold text-sm text-blue-900">Precio Final: <span className="font-normal text-black">${(((precio+200)*(1+4.9/100))+15).toFixed(2)}</span></p>
            </div>
        </div>
        <div className="mt-3 flex justify-end gap-2">
            <Link to={`/editar/${id}`} className="bg-blue-600 hover:bg-blue-700 text-white font-bold p-2 rounded">Editar</Link>
            <button onClick={()=>onDelete(id)} className="bg-red-600 hover:bg-red-700 text-white font-bold p-2 rounded">Eliminar</button>
        </div>
    </li>
  )
}

export default ItemMovil