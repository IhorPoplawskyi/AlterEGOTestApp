import { FC } from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

import { Header } from "./components";
import { HomePage, ProfilePage, NewsPage } from "./pages";

import { PrivateRoute } from "./utils/PrivateRoute";

export const App: FC = (): JSX.Element => {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="*" element={<Navigate to="/" />} />
        <Route path="/" element={<HomePage />} />
        <Route
          path="/profile"
          element={<PrivateRoute component={ProfilePage} />}
        />
        <Route path="/news" element={<NewsPage />} />
      </Routes>
    </BrowserRouter>
  );
};
