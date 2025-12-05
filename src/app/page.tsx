// "use client";
// import React, { useState, useEffect } from "react";
// import {
//   Layout,
//   Typography,
//   Button,
//   Card,
//   Row,
//   Col,
//   ConfigProvider,
//   Divider,
// } from "antd";
// import {
//   RocketOutlined,
//   ArrowRightOutlined,
//   MessageOutlined,
//   CodeOutlined,
//   ThunderboltOutlined,
//   BulbOutlined,
//   SyncOutlined,
//   ApiOutlined,
//   MailOutlined,
//   PhoneOutlined,
//   LinkedinOutlined,
// } from "@ant-design/icons";

// const { Title, Paragraph } = Typography;
// const { Footer } = Layout;

// interface FeatureCardProps {
//   icon: React.ReactNode;
//   title: string;
//   description: string;
//   gradient: string;
// }

// const FeatureCard: React.FC<FeatureCardProps> = ({
//   icon,
//   title,
//   description,
//   gradient,
// }) => {
//   return (
//     <Card
//       className="feature-card"
//       style={{
//         background: "rgba(31, 41, 55, 0.6)",
//         border: "1px solid rgba(99, 102, 241, 0.2)",
//         borderRadius: "16px",
//         backdropFilter: "blur(10px)",
//         transition: "all 0.3s ease",
//         height: "100%",
//       }}
//       hoverable
//     >
//       <div
//         className="feature-icon"
//         style={{
//           width: "56px",
//           height: "56px",
//           borderRadius: "12px",
//           background: gradient,
//           display: "flex",
//           alignItems: "center",
//           justifyContent: "center",
//           marginBottom: "1rem",
//           fontSize: "24px",
//           color: "white",
//         }}
//       >
//         {icon}
//       </div>
//       <Title
//         level={4}
//         style={{
//           color: "rgba(255, 255, 255, 0.95)",
//           marginBottom: "0.5rem",
//           fontSize: "1.25rem",
//         }}
//       >
//         {title}
//       </Title>
//       <Paragraph
//         style={{
//           color: "rgba(255, 255, 255, 0.7)",
//           marginBottom: 0,
//           lineHeight: 1.6,
//         }}
//       >
//         {description}
//       </Paragraph>
//     </Card>
//   );
// };

// export default function Home() {
//   const [isMounted, setIsMounted] = useState(false);

//   useEffect(() => {
//     setIsMounted(true);
//   }, []);

//   const particles = Array.from({ length: 30 }).map((_, i) => ({
//     id: i,
//     x: Math.random() * 100,
//     y: Math.random() * 100,
//     duration: 5 + Math.random() * 5,
//     delay: Math.random() * 2,
//     size: 1 + Math.random() * 1,
//   }));

//   const features: FeatureCardProps[] = [
//     {
//       icon: <MessageOutlined />,
//       title: "AI Chat Assistant",
//       description:
//         "Interactive chat interface with context-aware responses. Get instant help with your coding questions in multiple programming languages.",
//       gradient: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
//     },
//     {
//       icon: <CodeOutlined />,
//       title: "Smart Code Editor",
//       description:
//         "Built-in Monaco editor with real-time syntax highlighting, intelligent code suggestions, and inline popups powered by VSCode engine.",
//       gradient: "linear-gradient(135deg, #f093fb 0%, #f5576c 100%)",
//     },
//     {
//       icon: <ThunderboltOutlined />,
//       title: "Real-time Analysis",
//       description:
//         "Dynamic code insights with complexity analysis, performance metrics, and optimization suggestions as you type.",
//       gradient: "linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)",
//     },
//     {
//       icon: <BulbOutlined />,
//       title: "AI-Powered Refactoring",
//       description:
//         "Automated code refactoring with intelligent suggestions. Improve code quality, readability, and maintainability instantly.",
//       gradient: "linear-gradient(135deg, #43e97b 0%, #38f9d7 100%)",
//     },
//     {
//       icon: <SyncOutlined />,
//       title: "VS Code Integration",
//       description:
//         "Seamless integration with VS Code. Use right-click context menu actions and native extension features in your workflow.",
//       gradient: "linear-gradient(135deg, #fa709a 0%, #fee140 100%)",
//     },
//     {
//       icon: <ApiOutlined />,
//       title: "Multi-Model Support",
//       description:
//         "Powered by Groq's free LLaMA models with automatic fallback. Get the best AI responses with enterprise-grade reliability.",
//       gradient: "linear-gradient(135deg, #30cfd0 0%, #330867 100%)",
//     },
//   ];

//   const currentYear = new Date().getFullYear();

//   if (!isMounted) return null;

//   return (
//     <ConfigProvider
//       theme={{
//         token: {
//           colorPrimary: "#6366f1",
//           borderRadius: 12,
//           colorBgElevated: "rgba(17, 24, 39, 0.98)",
//           colorText: "rgba(255, 255, 255, 0.95)",
//           colorTextBase: "rgba(255, 255, 255, 0.95)",
//           colorBgContainer: "rgba(31, 41, 55, 0.85)",
//           colorBorder: "rgba(139, 92, 246, 0.2)",
//         },
//         components: {
//           Button: {
//             defaultBg: "rgba(99, 102, 241, 0.1)",
//             defaultBorderColor: "rgba(99, 102, 241, 0.3)",
//             defaultColor: "rgba(255, 255, 255, 0.9)",
//           },
//         },
//       }}
//     >
//       <Layout
//         style={{
//           minHeight: "100vh",
//           background: "#0a0e1a",
//           position: "relative",
//           overflow: "hidden",
//         }}
//       >
//         <div className="ai-badge">
//           <span className="badge-dot" />
//           <span className="badge-text">Let's with AI</span>
//         </div>

//         {/* AI Animated Background */}
//         <div className="ai-background">
//           <div className="gradient-mesh">
//             <div className="gradient-orb gradient-orb-1" />
//             <div className="gradient-orb gradient-orb-2" />
//             <div className="gradient-orb gradient-orb-3" />
//             <div className="gradient-orb gradient-orb-4" />
//           </div>

//           <div className="grid-pattern" />

