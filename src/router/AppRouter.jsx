import { createBrowserRouter } from 'react-router-dom';
import Layout from '../layout/Layout';
import { Inicio } from '../pages/inicio';
import Crear from '../pages/Crear';
import Editar from '../pages/Editar';

export const router = createBrowserRouter([
    {
        path: "/",
        element: <Layout />,
        children:[
            {
                index:true,
                element: <Inicio />,
            },
            {
                path:'crear',
                element:<Crear />
            },
            {
                
                path: "editar/:id",
                element:<Editar />
            }
        ]
      },
]);