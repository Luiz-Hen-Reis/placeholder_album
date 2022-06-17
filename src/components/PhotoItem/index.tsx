import { Photo } from "../../types";
import * as C from './style';

type Props = {
    item: Photo | null;
}

export const PhotoItem = ({ item }: Props) => {
    return (
        <div>
            <C.Img src={item?.url} alt={item?.title} />
        </div>
    );
}