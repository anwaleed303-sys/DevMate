// "use client";

// import React, { useState, useRef, useEffect } from "react";
// import {
//   Card,
//   Input,
//   Button,
//   Space,
//   Typography,
//   Spin,
//   Avatar,
//   Grid,
// } from "antd";
// import {
//   SendOutlined,
//   UserOutlined,
//   RobotOutlined,
//   DeleteOutlined,
// } from "@ant-design/icons";
// import { useChat } from "../../lib/api/hooks/useChat";
// import ReactMarkdown from "react-markdown";

// const { TextArea } = Input;
// const { Text } = Typography;
// const { useBreakpoint } = Grid;

// export default function ChatPanel() {
//   const screens = useBreakpoint();
//   const { messages, isLoading, sendMessage, clearMessages } = useChat();
//   const [input, setInput] = useState("");
//   const messagesEndRef = useRef<HTMLDivElement>(null);

//   const isMobile = !screens.md;

//   useEffect(() => {
//     messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
//   }, [messages]);

//   const handleSend = async () => {
//     if (!input.trim() || isLoading) return;

//     await sendMessage(input);
//     setInput("");
//   };

//   const handleKeyPress = (e: React.KeyboardEvent) => {
//     if (e.key === "Enter" && !e.shiftKey) {
//       e.preventDefault();
//       handleSend();
//     }
//   };

//   return (
//     <Card
//       title={
//         <Space>
//           <RobotOutlined style={{ color: "#6366f1" }} />
//           <Text style={{ color: "rgba(255, 255, 255, 0.95)" }}>
//             AI Assistant
//           </Text>
//         </Space>
//       }
//       extra={
//         <Button
//           type="text"
//           icon={<DeleteOutlined />}
//           onClick={clearMessages}
//           disabled={messages.length === 0}
//           style={{ color: "rgba(255, 255, 255, 0.7)" }}
//           size={isMobile ? "small" : "middle"}
//         >
//           {!isMobile && "Clear"}
//         </Button>
//       }
//       style={{
//         height: "100%",
//         background: "rgba(31, 41, 55, 0.6)",
//         border: "1px solid rgba(99, 102, 241, 0.2)",
//         backdropFilter: "blur(10px)",
//       }}
//       styles={{
//         header: {
//           background: "rgba(17, 24, 39, 0.8)",
//           borderBottom: "1px solid rgba(99, 102, 241, 0.2)",
//         },
//         body: {
//           padding: isMobile ? "12px" : "16px",
//           display: "flex",
//           flexDirection: "column",
//           height: "calc(100% - 57px)",
//         },
//       }}
//     >
//       {/* Messages Container */}
//       <div
//         style={{
//           flex: 1,
//           overflowY: "auto",
//           marginBottom: "16px",
//           display: "flex",
//           flexDirection: "column",
//           gap: "12px",
//         }}
//       >
//         {messages.length === 0 && (
//           <div
//             style={{
//               display: "flex",
//               alignItems: "center",
//               justifyContent: "center",
//               height: "100%",
//               color: "rgba(255, 255, 255, 0.5)",
//               textAlign: "center",
//               padding: "20px",
//             }}
//           >
//             <div>
//               <RobotOutlined
//                 style={{ fontSize: "48px", marginBottom: "16px" }}
//               />
//               <div>Start a conversation with your AI coding assistant</div>
//             </div>
//           </div>
//         )}

//         {messages.map((message) => (
//           <div
//             key={message.id}
//             style={{
//               display: "flex",
//               gap: "12px",
//               alignItems: "flex-start",
//               flexDirection: message.role === "user" ? "row-reverse" : "row",
//             }}
//           >
//             <Avatar
//               icon={
//                 message.role === "user" ? <UserOutlined /> : <RobotOutlined />
//               }
//               style={{
//                 background:
//                   message.role === "user"
//                     ? "linear-gradient(135deg, #6366f1 0%, #8b5cf6 100%)"
//                     : "linear-gradient(135deg, #ec4899 0%, #f43f5e 100%)",
//                 flexShrink: 0,
//               }}
//             />

//             <div
//               style={{
//                 flex: 1,
//                 maxWidth: isMobile ? "85%" : "75%",
//                 background:
//                   message.role === "user"
//                     ? "rgba(99, 102, 241, 0.15)"
//                     : "rgba(31, 41, 55, 0.8)",
//                 padding: isMobile ? "10px 12px" : "12px 16px",
//                 borderRadius: "12px",
//                 border: "1px solid rgba(99, 102, 241, 0.2)",
//               }}
//             >
//               <div
//                 style={{
//                   color: "rgba(255, 255, 255, 0.95)",
//                   fontSize: isMobile ? "13px" : "14px",
//                   lineHeight: 1.6,
//                 }}
//               >
//                 {message.role === "assistant" ? (
//                   <ReactMarkdown
//                     components={{
//                       code: ({ node, inline, ...props }: any) =>
//                         inline ? (
//                           <code
//                             style={{
//                               background: "rgba(0, 0, 0, 0.3)",
//                               padding: "2px 6px",
//                               borderRadius: "4px",
//                               fontSize: "0.9em",
//                             }}
//                             {...props}
//                           />
//                         ) : (
//                           <pre
//                             style={{
//                               background: "rgba(0, 0, 0, 0.3)",
//                               padding: "12px",
//                               borderRadius: "8px",
//                               overflow: "auto",
//                               fontSize: "0.9em",
//                             }}
//                           >
//                             <code {...props} />
//                           </pre>
//                         ),
//                     }}
//                   >
//                     {message.content}
//                   </ReactMarkdown>
//                 ) : (
//                   message.content
//                 )}
//               </div>

