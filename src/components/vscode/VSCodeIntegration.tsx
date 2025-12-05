// "use client";

// import { useState } from "react";
// import { Code2, Download, CheckCircle, ExternalLink, Copy } from "lucide-react";
// import GlassCard from "../../components/ui/GlassCard";
// import Button from "../../components/ui/Button";

// export default function VSCodeIntegration() {
//   const [copied, setCopied] = useState(false);

//   const installCommands = {
//     marketplace: "ext install devmate.devmate-vscode",
//     manual: "code --install-extension devmate-vscode-1.0.0.vsix",
//   };

//   const handleCopyCommand = async (command: string) => {
//     try {
//       await navigator.clipboard.writeText(command);
//       setCopied(true);
//       setTimeout(() => setCopied(false), 2000);
//     } catch (error) {
//       console.error("Failed to copy:", error);
//     }
//   };

//   return (
//     <div className="max-w-4xl mx-auto p-6 space-y-6">
//       {/* Header */}
//       <div className="text-center mb-8">
//         <div className="inline-flex items-center gap-3 mb-4">
//           <Code2 className="w-12 h-12 text-primary-400" />
//           <h1 className="text-4xl font-bold gradient-text">
//             VS Code Integration
//           </h1>
//         </div>
//         <p className="text-gray-400 text-lg">
//           Bring DevMate AI directly into your VS Code workflow
//         </p>
//       </div>

//       {/* Installation Methods */}
//       <GlassCard className="p-6">
//         <h2 className="text-xl font-semibold mb-4 flex items-center gap-2">
//           <Download className="w-5 h-5 text-primary-400" />
//           Installation
//         </h2>

//         <div className="space-y-4">
//           {/* Method 1: VS Code Marketplace */}
//           <div className="border border-white/10 rounded-lg p-4">
//             <h3 className="font-medium mb-2">Option 1: VS Code Marketplace</h3>
//             <ol className="space-y-2 text-sm text-gray-400 mb-4">
//               <li>1. Open VS Code</li>
//               <li>
//                 2. Press{" "}
//                 <kbd className="px-2 py-1 bg-white/10 rounded">Ctrl+P</kbd> (or{" "}
//                 <kbd className="px-2 py-1 bg-white/10 rounded">Cmd+P</kbd> on
//                 Mac)
//               </li>
//               <li>3. Paste the command below and press Enter</li>
//             </ol>

//             <div className="flex items-center gap-2 bg-black/30 rounded-lg p-3 mb-3">
//               <code className="flex-1 text-sm text-primary-300 font-mono">
//                 {installCommands.marketplace}
//               </code>
//               <button
//                 onClick={() => handleCopyCommand(installCommands.marketplace)}
//                 className="p-2 hover:bg-white/10 rounded transition-colors"
//                 title="Copy command"
//               >
//                 {copied ? (
//                   <CheckCircle className="w-4 h-4 text-green-400" />
//                 ) : (
//                   <Copy className="w-4 h-4 text-gray-400" />
//                 )}
//               </button>
//             </div>

//             <Button
//               variant="primary"
//               size="sm"
//               icon={<ExternalLink className="w-4 h-4" />}
//               onClick={() =>
//                 window.open("vscode:extension/devmate.devmate-vscode", "_blank")
//               }
//             >
//               Open in VS Code
//             </Button>
//           </div>

//           {/* Method 2: Manual Installation */}
//           <div className="border border-white/10 rounded-lg p-4">
//             <h3 className="font-medium mb-2">Option 2: Manual Installation</h3>
//             <ol className="space-y-2 text-sm text-gray-400 mb-4">
//               <li>1. Download the .vsix file</li>
//               <li>2. Open VS Code</li>
//               <li>3. Run this command in your terminal:</li>
//             </ol>

//             <div className="flex items-center gap-2 bg-black/30 rounded-lg p-3 mb-3">
//               <code className="flex-1 text-sm text-primary-300 font-mono">
//                 {installCommands.manual}
//               </code>
//               <button
//                 onClick={() => handleCopyCommand(installCommands.manual)}
//                 className="p-2 hover:bg-white/10 rounded transition-colors"
//                 title="Copy command"
//               >
//                 {copied ? (
//                   <CheckCircle className="w-4 h-4 text-green-400" />
//                 ) : (
//                   <Copy className="w-4 h-4 text-gray-400" />
//                 )}
//               </button>
//             </div>

