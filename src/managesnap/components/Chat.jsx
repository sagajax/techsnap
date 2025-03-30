import React, { useState, useRef, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { formatTimestamp } from "../../utils/formatTimestamp";
import img from "../assets/man1.jpg";
import img2 from "../assets/man2.jpg";
import img3 from "../assets/man3.jpg";
import ChatMessage from "./ChatComps/ChatMessages";
import MessageComposer from "./ChatComps/MessageComposer";
import FilePreview from "./ChatComps/FilePreview";
import Day from "./ChatComps/Day";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import {
  MessageSquare,
  Phone,
  Video,
  Users,
  Mail,
  MapPin,
  Clock,
  Check,
  PinIcon,
  FileIcon,
  MoreVerticalIcon,
  Search,
  X,
  ChevronDownIcon,
  Copy,
  MessageCircle,
  FolderIcon,
  ListIcon,
  SearchIcon,
} from "lucide-react";
import { FaFilePdf, FaHtml5 } from "react-icons/fa";
import { FaMessage } from "react-icons/fa6";
import ChatFiles from "./ChatComps/ChatFiles";
import ChatMoreOptions from "./ChatComps/ChatMoreOptions";
import MessageTimestamp from "./ChatComps/MessageTimestamp";
import SearchMessage from "./ChatComps/SearchMessage";
import PinnedHeader from "./ChatComps/PinnedHeader";
import PinnedContent from "./ChatComps/PinnedContent";
import Organisation from "./ChatComps/Organisation";

const ALLOWED_FILE_TYPES = [
  "image/jpeg",
  "image/png",
  "image/gif",
  "application/pdf",
  "application/msword",
  "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
  "application/vnd.ms-excel",
  "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",
  "text/plain",
];

const currentUser = {
  id: 1,
  name: "You",
  photo: img,
  email: "salma.pattan@non.se.com",
  phone: "+91 566757688",
  location: "AVINYA campus",
};

const dms = [
  {
    id: "msg1",
    user: "user",
    content: "Hello bro!",
    photo: img,
    timestamp: "10 Dec 1:25 P.M",
    reactions: [{ emoji: "👋", count: 1 }],
  },
  {
    id: "msg2",
    user: "You",
    content: "Hey, good morning!",
    photo: img2,
    timestamp: "11 Dec 11:25 P.M",
    reactions: [],
  },
  {
    id: "msg3",
    user: "User",
    photo: img,
    content: "hi",
    url: "https://images.pexels.com/photos/417074/pexels-photo-417074.jpeg?cs=srgb&dl=pexels-souvenirpixels-417074.jpg&fm=jpg",
    timestamp: "Yesterday",
    reactions: [{ emoji: "☕", count: 2 }],
  },
];

const channels = [
  {
    id: "msg1",
    user: "userA",
    content: "Hello everyone!",
    photo: img,
    timestamp: "2024-10-26T09:00:00",
    reactions: [{ emoji: "👋", count: 1 }],
  },
  {
    id: "msg3",
    user: "You",
    content: "Good morning all!",
    photo: img3,
    timestamp: "2024-10-24T09:10:00",
    reactions: [{ emoji: "☕", count: 2 }],
  },
  {
    id: "msg2",
    user: "userB",
    content: "Hey, good morning!",
    photo: img2,
    timestamp: "2024-10-28T09:05:00",
    reactions: [],
  },
];

const formatFileSize = (bytes) => {
  if (bytes === 0) return "0 Bytes";
  const k = 1024;
  const sizes = ["Bytes", "KB", "MB", "GB"];
  const i = Math.floor(Math.log(bytes) / Math.log(k));
  return parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + " " + sizes[i];
};

function Chat({ toggleProfileSectionVisibility, setIsProfileSectionVisible, isProfileSectionVisible }) {
  const [messages, setMessages] = useState([]);
  const [messageInput, setMessageInput] = useState("");
  const [editingMessageId, setEditingMessageId] = useState(null);
  const [replyToMessage, setReplyToMessage] = useState(null);
  const [selectedFiles, setSelectedFiles] = useState([]);
  const [showEmojiPicker, setShowEmojiPicker] = useState(false);
  const [imagePreview, setImagePreview] = useState(null);
  const [shouldScrollToBottom, setShouldScrollToBottom] = useState(false);
  const [scrollButton, setScrollButton] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [isPinnedOpen, setIsPinnedOpen] = useState(false);
  const [isOrgOpen, setIsOrgOpen] = useState(false);
  const [currentView, setCurrentView] = useState("messages");
  const [selectedMessageId, setSelectedMessageId] = useState(null);
  const [highlightDuration, setHighlightDuration] = useState(0);
  const navigate = useNavigate();
  const fileInputRef = useRef(null);
  const imageInputRef = useRef(null);
  const chatContainerRef = useRef(null);
  const messagesEndRef = useRef(null);
  const location = useLocation();

  const lastSegment = location.pathname.split("/").pop();
  const isChannelChat = lastSegment.startsWith("C");

  const [copied, setCopied] = useState(null);

  const handleCopy = (text, successMessage) => {
    navigator.clipboard.writeText(text).then(() => {
      setCopied(text);
      // Reset icon after 2 seconds
      setTimeout(() => setCopied(null), 2000);
    });
  };

  useEffect(() => {
    if (shouldScrollToBottom) {
      scrollToBottom();
      setShouldScrollToBottom(false);
    }
  }, [messages, shouldScrollToBottom]);

  useEffect(() => {
    if (isChannelChat) {
      setMessages(channels);
    } else {
      setMessages(dms);
    }
  }, [isChannelChat]);

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

  const scrollToBottom = () => {
    const container = chatContainerRef.current;
    if (container) {
      container.scrollTo({
        top: container.scrollHeight,
        behavior: "smooth",
      });
    }
  };

  const onViewAll = () => {
    setIsProfileSectionVisible(false);
    setIsSearchOpen(false);
    setIsPinnedOpen(true);
  };

  const handleSearchOpen = () => {
    setIsProfileSectionVisible(false);
    setIsOrgOpen(false);
    setIsPinnedOpen(false);
    setIsSearchOpen(true);

  };

  const handleOrg = () => {
    setIsProfileSectionVisible(false);
    setIsOrgOpen(true);
    setIsPinnedOpen(false);
    setIsSearchOpen(false);
  };

  const handleFocusMessage = (messageId) => {
    setSelectedMessageId(messageId);
    setTimeout(() => {
      const element = document.getElementById(`message-${messageId}`);
      if (element) {
        element.scrollIntoView({ behavior: "auto", block: "center" });
      }
    }, 0);
    setHighlightDuration(3);

    setTimeout(() => {
      setSelectedMessageId(null);
    }, 3000);
  };

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

  const resetTextareaHeight = () => {
    const textarea = document.getElementById("message-textarea");
    if (textarea) {
      textarea.style.height = "auto";
    }
  };

  const handleSearch = (lastSegment) => {
    navigate(`/managesnap/search`, {
      state: {
        name: lastSegment,
      },
    });
  };

  const handlePaste = async (e) => {
    const items = Array.from(e.clipboardData.items);
    let imageItem, fileItem, text;

    items.forEach((item) => {
      if (item.type.startsWith("image")) {
        imageItem = item.getAsFile();
      } else if (item.type.startsWith("application/")) {
        fileItem = item.getAsFile();
      } else if (item.type === "text/plain") {
        item.getAsString((str) => {
          text = str;
          console.log("Pasted text:", text);
        });
      }
    });

    if (imageItem) {
      try {
        await handleImageUpload(imageItem);
      } catch (error) {
        console.error("Error uploading image:", error);
      }
    }

    if (fileItem) {
      try {
        await handleFileUpload(fileItem);
      } catch (error) {
        console.error("Error uploading file:", error);
      }
    }
  };

  const handleDrop = async (e) => {
    e.preventDefault();
    const files = Array.from(e.dataTransfer.files);
    await handleFileUpload(files);
  };

  const handleImageUpload = async (file) => {
    if (!file) return;

    const reader = new FileReader();
    reader.onload = async (e) => {
      setIsUploading(true);
      setUploadProgress(0);

      for (let i = 0; i <= 100; i += 20) {
        setUploadProgress(i);
        await new Promise((resolve) => setTimeout(resolve, 200));
      }

      const fileObject = {
        id: Math.random().toString(36).substring(7),
        file: file,
        preview: e.target.result,
        type: file.type,
        name: file.name,
        size: formatFileSize(file.size),
        url: URL.createObjectURL(file),
      };

      setSelectedFiles((prev) => [...prev, fileObject]);
      setIsUploading(false);
      setUploadProgress(0);
    };
  };

  const handleFileSelection = (files) => {
    Array.from(files).forEach((file) => {
      if (!ALLOWED_FILE_TYPES.includes(file.type)) {
        alert(`File type ${file.type} is not supported`);
        return;
      }

      const fileObject = {
        id: Math.random().toString(36).substring(7),
        file: file,
        type: file.type,
        name: file.name,
        size: formatFileSize(file.size),
        preview: file.type.startsWith("image/")
          ? URL.createObjectURL(file)
          : null,
        blobUrl: URL.createObjectURL(file),
      };

      setSelectedFiles((prev) => [...prev, fileObject]);
    });
  };

  const handleFileUpload = async (files) => {
    if (!files || files.length === 0) return;
    handleFileSelection(files);
  };

  const removePreviewFile = (id) => {
    setSelectedFiles((prev) => {
      const fileToRemove = prev.find((f) => f.id === id);
      if (fileToRemove?.url) {
        URL.revokeObjectURL(fileToRemove.url);
      }
      if (fileToRemove?.preview) {
        URL.revokeObjectURL(fileToRemove.preview);
      }
      return prev.filter((f) => f.id !== id);
    });
  };

  const createMessage = ({
    content = null,
    imageUrl = null,
    linkUrl = null,
    fileUrl = null,
    fileName = null,
    fileSize = null,
    fileType = null,
  }) => {
    const links = content?.match(URL_REGEX) || [];
    return {
      id: Date.now(),
      user: currentUser.name,
      content,
      timestamp: new Date().toLocaleTimeString(),
      reactions: [],
      photo: currentUser.photo,
      isPinned: false,
      imageUrl,
      linkUrl,
      fileUrl,
      fileName,
      fileSize,
      fileType,
      links: links.map((url) => ({
        url,
        type: getLinkType(url),
      })),
      replyTo: replyToMessage
        ? {
            id: replyToMessage.id,
            user: replyToMessage.user,
            content: replyToMessage.content,
            imageUrl: replyToMessage.imageUrl,
            fileUrl: replyToMessage.fileUrl,
            fileName: replyToMessage.fileName,
            fileType: replyToMessage.fileType,
          }
        : null,
    };
  };

  const [messageStatuses, setMessageStatuses] = useState(new Map());
  const [onlineUsers, setOnlineUsers] = useState(new Set());

  const updateMessageStatus = (messageId, status, seenBy = []) => {
    setMessageStatuses((prev) =>
      new Map(prev).set(messageId, { status, seenBy })
    );
  };

  useEffect(() => {
    const handleMessageDelivery = async (messageId) => {
      updateMessageStatus(messageId, "sending");
      await new Promise((resolve) => setTimeout(resolve, 1000));
      updateMessageStatus(messageId, "delivered");
      if (Math.random() > 0.5) {
        await new Promise((resolve) => setTimeout(resolve, 2000));
        updateMessageStatus(messageId, "seen", [
          { id: 2, name: "User 2", avatar: "avatar2.jpg" },
        ]);
      }
    };
    messages.forEach((message) => {
      if (!messageStatuses.has(message.id)) {
        handleMessageDelivery(message.id);
      }
    });
  }, [messages]);

  const sendMessage = () => {
    setShouldScrollToBottom(true);

    if (!messageInput.trim() && selectedFiles.length === 0) return;

    const extractUrls = (text) => {
      const URL_REGEX = /(https?:\/\/[^\s<]+[^<.,:;"')\]\s])/g;
      const matches = text.match(URL_REGEX) || [];

      return matches.map((url) => {
        let type = "url";
        if (/(?:youtube\.com\/watch\?v=|youtu\.be\/)([^\s&]+)/.test(url)) {
          type = "youtube";
        } else if (/twitter\.com\/[a-zA-Z0-9_]+\/status\/[0-9]+/.test(url)) {
          type = "twitter";
        } else if (
          /spotify\.com\/(?:track|album|playlist|artist)\/([a-zA-Z0-9]+)/.test(
            url
          )
        ) {
          type = "spotify";
        } else if (/giphy\.com/.test(url)) {
          type = "gif";  
        }else if (/\.(jpg|jpeg|png|gif|webp)$/i.test(url)) {
          type = "image";
        } else if (/\.(mp4|webm|ogg)$/i.test(url)) {
          type = "video";
        }
        return { url, type };
      });
    };

    const formattedTimestamp = formatTimestamp(Date.now());

    if (editingMessageId) {
      setMessages(
        messages.map((msg) => {
          if (msg.id === editingMessageId) {
            const extractedUrls = extractUrls(messageInput);
            return {
              ...msg,
              content: messageInput,
              links: extractedUrls,
              edited: true,
              timestamp: formattedTimestamp,
            };
          }
          return msg;
        })
      );
      setEditingMessageId(null);
    } else {
      if (selectedFiles.length > 0) {
        selectedFiles.forEach((fileData) => {
          const extractedUrls = extractUrls(messageInput);
          const newMessageId = Date.now();
          const newMessage = {
            id: newMessageId,
            user: currentUser.name,
            content: messageInput,
            reactions: [],
            photo: currentUser.photo,
            isPinned: false,
            links: extractedUrls,
            timestamp: formattedTimestamp,
            imageUrl: fileData.type.startsWith("image/")
              ? fileData.preview
              : null,
            fileUrl: fileData.blobUrl,
            fileName: fileData.name,
            fileType: fileData.type,
            fileSize: fileData.size,
            replyTo: replyToMessage
              ? {
                  id: replyToMessage.id,
                  user: replyToMessage.user,
                  content: replyToMessage.content,
                  imageUrl: replyToMessage.imageUrl,
                  fileUrl: replyToMessage.fileUrl,
                  fileName: replyToMessage.fileName,
                  fileType: replyToMessage.fileType,
                }
              : null,
          };
          setMessages((prev) => [...prev, newMessage]);
          updateMessageStatus(newMessageId, "sending");
        });
      }

      if (messageInput.trim() && selectedFiles.length === 0) {
        const extractedUrls = extractUrls(messageInput);
        const newMessageId = Date.now();
        const newMessage = {
          id: newMessageId,
          user: currentUser.name,
          content: messageInput,
          reactions: [],
          photo: currentUser.photo,
          isPinned: false,
          links: extractedUrls,
          timestamp: formattedTimestamp,
          replyTo: replyToMessage
            ? {
                id: replyToMessage.id,
                user: replyToMessage.user,
                content: replyToMessage.content,
                imageUrl: replyToMessage.imageUrl,
                fileUrl: replyToMessage.fileUrl,
                fileName: replyToMessage.fileName,
                fileType: replyToMessage.fileType,
              }
            : null,
        };
        setMessages((prev) => [...prev, newMessage]);
        updateMessageStatus(newMessageId, "sending");
      }
    }

    setMessageInput("");
    setSelectedFiles([]);
    setReplyToMessage(null);
    resetTextareaHeight();
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      sendMessage();
    }
  };

  const downloadImage = (imageUrl) => {
    const link = document.createElement("a");
    link.href = imageUrl;
    link.download = "image.png";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const shareImage = async (imageUrl) => {
    try {
      if (navigator.share) {
        await navigator.share({
          title: "Shared Image",
          text: "Check out this image!",
          url: imageUrl,
        });
      } else {
        await navigator.clipboard.writeText(imageUrl);
        alert("Image URL copied to clipboard!");
      }
    } catch (error) {
      console.error("Error sharing:", error);
    }
  };

  const renderFilePreview = () => (
    <div className="p-4 border-t">
      <div className="flex flex-wrap gap-2">
        {selectedFiles.map((file) => (
          <FilePreview key={file.id} file={file} onRemove={removePreviewFile} />
        ))}
      </div>
    </div>
  );
  const [isProfileOpen, setIsProfileOpen] = useState(false);
  const timeoutRef = useRef(null);

  const handleMouseEnter = () => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    setIsProfileOpen(true);
  };

  const handleMouseLeave = () => {
    timeoutRef.current = setTimeout(() => {
      setIsProfileOpen(false);
    }, 300);
  };

  const [searchValue, setSearchValue] = useState("");

  return (
    <div className="flex w-full h-full items-center">
      <div
        className="relative flex flex-1 flex-col h-full text-black dark:text-white border-r"
        onDrop={handleDrop}
        onDragOver={(e) => e.preventDefault()}
      >
        <div className="p-4 flex justify-between items-center border-b shadow-md">
          <div className="w-full flex justify-between items-center">
            <div
              className="flex items-center cursor-pointer space-x-2"
              // onClick={toggleProfileSectionVisibility}
            >
              <Popover open={isProfileOpen} onOpenChange={setIsProfileOpen}>
                <PopoverTrigger asChild>
                  <div
                    onMouseEnter={handleMouseEnter}
                    // onMouseLeave={handleMouseLeave}
                  >
                    <Avatar
                      className="w-12 h-12 border border-gray-500 cursor-pointer hover:opacity-90"
                    >
                      <AvatarImage src={currentUser.photo} alt="Profile" />
                      <AvatarFallback>
                        {currentUser.name
                          ?.split(" ")
                          .map((n) => n[0])
                          .join("") || "U"}
                      </AvatarFallback>
                    </Avatar>
                  </div>
                </PopoverTrigger>

                <PopoverContent
                  className="w-[300px] p-0  text-white shadow-xl ml-60"
                  // onMouseEnter={() => {
                  //   if (timeoutRef.current) clearTimeout(timeoutRef.current);
                  // }}
                  // onMouseLeave={handleMouseLeave}
                >
                  <div className="px-4 pt-2 space-y-2 text-black dark:text-white">
                    <div className="flex items-center gap-2">
                      <Avatar className="w-10 h-10">
                        <AvatarImage
                          src={currentUser.photo}
                          alt={currentUser.name}
                        />
                        <AvatarFallback>
                          {currentUser.name
                            ?.split(" ")
                            .map((n) => n[0])
                            .join("") || "U"}
                        </AvatarFallback>
                      </Avatar>
                      <div>
                        <div className="flex items-center gap-1.5">
                          <h3 className="font-semibold">{lastSegment}</h3>
                          <div className="w-3.5 h-3.5 bg-gray-800 rounded-full flex items-center justify-center">
                            <Check className="w-2.5 h-2.5 text-green-500" />
                          </div>
                        </div>
                        <p className="text-xs ">
                          Digital Innovation & Technology
                        </p>
                      </div>
                    </div>

                    <div className="flex justify-around py-2 text-black dark:text-white">
                      <button className="hover:bg-gray-300 p-2 rounded-full transition-colors" onClick={handleOrg}>
                        <MessageSquare className="w-5 h-5" />
                      </button>
                      <button className="hover:bg-gray-300 p-2 rounded-full transition-colors" onClick={toggleProfileSectionVisibility}>
                        <Users className="w-5 h-5" />
                      </button>
                      <button className="hover:bg-gray-300 p-2 rounded-full transition-colors">
                        <Video className="w-5 h-5" />
                      </button>
                      <button className="hover:bg-gray-300 p-2 rounded-full transition-colors">
                        <Phone className="w-5 h-5" />
                      </button>
                    </div>
                  </div>

                  <div className="border-t border-gray-800 p-3 space-y-1.5 text-black dark:text-white">
                    <div className="flex items-center gap-2 text-sm">
                      <div className="w-2 h-2 rounded-full bg-green-500" />
                      <span>Available • Free all day</span>
                    </div>
                    <div className="flex items-center gap-2 text-xs text-black dark:text-white">
                      <Clock className="w-3.5 h-3.5" />
                      <span>Work hours: 10:00 AM - 7:00 PM</span>
                    </div>
                    <div className="flex items-center gap-2 text-xs text-black dark:text-white">
                      <Clock className="w-3.5 h-3.5" />
                      <span>12:49 A.M - same time zone as you</span>
                    </div>
                  </div>

                  <div className="border-t border-gray-800 p-3 text-black dark:text-white">
                    <h4 className="text-xs font-medium mb-2">Contact</h4>
                    <div className="space-y-2 text-sm">
                      <div className="flex items-center justify-between group relative">
                        <div className="flex items-center gap-2 text-blue-400">
                          <Mail className="w-4 h-4" />
                          <a
                            href={`mailto:${currentUser.email}`}
                            className="text-xs hover:underline"
                            onClick={(e) => e.stopPropagation()}
                          >
                            {currentUser.email}
                          </a>
                        </div>
                        <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                          <button
                            onClick={() =>
                              handleCopy(currentUser.email, "Email copied!")
                            }
                            className="focus:outline-none"
                          >
                            {copied === currentUser.email ? (
                              <Check className="w-4 h-4 text-green-500" />
                            ) : (
                              <Copy className="w-4 h-4 text-gray-400 hover:text-blue-400" />
                            )}
                          </button>
                        </div>
                        <div className="absolute top-full left-2/3 w-4/5 mt-2 hidden group-hover:block">
                          <div className="bg-gray-500 dark:bg-gray-200 dark:text-black text-white text-xs py-1 px-2 rounded">
                            Email: {currentUser.email}
                          </div>
                        </div>
                      </div>

                      <div className="flex items-center justify-between group relative">
                        <div className="flex items-center gap-2 text-blue-400">
                          <Phone className="w-4 h-4" />
                          <a
                            href={`tel:${currentUser.phone}`}
                            className="text-xs hover:underline"
                            onClick={(e) => e.stopPropagation()}
                          >
                            {currentUser.phone}
                          </a>
                        </div>
                        <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                          <button
                            onClick={() =>
                              handleCopy(
                                currentUser.phone,
                                "Phone number copied!"
                              )
                            }
                            className="focus:outline-none"
                          >
                            {copied === currentUser.phone ? (
                              <Check className="w-4 h-4 text-green-500" />
                            ) : (
                              <Copy className="w-4 h-4 text-gray-400 hover:text-blue-400" />
                            )}
                          </button>
                        </div>
                        <div className="absolute top-full left-2/3 w-2/3 mt-2 hidden group-hover:block">
                          <div className="bg-gray-600 dark:bg-gray-200 dark:text-black text-white text-xs py-1 px-2 rounded">
                            Phone: {currentUser.phone}
                          </div>
                        </div>
                      </div>

                      <div className="flex items-center justify-between group relative">
                        <div className="flex items-center gap-2 text-black dark:text-white">
                          <MapPin className="w-4 h-4" />
                          <span className="text-xs">
                            {currentUser.location}
                          </span>
                        </div>
                        <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                          <button
                            onClick={() =>
                              handleCopy(
                                currentUser.location,
                                "Location copied!"
                              )
                            }
                            className="focus:outline-none"
                          >
                            {copied === currentUser.location ? (
                              <Check className="w-4 h-4 text-green-500" />
                            ) : (
                              <Copy className="w-4 h-4 text-gray-400 hover:text-blue-400" />
                            )}
                          </button>
                        </div>
                        <div className="absolute top-full left-2/3 w-4/5 mt-2 hidden group-hover:block">
                          <div className="bg-gray-600 dark:bg-gray-200 dark:text-black text-white text-xs py-1 px-2 rounded">
                            Location: {currentUser.location}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </PopoverContent>
              </Popover>

              <div className="flex flex-col space-y-1">
                <div className="text-lg font-bold">{lastSegment}</div>
                <span className="font-semibold text-xs">Active 4hr ago</span>
              </div>
            </div>
            <div className="flex items-center space-x-4 mt-2">
              <button onClick={handleSearchOpen}>
                <Search className="w-5 h-5 mr-1" />
              </button>
              <button onClick={() => setCurrentView("messages")}>
                <MessageCircle className="w-5 h-5 mr-1" />
              </button>
              <button
                className="p-1"
                onClick={() => setCurrentView("pinned messages")}
              >
                <PinIcon className="w-5 h-5" />
              </button>
              <button className="p-1" onClick={() => setCurrentView("Files")}>
                <FileIcon className="w-5 h-5" />
              </button>
              <ChatMoreOptions />
            </div>
          </div>
        </div>
        <PinnedHeader messages={messages} onViewAll={onViewAll} onSendData={handleFocusMessage}/>

        {currentView === "messages" && (
          <>
            <div
              className="relative flex-grow overflow-y-auto overflow-x-hidden px-6 py-10 pin-scrollbar"
              ref={chatContainerRef}
            >
              <Day timestamp={new Date().toLocaleDateString()} />
              {messages.map((message, index) => (
                <ChatMessage
                  key={message.id}
                  id={`message-${message.id}`}
                  message={message}
                  isCurrentUser={message.user === "You"}
                  previousMessage={index > 0 ? messages[index - 1] : null}
                  isHighlighted={
                    selectedMessageId === message.id && highlightDuration > 0
                  }
                  onReply={setReplyToMessage}
                  onEdit={(messageId, content) => {
                    setEditingMessageId(messageId);
                    setMessageInput(content);
                  }}
                  onPin={(messageId) => {
                    setMessages(
                      messages.map((msg) =>
                        msg.id === messageId
                          ? { ...msg, isPinned: !msg.isPinned }
                          : msg
                      )
                    );
                  }}
                  onReact={(messageId, reaction) => {
                    setMessages(
                      messages.map((msg) =>
                        msg.id === messageId
                          ? {
                              ...msg,
                              reactions: msg.reactions.some(
                                (r) => r.emoji === reaction
                              )
                                ? msg.reactions.filter(
                                    (r) => r.emoji !== reaction
                                  )
                                : [
                                    ...msg.reactions,
                                    { emoji: reaction, count: 1 },
                                  ],
                            }
                          : msg
                      )
                    );
                  }}
                  onImageClick={(imageUrl) => setImagePreview(imageUrl)}
                  onDelete={(messageId) => {
                    setMessages(messages.filter((msg) => msg.id !== messageId));
                  }}
                  isChannelChat={isChannelChat}
                />
              ))}
              {scrollButton && (
                <div
                  className="fixed bottom-32 right-10 z-50 w-10 h-10 bg-gray-300 dark:bg-gray-500 rounded-full shadow-md flex items-center justify-center cursor-pointer"
                  onClick={() => setShouldScrollToBottom(true)}
                >
                  <ChevronDownIcon className="w-5 h-5 text-gray-700 dark:text-gray-300" />
                </div>
              )}

              <div ref={messagesEndRef} />
            </div>
            {selectedFiles.length > 0 && renderFilePreview()}
            <MessageComposer
              messageInput={messageInput}
              setMessageInput={setMessageInput}
              handleKeyDown={handleKeyDown}
              handlePaste={handlePaste}
              editingMessageId={editingMessageId}
              replyToMessage={replyToMessage}
              setReplyToMessage={setReplyToMessage}
              showEmojiPicker={showEmojiPicker}
              setShowEmojiPicker={setShowEmojiPicker}
              fileInputRef={fileInputRef}
              imageInputRef={imageInputRef}
              handleFileUpload={handleFileUpload}
              handleImageUpload={handleImageUpload}
              sendMessage={sendMessage}
            />
          </>
        )}

        {currentView === "Files" && <ChatFiles />}

        {currentView === "pinned messages" && (
          <div className="px-6 py-10 space-y-10">
            <div className="relative w-full flex">
              <input
                type="text"
                name="search"
                id="search"
                placeholder="Search files"
                className="w-full dark:bg-[#1F1F1F] border outline-none px-8 py-3 rounded-md dark:text-gray-400 focus:ring-0 dark:border-none"
              />
              <SearchIcon className="w-4 h-4 absolute top-4 left-2.5" />
            </div>
            <div className="space-y-6">
              <div className="flex items-center space-x-4 bg-gray-100 shadow-sm dark:bg-[#1F1F1F] px-4 py-3 rounded-md border dark:border-none">
                <div className="bg-blue-500 p-2 rounded-md">
                  <FaMessage className="w-6 h-6 text-white" />
                </div>
                <div className="flex-1">
                  <h3 className="font-medium">John Doe</h3>
                  <p className="text-gray-400 text-sm">Hey, how's it going?</p>
                </div>
                <div className="text-gray-400 text-sm">11:42 AM</div>
              </div>
              <div className="flex items-center space-x-4 bg-gray-100 shadow-sm dark:bg-[#1F1F1F] px-4 py-3 rounded-md border dark:border-none">
                <div className="bg-yellow-500 p-2 rounded-md">
                  <FaMessage className="w-6 h-6 text-white" />
                </div>
                <div className="flex-1">
                  <h3 className="font-medium">Jane Smith</h3>
                  <p className="text-gray-400 text-sm">
                    Can we meet for lunch today?
                  </p>
                </div>
                <div className="text-gray-400 text-sm">9:30 AM</div>
              </div>
              <div className="flex items-center space-x-4 bg-gray-100 shadow-sm dark:bg-[#1F1F1F] px-4 py-3 rounded-md border dark:border-none">
                <div className="bg-pink-500 p-2 rounded-md">
                  <FaMessage className="w-6 h-6 text-white" />
                </div>
                <div className="flex-1">
                  <h3 className="font-medium">Alex Johnson</h3>
                  <p className="text-gray-400 text-sm">
                    Did you see the new update?
                  </p>
                </div>
                <div className="text-gray-400 text-sm">Yesterday</div>
              </div>
            </div>
          </div>
        )}
      </div>
      <div
        className={`w-1/3 h-full overflow-y-auto ${
          (isSearchOpen || isPinnedOpen || isOrgOpen) && !isProfileSectionVisible ? "flex flex-col" : "hidden"
        }`}
      >
        {isSearchOpen && (
          <SearchMessage
            messages={messages}
            onClose={() => setIsSearchOpen(false)}
            onSendData={handleFocusMessage}
          />
        )}
        {isPinnedOpen && (
          <PinnedContent
            messages={messages}
            onClose={() => setIsPinnedOpen(false)}
            onSendData={handleFocusMessage}
          />
        )}
        {isOrgOpen && (
          <Organisation
            onClose={() => setIsOrgOpen(false)}
          />
        )}
      </div>
    </div>
  );
}

export default Chat;
