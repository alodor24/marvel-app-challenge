import { createBrowserRouter } from 'react-router-dom';
import CharacterDetail from '../pages/CharacterDetail';
import Characters from '../pages/Characters';
import ComicDetail from '../pages/ComicDetail';
import Comics from '../pages/Comics';
import Home from '../pages/Home';
import NotFound from '../pages/NotFound';

export const router = createBrowserRouter([
  {
    index: true,
    element: <Home />,
    errorElement: <NotFound />,
  },
  {
    path: '/characters',
    element: <Characters />,
  },
  {
    path: '/characters/:characterId',
    element: <CharacterDetail />,
  },
  {
    path: '/comics',
    element: <Comics />,
  },
  {
    path: '/comics/:comicId',
    element: <ComicDetail />,
  },
]);
