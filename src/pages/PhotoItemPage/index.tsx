import { useEffect, useState } from "react"
import { useNavigate, useParams } from "react-router-dom";
import * as C from './styles';
import { API } from "../../API";
import { PhotoItem } from "../../components/PhotoItem";
import { Photo } from "../../types";

export const PhotoItemPage = () => {
    const [loading, setLoading] = useState(false);
    const [photo, setPhoto] = useState<Photo | null>(null);
    const params = useParams();
    const navigate = useNavigate();

    useEffect(()=> {
        getPhoto();
    }, []);

    const getPhoto = async () => {
        setLoading(true);
        setPhoto(await API.getPhoto(params.id?.toString()));
        setLoading(false);
    } 

    return (
        <div>
            {loading &&
            <div>Carregando...</div>
            }

            {!loading &&
                <>

                <button onClick={() => navigate(-1)}>Voltar</button>
                <C.Container>
                    {photo?.title};
                </C.Container>  
                 <PhotoItem item={photo} />
                </>
            }
        </div>
    )
}