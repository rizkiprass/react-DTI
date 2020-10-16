import {
  Home,
  AboutMe,
  AcademicBackground,
  Experience,
  Achievement,
  Skills,
  Contact,
  Login,
  ProfileId,
  Profile,
} from '../pages';

const routes = [
  {
    path: '/profile/:profileId',
    component: ProfileId,
    isPublic: false,
  },
  {
    path: '/profile',
    component: Profile,
    isPublic: false,
  },
  {
    path: '/aboutMe',
    component: AboutMe,
    isPublic: true,
  },
  {
    path: '/experience',
    component: Experience,
    isPublic: true,
  },
  {
    path: '/contact',
    component: Contact,
    isPublic: true,
  },
  {
    path: '/home',
    component: Home,
    isPublic: true,
  },
  {
    path: '/login',
    component: Login,
    isPublic: true,
  },
  {
    path: '/academicBackground',
    component: AcademicBackground,
    isPublic: true,
  },
  {
    path: '/achievement',
    component: Achievement,
    isPublic: true,
  },
  {
    path: '/skills',
    component: Skills,
    isPublic: true,
  },
  {
    path: '/',
    component: Home,
    isPublic: true,
  },
];

export default routes;
