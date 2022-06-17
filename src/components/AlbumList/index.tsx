import React from "react";
import { Album } from "../../types";
import * as C from './styles';
import { Link } from 'react-router-dom';

type Props = {
    data: Album
}

export const AlbumList = ({ data }: Props) => {
    const goToId = `album/${data.id}/photos`;   

    return (
        <Link to={goToId}>
        <C.AlbumItem>
            <span>{data.title}</span>
        </C.AlbumItem>
        </Link>
    )
}