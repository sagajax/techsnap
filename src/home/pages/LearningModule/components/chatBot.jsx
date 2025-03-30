import React, { useState, useEffect, useRef } from "react";
import { Send, Reply as ReplyIcon, Forward as ForwardIcon, Pin, Download } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { useSettingStore } from "../utils/store";
import { IoMdClose } from "react-icons/io";
import { RiResetRightFill } from "react-icons/ri";
import { AiOutlineExpand } from "react-icons/ai";

const ReactionPicker = ({ onReact }) => {
  const reactions = ["👍", "❤️", "😊", "🎉", "🤔", "👏"];
  
  return (
    <div className="flex gap-1 p-2">
      {reactions.map((emoji) => (
        <span
          key={emoji}
          onClick={() => onReact(emoji)}
          className="cursor-pointer hover:bg-gray-100 p-1 rounded"
        >
          {emoji}
        </span>
      ))}
    </div>
  );
};

const ChatMessage = ({ message, isCurrentUser }) => {
  const [showReactions, setShowReactions] = useState(false);
  
  const handleReaction = (emoji) => {
    const existingReactions = message.reactions || [];
    const hasReaction = existingReactions.includes(emoji);
    
    if (hasReaction) {
   
      message.reactions = existingReactions.filter(reaction => reaction !== emoji);
    } else {
     
      message.reactions = [...existingReactions, emoji];
    }
    
  
    setShowReactions(prev => !prev);
  };

  return (
    <div className="relative w-full px-2">
      <div className={`flex w-full mb-1 ${isCurrentUser ? "justify-end" : "justify-start"} px-2`}>
        <div className="flex items-center gap-2 text-xs text-muted-foreground ml-8">
          <span className="font-medium">{message.sender === "user" ? "You" : "AI"}</span>
          <span>{new Date(message.timestamp).toLocaleTimeString([], {
            hour: "2-digit",
            minute: "2-digit"
          })}</span>
        </div>
      </div>

      <div className={`flex items-start gap-2 ${isCurrentUser ? "flex-row-reverse" : "flex-row"}`}>
        <Avatar className="w-8 h-8 border border-gray-500 flex-shrink-0">{isCurrentUser ? 
          <AvatarImage src="https://media.istockphoto.com/id/1437816897/photo/business-woman-manager-or-human-resources-portrait-for-career-success-company-we-are-hiring.jpg?s=612x612&w=0&k=20&c=tyLvtzutRh22j9GqSGI33Z4HpIwv9vL_MZw_xOE19NQ=" alt={message.sender} />
         : <AvatarImage src="https://www.shutterstock.com/image-vector/chat-bot-icon-design-robot-600nw-2476207303.jpg" className="object-cover" alt={message.sender} />}</Avatar>

        <div className="relative max-w-2xl group ">
          <Card className={`border-0 overflow-hidden ${
            isCurrentUser 
              ? "bg-blue-500 text-white" 
              : "bg-gray-100"
          } ${
            isCurrentUser
              ? "rounded-t-lg rounded-bl-lg"
              : "rounded-t-lg rounded-br-lg shadow-md"
          }`}>
            <CardContent className={`p-3 space-y-2 ${message.sender === "user" ? "bg-blue-500 text-white" : "bg-white text-gray-500"}`}>
              <div className={`break-words whitespace-pre-wrap `}>
                {message.text}
              </div>
            </CardContent>
          </Card>

          {message.reactions && message.reactions.length > 0 && (
            <div className="flex flex-wrap gap-1 mt-1 z-20">
              {message.reactions.map((reaction, index) => (
                <Badge
                  key={`${reaction}-${index}`}
                  variant="secondary"
                  className="text-xs py-0.5 px-2 cursor-pointer hover:bg-gray-400  bg-gray-200"
                  onClick={() => handleReaction(reaction)}
                >
                  {reaction}
                </Badge>
              ))}
            </div>
          )}

          <div className={`absolute top-0 ${
            isCurrentUser ? "right-full" : "left-full"
          } z-30 opacity-0 group-hover:opacity-100 transition-opacity flex items-center gap-1 mb-1 rounded-full bg-white  shadow-lg border px-2`}
          style={{
            transform: "translateY(-50%)",
            marginLeft: isCurrentUser ? "-8px" : "8px"
          }}>
            <div className="border-r border-gray-500">
              <ReactionPicker onReact={handleReaction} />
            </div>
            <ReplyIcon className="cursor-pointer w-5 h-5 mx-2" />
            <ForwardIcon className="cursor-pointer w-5 h-5 mx-2" />
          </div>
        </div>
      </div>
    </div>
  );
};

const ChatInterface = ({ isLeft, isHeader, onExpand }) => {
  const [messages, setMessages] = useState(() => {
    const saved = localStorage.getItem("chatMessages");
    return saved ? JSON.parse(saved) : [];
  });
  const { isPopupRight, setIsChatOpen } = useSettingStore();
  const [input, setInput] = useState("");
  const messagesEndRef = useRef(null);

  useEffect(() => {
    localStorage.setItem("chatMessages", JSON.stringify(messages));
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!input.trim()) return;

    const newMessage = {
      text: input,
      sender: "user",
      timestamp: new Date().toISOString(),
      reactions: []
    };

    setMessages([...messages, newMessage]);
    setInput("");

    
    setTimeout(() => {
      const aiMessage = {
        text: "This is an AI response",
        sender: "ai",
        timestamp: new Date().toISOString(),
        reactions: []
      };
      setMessages(prev => [...prev, aiMessage]);
    }, 1000);
  };

  return (
    <div className="flex flex-col h-full relative bg-white">
      {isHeader && (
        <div className="flex justify-between w-full items-center bg-[#f6f7f9]">
          <div className="inline-flex p-2 px-5 text-sm">
            Snappie.Ai
          </div>
          <div className="flex items-center justify-center gap-3 mr-2">
            <RiResetRightFill size={16} className="text-gray-500 cursor-pointer" />
            <AiOutlineExpand size={16} className="text-gray-500 cursor-pointer" onClick={onExpand} />
            <button 
              className="flex items-center justify-center p-1 h-full px-3 gap-1 bg-white font-bold text-red-400"
              onClick={() => setIsChatOpen(false)}
            >
              <IoMdClose size={16} className="text-red-400" />
              Close
            </button>
          </div>
        </div>
      )}

      <div className={`flex-1 overflow-y-auto scrollbarhide px-2 py-4 ${isHeader ? "mt-4" : "mt-10"}`}>
        {messages.map((message, index) => (
          <ChatMessage
            key={index}
            message={message}
            isCurrentUser={message.sender === "user"}
          
          />
        ))}
        <div ref={messagesEndRef} />
      </div>

      <div className="border-t p-4">
        <form onSubmit={handleSubmit} className="relative flex items-center">
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Type your message..."
            className="w-full p-2 pr-12 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white"
          />
          <Button
            type="submit"
            size="sm"
            className="absolute right-2 bg-blue-500 hover:bg-blue-600 text-white rounded-md"
          >
            <Send className="w-4 h-4" />
          </Button>
        </form>
      </div>
    </div>
  );
};

export default ChatInterface;