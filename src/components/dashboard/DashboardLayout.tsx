// "use client";

// import React, { useState } from "react";
// import { Layout, Menu, Button, Drawer, Grid, Typography } from "antd";
// import {
//   MenuOutlined,
//   HomeOutlined,
//   CodeOutlined,
//   MessageOutlined,
//   SettingOutlined,
//   LogoutOutlined,
//   BulbOutlined,
// } from "@ant-design/icons";
// import { useRouter } from "next/navigation";

// const { Header, Sider, Content } = Layout;
// const { useBreakpoint } = Grid;
// const { Title } = Typography;

// interface DashboardLayoutProps {
//   children: React.ReactNode;
// }

// export default function DashboardLayout({ children }: DashboardLayoutProps) {
//   const router = useRouter();
//   const screens = useBreakpoint();
//   const [collapsed, setCollapsed] = useState(false);
//   const [mobileDrawerOpen, setMobileDrawerOpen] = useState(false);

//   const isMobile = !screens.md;

//   const menuItems = [
//     // {
//     //   key: "dashboard",
//     //   icon: <HomeOutlined />,
//     //   label: "Dashboard",
//     //   onClick: () => router.push("/dashboard"),
//     // },
//     {
//       key: "dashboard",
//       icon: <MessageOutlined />,
//       label: "AI Chat",
//       onClick: () => router.push("/dashboard"),
//     },
//     {
//       key: "code",
//       icon: <CodeOutlined />,
//       label: "Code Editor",
//     },

//     {
//       key: "insights",
//       icon: <BulbOutlined />,
//       label: "Insights",
//     },
//     // {
//     //   key: "settings",
//     //   icon: <SettingOutlined />,
//     //   label: "Settings",
//     // },
//   ];

//   const SidebarContent = () => (
//     <div
//       style={{
//         height: "100%",
//         display: "flex",
//         flexDirection: "column",
//         background: "rgba(17, 24, 39, 0.98)",
//       }}
//     >
//       <div
//         style={{
//           padding: "20px",
//           textAlign: "center",
//           borderBottom: "1px solid rgba(99, 102, 241, 0.2)",
//         }}
//       >
//         <Title
//           level={4}
//           style={{
//             color: "rgba(255, 255, 255, 0.98)",
//             margin: 0,
//             fontSize: collapsed && !isMobile ? "16px" : "20px",
//           }}
//         >
//           <span className="gradient-text">
//             {collapsed && !isMobile ? "DM" : "DevMate"}
//           </span>
//         </Title>
//       </div>

//       <Menu
//         theme="dark"
//         mode="inline"
//         defaultSelectedKeys={["dashboard"]}
//         items={menuItems}
//         style={{
//           flex: 1,
//           background: "transparent",
//           border: "none",
//           marginTop: "20px",
//         }}
//       />

//       <div
//         style={{
//           padding: "20px",
//           borderTop: "1px solid rgba(99, 102, 241, 0.2)",
//         }}
//       >
//         <Button
//           type="text"
//           icon={<LogoutOutlined />}
//           block
//           onClick={() => router.push("/")}
//           style={{
//             color: "rgba(255, 255, 255, 0.7)",
//             justifyContent: collapsed && !isMobile ? "center" : "flex-start",
//           }}
//         >
//           {!collapsed || isMobile ? "Logout" : ""}
//         </Button>
//       </div>
//     </div>
//   );

//   return (
//     <Layout style={{ minHeight: "100vh", background: "#0a0e1a" }}>
//       {/* Desktop Sidebar */}
//       {!isMobile && (
//         <Sider
//           collapsible
//           collapsed={collapsed}
//           onCollapse={setCollapsed}
//           width={250}
//           collapsedWidth={80}
//           style={{
//             background: "rgba(17, 24, 39, 0.98)",
//             borderRight: "1px solid rgba(99, 102, 241, 0.2)",
//             position: "fixed",
//             left: 0,
//             top: 0,
//             bottom: 0,
//             zIndex: 100,
//           }}
//         >
//           <SidebarContent />
//         </Sider>
//       )}

