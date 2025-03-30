import React, { useState, useEffect, useRef } from "react";
import { Send } from "lucide-react";
import { RiResetRightFill } from "react-icons/ri";
import { AiOutlineExpand } from "react-icons/ai";
import { IoMdClose } from "react-icons/io";
import { Avatar, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { IoChatbubblesOutline, IoCopyOutline } from "react-icons/io5";
import { HiOutlineSpeakerWave } from "react-icons/hi2";
import { BsHandThumbsDown, BsHandThumbsUp } from "react-icons/bs";

const ChatMessage = ({ message, isCurrentUser }) => {
  return (
    <div className="relative mb-4">
      <div
        className={`flex p-4 rounded-xl relative font-semibold items-start group gap-2 
          ${
            isCurrentUser
              ? "bg-[#f3f3f3] ml-auto dark:bg-[#1f1e1d] w-fit text-gray-800  dark:text-[#cbcac5]"
              : " dark:bg-[#383836] text-gray-800 dark:text-[#cbcac5]"
          }`}
      >
        {/* {isCurrentUser && (
          <Avatar className="w-8 h-8 border border-gray-300 dark:border-gray-500 flex-shrink-0">
            <AvatarImage
              src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png"
              alt="User"
            />
          </Avatar>
        )} */}
        {message}
        {!isCurrentUser && 
        <div className="absolute -bottom-2  gap-2 left-4 group-hover:flex hidden"><HiOutlineSpeakerWave /> <IoCopyOutline /> <BsHandThumbsUp /> <BsHandThumbsDown /></div>}
      </div>
    </div>
  );
};

const ChatInterface = ({ data }) => {
  const [input, setInput] = useState("");
  const messagesEndRef = useRef(null);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [data]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!input.trim()) return;
    if (data) {
      data.humanQuestions.push(input);
      data.aiResponses.push("Processing...");
    }
    setInput("");
  };

  const getChatMessages = () => {
    if (!data) return [];

    const messages = [];
    const { humanQuestions = [], aiResponses = [] } = data;
    console.log(humanQuestions, aiResponses);

    const maxLength = Math.max(humanQuestions.length, aiResponses.length);

    for (let i = 0; i < maxLength; i++) {
      if (humanQuestions[i])
        messages.push({ text: humanQuestions[i], isUser: true });
      if (aiResponses[i])
        messages.push({ text: aiResponses[i], isUser: false });
    }

    return messages;
  };

  return (
    <div className="flex flex-col w-[96%] md:w-[80%] h-full items-center  relative">
      <div className="flex gap-2 text-lg font-semibold sticky top-0 pt-4 text-gray-800 dark:text-[#f5f4ef]">
        <IoChatbubblesOutline />
        {data.title}
      </div>

      <div className="flex flex-col overflow-y-auto w-[96%] h-[86%] scrollbarhide mt-4">
        {getChatMessages().map((message, index) => (
          <ChatMessage
            key={index}
            message={message.text}
            isCurrentUser={message.isUser}
          />
        ))}
        <div ref={messagesEndRef} />
      </div>

      <div className="h-14 md:h-20 w-full absolute bottom-4   ">
        <form onSubmit={handleSubmit} className="relative flex items-center">
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Reply to SnappieAI..."
            className="w-full p-2 pr-12 h-20 rounded-2xl bg-gray-200 dark:bg-[#3d3d3a] 
              text-gray-800 dark:text-white placeholder-gray-500 dark:placeholder-gray-400
              focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <Button
            type="submit"
            size="sm"
            className="absolute right-2 text-white dark:text-white rounded-md 
              bg-gray-500 dark:bg-blue-600 hover:bg-gray-600 dark:hover:bg-blue-700"
          >
            <Send className="w-4 h-4" />
          </Button>
        </form>
      </div>
    </div>
  );
};

export default ChatInterface;
