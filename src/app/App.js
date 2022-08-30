import { useState } from "react";
import { Navigate, Route, Routes } from "react-router-dom";

import Header from "../components/Header/Header";
import FriendsList from "../components/Friends/FriendsList";
import ChatroomList from "../components/Rooms/ChatroomList";

export default function App() {
  const [selectedRoomId, setSelectedRoomId] = useState("");

  return (
    <div>
      <Header handleClick={() => setSelectedRoomId("")} />
      <Routes>
        <Route path="/friends" element={<FriendsList selectedRoomId={selectedRoomId} handleClick={(id) => setSelectedRoomId(id)} />} />
        <Route path="/rooms" element={<ChatroomList selectedRoomId={selectedRoomId} handleClick={(id) => setSelectedRoomId(id)} />} />
        <Route path="/" element={<Navigate to="/friends" replace />} />
      </Routes>
    </div>
  );
}