//           <div className="particle-field">
//             {particles.map((particle) => (
//               <div
//                 key={particle.id}
//                 className="particle"
//                 style={
//                   {
//                     "--x": `${particle.x}%`,
//                     "--y": `${particle.y}%`,
//                     "--duration": `${particle.duration}s`,
//                     "--delay": `${particle.delay}s`,
//                     "--size": `${particle.size}px`,
//                   } as React.CSSProperties
//                 }
//               />
//             ))}
//           </div>
//         </div>

//         {/* Content */}
//         <div className="content-container">
//           <div className="hero-content">
//             <Title
//               level={1}
//               style={{
//                 color: "rgba(255, 255, 255, 0.98)",
//                 fontSize: "clamp(2.5rem, 8vw, 5rem)",
//                 fontWeight: 800,
//                 marginBottom: "0.5rem",
//                 marginTop: "1.5rem",
//                 textAlign: "center",
//                 lineHeight: 1.2,
//                 letterSpacing: "-0.02em",
//               }}
//             >
//               DevMate <span className="gradient-text">Agent</span>
//             </Title>
//             <br />
//             <Paragraph
//               style={{
//                 color: "rgba(255, 255, 255, 0.75)",
//                 fontSize: "clamp(1rem, 2.5vw, 1.5rem)",
//                 maxWidth: "700px",
//                 margin: "0 auto 2.5rem",
//                 textAlign: "center",
//                 lineHeight: 1.6,
//               }}
//             >
//               Code Smarter, Faster, Better – AI Assistance That Elevates <br />{" "}
//               Your Development.
//             </Paragraph>
//             <div className="cta-buttons">
//               <Button
//                 type="primary"
//                 size="large"
//                 icon={<RocketOutlined />}
//                 className="primary-cta"
//                 style={{
//                   height: "auto",
//                   padding: "14px 32px",
//                   fontSize: "clamp(0.95rem, 2vw, 1.1rem)",
//                   fontWeight: 600,
//                   background:
//                     "linear-gradient(135deg, #6366f1 0%, #8b5cf6 100%)",
//                   border: "none",
//                   boxShadow:
//                     "0 8px 24px rgba(99, 102, 241, 0.4), 0 0 0 1px rgba(99, 102, 241, 0.1)",
//                 }}
//               >
//                 Get Started
//               </Button>
//               <Button
//                 size="large"
//                 icon={<ArrowRightOutlined />}
//                 className="secondary-cta"
//                 style={{
//                   height: "auto",
//                   padding: "14px 32px",
//                   fontSize: "clamp(0.95rem, 2vw, 1.1rem)",
//                   fontWeight: 600,
//                   background: "rgba(255, 255, 255, 0.1)",
//                   border: "1px solid rgba(255, 255, 255, 0.2)",
//                   color: "rgba(255, 255, 255, 0.95)",
//                   backdropFilter: "blur(10px)",
//                 }}
//               >
//                 Learn More
//               </Button>
//             </div>
//             {/* Feature Cards Section */}
//             <div
//               style={{
//                 marginTop: "5rem",
//                 maxWidth: "1200px",
//                 margin: "5rem auto 0",
//               }}
//             >
//               <Title
//                 level={2}
//                 style={{
//                   color: "rgba(255, 255, 255, 0.98)",
//                   textAlign: "center",
//                   marginBottom: "1rem",
//                   fontSize: "clamp(1.75rem, 5vw, 2.5rem)",
//                   fontWeight: 700,
//                 }}
//               >
//                 Powerful <span className="gradient-text">Features</span>
//               </Title>
//               <Paragraph
//                 style={{
//                   color: "rgba(255, 255, 255, 0.7)",
//                   textAlign: "center",
//                   marginBottom: "3rem",
//                   fontSize: "clamp(0.95rem, 2vw, 1.1rem)",
//                 }}
//               >
//                 Everything you need to supercharge your development workflow
//               </Paragraph>

//               <Row gutter={[24, 24]}>
//                 {features.map((feature, index) => (
//                   <Col
//                     key={index}
//                     xs={24}
//                     sm={12}
//                     lg={8}
//                     style={{
//                       animation: `fade-in-up 0.6s ease-out ${
//                         index * 0.1
//                       }s backwards`,
//                     }}
//                   >
//                     <FeatureCard {...feature} />
//                   </Col>
//                 ))}
//               </Row>
//             </div>
//           </div>
//         </div>

//         {/* Footer */}
//         <Footer
//           style={{
//             background: "rgba(17, 24, 39, 0.95)",
//             borderTop: "1px solid rgba(99, 102, 241, 0.2)",
//             backdropFilter: "blur(10px)",
//             position: "relative",
//             zIndex: 1,
//             padding: "3rem 2rem 1.5rem",
//           }}
//         >
//           <div
//             style={{
//               maxWidth: "1200px",
//               margin: "0 auto",
//             }}
//           >
//             <Row gutter={[32, 32]} justify="space-between" align="top">
//               {/* Brand Section */}
//               <Col xs={24} sm={24} md={8}>
//                 <Title
//                   level={3}
//                   style={{
//                     color: "rgba(255, 255, 255, 0.98)",
//                     marginBottom: "1rem",
//                     fontSize: "1.5rem",
//                   }}
//                 >
//                   DevMate <span className="gradient-text">Agent</span>
//                 </Title>
//                 <Paragraph
//                   style={{
//                     color: "rgba(255, 255, 255, 0.7)",
//                     marginBottom: "1.5rem",
//                     lineHeight: 1.6,
//                   }}
//                 >
//                   Your intelligent development companion for AI-powered coding
//                   assistance.
//                 </Paragraph>
//               </Col>

