import SearchBar from "../sidebar/SearchBar";
import ChatList from "../sidebar/ChatList";

const Sidebar = () => {
  return (
    <div className="w-1/3 bg-white border-r p-3">
      <SearchBar />
      <ChatList />
    </div>
  );
};

export default Sidebar;