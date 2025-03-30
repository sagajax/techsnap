import React, { useState, useEffect, useRef, useCallback } from "react";
import { useParams, useNavigate, useLocation } from "react-router-dom";
import ChatHeader from "./ChatComp/Header";
import MessageInput from "./ChatComp/MessageInput";
import Message from "./ChatComp/Message";
import ReactionMenu from "./ChatComp/ReactionMenu";
import ShareModal from "./ChatComp/Share";
import ReplyPreview from "./ChatComp/ReplyPreview";
import ScrollToBottomButton from "./ChatComp/Scroll";
import { useLongPress } from "./Hooks/useLongPress";
import img1 from "../../assets/man1.jpg";
import img2 from "../../assets/man2.jpg";
import img3 from "../../assets/man3.jpg";
import img4 from "../../assets/women1.jpg";
import { ChevronDownIcon } from "lucide-react";
import PinHeader from "./ChatComp/PinHeader";
import PinMessages from "./ChatComp/PinMessages";
import Day from "../ChatComps/Day";

const contacts = [
  {
    id: 1,
    name: "Vignesh",
    src: img1,
    isActive: true,
    lastMessage: "this message is redirected from user",
    lastSeen: "1m",
  },
  {
    id: 2,
    name: "John",
    src: img2,
    isActive: false,
    lastMessage: "Hey, how are you?",
    lastSeen: "5m",
  },
  {
    id: 3,
    name: "Alice",
    src: img3,
    isActive: true,
    lastMessage: "Can we reschedule our meeting?",
    lastSeen: "10m",
  },
  {
    id: 4,
    name: "Bob",
    src: img4,
    isActive: true,
    lastMessage: "Just sent you the files.",
    lastSeen: "15m",
  },
  {
    id: 5,
    name: "Charlie",
    src: img1,
    isActive: false,
    lastMessage: "Thanks for your help!",
    lastSeen: "20m",
  },
  {
    id: 6,
    name: "David",
    src: img2,
    isActive: true,
    lastMessage: "Let's catch up soon.",
    lastSeen: "25m",
  },
  {
    id: 7,
    name: "Eva",
    src: img1,
    isActive: true,
    lastMessage: "Did you get my email?",
    lastSeen: "30m",
  },
  {
    id: 8,
    name: "Frank",
    src: img3,
    isActive: false,
    lastMessage: "Looking forward to our next project.",
    lastSeen: "35m",
  },
  {
    id: 9,
    name: "Grace",
    src: img1,
    isActive: true,
    lastMessage: "Great job on the presentation!",
    lastSeen: "40m",
  },
  {
    id: 10,
    name: "Hank",
    src: img2,
    isActive: false,
    lastMessage: "I'm running late, see you soon.",
    lastSeen: "45m",
  },
  {
    id: 11,
    name: "Ivy",
    src: img4,
    isActive: true,
    lastMessage: "Let me know if you need anything.",
    lastSeen: "50m",
  },
  {
    id: 12,
    name: "Jack",
    src: img2,
    isActive: true,
    lastMessage: "Have a nice weekend!",
    lastSeen: "55m",
  },
  {
    id: 13,
    name: "Kara",
    src: img1,
    isActive: false,
    lastMessage: "Can you review this document?",
    lastSeen: "1h",
  },
  {
    id: 14,
    name: "Leo",
    src: img4,
    isActive: true,
    lastMessage: "I'll call you later.",
    lastSeen: "1h",
  },
  {
    id: 15,
    name: "Mona",
    src: img3,
    isActive: true,
    lastMessage: "Don't forget the meeting at 3 PM.",
    lastSeen: "1h 5m",
  },
  {
    id: 16,
    name: "Nina",
    src: img2,
    isActive: false,
    lastMessage: "Good luck with your exam!",
    lastSeen: "1h 10m",
  },
  {
    id: 17,
    name: "Oscar",
    src: img4,
    isActive: true,
    lastMessage: "Thanks for the update.",
    lastSeen: "1h 15m",
  },
  {
    id: 18,
    name: "Paul",
    src: img2,
    isActive: true,
    lastMessage: "Can you send me the details?",
    lastSeen: "1h 20m",
  },
  {
    id: 19,
    name: "Quinn",
    src: img3,
    isActive: false,
    lastMessage: "Let's schedule a call.",
    lastSeen: "1h 25m",
  },
  {
    id: 20,
    name: "Rita",
    src: img2,
    isActive: true,
    lastMessage: "I'll get back to you soon.",
    lastSeen: "1h 30m",
  },
];

