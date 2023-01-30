import { Link, useRouteError } from "react-router-dom";
import Layout from "../../components/Layout";

const NotFound = () => {
  const error: any = useRouteError();

  return (
    <Layout>
      <h1>404</h1>
      <p>Page not found</p>
      <p>{error.statusText || error.message}</p>
      <Link to="/">Volver a home</Link>
    </Layout>
  );
};

export default NotFound;
