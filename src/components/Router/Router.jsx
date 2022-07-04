import { Routes, Route } from "react-router-dom";
import Home from "../Home/Home";
import MStory from "../Home/Books/MyanmarBooks/MStory";
import NotFound from "../NotFound/NotFound";
import SideBar from "../Home/SideBar/SideBar";
import AllBook from "../Home/Books/AllBook";

const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="MStories" element={<SideBar />}>
        <Route index element={<AllBook />} />
      </Route>
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};

export default Router;
