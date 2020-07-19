import { lazy } from 'react';

const HomePage = lazy(() => import('../views/HomePage/HomePage'));
const MoviesPage = lazy(() => import('../views/MoviesPage/MoviesPage'));
const MovieDetailsPage = lazy(() =>
  import('../views/MovieDetailsPage/MovieDetailsPage'),
);
const Cast = lazy(() => import('../views/Cast/Cast'));
const Reviews = lazy(() => import('../views/Reviews/Reviews'));
const NotFound = lazy(() => import('../views/NotFound/NotFound'));

export default {
  HOME_PAGE: {
    path: '/',
    component: HomePage,
  },
  MOVIE_DETAILS_PAGE: {
    path: '/movies/:movieId',
    component: MovieDetailsPage,
  },
  MOVIES_PAGE: {
    path: '/movies',
    component: MoviesPage,
  },
  CAST: {
    path: '/movies/:movieId/cast',
    component: Cast,
  },
  REVIEWS: {
    path: '/movies/:movieId/reviews',
    component: Reviews,
  },
  NOTFOUND: {
    component: NotFound,
  },
};
