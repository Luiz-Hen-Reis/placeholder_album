import { useEffect, useState } from "react";
import { API } from "../../API";
import { Album } from "../../types";
import * as C from "../../components/AlbumList/styles";
import { AlbumList } from "../../components/AlbumList";

export const MainPage = () => {
  const [loading, setLoading] = useState(false);
  const [albuns, setAlbuns] = useState<Album[]>([]);

  useEffect(() => {
    loadAlbums();
  }, []);

  const loadAlbums = async () => {
    setLoading(true);
    setAlbuns(await API.getAlbunsFromAPI());
    setLoading(false);   
  };

  return (
    
    <div>
        {loading && <div>carregando...</div>}
        <>
        {albuns.map((item, index) => (
          <div key={index}>
            <AlbumList data={item} />
          </div>
        ))}
        </>
    </div>  
  );
};
