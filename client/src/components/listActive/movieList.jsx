import React from 'react';
import styled from 'styled-components';

import { getMovieListData } from '../../lib/api/getActive/movie';

const movieList = () => {
    return (
        <MovieListRoot>
            <TypeName>電影</TypeName>
        </MovieListRoot>
    );
};

export default movieList;

const MovieListRoot = styled.div`
    max-width: 720px;
`;
const TypeName = styled.div`
    height: 300px;
`;
