import { createBrowserRouter } from 'react-router-dom';
import Layout from '../layout/Layout';
import {App} from '../App';

export const router = createBrowserRouter([
    {
        path: "/",
        element: <Layout />,
        children:[
            {
                index:true,
                element: <App />,
            },
            {
                
                path: "contacts/:contactId",
            }
        ]
      },
]);