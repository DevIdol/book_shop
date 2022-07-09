import { Routes, Route } from "react-router-dom";
import Home from "../Home/Home";
import NotFound from "../NotFound/NotFound";
import MStory from "../Home/Books/MyanmarBooks/MStory/MStory";
import MNovel from "../Home/Books/MyanmarBooks/MNovel/MNovel";
import MTech from "../Home/Books/MyanmarBooks/MTechnology/MTech";
import MReligious from "../Home/Books/MyanmarBooks/MReligious/MReligious";

const Router = () => {
  return (
    <Routes>
      <Route path="/book_shop" element={<Home />} />
      <Route path="Myanmar_Stories" element={<MStory />} />
      <Route path="Myanmar_Novels" element={<MNovel />} />
      <Route path="Myanmar_Technologies" element={<MTech />} />
      <Route path="Myanmar_Religious" element={<MReligious />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};

export default Router;
