import { useParams } from "react-router-dom";
import Header from "../components/Header";
import Sidebar from "../components/Sidebar";
import Video from "../components/Video";

const Event = () => {
  const { slug } = useParams<{ slug: string }>();
  return (
    <>
      <Header />
      <main className="flex">
        {slug ? <Video lessonSlug={slug} /> : <div className="flex-1" />}
        <Sidebar />
      </main>
    </>
  );
};

export default Event;