//               {/* Contact Information */}
//               <Col xs={24} sm={12} md={8}>
//                 <Title
//                   level={4}
//                   style={{
//                     color: "rgba(255, 255, 255, 0.95)",
//                     marginBottom: "1rem",
//                     fontSize: "1.1rem",
//                   }}
//                 >
//                   Contact Developer
//                 </Title>
//                 <div
//                   style={{
//                     display: "flex",
//                     flexDirection: "column",
//                     gap: "0.75rem",
//                   }}
//                 >
//                   <a
//                     href="tel:+923407615594"
//                     style={{
//                       color: "rgba(255, 255, 255, 0.7)",
//                       textDecoration: "none",
//                       display: "flex",
//                       alignItems: "center",
//                       gap: "0.5rem",
//                       transition: "color 0.3s ease",
//                     }}
//                     className="footer-link"
//                   >
//                     <PhoneOutlined style={{ fontSize: "16px" }} />
//                     <span>+92 340 7615594</span>
//                   </a>
//                   <a
//                     href="mailto:Waleedancoding@gmail.com"
//                     style={{
//                       color: "rgba(255, 255, 255, 0.7)",
//                       textDecoration: "none",
//                       display: "flex",
//                       alignItems: "center",
//                       gap: "0.5rem",
//                       transition: "color 0.3s ease",
//                     }}
//                     className="footer-link"
//                   >
//                     <MailOutlined style={{ fontSize: "16px" }} />
//                     <span>Waleedancoding@gmail.com</span>
//                   </a>
//                   <a
//                     href="https://www.linkedin.com/in/waleed-an-02204a316"
//                     target="_blank"
//                     rel="noopener noreferrer"
//                     style={{
//                       color: "rgba(255, 255, 255, 0.7)",
//                       textDecoration: "none",
//                       display: "flex",
//                       alignItems: "center",
//                       gap: "0.5rem",
//                       transition: "color 0.3s ease",
//                     }}
//                     className="footer-link"
//                   >
//                     <LinkedinOutlined style={{ fontSize: "16px" }} />
//                     <span>LinkedIn Profile</span>
//                   </a>
//                 </div>
//               </Col>

//               {/* Quick Links */}
//               <Col xs={24} sm={12} md={8}>
//                 <Title
//                   level={4}
//                   style={{
//                     color: "rgba(255, 255, 255, 0.95)",
//                     marginBottom: "1rem",
//                     fontSize: "1.1rem",
//                   }}
//                 >
//                   Quick Links
//                 </Title>
//                 <div
//                   style={{
//                     display: "flex",
//                     flexDirection: "column",
//                     gap: "0.75rem",
//                   }}
//                 >
//                   <a
//                     href="#"
//                     style={{
//                       color: "rgba(255, 255, 255, 0.7)",
//                       textDecoration: "none",
//                       transition: "color 0.3s ease",
//                     }}
//                     className="footer-link"
//                   >
//                     Documentation
//                   </a>
//                   <a
//                     href="#"
//                     style={{
//                       color: "rgba(255, 255, 255, 0.7)",
//                       textDecoration: "none",
//                       transition: "color 0.3s ease",
//                     }}
//                     className="footer-link"
//                   >
//                     Features
//                   </a>
//                   <a
//                     href="#"
//                     style={{
//                       color: "rgba(255, 255, 255, 0.7)",
//                       textDecoration: "none",
//                       transition: "color 0.3s ease",
//                     }}
//                     className="footer-link"
//                   >
//                     Get Started
//                   </a>
//                 </div>
//               </Col>
//             </Row>

//             <Divider
//               style={{
//                 borderColor: "rgba(99, 102, 241, 0.2)",
//                 margin: "2rem 0 1.5rem",
//               }}
//             />

//             {/* Copyright */}
//             <div
//               style={{
//                 textAlign: "center",
//                 color: "rgba(255, 255, 255, 0.6)",
//                 fontSize: "0.9rem",
//               }}
//             >
//               <Paragraph
//                 style={{
//                   color: "rgba(255, 255, 255, 0.6)",
//                   marginBottom: "0.5rem",
//                 }}
//               >
//                 © {currentYear} DevMate Agent. Developed by{" "}
//                 <span
//                   style={{
//                     color: "rgba(255, 255, 255, 0.9)",
//                     fontWeight: 600,
//                   }}
//                 >
//                   Waleed AN
//                 </span>
//               </Paragraph>
//               <Paragraph
//                 style={{
//                   color: "rgba(255, 255, 255, 0.5)",
//                   marginBottom: 0,
//                   fontSize: "0.85rem",
//                 }}
//               >
//                 All rights reserved.
//               </Paragraph>
//             </div>
//           </div>
//         </Footer>

//         <style jsx>{`
//           .ai-background {
//             position: fixed;
//             top: 0;
//             left: 0;
//             width: 100%;
//             height: 100%;
//             background: radial-gradient(
//                 ellipse at top,
//                 rgba(99, 102, 241, 0.15) 0%,
//                 transparent 50%
//               ),
//               radial-gradient(
//                 ellipse at bottom,
//                 rgba(139, 92, 246, 0.15) 0%,
//                 transparent 50%
//               ),
//               #0a0e1a;
//             overflow: hidden;
//             z-index: 0;
//           }

//           .gradient-mesh {
//             position: absolute;
//             width: 100%;
//             height: 100%;
//             filter: blur(100px);
//             opacity: 0.7;
//           }

//           .gradient-orb {
//             position: absolute;
//             border-radius: 50%;
//             animation: orb-float 20s ease-in-out infinite;
//           }

//           .gradient-orb-1 {
//             width: 600px;
//             height: 600px;
//             background: radial-gradient(
//               circle,
//               rgba(99, 102, 241, 0.4) 0%,
//               transparent 70%
//             );
//             top: -10%;
//             left: -10%;
//             animation-delay: 0s;
//           }

//           .gradient-orb-2 {
//             width: 500px;
//             height: 500px;
//             background: radial-gradient(
//               circle,
//               rgba(139, 92, 246, 0.3) 0%,
//               transparent 70%
//             );
//             bottom: -15%;
//             right: -10%;
//             animation-delay: 5s;
//           }

//           .gradient-orb-3 {
//             width: 400px;
//             height: 400px;
//             background: radial-gradient(
//               circle,
//               rgba(168, 85, 247, 0.25) 0%,
//               transparent 70%
//             );
//             top: 50%;
//             left: 50%;
//             transform: translate(-50%, -50%);
//             animation-delay: 10s;
//           }

//           .gradient-orb-4 {
//             width: 350px;
//             height: 350px;
//             background: radial-gradient(
//               circle,
//               rgba(124, 58, 237, 0.2) 0%,
//               transparent 70%
//             );
//             top: 30%;
//             right: 20%;
//             animation-delay: 15s;
//           }

