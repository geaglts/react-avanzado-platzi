import React from 'react';
import { useMutation } from '@apollo/client';
import { Link } from '@reach/router';

import { FavButton } from '../FavButton';

import { ImgWrapper, Article } from './styles';
import { useNearScreen } from '../../hooks/useNearScreen';

import { LIKE_PHOTO } from '../../graphql/mutations';

const DEFAULT_IMAGE =
  'https://images.unsplash.com/photo-1518791841217-8f162f1e1131?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60';

export const PhotoCard = ({ id, liked, likes = 0, src = DEFAULT_IMAGE }) => {
  const [show, element] = useNearScreen();
  const [likePhoto] = useMutation(LIKE_PHOTO);

  const handleFavClick = async () => {
    await likePhoto({ variables: { input: { id } } });
  };

  return (
    <Article ref={element}>
      {show && (
        <>
          <Link to={`/details/${id}`}>
            <ImgWrapper>
              <img src={src} />
            </ImgWrapper>
          </Link>
          <FavButton liked={liked} likes={likes} onClick={handleFavClick} />
        </>
      )}
    </Article>
  );
};
