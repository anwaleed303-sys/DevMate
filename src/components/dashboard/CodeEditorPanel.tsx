"use client";

import React, { useState } from "react";
import { Card, Select, Button, Space, Typography, message, Grid } from "antd";
import {
  CodeOutlined,
  ThunderboltOutlined,
  CopyOutlined,
  DownloadOutlined,
} from "@ant-design/icons";
import Editor from "@monaco-editor/react";
import { PROGRAMMING_LANGUAGES } from "../../config/constants";

const { Text } = Typography;
const { useBreakpoint } = Grid;

interface CodeEditorPanelProps {
  code: string;
  language: string;
  onCodeChange: (code: string) => void;
  onLanguageChange: (language: string) => void;
  onAnalyze: () => void;
}

export default function CodeEditorPanel({
  code,
  language,
  onCodeChange,
  onLanguageChange,
  onAnalyze,
}: CodeEditorPanelProps) {
  const screens = useBreakpoint();
  const [isRefactoring, setIsRefactoring] = useState(false);

  const isMobile = !screens.md;

  const handleCopy = () => {
    navigator.clipboard.writeText(code);
    message.success("Code copied to clipboard!");
  };

  const handleDownload = () => {
    const extension =
      PROGRAMMING_LANGUAGES.find((l) => l.id === language)?.extension || ".txt";
    const blob = new Blob([code], { type: "text/plain" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = `code${extension}`;
    a.click();
    URL.revokeObjectURL(url);
    message.success("Code downloaded!");
  };

  const handleRefactor = async () => {
    setIsRefactoring(true);
    try {
      const response = await fetch("/api/refactor", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ code, language }),
      });

      if (response.ok) {
        const data = await response.json();
        onCodeChange(data.refactoredCode);
        message.success("Code refactored successfully!");
      } else {
        message.error("Failed to refactor code");
      }
    } catch (error) {
      message.error("Error refactoring code");
    } finally {
      setIsRefactoring(false);
    }
  };

  return (
    <Card
      title={
        <Space>
          <CodeOutlined style={{ color: "#6366f1" }} />
          <Text style={{ color: "rgba(255, 255, 255, 0.95)" }}>
            Code Editor
          </Text>
        </Space>
      }
      extra={
        <Space size={isMobile ? "small" : "middle"}>
          <Select
            value={language}
            onChange={onLanguageChange}
            style={{ width: isMobile ? 100 : 140 }}
            options={PROGRAMMING_LANGUAGES.map((lang) => ({
              label: lang.name,
              value: lang.id,
            }))}
            size={isMobile ? "small" : "middle"}
          />
        </Space>
      }
      style={{
        height: "100%",
        background: "rgba(31, 41, 55, 0.6)",
        border: "1px solid rgba(99, 102, 241, 0.2)",
        backdropFilter: "blur(10px)",
      }}
      styles={{
        header: {
          background: "rgba(17, 24, 39, 0.8)",
          borderBottom: "1px solid rgba(99, 102, 241, 0.2)",
        },
        body: {
          padding: 0,
          display: "flex",
          flexDirection: "column",
          height: "calc(100% - 57px)",
        },
      }}
    >
      {/* Editor */}
      <div style={{ flex: 1, minHeight: 0 }}>
        <Editor
          height="100%"
          language={language}
          value={code}
          onChange={(value) => onCodeChange(value || "")}
          theme="vs-dark"
          options={{
            minimap: { enabled: !isMobile },
            fontSize: isMobile ? 12 : 14,
            lineNumbers: "on",
            scrollBeyondLastLine: false,
            automaticLayout: true,
            tabSize: 2,
            wordWrap: isMobile ? "on" : "off",
            padding: { top: 16, bottom: 16 },
          }}
        />
      </div>

      {/* Action Buttons */}
      <div
        style={{
          padding: isMobile ? "12px" : "16px",
          borderTop: "1px solid rgba(99, 102, 241, 0.2)",
          background: "rgba(17, 24, 39, 0.8)",
          display: "flex",
          gap: "8px",
          flexWrap: "wrap",
        }}
      >
        <Button
          type="primary"
          icon={<ThunderboltOutlined />}
          onClick={onAnalyze}
          style={{
            background: "linear-gradient(135deg, #6366f1 0%, #8b5cf6 100%)",
            border: "none",
            flex: isMobile ? "1 1 100%" : "0 1 auto",
          }}
          size={isMobile ? "small" : "middle"}
        >
          Analyze
        </Button>

        <Button
          icon={<CodeOutlined />}
          onClick={handleRefactor}
          loading={isRefactoring}
          style={{
            background: "rgba(99, 102, 241, 0.1)",
            border: "1px solid rgba(99, 102, 241, 0.3)",
            color: "rgba(255, 255, 255, 0.9)",
            flex: isMobile ? "1 1 100%" : "0 1 auto",
          }}
          size={isMobile ? "small" : "middle"}
        >
          Refactor
        </Button>

        <Button
          icon={<CopyOutlined />}
          onClick={handleCopy}
          style={{
            background: "rgba(99, 102, 241, 0.1)",
            border: "1px solid rgba(99, 102, 241, 0.3)",
            color: "rgba(255, 255, 255, 0.9)",
            flex: isMobile ? "1 1 calc(50% - 4px)" : "0 1 auto",
          }}
          size={isMobile ? "small" : "middle"}
        >
          {!isMobile && "Copy"}
        </Button>

        <Button
          icon={<DownloadOutlined />}
          onClick={handleDownload}
          style={{
            background: "rgba(99, 102, 241, 0.1)",
            border: "1px solid rgba(99, 102, 241, 0.3)",
            color: "rgba(255, 255, 255, 0.9)",
            flex: isMobile ? "1 1 calc(50% - 4px)" : "0 1 auto",
          }}
          size={isMobile ? "small" : "middle"}
        >
          {!isMobile && "Download"}
        </Button>
      </div>
    </Card>
  );
}
