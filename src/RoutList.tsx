import { useRoutes } from 'react-router-dom';
import { Home } from './pages/Home';
import { About } from './pages/About';
import { AboutItem } from './pages/AboutItem';
import { NotFaund } from './pages/NotFaund';
import { RequiredAuth } from './RequiredAuth';
export const RoutList = () => {
    return useRoutes([
        { path:"/", element: <Home/> },
        { path:"/sobre", element: <RequiredAuth><About/></RequiredAuth> },
        { path:"/sobre/:slug", element: <AboutItem/>},
        { path:"*", element: <NotFaund/> }
    ])

}