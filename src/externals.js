// Navigation Component as per the spec
export { default as Users } from './containers/Users';
export { default as Pizza } from './containers/Pizza';

// Mandatory:Routes which need to share in Micro apps. This will use by base app to load routes based on browser url.
export { default as Routes } from './ShareRouter';