//               <Text
//                 style={{
//                   fontSize: "11px",
//                   color: "rgba(255, 255, 255, 0.4)",
//                   marginTop: "4px",
//                   display: "block",
//                 }}
//               >
//                 {new Date(message.timestamp).toLocaleTimeString()}
//               </Text>
//             </div>
//           </div>
//         ))}

//         {isLoading && (
//           <div
//             style={{
//               display: "flex",
//               gap: "12px",
//               alignItems: "center",
//             }}
//           >
//             <Avatar
//               icon={<RobotOutlined />}
//               style={{
//                 background: "linear-gradient(135deg, #ec4899 0%, #f43f5e 100%)",
//               }}
//             />
//             <div
//               style={{
//                 background: "rgba(31, 41, 55, 0.8)",
//                 padding: "12px 16px",
//                 borderRadius: "12px",
//                 border: "1px solid rgba(99, 102, 241, 0.2)",
//               }}
//             >
//               <Spin size="small" />
//               <Text
//                 style={{
//                   marginLeft: "12px",
//                   color: "rgba(255, 255, 255, 0.7)",
//                 }}
//               >
//                 Thinking...
//               </Text>
//             </div>
//           </div>
//         )}

//         <div ref={messagesEndRef} />
//       </div>

//       {/* Input Area */}
//       <div style={{ display: "flex", gap: "8px" }}>
//         <TextArea
//           value={input}
//           onChange={(e) => setInput(e.target.value)}
//           onKeyPress={handleKeyPress}
//           placeholder="Ask me anything about coding..."
//           autoSize={{ minRows: 1, maxRows: 4 }}
//           disabled={isLoading}
//           style={{
//             background: "rgba(17, 24, 39, 0.8)",
//             border: "1px solid rgba(99, 102, 241, 0.2)",
//             color: "rgba(255, 255, 255, 0.95)",
//             borderRadius: "8px",
//             fontSize: isMobile ? "14px" : "15px",
//           }}
//         />
//         <Button
//           type="primary"
//           icon={<SendOutlined />}
//           onClick={handleSend}
//           disabled={!input.trim() || isLoading}
//           loading={isLoading}
//           style={{
//             background: "linear-gradient(135deg, #6366f1 0%, #8b5cf6 100%)",
//             border: "none",
//             height: "auto",
//             minHeight: "40px",
//           }}
//         >
//           {!isMobile && "Send"}
//         </Button>
//       </div>
//     </Card>
//   );
// }

"use client";

import React, { useState, useRef, useEffect } from "react";
import { Input, Button, Avatar, Typography } from "antd";
import { SendOutlined, UserOutlined, RobotOutlined } from "@ant-design/icons";

const { TextArea } = Input;
const { Text } = Typography;

interface Message {
  id: string;
  role: "user" | "assistant";
  content: string;
  timestamp: Date;
}

