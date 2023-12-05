import React from "react";
import { IRoutes } from "../App";

interface IProps {
  Routes: Array<IRoutes>;
}

const Home: React.FC<IProps> = (props) => {
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
            <tr key={index}>
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
