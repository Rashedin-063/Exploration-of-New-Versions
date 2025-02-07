import { type RouteConfig, index, prefix, route } from "@react-router/dev/routes";

export default [
  index("routes/home.tsx"),
  route('/about', './routes/About.jsx'),
  ...prefix('countries', [
    index( './routes/Countries.jsx'),
    route(':countryName', './routes/Country.jsx')
 ])
] satisfies RouteConfig;
