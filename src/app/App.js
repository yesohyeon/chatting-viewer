import { Navigate, Route, Routes } from "react-router-dom";

import Header from "../components/Header/Header";
import FriendsList from "../components/Friends/FriendsList";
import ChatroomList from "../components/Rooms/ChatroomList";
import Chatroom from "../components/Rooms/Chatroom";

export default function App() {
  return (
    <div>
      <Header />
      <Routes>
        <Route path="/friends" element={<FriendsList />} />
        <Route path="/rooms" element={<ChatroomList />} />
        <Route path="/rooms/:friendId" element={<Chatroom />} />
        <Route paht="/" element={<Navigate to="/friends" replace />} />
      </Routes>
    </div>
  );
}

