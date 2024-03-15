import Navigate from "../Navigation/Nav";
import { Outlet } from "react-router-dom";
const HomePage = () => {
  return (
    <>
      <Navigate />
      <div className="container">
        <Outlet />
      </div>
    </>
  );
};
export default HomePage;
