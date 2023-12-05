import { BrowserRouter, Route, Routes } from "react-router-dom";
import UseArrayTest from "./page/hookTest/UseArrayTest";
import Home from "./page/Home";

export interface IRoutes {
  name: string;
  path: string;
  description?: string;
  component: () => React.ReactNode;
}

const useArrayArr = [
  { id: 1, name: "test1" },
  { id: 2, name: "test2" },
  { id: 3, name: "test3" },
  { id: 4, name: "test4" },
  { id: 5, name: "test5" },
  { id: 6, name: "test6" },
];

const RouteList: Array<IRoutes> = [
  {
    name: "Home",
    path: "/",
    component: () => <Home Routes={RouteList} />,
  },
  {
    name: "UseArrayTest",
    path: "/useArrayTest",
    component: () => <UseArrayTest arr={useArrayArr} />,
  },
];

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          {RouteList.map((route, index) => (
            <Route key={index} path={route.path} element={route.component()} />
          ))}
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
