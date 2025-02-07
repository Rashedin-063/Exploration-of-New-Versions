import { type RouteConfig, index, layout, prefix, route } from '@react-router/dev/routes';

export default [
  index('routes/home.tsx'),
  ...prefix('ru', [
  route('/about', 'routes/about.tsx'),
    route('/post/:postId', 'routes/post.tsx'),
  ]),

  // Nested routes
  route('dashboard', 'routes/Dashboard.tsx', [
    route('user', 'routes/UserInfo.tsx'),
    route('finances', 'routes/Finances.tsx'),
  ])

  // layout
  // layout('./routes/Dashboard.tsx', [
  //   route('user', 'routes/UserInfo.tsx'),
  //   route('finances', 'routes/Finances.tsx'),
  // ])

  // prefix
  // layout('./routes/Dashboard.tsx', [
  //   ...prefix('user', [
  //     route('info', 'routes/UserInfo.tsx'),
  //     route('finances', 'routes/Finances.tsx'),
  //   ])
  // ]),
] satisfies RouteConfig;