//             <Button
//               variant="secondary"
//               size="sm"
//               icon={<Download className="w-4 h-4" />}
//             >
//               Download .vsix
//             </Button>
//           </div>
//         </div>
//       </GlassCard>

//       {/* Features */}
//       <GlassCard className="p-6">
//         <h2 className="text-xl font-semibold mb-4">Extension Features</h2>
//         <div className="grid md:grid-cols-2 gap-4">
//           <FeatureItem
//             title="Right-Click Actions"
//             description="Analyze, refactor, or get suggestions directly from the context menu"
//           />
//           <FeatureItem
//             title="Command Palette"
//             description="Access all DevMate commands via Ctrl+Shift+P"
//           />
//           <FeatureItem
//             title="Inline Webview"
//             description="Chat with DevMate AI without leaving VS Code"
//           />
//           <FeatureItem
//             title="Auto-Suggestions"
//             description="Get real-time code improvements as you type"
//           />
//         </div>
//       </GlassCard>

//       {/* Configuration */}
//       <GlassCard className="p-6">
//         <h2 className="text-xl font-semibold mb-4">Configuration</h2>
//         <div className="space-y-4">
//           <div>
//             <label className="block text-sm font-medium mb-2">API URL</label>
//             <input
//               type="text"
//               defaultValue="http://localhost:3000"
//               className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-2 text-sm focus:outline-none focus:border-primary-500 transition-colors"
//               placeholder="Enter your DevMate API URL"
//             />
//             <p className="text-xs text-gray-500 mt-1">
//               Set this in VS Code Settings under DevMate → API URL
//             </p>
//           </div>

//           <div>
//             <label className="block text-sm font-medium mb-2">
//               Groq API Key
//             </label>
//             <input
//               type="password"
//               placeholder="gsk_..."
//               className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-2 text-sm focus:outline-none focus:border-primary-500 transition-colors"
//             />
//             <p className="text-xs text-gray-500 mt-1">
//               Get your free key at{" "}
//               <a
//                 href="https://console.groq.com/keys"
//                 target="_blank"
//                 rel="noopener noreferrer"
//                 className="text-primary-400 hover:text-primary-300"
//               >
//                 console.groq.com/keys
//               </a>
//             </p>
//           </div>
//         </div>
//       </GlassCard>

//       {/* Keyboard Shortcuts */}
//       <GlassCard className="p-6">
//         <h2 className="text-xl font-semibold mb-4">Keyboard Shortcuts</h2>
//         <div className="space-y-2">
//           <ShortcutItem
//             keys={["Ctrl", "Shift", "P"]}
//             description="Open Command Palette → DevMate commands"
//           />
//           <ShortcutItem
//             keys={["Right Click"]}
//             description="Context menu → DevMate actions"
//           />
//           <ShortcutItem
//             keys={["Ctrl", "Alt", "D"]}
//             description="Open DevMate Dashboard"
//           />
//         </div>
//       </GlassCard>

//       {/* Support */}
//       <div className="text-center text-sm text-gray-400">
//         Need help?{" "}
//         <a
//           href="https://github.com/yourusername/devmate/issues"
//           target="_blank"
//           rel="noopener noreferrer"
//           className="text-primary-400 hover:text-primary-300"
//         >
//           Report an issue
//         </a>
//         {" or "}
//         <a
//           href="https://discord.gg/devmate"
//           target="_blank"
//           rel="noopener noreferrer"
//           className="text-primary-400 hover:text-primary-300"
//         >
//           join our Discord
//         </a>
//       </div>
//     </div>
//   );
// }

// function FeatureItem({
//   title,
//   description,
// }: {
//   title: string;
//   description: string;
// }) {
//   return (
//     <div className="flex gap-3">
//       <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0 mt-0.5" />
//       <div>
//         <h4 className="font-medium">{title}</h4>
//         <p className="text-sm text-gray-400">{description}</p>
//       </div>
//     </div>
//   );
// }

// function ShortcutItem({
//   keys,
//   description,
// }: {
//   keys: string[];
//   description: string;
// }) {
//   return (
//     <div className="flex items-center justify-between py-2 border-b border-white/5">
//       <span className="text-sm text-gray-400">{description}</span>
//       <div className="flex gap-1">
//         {keys.map((key, index) => (
//           <kbd
//             key={index}
//             className="px-2 py-1 bg-white/10 rounded text-xs font-mono"
//           >
//             {key}
//           </kbd>
//         ))}
//       </div>
//     </div>
//   );
// }
