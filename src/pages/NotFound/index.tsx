import { useNavigate } from "react-router-dom";
import * as C from './styles';

export const NotFound = () => {
    const navigate = useNavigate();

    return (
        <C.Container>
            <button onClick={() => navigate('/')}>Voltar</button>

            <span>Página não encontrada!</span>
        </C.Container>
    );
}