//           .grid-pattern {
//             position: absolute;
//             width: 100%;
//             height: 100%;
//             background-image: linear-gradient(
//                 rgba(99, 102, 241, 0.1) 1px,
//                 transparent 1px
//               ),
//               linear-gradient(
//                 90deg,
//                 rgba(99, 102, 241, 0.1) 1px,
//                 transparent 1px
//               );
//             background-size: 50px 50px;
//             opacity: 0.3;
//             animation: grid-drift 30s linear infinite;
//           }

//           .particle-field {
//             position: absolute;
//             width: 100%;
//             height: 100%;
//           }

//           .particle {
//             position: absolute;
//             width: var(--size);
//             height: var(--size);
//             background: radial-gradient(
//               circle,
//               rgba(99, 102, 241, 0.8) 0%,
//               rgba(139, 92, 246, 0.4) 100%
//             );
//             border-radius: 50%;
//             top: var(--y);
//             left: var(--x);
//             animation: particle-float var(--duration) ease-in-out var(--delay)
//               infinite;
//             box-shadow: 0 0 10px rgba(99, 102, 241, 0.5);
//           }

//           .content-container {
//             position: relative;
//             z-index: 1;
//             display: flex;
//             align-items: center;
//             justify-content: center;
//             min-height: 100vh;
//             padding: 2rem;
//           }

//           .hero-content {
//             max-width: 1200px;
//             width: 100%;
//             animation: fade-in-up 1s ease-out;
//             padding-bottom: 4rem;
//           }

//           .ai-badge {
//             position: absolute;
//             top: 20px;
//             left: 50px;
//             display: flex;
//             align-items: center;
//             gap: 8px;
//             padding: 8px 20px;
//             background: rgba(99, 102, 241, 0.15);
//             border: 1px solid rgba(99, 102, 241, 0.3);
//             border-radius: 100px;
//             backdrop-filter: blur(10px);
//             z-index: 2;
//           }

//           .badge-dot {
//             width: 8px;
//             height: 8px;
//             background: #6366f1;
//             border-radius: 50%;
//             box-shadow: 0 0 10px rgba(99, 102, 241, 0.8);
//             animation: pulse-dot 2s ease-in-out infinite;
//           }

//           .badge-text {
//             color: rgba(255, 255, 255, 0.9);
//             font-size: 0.875rem;
//             font-weight: 600;
//             letter-spacing: 0.05em;
//           }

//           .gradient-text {
//             background: linear-gradient(
//               135deg,
//               #6366f1 0%,
//               #a855f7 50%,
//               #ec4899 100%
//             );
//             -webkit-background-clip: text;
//             -webkit-text-fill-color: transparent;
//             background-clip: text;
//             animation: gradient-shift 3s ease infinite;
//             background-size: 200% 200%;
//           }

//           .cta-buttons {
//             display: flex;
//             gap: 1rem;
//             justify-content: center;
//             flex-wrap: wrap;
//             margin-bottom: 3rem;
//           }

//           .primary-cta:hover {
//             transform: translateY(-2px);
//             box-shadow: 0 12px 32px rgba(99, 102, 241, 0.5) !important;
//           }

//           .secondary-cta:hover {
//             background: rgba(255, 255, 255, 0.15) !important;
//             border-color: rgba(255, 255, 255, 0.3) !important;
//             transform: translateY(-2px);
//           }

//           .footer-link:hover {
//             color: rgba(99, 102, 241, 0.9) !important;
//           }

//           :global(.feature-card:hover) {
//             transform: translateY(-8px);
//             border-color: rgba(99, 102, 241, 0.4) !important;
//             box-shadow: 0 20px 40px rgba(0, 0, 0, 0.3),
//               0 0 0 1px rgba(99, 102, 241, 0.2);
//           }

//           :global(.feature-icon) {
//             transition: transform 0.3s ease;
//           }

//           :global(.feature-card:hover .feature-icon) {
//             transform: scale(1.1) rotate(5deg);
//           }

//           @keyframes orb-float {
//             0%,
//             100% {
//               transform: translate(0, 0) scale(1);
//             }
//             33% {
//               transform: translate(30px, -30px) scale(1.1);
//             }
//             66% {
//               transform: translate(-20px, 20px) scale(0.9);
//             }
//           }

//           @keyframes grid-drift {
//             0% {
//               transform: translate(0, 0);
//             }
//             100% {
//               transform: translate(50px, 50px);
//             }
//           }

//           @keyframes particle-float {
//             0%,
//             100% {
//               transform: translate(0, 0) scale(1);
//               opacity: 0.6;
//             }
//             25% {
//               transform: translate(30px, -40px) scale(1.3);
//               opacity: 1;
//             }
//             50% {
//               transform: translate(-25px, 30px) scale(0.8);
//               opacity: 0.4;
//             }
//             75% {
//               transform: translate(20px, 20px) scale(1.2);
//               opacity: 0.9;
//             }
//           }

//           @keyframes fade-in-up {
//             from {
//               opacity: 0;
//               transform: translateY(30px);
//             }
//             to {
//               opacity: 1;
//               transform: translateY(0);
//             }
//           }

//           @keyframes pulse-dot {
//             0%,
//             100% {
//               transform: scale(1);
//               opacity: 1;
//             }
//             50% {
//               transform: scale(1.2);
//               opacity: 0.8;
//             }
//           }

//           @keyframes gradient-shift {
//             0%,
//             100% {
//               background-position: 0% 50%;
//             }
//             50% {
//               background-position: 100% 50%;
//             }
//           }
//           /* Custom Scrollbar Styling */
//           :global(::-webkit-scrollbar) {
//             width: 10px;
//             height: 10px;
//           }

//           :global(::-webkit-scrollbar-track) {
//             background: rgba(17, 24, 39, 0.8);
//             border-radius: 10px;
//           }

//           :global(::-webkit-scrollbar-thumb) {
//             background: linear-gradient(135deg, #6366f1 0%, #8b5cf6 100%);
//             border-radius: 10px;
//             border: 2px solid rgba(17, 24, 39, 0.8);
//           }

