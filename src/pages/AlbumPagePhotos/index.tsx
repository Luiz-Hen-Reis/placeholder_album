import { useEffect, useState } from "react";
import * as C from './style';
import { Link, useNavigate, useParams } from "react-router-dom";
import { API } from "../../API";
import { Album, Photo } from "../../types";
import { PhotoItem } from "../../components/PhotoItem";

export const AlbumPagePhotos = () => {
  const [album, setAlbum] = useState<Album>();
  const [photos, setPhotos] = useState<Photo[]>([]);
  const [loading, setLoading] = useState(false);
  const params = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    getAlbumAndPhotosFromAlbums();
  }, []);

  const getAlbumAndPhotosFromAlbums = async () => {
    setLoading(true);
    setAlbum(await API.getAlbum(params.id?.toString()));
    setPhotos(await API.getPhotos(params.id?.toString()));
    setLoading(false);
  }


  return (
        <div>
          {loading &&
            <div>Carregando ...</div>
          }

          <button onClick={() => navigate('/')}>Voltar</button>

          {!loading &&
          <>
            <C.Title>
              {album?.title}
            </C.Title>
          
            <C.Container>
              {photos.map((item) => (
                <Link to={`/photos/${item.id}`}>
                  <PhotoItem item={item} />
                </Link>
              ))}
            </C.Container>
          </>
          }
        </div>
  )
};
