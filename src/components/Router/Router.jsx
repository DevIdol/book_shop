import { Routes, Route } from "react-router-dom";
import NotFound from "../NotFound/NotFound";

const Router = () => {
  return (
    <Routes>
      <Route />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};

export default Router;
