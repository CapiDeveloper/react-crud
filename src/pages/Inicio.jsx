import { useState } from "react"
import Item from "../components/Item"
import ItemMovil from "../components/ItemMovil"
import { data } from "../data/tours"

export const Inicio = () => {  
 const [tours, setTours] = useState(data);
 const onChangeData = (inputText)=>{
    let word = inputText.toLowerCase()
    let nuevosTours = data;
    if(word.trim() != ''){
        nuevosTours = tours.filter((item)=>{
            
            if(item.crucero.toLowerCase().includes(word)){
                return item;
            }
        })
    }
    
    setTours(nuevosTours)
 }
  return (
    <>
      <div className=" w-11/12 mx-auto relative overflow-x-auto mt-10">
          <div className="pb-4 bg-white">
              <label htmlFor="table-search" className="sr-only">Buscar</label>
              <div className="relative mt-1 flex items-center">
                  <div className="absolute inset-y-0 rtl:inset-r-0 start-0 flex items-center ps-3 pointer-events-none">
                      <svg className="w-4 h-4 text-gray-500" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                          <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"/>
                      </svg>
                  </div>
                  <input onChange={(e)=>onChangeData(e.target.value)} type="search" id="table-search" className="flex justify-center items-center p-2 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg w-80 bg-gray-50 focus:ring-blue-500 focus:border-blue-500" placeholder="Buscar crucero" />
              </div>
          </div>
          <table className="hidden lg:inline-table w-full text-sm text-left rtl:text-right text-gray-500">
              <thead className="text-xs text-gray-700 uppercase bg-gray-50">
                  <tr>
                      <th scope="col" className="font-bold text-base px-6 py-3">
                          Tour
                      </th>
                      <th scope="col" className="font-bold text-base px-6 py-3">
                          Empieza
                      </th>
                      <th scope="col" className="font-bold text-base px-6 py-3">
                          Finaliza
                      </th>
                      <th scope="col" className="font-bold text-base px-6 py-3">
                          Itinerario
                      </th>
                      <th scope="col" className="font-bold text-base px-6 py-3">
                          Precio
                      </th>
                      <th scope="col" className="font-bold text-base px-6 py-3">
                          Action
                      </th>
                  </tr>
              </thead>
              <tbody>
                {
                    tours?.map((item,index)=>(
                        <Item key={index} {...item} />
                    ))
                }
              </tbody>
          </table>
          <ul className="grid gap-5 lg:hidden mb-10">
            {
                tours?.map((item,index)=>(
                    <ItemMovil key={index} {...item} />
                ))
            }
          </ul>
      </div>

    </>
  )
}