export default function ClaudeChatInterface() {
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const textAreaRef = useRef<any>(null);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  useEffect(() => {
    textAreaRef.current?.focus();
  }, []);

  const handleSend = async () => {
    if (!input.trim() || isLoading) return;

    const userMessage: Message = {
      id: Date.now().toString(),
      role: "user",
      content: input.trim(),
      timestamp: new Date(),
    };

    setMessages((prev) => [...prev, userMessage]);
    setInput("");
    setIsLoading(true);

    // Simulate AI response
    setTimeout(() => {
      const assistantMessage: Message = {
        id: (Date.now() + 1).toString(),
        role: "assistant",
        content: `I received your message: "${userMessage.content}". This is a demo response. In a real implementation, this would connect to an AI API.`,
        timestamp: new Date(),
      };
      setMessages((prev) => [...prev, assistantMessage]);
      setIsLoading(false);
    }, 1000);
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  };

  return (
    <div
      style={{
        width: "100%",
        height: "100vh",
        display: "flex",
        flexDirection: "column",
        background: "transparent",
      }}
    >
      {/* Messages Area */}
      <div
        style={{
          flex: 1,
          overflowY: "auto",
          padding: "24px 16px",
          display: "flex",
          flexDirection: "column",
        }}
      >
        <div
          style={{
            maxWidth: "800px",
            width: "100%",
            margin: "0 auto",
          }}
        >
          {messages.length === 0 && (
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                minHeight: "60vh",
                textAlign: "center",
              }}
            >
              <div
                style={{
                  fontSize: "48px",
                  marginBottom: "24px",
                  color: "#6366f1",
                }}
              >
                <RobotOutlined />
              </div>
              <Text
                style={{
                  fontSize: "24px",
                  fontWeight: 500,
                  color: "white",
                  display: "block",
                  marginBottom: "8px",
                }}
              >
                How can I help you today?
              </Text>
              <Text style={{ color: "#6b7280", fontSize: "15px" }}>
                I'm DevMate, an AI assistant. Ask me anything!
              </Text>
            </div>
          )}

          {messages.map((message) => (
            <div
              key={message.id}
              style={{
                display: "flex",
                gap: "16px",
                marginBottom: "32px",
                alignItems: "flex-start",
              }}
            >
              <Avatar
                size={36}
                icon={
                  message.role === "user" ? <UserOutlined /> : <RobotOutlined />
                }
                style={{
                  background: message.role === "user" ? "#6366f1" : "#ec4899",
                  flexShrink: 0,
                }}
              />
              <div style={{ flex: 1, minWidth: 0 }}>
                <Text
                  strong
                  style={{
                    display: "block",
                    marginBottom: "8px",
                    color: "#1f2937",
                    fontSize: "14px",
                  }}
                >
                  {message.role === "user" ? "You" : "DevMate"}
                </Text>
                <div
                  style={{
                    color: "white",
                    fontSize: "15px",
                    lineHeight: "1.7",
                    whiteSpace: "pre-wrap",
                    wordBreak: "break-word",
                  }}
                >
                  {message.content}
                </div>
              </div>
            </div>
          ))}

          {isLoading && (
            <div
              style={{
                display: "flex",
                gap: "16px",
                alignItems: "flex-start",
              }}
            >
              <Avatar
                size={36}
                icon={<RobotOutlined />}
                style={{ background: "#ec4899", flexShrink: 0 }}
              />
              <div>
                <Text
                  strong
                  style={{
                    display: "block",
                    marginBottom: "8px",
                    color: "white",
                    fontSize: "14px",
                  }}
                >
                  DevMate
                </Text>
                <div style={{ display: "flex", gap: "4px", padding: "4px 0" }}>
                  <span
                    style={{
                      width: "8px",
                      height: "8px",
                      borderRadius: "50%",
                      background: "#6b7280",
                      animation: "bounce 1.4s infinite ease-in-out both",
                      animationDelay: "0s",
                    }}
                  />
                  <span
                    style={{
                      width: "8px",
                      height: "8px",
                      borderRadius: "50%",
                      background: "#6b7280",
                      animation: "bounce 1.4s infinite ease-in-out both",
                      animationDelay: "0.16s",
                    }}
                  />
                  <span
                    style={{
                      width: "8px",
                      height: "8px",
                      borderRadius: "50%",
                      background: "#6b7280",
                      animation: "bounce 1.4s infinite ease-in-out both",
                      animationDelay: "0.32s",
                    }}
                  />
                </div>
              </div>
            </div>
          )}

          <div ref={messagesEndRef} />
        </div>
      </div>

      {/* Input Area */}
      <div
        style={{
          borderTop: "1px solid #6366f1",
          // background: "#ffffff",
          padding: "20px 16px",
        }}
      >
        <div
          style={{
            maxWidth: "800px",
            margin: "0 auto",
            position: "relative",
          }}
        >
          <TextArea
            ref={textAreaRef}
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyPress={handleKeyPress}
            placeholder="Message DevMate..."
            autoSize={{ minRows: 1, maxRows: 8 }}
            disabled={isLoading}
            style={{
              borderRadius: "24px",
              border: "1px solid #6366f1",
              fontSize: "15px",
              padding: "12px 56px 12px 20px",
              resize: "none",
              backgroundColor: "white",
              boxShadow: "0 1px 2px 0 rgba(0, 0, 0, 0.05)",
            }}
          />
          <Button
            type="text"
            icon={<SendOutlined style={{ fontSize: "18px" }} />}
            onClick={handleSend}
            disabled={!input.trim() || isLoading}
            style={{
              position: "absolute",
              right: "8px",
              bottom: "8px",
              width: "40px",
              height: "40px",
              borderRadius: "50%",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              background: input.trim() && !isLoading ? "#6366f1" : "#6366f1",
              color: input.trim() && !isLoading ? "#ffffff" : "#9ca3af",
              border: "none",
            }}
          />
        </div>
        <div
          style={{
            maxWidth: "800px",
            margin: "12px auto 0",
            textAlign: "center",
          }}
        >
          <Text
            style={{
              fontSize: "13px",
              color: "#6b7280",
            }}
          >
            DevMate can make mistakes. Please double-check responses.
          </Text>
        </div>
      </div>

      <style jsx global>{`
        @keyframes bounce {
          0%,
          80%,
          100% {
            transform: scale(0);
            opacity: 0.5;
          }
          40% {
            transform: scale(1);
            opacity: 1;
          }
        }
      `}</style>
    </div>
  );
}
