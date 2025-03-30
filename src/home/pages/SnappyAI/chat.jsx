import { useParams } from "react-router-dom";
import ChatInterface from "./components/chatBot";
import { recents } from "./components/sidebar";

export default function Chat() {
    const {id} = useParams();
    console.log( typeof id);
    const chat = recents.find((chat) => chat.id === parseInt(id));
   
  return (
    <ChatInterface data={chat} />
  );
}