//       {/* Mobile Drawer */}
//       {isMobile && (
//         <Drawer
//           placement="left"
//           onClose={() => setMobileDrawerOpen(false)}
//           open={mobileDrawerOpen}
//           closable={false}
//           width={250}
//           styles={{
//             body: { padding: 0, background: "rgba(17, 24, 39, 0.98)" },
//           }}
//         >
//           <SidebarContent />
//         </Drawer>
//       )}

//       <Layout
//         style={{
//           marginLeft: isMobile ? 0 : collapsed ? 80 : 250,
//           transition: "margin-left 0.2s",
//           background: "#0a0e1a",
//         }}
//       >
//         {/* Header */}
//         <Header
//           style={{
//             background: "rgba(17, 24, 39, 0.95)",
//             padding: "0 20px",
//             display: "flex",
//             alignItems: "center",
//             justifyContent: "space-between",
//             borderBottom: "1px solid rgba(99, 102, 241, 0.2)",
//             backdropFilter: "blur(10px)",
//             position: "sticky",
//             top: 0,
//             zIndex: 99,
//           }}
//         >
//           <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
//             {isMobile && (
//               <Button
//                 type="text"
//                 icon={<MenuOutlined />}
//                 onClick={() => setMobileDrawerOpen(true)}
//                 style={{ color: "rgba(255, 255, 255, 0.9)" }}
//               />
//             )}
//           </div>

//           <div
//             style={{
//               display: "flex",
//               alignItems: "center",
//               gap: "8px",
//             }}
//           >
//             <div
//               className="gradient-text"
//               style={{
//                 padding: "6px 16px",

//                 borderRadius: "100px",
//                 fontSize: "12px",

//                 fontWeight: 600,
//               }}
//             >
//               Let's with AI
//             </div>
//             <style jsx>{`
//               .gradient-text {
//                 background: linear-gradient(
//                   135deg,
//                   #6366f1 0%,
//                   #a855f7 50%,
//                   #ec4899 100%
//                 );
//                 -webkit-background-clip: text;
//                 -webkit-text-fill-color: transparent;
//                 background-clip: text;
//                 animation: gradient-shift 3s ease infinite;
//                 background-size: 200% 200%;
//               }
//               @keyframes gradient-shift {
//                 0%,
//                 100% {
//                   background-position: 0% 50%;
//                 }
//                 50% {
//                   background-position: 100% 50%;
//                 }
//               }
//             `}</style>
//           </div>
//         </Header>

//         {/* Main Content */}
//         <Content
//           style={{
//             padding: isMobile ? "12px" : "24px",
//             background: "#0a0e1a",
//             minHeight: "calc(100vh - 64px)",
//           }}
//         >
//           {children}
//         </Content>
//       </Layout>
//     </Layout>
//   );
// }

// for example and testing for

"use client";

import React, { useState } from "react";
import { Layout, Menu, Button, Drawer, Grid, Typography } from "antd";
import {
  MenuOutlined,
  HomeOutlined,
  CodeOutlined,
  MessageOutlined,
  SettingOutlined,
  LogoutOutlined,
  BulbOutlined,
} from "@ant-design/icons";
import { useRouter } from "next/navigation";

const { Header, Sider, Content } = Layout;
const { useBreakpoint } = Grid;
const { Title } = Typography;

interface DashboardLayoutProps {
  children: React.ReactNode;
  activeView?: string;
  onViewChange?: (view: string) => void;
}