//           :global(::-webkit-scrollbar-thumb:hover) {
//             background: linear-gradient(135deg, #7c7ff5 0%, #9d6ff8 100%);
//             box-shadow: 0 0 10px rgba(99, 102, 241, 0.5);
//           }

//           /* Firefox Scrollbar */
//           :global(html) {
//             scrollbar-width: thin;
//             scrollbar-color: #6366f1 rgba(17, 24, 39, 0.8);
//           }

//           @media (max-width: 768px) {
//             .content-container {
//               padding: 1.5rem;
//             }

//             .ai-badge {
//               left: 1rem;
//               top: 1rem;
//             }

//             .gradient-orb {
//               filter: blur(80px);
//             }

//             .grid-pattern {
//               background-size: 40px 40px;
//               opacity: 0.2;
//             }

//             .particle {
//               display: none;
//             }

//             .cta-buttons {
//               flex-direction: column;
//               align-items: stretch;
//             }

//             .cta-buttons button {
//               width: 100%;
//             }
//           }

//           @media (max-width: 480px) {
//             .content-container {
//               padding: 1rem;
//             }

//             .gradient-mesh {
//               filter: blur(60px);
//             }

//             .ai-badge {
//               padding: 6px 16px;
//             }

//             .badge-text {
//               font-size: 0.75rem;
//             }

//             :global(.ant-layout-footer) {
//               padding: 2rem 1rem 1rem !important;
//             }
//           }
//         `}</style>
//       </Layout>
//     </ConfigProvider>
//   );
// }

"use client";
import React, { useState, useEffect } from "react";
import {
  Layout,
  Typography,
  Button,
  Card,
  Row,
  Col,
  ConfigProvider,
  Divider,
} from "antd";
import {
  RocketOutlined,
  ArrowRightOutlined,
  MessageOutlined,
  CodeOutlined,
  ThunderboltOutlined,
  BulbOutlined,
  SyncOutlined,
  ApiOutlined,
  MailOutlined,
  PhoneOutlined,
  LinkedinOutlined,
} from "@ant-design/icons";

const { Title, Paragraph } = Typography;
const { Footer } = Layout;

interface FeatureCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  gradient: string;
}

const FeatureCard: React.FC<FeatureCardProps> = ({
  icon,
  title,
  description,
  gradient,
}) => {
  return (
    <Card
      className="feature-card"
      style={{
        background: "rgba(31, 41, 55, 0.6)",
        border: "1px solid rgba(99, 102, 241, 0.2)",
        borderRadius: "16px",
        backdropFilter: "blur(10px)",
        transition: "all 0.3s ease",
        height: "100%",
      }}
      hoverable
    >
      <div
        className="feature-icon"
        style={{
          width: "56px",
          height: "56px",
          borderRadius: "12px",
          background: gradient,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          marginBottom: "1rem",
          fontSize: "24px",
          color: "white",
        }}
      >
        {icon}
      </div>
      <Title
        level={4}
        style={{
          color: "rgba(255, 255, 255, 0.95)",
          marginBottom: "0.5rem",
          fontSize: "1.25rem",
        }}
      >
        {title}
      </Title>
      <Paragraph
        style={{
          color: "rgba(255, 255, 255, 0.7)",
          marginBottom: 0,
          lineHeight: 1.6,
        }}
      >
        {description}
      </Paragraph>
    </Card>
  );
};

