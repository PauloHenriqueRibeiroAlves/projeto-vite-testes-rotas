import { Link, useSearchParams } from 'react-router-dom';

export const About = () => {
    const [searchParams, setSearchParams] = useSearchParams();
    //order: string ou order: 'Asc' | 'Desc'
    const setOrder = (order: 'Asc' | 'Desc') => {
        searchParams.set('order', order);
        setSearchParams(searchParams); 
    }
    return(
        <div>
            Filtro: {searchParams.get('filter')}
            Ordem: {searchParams.get('ordem')}
            <hr/>
            <button onClick={() =>setOrder('Asc')}>Asc</button>
            <button onClick={() =>setOrder('Desc')}>Desc</button>
            <hr/>
            Pagina Sobre:
            <ul>
                <li><Link to="/sobre/Paulo">Paulo</Link></li>
                <li><Link to={"/sobre/Allan"}>Allan</Link></li>
            </ul>
        </div>
    )
}