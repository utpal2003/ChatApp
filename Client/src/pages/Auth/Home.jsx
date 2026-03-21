import Sidebar from "../../components/layout/Sidebar";
import ChatLayout from "../../components/layout/ChatLayout";

const Home = () => {
  return (
    <div className="flex h-screen">
      <Sidebar />
      <ChatLayout />
    </div>
  );
};

export default Home;