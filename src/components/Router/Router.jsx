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
      <Route path="/" element={<Home />} />
      <Route path="MStories" element={<MStory />} />
      <Route path="MNovels" element={<MNovel />} />
      <Route path="MTechnologies" element={<MTech />} />
      <Route path="MReligious" element={<MReligious />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};

export default Router;
