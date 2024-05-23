import { useParams, useNavigate } from "react-router-dom";

export const AboutItem = () => {
    const params = useParams();
    const navigate = useNavigate();
    const hundleBackButton = () => {
        navigate(-1);
    }
    const hundleHomeClick =() => {
        navigate('/');
    }
    return(
        <div>
            Pagina Sobre {params.slug?.toUpperCase()} ({params.slug?.length} letras)
            <hr/>
            <button onClick={hundleBackButton}>Voltar</button>

            <button onClick={hundleHomeClick}>Home</button>
        </div>
    )
}