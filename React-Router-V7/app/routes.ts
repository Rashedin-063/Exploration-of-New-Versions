import { type RouteConfig, index, layout, route } from '@react-router/dev/routes';

export default [
  index('routes/home.tsx'),
  route('/about', 'routes/about.tsx'),
  route('/post/:postId', 'routes/post.tsx'),

  // Nested routes
  route('dashboard', 'routes/Dashboard.tsx', [
    route('user', 'routes/UserInfo.tsx'),
    route('finances', 'routes/Finances.tsx'),
  ])
 
] satisfies RouteConfig;
