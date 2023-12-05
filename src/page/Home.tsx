import React from "react";
import { IRoutes } from "../App";
import { useNavigate } from "react-router-dom";

interface IProps {
  Routes: Array<IRoutes>;
}

const Home: React.FC<IProps> = (props) => {
  const navigate = useNavigate();
  const handleTrClick = (route: IRoutes): void => {
    alert(route.path);
    navigate(route.path);
  };

  return (
    <>
      <table>
        <thead>
          <tr>
            <th>Hook</th>
            <th>Description</th>
          </tr>
        </thead>
        <tbody>
          {props.Routes.slice(1).map((route, index) => (
            <tr key={index} onClick={() => handleTrClick(route)}>
              <td>{route.name}</td>
              <td>{route.description}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
};
export default Home;
