import Logup from "./pages/Logup";
import Login from "./pages/Login";
import Home from "./pages/Home";
import Board from "./pages/Board";
import Card from "./pages/Card";
import NotFound from "./pages/NotFound";

export const navRoutes = {
  logup: "/logup",
  login: "/login",
  home: "/",
  board: "/board",
  card: "/board/:cardId",
  notFound: "*",
};

export const routes = [
  {
    path: navRoutes.logup,
    component: <Logup />,
  },
  {
    path: navRoutes.login,
    component: <Login />,
  },
  {
    path: navRoutes.home,
    component: <Home />,
  },
  {
    path: navRoutes.board,
    component: <Board />,
  },
  {
    path: navRoutes.card,
    component: <Card />,
  },
  {
    path: navRoutes.notFound,
    component: <NotFound />,
  },
];