import { Routes, Route } from "react-router-dom";
import Home from "../components/Home/Home";
import NotFound from "../NotFound/NotFound";
import MStory from "../components/Home/Books/MyanmarBooks/MStory/MStory";
import MNovel from "../components/Home/Books/MyanmarBooks/MNovel/MNovel";
import MTech from "../components/Home/Books/MyanmarBooks/MTechnology/MTech";
import MReligious from "../components/Home/Books/MyanmarBooks/MReligious/MReligious";
import ViewBooks from "../components/Home/Books/ViewBooks";
import AllMyaBook from "../components/Home/Books/MyanmarBooks/AllMyaBook";

const Router = () => {
  return (
    <Routes>
      <Route path="/book_shop" element={<Home />} />
      <Route path="/book_shop/myanmar_books" element={<AllMyaBook />} />
      <Route path="/book_shop/view_book" element={<ViewBooks/>} />
      <Route path="/book_shop/myanmar_stories" element={<MStory />} />
      <Route path="/book_shop/myanmar_novels" element={<MNovel />} />
      <Route path="/book_shop/myanmar_technologies" element={<MTech />} />
      <Route path="/book_shop/myanmar_religious" element={<MReligious />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};

export default Router;
