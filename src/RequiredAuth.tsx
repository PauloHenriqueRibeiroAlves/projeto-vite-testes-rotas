import { useNavigate } from "react-router-dom";

type Props = {
    children: JSX.Element
}

export const RequiredAuth = ({children}: Props) => {
    const navigate = useNavigate();
    const isAuth = true;
    if(isAuth) {
        return children;
    }else {
        navigate('/NotFaund');
        return null;
    }
}