export default function DashboardLayout({
  children,
  activeView = "dashboard",
  onViewChange,
}: DashboardLayoutProps) {
  const router = useRouter();
  const screens = useBreakpoint();
  const [collapsed, setCollapsed] = useState(false);
  const [mobileDrawerOpen, setMobileDrawerOpen] = useState(false);

  const isMobile = !screens.md;

  const menuItems = [
    {
      key: "dashboard",
      icon: <MessageOutlined />,
      label: "AI Chat",
      onClick: () => {
        onViewChange?.("dashboard");
        setMobileDrawerOpen(false);
      },
    },
    {
      key: "code",
      icon: <CodeOutlined />,
      label: "Code Editor",
      onClick: () => {
        onViewChange?.("code");
        setMobileDrawerOpen(false);
      },
    },
    {
      key: "insights",
      icon: <BulbOutlined />,
      label: "Insights",
      onClick: () => {
        onViewChange?.("insights");
        setMobileDrawerOpen(false);
      },
    },
  ];

  const SidebarContent = () => (
    <div
      style={{
        height: "100%",
        display: "flex",
        flexDirection: "column",
        background: "rgba(17, 24, 39, 0.98)",
      }}
    >
      <div
        style={{
          padding: "20px",
          textAlign: "center",
          borderBottom: "1px solid rgba(99, 102, 241, 0.2)",
        }}
      >
        <Title
          level={4}
          style={{
            color: "rgba(255, 255, 255, 0.98)",
            margin: 0,
            fontSize: collapsed && !isMobile ? "16px" : "20px",
          }}
        >
          <span className="gradient-text">
            {collapsed && !isMobile ? "DM" : "DevMate"}
          </span>
        </Title>
      </div>

      <Menu
        theme="dark"
        mode="inline"
        selectedKeys={[activeView]}
        items={menuItems}
        style={{
          flex: 1,
          background: "transparent",
          border: "none",
          marginTop: "20px",
        }}
      />

      <div
        style={{
          padding: "20px",
          borderTop: "1px solid rgba(99, 102, 241, 0.2)",
        }}
      >
        <Button
          type="text"
          icon={<LogoutOutlined />}
          block
          onClick={() => router.push("/")}
          style={{
            color: "rgba(255, 255, 255, 0.7)",
            justifyContent: collapsed && !isMobile ? "center" : "flex-start",
          }}
        >
          {!collapsed || isMobile ? "Logout" : ""}
        </Button>
      </div>
    </div>
  );

  return (
    <Layout style={{ minHeight: "100vh", background: "#0a0e1a" }}>
      {/* Desktop Sidebar */}
      {!isMobile && (
        <Sider
          collapsible
          collapsed={collapsed}
          onCollapse={setCollapsed}
          width={250}
          collapsedWidth={80}
          style={{
            background: "rgba(17, 24, 39, 0.98)",
            borderRight: "1px solid rgba(99, 102, 241, 0.2)",
            position: "fixed",
            left: 0,
            top: 0,
            bottom: 0,
            zIndex: 100,
          }}
        >
          <SidebarContent />
        </Sider>
      )}

      {/* Mobile Drawer */}
      {isMobile && (
        <Drawer
          placement="left"
          onClose={() => setMobileDrawerOpen(false)}
          open={mobileDrawerOpen}
          closable={false}
          width={250}
          styles={{
            body: { padding: 0, background: "rgba(17, 24, 39, 0.98)" },
          }}
        >
          <SidebarContent />
        </Drawer>
      )}

      <Layout
        style={{
          marginLeft: isMobile ? 0 : collapsed ? 80 : 250,
          transition: "margin-left 0.2s",
          background: "#0a0e1a",
        }}
      >
        {/* Header */}
        <Header
          style={{
            background: "rgba(17, 24, 39, 0.95)",
            padding: "0 20px",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            borderBottom: "1px solid rgba(99, 102, 241, 0.2)",
            backdropFilter: "blur(10px)",
            position: "sticky",
            top: 0,
            zIndex: 99,
          }}
        >
          <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
            {isMobile && (
              <Button
                type="text"
                icon={<MenuOutlined />}
                onClick={() => setMobileDrawerOpen(true)}
                style={{ color: "rgba(255, 255, 255, 0.9)" }}
              />
            )}
          </div>

          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "8px",
            }}
          >
            <div
              className="gradient-text"
              style={{
                padding: "6px 16px",
                borderRadius: "100px",
                fontSize: "12px",
                fontWeight: 600,
              }}
            >
              Let's with AI
            </div>
            <style jsx>{`
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
              @keyframes gradient-shift {
                0%,
                100% {
                  background-position: 0% 50%;
                }
                50% {
                  background-position: 100% 50%;
                }
              }
            `}</style>
          </div>
        </Header>

        {/* Main Content */}
        <Content
          style={{
            padding: isMobile ? "12px" : "24px",
            background: "#0a0e1a",
            minHeight: "calc(100vh - 64px)",
          }}
        >
          {children}
        </Content>
      </Layout>
    </Layout>
  );
}
