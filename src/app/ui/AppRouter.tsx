import React, { lazy, useEffect } from "react";
import {
  Navigate,
  Route,
  Routes,
  useLocation,
  useNavigate,
} from "react-router-dom";
import { useAccount } from "wagmi";

import { routes } from "src/shared/constants/routes";
import { NotFound } from "src/pages/notFound";

const Home = lazy(() => import("src/pages/home"));
const Round = lazy(() => import("src/pages/round"));
const NotAuth = lazy(() => import("src/pages/notAuth"));

export const AppRouter: React.FC = () => {
  const navigate = useNavigate();
  const { pathname } = useLocation();
  const { isConnected } = useAccount();

  useEffect(() => {
    // if (!isConnected) navigate(routes.NotAuth);
  }, [isConnected, navigate, pathname]);

  return (
    <Routes>
      {isConnected ? (
        <>
          <Route path={routes.Home} element={<Home />} />
          <Route path={routes.Round.DynamicId} element={<Round />} />
        </>
      ) : (
        <>
          <Route path={routes.NotAuth} element={<NotAuth />} />
        </>
      )}
      <Route path={"*"} element={<NotFound />} />
    </Routes>
  );
};