export default function Home() {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  const handleGetStarted = () => {
    // Redirect to dashboard
    window.location.href = "/dashboard";
  };

  const handleLearnMore = () => {
    // Scroll to features section
    document.getElementById("features")?.scrollIntoView({ behavior: "smooth" });
  };

  const particles = Array.from({ length: 30 }).map((_, i) => ({
    id: i,
    x: Math.random() * 100,
    y: Math.random() * 100,
    duration: 5 + Math.random() * 5,
    delay: Math.random() * 2,
    size: 1 + Math.random() * 1,
  }));

  const features: FeatureCardProps[] = [
    {
      icon: <MessageOutlined />,
      title: "AI Chat Assistant",
      description:
        "Interactive chat interface with context-aware responses. Get instant help with your coding questions in multiple programming languages.",
      gradient: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
    },
    {
      icon: <CodeOutlined />,
      title: "Smart Code Editor",
      description:
        "Built-in Monaco editor with real-time syntax highlighting, intelligent code suggestions, and inline popups powered by VSCode engine.",
      gradient: "linear-gradient(135deg, #f093fb 0%, #f5576c 100%)",
    },
    {
      icon: <ThunderboltOutlined />,
      title: "Real-time Analysis",
      description:
        "Dynamic code insights with complexity analysis, performance metrics, and optimization suggestions as you type.",
      gradient: "linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)",
    },
    {
      icon: <BulbOutlined />,
      title: "AI-Powered Refactoring",
      description:
        "Automated code refactoring with intelligent suggestions. Improve code quality, readability, and maintainability instantly.",
      gradient: "linear-gradient(135deg, #43e97b 0%, #38f9d7 100%)",
    },
    {
      icon: <SyncOutlined />,
      title: "VS Code Integration",
      description:
        "Seamless integration with VS Code. Use right-click context menu actions and native extension features in your workflow.",
      gradient: "linear-gradient(135deg, #fa709a 0%, #fee140 100%)",
    },
    {
      icon: <ApiOutlined />,
      title: "Multi-Model Support",
      description:
        "Powered by Groq's free LLaMA models with automatic fallback. Get the best AI responses with enterprise-grade reliability.",
      gradient: "linear-gradient(135deg, #30cfd0 0%, #330867 100%)",
    },
  ];

  const currentYear = new Date().getFullYear();

  if (!isMounted) return null;

  return (
    <ConfigProvider
      theme={{
        token: {
          colorPrimary: "#6366f1",
          borderRadius: 12,
          colorBgElevated: "rgba(17, 24, 39, 0.98)",
          colorText: "rgba(255, 255, 255, 0.95)",
          colorTextBase: "rgba(255, 255, 255, 0.95)",
          colorBgContainer: "rgba(31, 41, 55, 0.85)",
          colorBorder: "rgba(139, 92, 246, 0.2)",
        },
        components: {
          Button: {
            defaultBg: "rgba(99, 102, 241, 0.1)",
            defaultBorderColor: "rgba(99, 102, 241, 0.3)",
            defaultColor: "rgba(255, 255, 255, 0.9)",
          },
        },
      }}
    >
      <Layout
        style={{
          minHeight: "100vh",
          background: "#0a0e1a",
          position: "relative",
          overflow: "hidden",
        }}
      >
        <div className="ai-badge">
          <span className="badge-dot" />
          <span className="badge-text">Powered by AI</span>
        </div>

        {/* AI Animated Background */}
        <div className="ai-background">
          <div className="gradient-mesh">
            <div className="gradient-orb gradient-orb-1" />
            <div className="gradient-orb gradient-orb-2" />
            <div className="gradient-orb gradient-orb-3" />
            <div className="gradient-orb gradient-orb-4" />
          </div>

          <div className="grid-pattern" />

          <div className="particle-field">
            {particles.map((particle) => (
              <div
                key={particle.id}
                className="particle"
                style={
                  {
                    "--x": `${particle.x}%`,
                    "--y": `${particle.y}%`,
                    "--duration": `${particle.duration}s`,
                    "--delay": `${particle.delay}s`,
                    "--size": `${particle.size}px`,
                  } as React.CSSProperties
                }
              />
            ))}
          </div>
        </div>

        {/* Content */}
        <div className="content-container">
          <div className="hero-content">
            <Title
              level={1}
              style={{
                color: "rgba(255, 255, 255, 0.98)",
                fontSize: "clamp(2.5rem, 8vw, 5rem)",
                fontWeight: 800,
                marginBottom: "0.5rem",
                marginTop: "1.5rem",
                textAlign: "center",
                lineHeight: 1.2,
                letterSpacing: "-0.02em",
              }}
            >
              DevMate <span className="gradient-text">Agent</span>
            </Title>
            <br />
            <Paragraph
              style={{
                color: "rgba(255, 255, 255, 0.75)",
                fontSize: "clamp(1rem, 2.5vw, 1.5rem)",
                maxWidth: "700px",
                margin: "0 auto 2.5rem",
                textAlign: "center",
                lineHeight: 1.6,
              }}
            >
              Code Smarter, Faster, Better – AI Assistance That Elevates <br />{" "}
              Your Development.
            </Paragraph>
            <div className="cta-buttons">
              <Button
                type="primary"
                size="large"
                icon={<RocketOutlined />}
                className="primary-cta"
                onClick={handleGetStarted}
                style={{
                  height: "auto",
                  padding: "14px 32px",
                  fontSize: "clamp(0.95rem, 2vw, 1.1rem)",
                  fontWeight: 600,
                  background:
                    "linear-gradient(135deg, #6366f1 0%, #8b5cf6 100%)",
                  border: "none",
                  boxShadow:
                    "0 8px 24px rgba(99, 102, 241, 0.4), 0 0 0 1px rgba(99, 102, 241, 0.1)",
                }}
              >
                Get Started
              </Button>
              <Button
                size="large"
                icon={<ArrowRightOutlined />}
                className="secondary-cta"
                onClick={handleLearnMore}
                style={{
                  height: "auto",
                  padding: "14px 32px",
                  fontSize: "clamp(0.95rem, 2vw, 1.1rem)",
                  fontWeight: 600,
                  background: "rgba(255, 255, 255, 0.1)",
                  border: "1px solid rgba(255, 255, 255, 0.2)",
                  color: "rgba(255, 255, 255, 0.95)",
                  backdropFilter: "blur(10px)",
                }}
              >
                Learn More
              </Button>
            </div>

            {/* Feature Cards Section */}
            <div
              id="features"
              style={{
                marginTop: "5rem",
                maxWidth: "1200px",
                margin: "5rem auto 0",
              }}
            >
              <Title
                level={2}
                style={{
                  color: "rgba(255, 255, 255, 0.98)",
                  textAlign: "center",
                  marginBottom: "1rem",
                  fontSize: "clamp(1.75rem, 5vw, 2.5rem)",
                  fontWeight: 700,
                }}
              >
                Powerful <span className="gradient-text">Features</span>
              </Title>
              <Paragraph
                style={{
                  color: "rgba(255, 255, 255, 0.7)",
                  textAlign: "center",
                  marginBottom: "3rem",
                  fontSize: "clamp(0.95rem, 2vw, 1.1rem)",
                }}
              >
                Everything you need to supercharge your development workflow
              </Paragraph>

              <Row gutter={[24, 24]}>
                {features.map((feature, index) => (
                  <Col
                    key={index}
                    xs={24}
                    sm={12}
                    lg={8}
                    style={{
                      animation: `fade-in-up 0.6s ease-out ${
                        index * 0.1
                      }s backwards`,
                    }}
                  >
                    <FeatureCard {...feature} />
                  </Col>
                ))}
              </Row>
            </div>
          </div>
        </div>

        {/* Footer */}
        <Footer
          style={{
            background: "rgba(17, 24, 39, 0.95)",
            borderTop: "1px solid rgba(99, 102, 241, 0.2)",
            backdropFilter: "blur(10px)",
            position: "relative",
            zIndex: 1,
            padding: "3rem 2rem 1.5rem",
          }}
        >
          <div
            style={{
              maxWidth: "1200px",
              margin: "0 auto",
            }}
          >
            <Row gutter={[32, 32]} justify="space-between" align="top">
              {/* Brand Section */}
              <Col xs={24} sm={24} md={8}>
                <Title
                  level={3}
                  style={{
                    color: "rgba(255, 255, 255, 0.98)",
                    marginBottom: "1rem",
                    fontSize: "1.5rem",
                  }}
                >
                  DevMate <span className="gradient-text">Agent</span>
                </Title>
                <Paragraph
                  style={{
                    color: "rgba(255, 255, 255, 0.7)",
                    marginBottom: "1.5rem",
                    lineHeight: 1.6,
                  }}
                >
                  Your intelligent development companion for AI-powered coding
                  assistance.
                </Paragraph>
              </Col>

              {/* Contact Information */}
              <Col xs={24} sm={12} md={8}>
                <Title
                  level={4}
                  style={{
                    color: "rgba(255, 255, 255, 0.95)",
                    marginBottom: "1rem",
                    fontSize: "1.1rem",
                  }}
                >
                  Contact Developer
                </Title>
                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    gap: "0.75rem",
                  }}
                >
                  <a
                    href="tel:+923407615594"
                    style={{
                      color: "rgba(255, 255, 255, 0.7)",
                      textDecoration: "none",
                      display: "flex",
                      alignItems: "center",
                      gap: "0.5rem",
                      transition: "color 0.3s ease",
                    }}
                    className="footer-link"
                  >
                    <PhoneOutlined style={{ fontSize: "16px" }} />
                    <span>+92 340 7615594</span>
                  </a>
                  <a
                    href="mailto:Waleedancoding@gmail.com"
                    style={{
                      color: "rgba(255, 255, 255, 0.7)",
                      textDecoration: "none",
                      display: "flex",
                      alignItems: "center",
                      gap: "0.5rem",
                      transition: "color 0.3s ease",
                    }}
                    className="footer-link"
                  >
                    <MailOutlined style={{ fontSize: "16px" }} />
                    <span>Waleedancoding@gmail.com</span>
                  </a>
                  <a
                    href="https://www.linkedin.com/in/waleed-an-02204a316"
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{
                      color: "rgba(255, 255, 255, 0.7)",
                      textDecoration: "none",
                      display: "flex",
                      alignItems: "center",
                      gap: "0.5rem",
                      transition: "color 0.3s ease",
                    }}
                    className="footer-link"
                  >
                    <LinkedinOutlined style={{ fontSize: "16px" }} />
                    <span>LinkedIn Profile</span>
                  </a>
                </div>
              </Col>

              {/* Quick Links */}
              <Col xs={24} sm={12} md={8}>
                <Title
                  level={4}
                  style={{
                    color: "rgba(255, 255, 255, 0.95)",
                    marginBottom: "1rem",
                    fontSize: "1.1rem",
                  }}
                >
                  Quick Links
                </Title>
                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    gap: "0.75rem",
                  }}
                >
                  <a
                    href="/dashboard"
                    style={{
                      color: "rgba(255, 255, 255, 0.7)",
                      textDecoration: "none",
                      transition: "color 0.3s ease",
                    }}
                    className="footer-link"
                  >
                    Dashboard
                  </a>
                  <a
                    href="#features"
                    style={{
                      color: "rgba(255, 255, 255, 0.7)",
                      textDecoration: "none",
                      transition: "color 0.3s ease",
                    }}
                    className="footer-link"
                  >
                    Features
                  </a>
                  <a
                    href="/dashboard"
                    style={{
                      color: "rgba(255, 255, 255, 0.7)",
                      textDecoration: "none",
                      transition: "color 0.3s ease",
                    }}
                    className="footer-link"
                  >
                    Get Started
                  </a>
                </div>
              </Col>
            </Row>

            <Divider
              style={{
                borderColor: "rgba(99, 102, 241, 0.2)",
                margin: "2rem 0 1.5rem",
              }}
            />

            {/* Copyright */}
            <div
              style={{
                textAlign: "center",
                color: "rgba(255, 255, 255, 0.6)",
                fontSize: "0.9rem",
              }}
            >
              <Paragraph
                style={{
                  color: "rgba(255, 255, 255, 0.6)",
                  marginBottom: "0.5rem",
                }}
              >
                © {currentYear} DevMate Agent. Developed by{" "}
                <span
                  style={{
                    color: "rgba(255, 255, 255, 0.9)",
                    fontWeight: 600,
                  }}
                >
                  Waleed AN
                </span>
              </Paragraph>
              <Paragraph
                style={{
                  color: "rgba(255, 255, 255, 0.5)",
                  marginBottom: 0,
                  fontSize: "0.85rem",
                }}
              >
                All rights reserved.
              </Paragraph>
            </div>
          </div>
        </Footer>

        <style jsx>{`
          .ai-background {
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background: radial-gradient(
                ellipse at top,
                rgba(99, 102, 241, 0.15) 0%,
                transparent 50%
              ),
              radial-gradient(
                ellipse at bottom,
                rgba(139, 92, 246, 0.15) 0%,
                transparent 50%
              ),
              #0a0e1a;
            overflow: hidden;
            z-index: 0;
          }

          .gradient-mesh {
            position: absolute;
            width: 100%;
            height: 100%;
            filter: blur(100px);
            opacity: 0.7;
          }

          .gradient-orb {
            position: absolute;
            border-radius: 50%;
            animation: orb-float 20s ease-in-out infinite;
          }

          .gradient-orb-1 {
            width: 600px;
            height: 600px;
            background: radial-gradient(
              circle,
              rgba(99, 102, 241, 0.4) 0%,
              transparent 70%
            );
            top: -10%;
            left: -10%;
            animation-delay: 0s;
          }

          .gradient-orb-2 {
            width: 500px;
            height: 500px;
            background: radial-gradient(
              circle,
              rgba(139, 92, 246, 0.3) 0%,
              transparent 70%
            );
            bottom: -15%;
            right: -10%;
            animation-delay: 5s;
          }

          .gradient-orb-3 {
            width: 400px;
            height: 400px;
            background: radial-gradient(
              circle,
              rgba(168, 85, 247, 0.25) 0%,
              transparent 70%
            );
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
            animation-delay: 10s;
          }

          .gradient-orb-4 {
            width: 350px;
            height: 350px;
            background: radial-gradient(
              circle,
              rgba(124, 58, 237, 0.2) 0%,
              transparent 70%
            );
            top: 30%;
            right: 20%;
            animation-delay: 15s;
          }

          .grid-pattern {
            position: absolute;
            width: 100%;
            height: 100%;
            background-image: linear-gradient(
                rgba(99, 102, 241, 0.1) 1px,
                transparent 1px
              ),
              linear-gradient(
                90deg,
                rgba(99, 102, 241, 0.1) 1px,
                transparent 1px
              );
            background-size: 50px 50px;
            opacity: 0.3;
            animation: grid-drift 30s linear infinite;
          }

          .particle-field {
            position: absolute;
            width: 100%;
            height: 100%;
          }

          .particle {
            position: absolute;
            width: var(--size);
            height: var(--size);
            background: radial-gradient(
              circle,
              rgba(99, 102, 241, 0.8) 0%,
              rgba(139, 92, 246, 0.4) 100%
            );
            border-radius: 50%;
            top: var(--y);
            left: var(--x);
            animation: particle-float var(--duration) ease-in-out var(--delay)
              infinite;
            box-shadow: 0 0 10px rgba(99, 102, 241, 0.5);
          }

          .content-container {
            position: relative;
            z-index: 1;
            display: flex;
            align-items: center;
            justify-content: center;
            min-height: 100vh;
            padding: 2rem;
          }

          .hero-content {
            max-width: 1200px;
            width: 100%;
            animation: fade-in-up 1s ease-out;
            padding-bottom: 4rem;
          }

          .ai-badge {
            position: absolute;
            top: 20px;
            left: 50px;
            display: flex;
            align-items: center;
            gap: 8px;
            padding: 8px 20px;
            background: rgba(99, 102, 241, 0.15);
            border: 1px solid rgba(99, 102, 241, 0.3);
            border-radius: 100px;
            backdrop-filter: blur(10px);
            z-index: 2;
          }

          .badge-dot {
            width: 8px;
            height: 8px;
            background: #6366f1;
            border-radius: 50%;
            box-shadow: 0 0 10px rgba(99, 102, 241, 0.8);
            animation: pulse-dot 2s ease-in-out infinite;
          }

          .badge-text {
            color: rgba(255, 255, 255, 0.9);
            font-size: 0.875rem;
            font-weight: 600;
            letter-spacing: 0.05em;
          }

          .gradient-text {
            background: linear-gradient(
              135deg,
              #6366f1 0%,
              #a855f7 50%,
              #ec4899 100%
            );
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
            background-clip: text;
            animation: gradient-shift 3s ease infinite;
            background-size: 200% 200%;
          }

          .cta-buttons {
            display: flex;
            gap: 1rem;
            justify-content: center;
            flex-wrap: wrap;
            margin-bottom: 3rem;
          }

          .primary-cta:hover {
            transform: translateY(-2px);
            box-shadow: 0 12px 32px rgba(99, 102, 241, 0.5) !important;
          }

          .secondary-cta:hover {
            background: rgba(255, 255, 255, 0.15) !important;
            border-color: rgba(255, 255, 255, 0.3) !important;
            transform: translateY(-2px);
          }

          .footer-link:hover {
            color: rgba(99, 102, 241, 0.9) !important;
          }

          :global(.feature-card:hover) {
            transform: translateY(-8px);
            border-color: rgba(99, 102, 241, 0.4) !important;
            box-shadow: 0 20px 40px rgba(0, 0, 0, 0.3),
              0 0 0 1px rgba(99, 102, 241, 0.2);
          }

          :global(.feature-icon) {
            transition: transform 0.3s ease;
          }

          :global(.feature-card:hover .feature-icon) {
            transform: scale(1.1) rotate(5deg);
          }

          @keyframes orb-float {
            0%,
            100% {
              transform: translate(0, 0) scale(1);
            }
            33% {
              transform: translate(30px, -30px) scale(1.1);
            }
            66% {
              transform: translate(-20px, 20px) scale(0.9);
            }
          }

          @keyframes grid-drift {
            0% {
              transform: translate(0, 0);
            }
            100% {
              transform: translate(50px, 50px);
            }
          }

          @keyframes particle-float {
            0%,
            100% {
              transform: translate(0, 0) scale(1);
              opacity: 0.6;
            }
            25% {
              transform: translate(30px, -40px) scale(1.3);
              opacity: 1;
            }
            50% {
              transform: translate(-25px, 30px) scale(0.8);
              opacity: 0.4;
            }
            75% {
              transform: translate(20px, 20px) scale(1.2);
              opacity: 0.9;
            }
          }

          @keyframes fade-in-up {
            from {
              opacity: 0;
              transform: translateY(30px);
            }
            to {
              opacity: 1;
              transform: translateY(0);
            }
          }

          @keyframes pulse-dot {
            0%,
            100% {
              transform: scale(1);
              opacity: 1;
            }
            50% {
              transform: scale(1.2);
              opacity: 0.8;
            }
          }

          @keyframes gradient-shift {
            0%,
            100% {
              background-position: 0% 50%;
            }
            50% {
              background-position: 100% 50%;
            }
          }

          :global(::-webkit-scrollbar) {
            width: 10px;
            height: 10px;
          }

          :global(::-webkit-scrollbar-track) {
            background: rgba(17, 24, 39, 0.8);
            border-radius: 10px;
          }

          :global(::-webkit-scrollbar-thumb) {
            background: linear-gradient(135deg, #6366f1 0%, #8b5cf6 100%);
            border-radius: 10px;
            border: 2px solid rgba(17, 24, 39, 0.8);
          }

          :global(::-webkit-scrollbar-thumb:hover) {
            background: linear-gradient(135deg, #7c7ff5 0%, #9d6ff8 100%);
            box-shadow: 0 0 10px rgba(99, 102, 241, 0.5);
          }

          :global(html) {
            scrollbar-width: thin;
            scrollbar-color: #6366f1 rgba(17, 24, 39, 0.8);
          }

          @media (max-width: 768px) {
            .content-container {
              padding: 1.5rem;
            }

            .ai-badge {
              left: 1rem;
              top: 1rem;
            }

            .gradient-orb {
              filter: blur(80px);
            }

            .grid-pattern {
              background-size: 40px 40px;
              opacity: 0.2;
            }

            .particle {
              display: none;
            }

            .cta-buttons {
              flex-direction: column;
              align-items: stretch;
            }

            .cta-buttons button {
              width: 100%;
            }
          }

          @media (max-width: 480px) {
            .content-container {
              padding: 1rem;
            }

            .gradient-mesh {
              filter: blur(60px);
            }

            .ai-badge {
              padding: 6px 16px;
            }

            .badge-text {
              font-size: 0.75rem;
            }

            :global(.ant-layout-footer) {
              padding: 2rem 1rem 1rem !important;
            }
          }
        `}</style>
      </Layout>
    </ConfigProvider>
  );
}
