"use client";
import React from "react";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { atomDark } from "react-syntax-highlighter/dist/cjs/styles/prism";
import { IconCheck, IconCopy, IconPlayerPlay } from "@tabler/icons-react";
import { motion } from "framer-motion";

type CodeBlockProps = {
  language: string;
  filename: string;
  highlightLines?: number[];
} & (
  | {
      code: string;
      tabs?: never;
    }
  | {
      code?: never;
      tabs: Array<{
        name: string;
        code: string;
        language?: string;
        highlightLines?: number[];
      }>;
    }
);

export const CodeBlock = ({
  language,
  filename,
  code,
  highlightLines = [],
  tabs = [],
}: CodeBlockProps) => {
  const [copied, setCopied] = React.useState(false);
  const [activeTab, setActiveTab] = React.useState(0);
  const [isRunning, setIsRunning] = React.useState(false);
  const [output, setOutput] = React.useState<string[]>([]);
  const [showOutput, setShowOutput] = React.useState(false);

  const tabsExist = tabs.length > 0;

  const copyToClipboard = async () => {
    const textToCopy = tabsExist ? tabs[activeTab].code : code;
    if (textToCopy) {
      await navigator.clipboard.writeText(textToCopy);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  const runCode = async () => {
    if (isRunning) return;
    
    setIsRunning(true);
    setShowOutput(true);
    
    // Simulate running the Python code
    const activeCode = tabsExist ? tabs[activeTab].code : code;
    if (activeCode && language === 'python') {
      // Parse the code to extract the output
      const lines = activeCode.split('\n');
      const outputs: string[] = [];
      
      for (const line of lines) {
        if (line.includes('print(')) {
          // Extract the print statement content
          const match = line.match(/print\(f?"([^"]*)"\)/);
          if (match) {
            outputs.push(match[1]);
          } else {
            // Handle simple print statements
            const simpleMatch = line.match(/print\("([^"]*)"\)/);
            if (simpleMatch) {
              outputs.push(simpleMatch[1]);
            }
          }
        }
      }
      
      // Simulate execution delay
      setTimeout(() => {
        setOutput(outputs);
        setIsRunning(false);
      }, 1000);
    } else {
      setTimeout(() => {
        setOutput(['Code executed successfully!']);
        setIsRunning(false);
      }, 1000);
    }
  };

  const activeCode = tabsExist ? tabs[activeTab].code : code;
  const activeLanguage = tabsExist
    ? tabs[activeTab].language || language
    : language;
  const activeHighlightLines = tabsExist
    ? tabs[activeTab].highlightLines || []
    : highlightLines;

  return (
    <div className="relative w-full rounded-lg bg-slate-900 p-2 sm:p-4 font-mono text-xs sm:text-sm overflow-hidden">
      <div className="flex flex-col gap-2">
        {tabsExist && (
          <div className="flex flex-wrap gap-2">
            {tabs.map((tab, index) => (
              <button
                key={index}
                onClick={() => setActiveTab(index)}
                className={`px-3 !py-2 text-xs transition-colors font-sans ${
                  activeTab === index
                    ? "text-white"
                    : "text-zinc-400 hover:text-zinc-200"
                }`}
              >
                {tab.name}
              </button>
            ))}
          </div>
        )}
        {!tabsExist && filename && (
          <div className="flex justify-between items-center py-2">
            <div className="text-xs text-zinc-400">{filename}</div>
            <div className="flex items-center space-x-2">
              <button
                onClick={runCode}
                disabled={isRunning}
                className="flex items-center space-x-1 text-xs bg-green-600 hover:bg-green-700 disabled:bg-green-800 text-white px-2 py-1 rounded transition-colors font-sans"
              >
                <IconPlayerPlay size={12} />
                <span>{isRunning ? 'Running...' : 'Run'}</span>
              </button>
              <button
                onClick={copyToClipboard}
                className="flex items-center space-x-1 text-xs text-zinc-400 hover:text-zinc-200 transition-colors font-sans"
              >
                {copied ? <IconCheck size={14} /> : <IconCopy size={14} />}
              </button>
            </div>
          </div>
        )}
      </div>
      
      <div className="w-full">
        <SyntaxHighlighter
          language={activeLanguage}
          style={atomDark}
          customStyle={{
            margin: 0,
            padding: 0,
            background: "transparent",
            fontSize: "0.75rem", // text-xs equivalent for mobile
            wordWrap: "break-word",
            overflowWrap: "break-word",
            whiteSpace: "pre-wrap",
          }}
          wrapLines={true}
          showLineNumbers={true}
          lineProps={(lineNumber) => ({
            style: {
              backgroundColor: activeHighlightLines.includes(lineNumber)
                ? "rgba(255,255,255,0.1)"
                : "transparent",
              display: "block",
              width: "100%",
              wordWrap: "break-word",
              overflowWrap: "break-word",
            },
          })}
          PreTag="div"
        >
          {String(activeCode)}
        </SyntaxHighlighter>
      </div>

      {/* Output Display */}
      {showOutput && (
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          className="mt-4 p-3 bg-slate-800 rounded border border-slate-700"
        >
          <div className="flex items-center justify-between mb-2">
            <span className="text-xs text-zinc-400 font-medium">Output:</span>
            <button
              onClick={() => setShowOutput(false)}
              className="text-xs text-zinc-500 hover:text-zinc-300"
            >
              ×
            </button>
          </div>
          <div className="space-y-1">
            {output.map((line, index) => (
              <div key={index} className="text-green-400 text-xs font-mono">
                {line}
              </div>
            ))}
          </div>
        </motion.div>
      )}
    </div>
  );
}; 