const dummyMessages = [
  {
    id: 1,
    sender: "Saketh",
    content: "Hello everyone!",
    timestamp: "2024-08-17T10:00:00Z",
    isPinned : false
  },
  {
    id: 2,
    sender: "Yaswanth",
    content: "Hi there!",
    timestamp: "2024-08-17T10:01:00Z",
    isPinned : false
  },
  {
    id: 3,
    sender: "You",
    content: "Good morning!",
    timestamp: "2024-08-17T10:02:00Z",
    isPinned : false
  },
  {
    id: 4,
    sender: "Tanvi",
    content: "How's everyone doing?",
    timestamp: "2024-08-17T10:03:00Z",
    isPinned : false
  },
  {
    id: 5,
    sender: "Saketh",
    content: "Check out this cool website: https://www.example.com",
    timestamp: "2024-08-17T10:05:00Z",
    isPinned : false
  },
  {
    id: 6,
    sender: "Yaswanth",
    content: "Here's a picture of my cat!",
    timestamp: "2024-08-17T10:06:00Z",
    imageUrl:
      "https://cdn.pixabay.com/photo/2024/02/28/07/42/european-shorthair-8601492_640.jpg",
      isPinned : false
  },
  {
    id: 7,
    sender: "You",
    content:
      "This is a really long message that just keeps going and going. I wanted to share all of my thoughts on this topic, so I decided to write a longer message to make sure everything is covered. What do you guys think about this idea?",
    timestamp: "2024-08-17T10:07:00Z",
    isPinned : false
  },
  {
    id: 8,
    sender: "Tanvi",
    content: "Sounds good!",
    timestamp: "2024-08-17T10:08:00Z",
    isPinned : false
  },
  {
    id: 9,
    sender: "Saketh",
    content:
      "Here's a quick update on the project: We're almost done with the first phase, and we'll be moving on to the next steps soon. I'll keep you all posted on any further developments. Thanks for your hard work!",
    timestamp: "2024-08-17T10:09:00Z",
    isPinned : false
  },
  { id: 10, sender: "Yaswanth", content: "Got it!", timestamp: "2024-08-17T10:10:00Z",
    isPinned : false
   },
  {
    id: 11,
    sender: "You",
    content: "Here's an interesting article I found:",
    timestamp: "2024-08-17T10:11:00Z",
    url: "https://www.technews.com/insights",
    isPinned : false
  },
  {
    id: 12,
    sender: "Tanvi",
    content: "Look at this amazing sunset I captured yesterday!",
    timestamp: "2024-08-17T10:12:00Z",
    imageUrl: "https://example.com/sunset.jpg",
    isPinned : false
  },
  {
    id: 13,
    sender: "Saketh",
    content: "Can anyone share the meeting notes?",
    timestamp: "2024-08-17T10:13:00Z",
    isPinned : false
  },
  {
    id: 14,
    sender: "Yaswanth",
    content: "Sure, I'll send them over in a bit.",
    timestamp: "2024-08-17T10:14:00Z",
    isPinned : false
  },
  {
    id: 15,
    sender: "You",
    content: "Thanks, Yaswanth!",
    timestamp: "2024-08-17T10:15:00Z",
    isPinned : false
  },
  {
    id: 16,
    sender: "Tanvi",
    content:
      "Here's a quick recap of today's discussion: We covered the project's progress, upcoming tasks, and assigned responsibilities. We'll meet again next week to review the next steps and ensure we're on track.",
    timestamp: "2024-08-17T10:16:00Z",
    isPinned : false
  },
  {
    id: 17,
    sender: "Saketh",
    content: "I found this really helpful tutorial on React. Check it out",
    timestamp: "2024-08-17T10:17:00Z",
    url: "https://react-tutorial.com",
    isPinned : false
  },
  {
    id: 18,
    sender: "Yaswanth",
    content: "Here's the file you requested.",
    timestamp: "2024-08-17T10:18:00Z",
    imageUrl: "https://example.com/file.png",
    isPinned : false
  },
  {
    id: 19,
    sender: "You",
    content: "Awesome, thanks!",
    timestamp: "2024-08-17T10:19:00Z",
    isPinned : false
  },
  {
    id: 20,
    sender: "Yaswanth",
    content: "ok! Good night.",
    timestamp: "2024-08-17T10:18:00Z",
    imageUrl: "https://example.com/file.png",
    isPinned : false
  },
];


