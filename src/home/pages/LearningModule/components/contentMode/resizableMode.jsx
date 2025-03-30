import { useEffect, useState } from "react";
import ChatInterface from "../chatBot";
import { useSettingStore } from "../../utils/store";
import { PiSparkleFill } from "react-icons/pi";
import { FaEllipsisVertical } from "react-icons/fa6";
import { RiResetRightFill } from "react-icons/ri";
import { AiOutlineCompress, AiOutlineExpand } from "react-icons/ai";
import { MdCopyAll } from "react-icons/md";
import { IoBookOutline, IoShareSocialOutline } from "react-icons/io5";
import { FaPlay } from "react-icons/fa";
import { IoIosColorWand } from "react-icons/io";

export default function RndResizableComponent({ children }) {
  const [isLeft, setIsLeft] = useState(false);
  const [isRight, setIsRight] = useState(false);
  const [showButton, setShowButton] = useState(false);
  const [buttonPosition, setButtonPosition] = useState({ top: 0, left: 0 });
  const { isChatOpen, setIsChatOpen } = useSettingStore();
  const [selectedPanel, setSelectedPanel] = useState(null);
  const [leftWidth, setLeftWidth] = useState(window.innerWidth / 2);
  const minWidth = 200;
  const maxWidth = window.innerWidth - minWidth;
  const [selection, setSelection] = useState({ text: "", wordCount: 0 });

  useEffect(() => {
    if (!isChatOpen) {
      setIsLeft(false);
      setIsRight(false);
      setSelectedPanel(null);
      setShowButton(false);
    }
  }, [isChatOpen]);

  const handleMouseDown = (e, panel) => {
    e.preventDefault();
    setIsCollapsed(false);
    const startX = e.clientX;
    const startWidth = leftWidth;

    const handleMouseMove = (e) => {
      let newWidth = startWidth + (e.clientX - startX);
      newWidth = Math.max(minWidth, Math.min(newWidth, maxWidth));
      setLeftWidth(newWidth);
    };

    const handleMouseUp = () => {
      document.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mouseup", handleMouseUp);
    };

    document.addEventListener("mousemove", handleMouseMove);
    document.addEventListener("mouseup", handleMouseUp);
  };

  const handleChatToggle = () => {
    setIsLeft(selectedPanel === "left");
    setIsRight(selectedPanel === "right");
    setIsChatOpen(true);
    setShowButton(false);
  };

  useEffect(() => {
    const handleInteraction = (e) => {
      if (!showButton) return;
      if (e.target.closest('button')) {
        const buttonText = e.target.textContent;
        if (buttonText.includes('Explain') || buttonText.includes('Improve')) {
          return;
        }
        }

      const selectionButton = document.querySelector("[data-selection-button]");
      if (selectionButton?.contains(e.target)) return;

    
      const selection = window.getSelection();
      selection.removeAllRanges();

     
      const aceInput = document.querySelector(".ace_text-input");
      if (aceInput) {
        const editor = ace.edit(aceInput.parentElement);
        
        if (!aceInput.parentElement.contains(e.target)) {
          editor.clearSelection();
          editor.session.selection.clearSelection();
        }
      }

      setShowButton(false);
    };

    window.addEventListener("mousedown", handleInteraction);

    
    const handleSelectionChange = () => {
      if (!showButton) return;
      // setTimeout(() => {
      //   const style = document.createElement("style");
      //   style.innerHTML = "::selection { background: red; color: white; }";
      //   document.head.appendChild(style);
      // }, 500);
      const selection = window.getSelection();
      const selectedText = selection.toString().trim();

      const aceInput = document.querySelector(".ace_text-input");
      let hasAceSelection = false;

      if (aceInput) {
        const editor = ace.edit(aceInput.parentElement);
        const aceRange = editor.getSelection().getRange();
        const aceSelectedText = editor.session.getTextRange(aceRange);
        hasAceSelection = !!aceSelectedText.trim();
      }

      if (!selectedText && !hasAceSelection) {
        setShowButton(false);
      }
    };

    document.addEventListener("selectionchange", handleSelectionChange);

   
    const aceInput = document.querySelector(".ace_text-input");
    if (aceInput) {
      const editor = ace.edit(aceInput.parentElement);
      editor.selection.on("changeSelection", handleSelectionChange);
    }

    return () => {
      window.removeEventListener("mousedown", handleInteraction);
      document.removeEventListener("selectionchange", handleSelectionChange);

      const aceInput = document.querySelector(".ace_text-input");
      if (aceInput) {
        const editor = ace.edit(aceInput.parentElement);
        editor.selection.off("changeSelection", handleSelectionChange);
      }
    };
  }, [showButton]);

  const handleSelection = () => {
    const selection = window.getSelection();
    const selectedText = selection.toString().trim();
    // const timerId = setTimeout(() => {
    //   const style = document.createElement("style");
    //   style.innerHTML = `
    //   div[data-panel="left"] ::selection { background: #c344a7; color: white; }
    //   div[data-panel="right"] ::selection { background: #c344a7; color: white; }
    //   `;
    //   document.head.appendChild(style);
    //   return () => {
    //   clearTimeout(timerId);
    //   document.head.removeChild(style);
    //   };
    // }, 500);
    const getWordCount = (text) => {
      return text.trim().split(/\s+/).length;
    };

    const aceInput = document.querySelector(".ace_text-input");
    if (aceInput) {
      const editor = ace.edit(aceInput.parentElement);
      const aceRange = editor.getSelection().getRange();
      const aceSelectedText = editor.session.getTextRange(aceRange);

      if (aceSelectedText) {
        const isBottomToTop =
          aceRange.start.row > aceRange.end.row ||
          (aceRange.start.row === aceRange.end.row &&
            aceRange.start.column > aceRange.end.column);

        const startPos = editor.renderer.textToScreenCoordinates(
          aceRange.start.row,
          aceRange.start.column
        );
        const endPos = editor.renderer.textToScreenCoordinates(
          aceRange.end.row,
          aceRange.end.column
        );

        const panel = aceInput
          .closest("div[data-panel]")
          ?.getAttribute("data-panel");
        const editorRect = aceInput.parentElement.getBoundingClientRect();

        let position;
        const TOOLBAR_WIDTH = 280;
        const TOOLBAR_HEIGHT = 40;
        const MARGIN = 2;

        if (isBottomToTop) {
          position = {
            top: startPos.pageY - TOOLBAR_HEIGHT - MARGIN,
            left: startPos.pageX,
          };

          if (position.top < editorRect.top) {
            position.top = endPos.pageY + MARGIN;
          }
        } else {
          position = {
            top: endPos.pageY,
            left: endPos.pageX + MARGIN,
          };
        }

        const maxLeft = editorRect.right - TOOLBAR_WIDTH - MARGIN;
        position.left = Math.min(
          Math.max(position.left, editorRect.left + MARGIN),
          maxLeft
        );

        setSelection({
          text: aceSelectedText,
          wordCount: getWordCount(aceSelectedText),
        });
        setButtonPosition(position);
        setSelectedPanel(panel);
        setShowButton(true);
        return;
      }
    }

    if (selectedText) {
      const range = selection.getRangeAt(0);

      const rects = Array.from(range.getClientRects());
      const panel = selection.anchorNode.parentElement
        .closest("div[data-panel]")
        ?.getAttribute("data-panel");

      const isBottomToTop =
        selection.anchorNode.compareDocumentPosition(selection.focusNode) &
          Node.DOCUMENT_POSITION_PRECEDING ||
        (selection.anchorNode === selection.focusNode &&
          selection.anchorOffset > selection.focusOffset);

      const containerRect = selection.anchorNode.parentElement
        .closest("div[data-panel]")
        .getBoundingClientRect();

      let position;
      const TOOLBAR_WIDTH = 280;
      const TOOLBAR_HEIGHT = 40;
      const MARGIN = 5;

      if (isBottomToTop) {
        const topRect = rects.reduce(
          (min, rect) => (rect.top < min.top ? rect : min),
          rects[0]
        );
        position = {
          top: topRect.top + window.scrollY - TOOLBAR_HEIGHT - MARGIN,
          left: topRect.left,
        };

        if (position.top < containerRect.top) {
          position.top = topRect.bottom + window.scrollY + MARGIN;
        }
      } else {
        const bottomRect = rects.reduce(
          (max, rect) => (rect.bottom > max.bottom ? rect : max),
          rects[0]
        );
        position = {
          top: bottomRect.bottom + window.scrollY,
          left: bottomRect.right + MARGIN,
        };
      }

      const maxLeft = containerRect.right - TOOLBAR_WIDTH - MARGIN;
      position.left = Math.min(
        Math.max(position.left, containerRect.left + MARGIN),
        maxLeft
      );

      setSelection({
        text: selectedText,
        wordCount: getWordCount(selectedText),
      });
      setButtonPosition(position);
      setSelectedPanel(panel);
      setShowButton(true);
    } else {
      setShowButton(false);
    }
  };

  const renderPanelContent = (side) => {
    if (!isChatOpen) {
      return side === "left" ? children[0] : children[3];
    }

    if (side === "left") {
      return isRight ? (
        <ChatInterface
          isLeft={false}
          isHeader={true}
          onExpand={() => setLeftWidth(window.innerWidth)}
        />
      ) : (
        children[0]
      );
    } else {
      return isLeft ? (
        <ChatInterface
          isLeft={true}
          isHeader={true}
          onExpand={() => setLeftWidth(0)}
        />
      ) : (
        children[3]
      );
    }
  };

  const [isCollapsed, setIsCollapsed] = useState(false);

  useEffect(() => {
    if (isCollapsed) {
      setLeftWidth(0);
    }
  }, [isCollapsed]);

  return (
    <div className="flex h-full w-full bg-white">
      <div
        className="bg-white border h-full border-gray-300 shadow-md scrollbarhide overflow-y-scroll rounded-tr-xl"
        style={{ width: isCollapsed ? 0 : leftWidth }}
      >
        <div data-panel="left" onMouseUp={handleSelection} className="h-full">
          {renderPanelContent("left")}
        </div>
      </div>

      <div
        className="w-3 flex items-center cursor-col-resize hover:bg-blue-200"
        onMouseDown={(e) => handleMouseDown(e, "left")}
      >
        <FaEllipsisVertical size={20} className="text-gray-500" />
      </div>

      <div className="flex-1  border bg-[#f6f7f9] border-gray-300 shadow-md h-full overflow-y-scroll scrollbarhide rounded-tl-xl">
        {isChatOpen ? null : (
          <div className="flex justify-between w-full items-center">
            <div className="  inline-flex p-2 px-5 bg-white text-sm justify-center">
              main.cpp
            </div>
            <div className="flex items-center justify-center gap-3 mr-2">
              <RiResetRightFill size={16} className="text-gray-500" />
              {isCollapsed ? (
                <AiOutlineCompress
                  size={16}
                  className="text-gray-500"
                  onClick={() => {
                    setIsCollapsed(false);
                    setLeftWidth(window.innerWidth / 2);
                  }}
                />
              ) : (
                <AiOutlineExpand
                  size={16}
                  className="text-gray-500"
                  onClick={() => setIsCollapsed(true)}
                />
              )}
              <MdCopyAll size={16} className="text-gray-500" />
              <IoShareSocialOutline size={16} className="text-gray-500" />
              <button className="flex items-center justify-center p-1 px-3 gap-1  font-bold rounded-lg text-green-400">
                <FaPlay size={10} className="text-green-400" />
                Run
              </button>
            </div>
          </div>
        )}
        <div
          data-panel="right"
          onMouseUp={handleSelection}
          className="h-full w-full overflow-hidden"
        >
          {renderPanelContent("right")}
        </div>
      </div>

      {showButton && (
        <div
          style={{
            position: "fixed",
            top: `${buttonPosition.top}px`,
            left: `${buttonPosition.left}px`,
          }}
          className="selection-button bg-white shadow-lg rounded-lg border border-gray-200 flex items-center gap-2 p-1 z-50 animate-in fade-in duration-200"
        >
          <span className="text-xs text-gray-500 px-2 border-r">
            {selection.wordCount} {selection.wordCount === 1 ? "word" : "words"}
          </span>
          <button
            onClick={() => handleChatToggle()}
            className="flex items-center gap-1 px-2 py-1 hover:bg-gray-100 rounded text-sm"
          >
            <IoBookOutline className="w-4 h-4" />
            Explain
          </button>
          <button
            onClick={() => handleChatToggle()}
            className="flex items-center gap-1 px-2 py-1 hover:bg-gray-100 rounded text-sm"
          >
            <IoIosColorWand className="w-4 h-4" />
            Improve
          </button>
        </div>
      )}
    </div>
  );
}
