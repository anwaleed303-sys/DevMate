"use client";

import React from "react";
import {
  Card,
  Typography,
  Space,
  Tag,
  Progress,
  List,
  Empty,
  Spin,
  Grid,
  Button,
} from "antd";
import {
  BulbOutlined,
  ThunderboltOutlined,
  FunctionOutlined,
  WarningOutlined,
  CheckCircleOutlined,
  ReloadOutlined,
} from "@ant-design/icons";
import type { CodeInsights } from "../../types";

const { Text, Title, Paragraph } = Typography;
const { useBreakpoint } = Grid;

interface InsightsPanelProps {
  insights: CodeInsights | null;
  isAnalyzing: boolean;
  onAnalyze: () => void;
}

export default function InsightsPanel({
  insights,
  isAnalyzing,
  onAnalyze,
}: InsightsPanelProps) {
  const screens = useBreakpoint();
  const isMobile = !screens.md;

  const getComplexityColor = (level: string) => {
    switch (level) {
      case "Low":
        return "#52c41a";
      case "Moderate":
        return "#faad14";
      case "High":
        return "#f5222d";
      default:
        return "#6366f1";
    }
  };

  return (
    <Card
      title={
        <Space>
          <BulbOutlined style={{ color: "#6366f1" }} />
          <Text style={{ color: "rgba(255, 255, 255, 0.95)" }}>
            Code Insights
          </Text>
        </Space>
      }
      extra={
        insights && (
          <Button
            type="text"
            icon={<ReloadOutlined />}
            onClick={onAnalyze}
            disabled={isAnalyzing}
            style={{ color: "rgba(255, 255, 255, 0.7)" }}
            size={isMobile ? "small" : "middle"}
          >
            {!isMobile && "Refresh"}
          </Button>
        )
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
          padding: isMobile ? "12px" : "16px",
          overflowY: "auto",
          height: "calc(100% - 57px)",
        },
      }}
    >
      {isAnalyzing && (
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            height: "100%",
            flexDirection: "column",
            gap: "16px",
          }}
        >
          <Spin size="large" />
          <Text style={{ color: "rgba(255, 255, 255, 0.7)" }}>
            Analyzing your code...
          </Text>
        </div>
      )}

      {!isAnalyzing && !insights && (
        <Empty
          image={Empty.PRESENTED_IMAGE_SIMPLE}
          description={
            <Text style={{ color: "rgba(255, 255, 255, 0.5)" }}>
              Click "Analyze" to get insights about your code
            </Text>
          }
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            height: "100%",
          }}
        />
      )}

      {!isAnalyzing && insights && (
        <Space direction="vertical" size="large" style={{ width: "100%" }}>
          {/* Complexity */}
          <div>
            <Space
              style={{
                marginBottom: "12px",
                width: "100%",
                justifyContent: "space-between",
              }}
            >
              <Space>
                <ThunderboltOutlined style={{ color: "#6366f1" }} />
                <Text
                  strong
                  style={{
                    color: "rgba(255, 255, 255, 0.95)",
                    fontSize: isMobile ? "14px" : "15px",
                  }}
                >
                  Complexity
                </Text>
              </Space>
              <Tag
                color={getComplexityColor(insights.complexity.level)}
                style={{ margin: 0 }}
              >
                {insights.complexity.level}
              </Tag>
            </Space>
            <Progress
              percent={insights.complexity.score}
              strokeColor={getComplexityColor(insights.complexity.level)}
              trailColor="rgba(255, 255, 255, 0.1)"
              size={isMobile ? "small" : "default"}
            />
          </div>

          {/* Performance */}
          <div>
            <Space style={{ marginBottom: "8px" }}>
              <ThunderboltOutlined style={{ color: "#52c41a" }} />
              <Text
                strong
                style={{
                  color: "rgba(255, 255, 255, 0.95)",
                  fontSize: isMobile ? "14px" : "15px",
                }}
              >
                Performance Boost
              </Text>
            </Space>
            <div
              style={{
                padding: isMobile ? "10px" : "12px",
                background: "rgba(82, 196, 26, 0.1)",
                border: "1px solid rgba(82, 196, 26, 0.3)",
                borderRadius: "8px",
              }}
            >
              <Text
                style={{
                  color: "rgba(255, 255, 255, 0.9)",
                  fontSize: isMobile ? "16px" : "18px",
                  fontWeight: 600,
                }}
              >
                {insights.performance.boost}
              </Text>
            </div>
          </div>

          {/* Function & Purpose */}
          <div>
            <Space style={{ marginBottom: "8px" }}>
              <FunctionOutlined style={{ color: "#6366f1" }} />
              <Text
                strong
                style={{
                  color: "rgba(255, 255, 255, 0.95)",
                  fontSize: isMobile ? "14px" : "15px",
                }}
              >
                Function: {insights.function}
              </Text>
            </Space>
            <Paragraph
              style={{
                color: "rgba(255, 255, 255, 0.7)",
                marginBottom: 0,
                fontSize: isMobile ? "13px" : "14px",
                lineHeight: 1.6,
              }}
            >
              {insights.purpose}
            </Paragraph>
          </div>

          {/* Potential Issues */}
          {insights.potentialIssues.length > 0 && (
            <div>
              <Space style={{ marginBottom: "12px" }}>
                <WarningOutlined style={{ color: "#faad14" }} />
                <Text
                  strong
                  style={{
                    color: "rgba(255, 255, 255, 0.95)",
                    fontSize: isMobile ? "14px" : "15px",
                  }}
                >
                  Potential Issues
                </Text>
              </Space>
              <List
                size="small"
                dataSource={insights.potentialIssues}
                renderItem={(item) => (
                  <List.Item
                    style={{
                      border: "none",
                      padding: isMobile ? "6px 0" : "8px 0",
                      color: "rgba(255, 255, 255, 0.7)",
                      fontSize: isMobile ? "13px" : "14px",
                    }}
                  >
                    <Space align="start">
                      <WarningOutlined
                        style={{
                          color: "#faad14",
                          fontSize: "14px",
                          marginTop: "2px",
                        }}
                      />
                      <Text style={{ color: "rgba(255, 255, 255, 0.7)" }}>
                        {item}
                      </Text>
                    </Space>
                  </List.Item>
                )}
              />
            </div>
          )}

          {/* Refactor Suggestions */}
          {insights.refactorSuggestions.length > 0 && (
            <div>
              <Space style={{ marginBottom: "12px" }}>
                <CheckCircleOutlined style={{ color: "#52c41a" }} />
                <Text
                  strong
                  style={{
                    color: "rgba(255, 255, 255, 0.95)",
                    fontSize: isMobile ? "14px" : "15px",
                  }}
                >
                  Suggestions
                </Text>
              </Space>
              <List
                size="small"
                dataSource={insights.refactorSuggestions}
                renderItem={(item) => (
                  <List.Item
                    style={{
                      border: "none",
                      padding: isMobile ? "6px 0" : "8px 0",
                      color: "rgba(255, 255, 255, 0.7)",
                      fontSize: isMobile ? "13px" : "14px",
                    }}
                  >
                    <Space align="start">
                      <CheckCircleOutlined
                        style={{
                          color: "#52c41a",
                          fontSize: "14px",
                          marginTop: "2px",
                        }}
                      />
                      <Text style={{ color: "rgba(255, 255, 255, 0.7)" }}>
                        {item}
                      </Text>
                    </Space>
                  </List.Item>
                )}
              />
            </div>
          )}

          {/* Dependencies */}
          {insights.dependencies.length > 0 && (
            <div>
              <Text
                strong
                style={{
                  color: "rgba(255, 255, 255, 0.95)",
                  display: "block",
                  marginBottom: "12px",
                  fontSize: isMobile ? "14px" : "15px",
                }}
              >
                Dependencies
              </Text>
              <Space wrap size="small">
                {insights.dependencies.map((dep, index) => (
                  <Tag
                    key={index}
                    color="purple"
                    style={{
                      background: "rgba(139, 92, 246, 0.15)",
                      border: "1px solid rgba(139, 92, 246, 0.3)",
                      color: "rgba(255, 255, 255, 0.9)",
                      fontSize: isMobile ? "12px" : "13px",
                    }}
                  >
                    {dep}
                  </Tag>
                ))}
              </Space>
            </div>
          )}
        </Space>
      )}
    </Card>
  );
}