function Chat() {
  const { type, id } = useParams();
  const navigate = useNavigate();
  const location = useLocation();
  const [chatInfo, setChatInfo] = useState(null);
  const [messages, setMessages] = useState([]);
  const [messageInput, setMessageInput] = useState("");
  const [newMessage, setNewMessage] = useState("");
  const [selectedFiles, setSelectedFiles] = useState([]);
  const [isReactionOpen, setIsReactionOpen] = useState(false);
  const [selectedMessage, setSelectedMessage] = useState(null);
  const [replyToMessage, setReplyToMessage] = useState(null);
  const [isActive, setIsActive] = useState(false);
  const [isShareOpen, setIsShareOpen] = useState(false);
  const [shouldScrollToBottom, setShouldScrollToBottom] = useState(false);
  const [messageReactions, setMessageReactions] = useState({});
  const [keyboardHeight, setKeyboardHeight] = useState(0);
  const [scrollButton, setScrollButton] = useState(false);
  const [editingMessageId, setEditingMessageId] = useState(false);
  const [selectedMessageId, setSelectedMessageId] = useState(null);
  const [searchMessages, setSearchMessages] = useState(0);
  const [pinnedMessages, setPinnedMessages] = useState(0);
  const [highlightDuration, setHighlightDuration] = useState(0)
  const [messageSearch, setMessageSearch] = useState(false);
  const [pinnedItems, setPinnedItems] = useState([]);
  const [currentView, setCurrentView] = useState("messages");

  const textareaRef = useRef(null);
  const chatContainerRef = useRef(null);
  const messagesEndRef = useRef(null);

  const handleMessageSearch = (messageId) => {
    setSearchMessages(messageId); 
    setTimeout(() => {
      const element = document.getElementById(`message-${messageId}`);
      if (element) {
        element.scrollIntoView({ behavior: "auto", block: "center" });
        setSearchMessages(messageId);
      }
    }, 0);
    setTimeout(() => {
      setSearchMessages(null);
    }, 5000);
  };

  const pinMessagesLength = messages.filter((message) => message.isPinned).length;

  const handlePinnedMessages = (messageId) => {
    setPinnedMessages(messageId); 
    setTimeout(() => {
      const element = document.getElementById(`message-${messageId}`);
      if (element) {
        element.scrollIntoView({ behavior: "auto", block: "center" });
        setPinnedMessages(messageId);
      }
    }, 0);
    setTimeout(() => {
      setPinnedMessages(null);
    }, 10000);
  };
  
  const handleAddReaction = (reaction) => {
    if (selectedMessage) {
      setMessageReactions((prev) => {
        const currentReactions = prev[selectedMessage.id] || [];
        const isReactionExists = currentReactions.includes(reaction);
        const updatedReactions = isReactionExists
          ? currentReactions.filter((r) => r !== reaction)
          : [...currentReactions, reaction];
        return {
          ...prev,
          [selectedMessage.id]: updatedReactions,
        };
      });

      setIsReactionOpen(false);
    }
  };

  const lastMessage = messages
    .filter((message) => message.sender === "You")
    .pop();

  useEffect(() => {
    return () => {
      selectedFiles.forEach((file) => {
        if (file.preview) URL.revokeObjectURL(file.preview);
        if (file.url) URL.revokeObjectURL(file.url);
      });
    };
  }, [selectedFiles]);

  useEffect(() => {
    return () => {
      messages.forEach((message) => {
        if (message.fileUrl?.startsWith("blob:")) {
          URL.revokeObjectURL(message.fileUrl);
        }
        if (message.imageUrl?.startsWith("blob:")) {
          URL.revokeObjectURL(message.imageUrl);
        }
      });
    };
  }, [messages]);

  useEffect(() => {
    if (shouldScrollToBottom) {
      scrollToEnd();
      setShouldScrollToBottom(false);
    }
  }, [messages, shouldScrollToBottom]);

  const scrollToEnd = () => {
    const container = chatContainerRef.current;
    if (container) {
      container.scrollTop = container.scrollHeight;
    }
  };

  useEffect(() => {
    const fetchChatData = async () => {
      if (type === "channel") {
        setChatInfo({
          name: `${id}`,
          memberCount: Math.floor(Math.random() * 100) + 1,
        });
      } else if (type === "dm") {
        const { img, name } = location.state || {};
        setChatInfo({
          name: name || `${id}`,
          img: img || "https://via.placeholder.com/50",
        });
      }
      setMessages(
        dummyMessages.map((message, index) => ({
          id: index,
          ...message,
        }))
      );
    };

    fetchChatData();
  }, [type, id, location.state]);

  const handleNavigationBack = () => {
    if(currentView === "pinnedMessages") {
      setCurrentView("messages");
    } else {
    navigate(type === "channel" ? "/managesnap/channels" : "/managesnap/dms");
    }
  };

  const handleSendMessage = () => {
    setShouldScrollToBottom(true);

    if (editingMessageId) {
      setMessages(
        messages.map((msg) => {
          if (msg.id === editingMessageId) {
            return {
              ...msg,
              content: newMessage,
              timestamp: new Date().toISOString(),
              edited: true,
            };
          }
          return msg;
        })
      );

      // Reset editing state
      setEditingMessageId(null);
      setNewMessage("");
      if (textareaRef.current) {
        textareaRef.current.style.height = "auto";
      }
      return;
    }

    // Handle new message
    if (!newMessage.trim() && selectedFiles.length === 0) return;
    const newMessageId = Date.now();
    const newMessageObj = {
      id: newMessageId,
      content: newMessage,
      sender: "You",
      timestamp: new Date().toISOString(),
      isPinned: false,
      replyTo: replyToMessage
        ? {
            id: replyToMessage.id,
            sender: replyToMessage.sender,
            content: replyToMessage.content,
            imageUrl: replyToMessage.imageUrl,
            timestamp: replyToMessage.timestamp,
          }
        : null,
    };

    setMessages([...messages, newMessageObj]);
    setNewMessage("");
    setIsActive(false);
    setReplyToMessage(null);

    if (textareaRef.current) {
      textareaRef.current.style.height = "auto";
    }
  };

  const [isIOS, setIsIOS] = useState(false);

  useEffect(() => {
    const checkIsIOS = () => {
      const userAgent = window.navigator.userAgent.toLowerCase();
      return /iphone|ipad|ipod/.test(userAgent);
    };
    setIsIOS(checkIsIOS());
  }, []);

  const handleEdit = (messageId, content) => {
    setEditingMessageId(messageId);
    setNewMessage(content);
    setIsReactionOpen(false);
    if (textareaRef.current) {
      textareaRef.current.focus();
    }
  };

  const handlePin = (messageId) => {
    setMessages((prevMessages) => {
      const updatedMessages = prevMessages.map((message) =>
        message.id === messageId
          ? { ...message, isPinned: !message.isPinned }
          : message
      );
      return updatedMessages;
      
    });
    setIsReactionOpen(false);
  }
  
  
  const handleToggleReactions = useCallback((message) => {
    setSelectedMessage(message);
    setIsReactionOpen(true);
  }, []);

  const longPressEvent = useLongPress(
    (message) => handleToggleReactions(message),
    500
  );

  const scrollToBottom = () => {
    if (messagesEndRef.current) {
      messagesEndRef.current.scrollIntoView({ behavior: "auto" });
    }
  };

  useEffect(() => {
    if (shouldScrollToBottom) {
      scrollToBottom();
      setShouldScrollToBottom(false);
    }
  }, [messages, shouldScrollToBottom]);

  useEffect(() => {
    const container = chatContainerRef.current;

    const handleScroll = () => {
      if (!container) return;

      const isAtBottom =
        container.scrollHeight - container.scrollTop <=
        container.clientHeight + 100;
      const hasScrollableContent =
        container.scrollHeight > container.clientHeight;

      setScrollButton(hasScrollableContent && !isAtBottom);
    };

    container?.addEventListener("scroll", handleScroll);
    return () => container?.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if ("virtualKeyboard" in navigator) {
      navigator.virtualKeyboard.overlaysContent = true;

      const handleGeometryChange = (event) => {
        const { height } = event.target.boundingRect;
        setKeyboardHeight(height || 0);
      };

      navigator.virtualKeyboard.addEventListener(
        "geometrychange",
        handleGeometryChange
      );

      return () => {
        navigator.virtualKeyboard.removeEventListener(
          "geometrychange",
          handleGeometryChange
        );
      };
    }
  }, []);

  // useEffect(() => {
  //   scrollToBottom();
  // }, [messages]);

  const handleInputChange = (e) => {
    const value = e.target.value;
    setNewMessage(value);
    setIsActive(value.trim() !== "");
    e.target.style.height = "auto";
    e.target.style.height = `${e.target.scrollHeight}px`;
  };

  const handleReplyToMessage = useCallback((message) => {
    setReplyToMessage({
      id: message.id,
      sender: message.sender,
      content: message.content,
      imageUrl: message.imageUrl || null,
      timestamp: message.timestamp,
    });

    setIsReactionOpen(false);

    if (textareaRef.current) {
      textareaRef.current.focus();
    }
  }, []);

  const handleInputFocus = () => {
    setIsActive(newMessage.trim() !== "");
  };

  const handleInputBlur = () => {
    setIsActive(newMessage.trim() !== "");
  };

  return (
    <>
      <div
        className={`flex flex-col dark:bg-black text-gray-800 dark:text-gray-200 ${
          isReactionOpen ? "overflow-hidden" : "overflow-y-auto"
        } min-h-screen  pt-4`}
        style={{ paddingBottom: keyboardHeight + 80, userSelect: "none" }}
      >
        <ChatHeader
          type={type}
          chatInfo={chatInfo}
          handleNavigationBack={handleNavigationBack}
          navigate={navigate}
          messages={messages}
          onSendData={handleMessageSearch}
          messageSearch={messageSearch}
          setMessageSearch={setMessageSearch}
          setCurrentView={setCurrentView}
        />
        <PinHeader messages={messages} onSendData={handlePinnedMessages} setCurrentView={setCurrentView} /> 

        <div
          className={`flex-grow ${
            isReactionOpen ? "overflow-hidden" : "overflow-y-auto"
          } pl-4 ${pinMessagesLength > 0 ? "pt-20" : "pt-10"} ${isIOS ? "pb-6" : "pb-2"} mt-4`}
          ref={chatContainerRef}
        >

          {currentView === "messages" && (
            <>
            <Day timestamp={new Date()} />
            {messages.map((message, index) => (
              <Message
                key={message.id}
                id={`message-${message.id}`}
                type={type}
                message={message}
                handleReplyToMessage={handleReplyToMessage}
                isLastMessage={lastMessage?.id === message.id}
                isHighlighted={parseInt(searchMessages) === message.id}
                isPinHighlighted={parseInt(pinnedMessages) === message.id}
                messageReactions={messageReactions}
                setMessageReactions={setMessageReactions}
                setIsReactionOpen={setIsReactionOpen}
                setIsShareOpen={setIsShareOpen}
                handleToggleReactions={handleToggleReactions}
                longPressEvent={longPressEvent}
                scrollToBottom={scrollToBottom}
                handleAddReaction={handleAddReaction}
                selectedMessage={selectedMessage}
              />
            
            ))}
            </>
          ) }
          {currentView === "pinnedMessages" && (
            <>
            {messages.filter(message => message.isPinned).map((message, index) => (
              <PinMessages
              key={message.id}
                id={`message-${message.id}`}
                type={type}
                message={message}
                handleReplyToMessage={handleReplyToMessage}
                isLastMessage={lastMessage?.id === message.id}
                isHighlighted={parseInt(searchMessages) === message.id}
                isPinHighlighted={parseInt(pinnedMessages) === message.id}
                messageReactions={messageReactions}
                setMessageReactions={setMessageReactions}
                setIsReactionOpen={setIsReactionOpen}
                setIsShareOpen={setIsShareOpen}
                handleToggleReactions={handleToggleReactions}
                longPressEvent={longPressEvent}
                scrollToBottom={scrollToBottom}
                handleAddReaction={handleAddReaction}
                selectedMessage={selectedMessage}
                />
            ))}
            </>
          ) }

          {scrollButton && (
            <div
              className="fixed bottom-32 right-16 z-[999] w-10 h-10 bg-gray-300 dark:bg-gray-500 rounded-full shadow-md flex items-center justify-center cursor-pointer"
              onClick={() => setShouldScrollToBottom(true)}
            >
              <ChevronDownIcon className="w-5 h-5 text-gray-700 dark:text-gray-300" />
            </div>
          )}
          <div ref={messagesEndRef} />
        </div>

        <ReplyPreview
          replyToMessage={replyToMessage}
          setReplyToMessage={setReplyToMessage}
          keyboardHeight={keyboardHeight}
        />

        {(!messageSearch && currentView !== "pinnedMessages") && (
        <MessageInput
          newMessage={newMessage}
          setNewMessage={setNewMessage}
          handleInputChange={handleInputChange}
          handleSendMessage={handleSendMessage}
          isActive={isActive}
          textareaRef={textareaRef}
          handleInputFocus={handleInputFocus}
          handleInputBlur={handleInputBlur}
          keyboardHeight={keyboardHeight}
          replyToMessage={replyToMessage}
          setReplyToMessage={setReplyToMessage}
          editingMessageId={editingMessageId}
        />
        )}

        <ReactionMenu
          handleAddReaction={handleAddReaction}
          handleReplyToMessage={handleReplyToMessage}
          selectedMessage={selectedMessage}
          isReactionOpen={isReactionOpen}
          setIsReactionOpen={setIsReactionOpen}
          setIsShareOpen={setIsShareOpen}
          onEdit={handleEdit}
          onPinned={handlePin}
        />
        <ShareModal
          isShareOpen={isShareOpen}
          setIsShareOpen={setIsShareOpen}
          contacts={contacts}
        />
      </div>
    </>
  );
}

export default Chat;
