import * as vscode from "vscode";
// import { analyzeCode } from "./commands/analyze";
import { refactorCode } from "./commands/refactor";
import { getSuggestions, registerAutoSuggest } from "./commands/suggest";
import { DevMatePanel } from "./webview/DevMatePanel";
import axios from "axios";

let outputChannel: vscode.OutputChannel;

export function activate(context: vscode.ExtensionContext) {
  outputChannel = vscode.window.createOutputChannel("DevMate");
  outputChannel.appendLine("DevMate extension activated");

  // Register commands
  context.subscriptions.push(
    // vscode.commands.registerCommand("devmate.analyze", () =>
    //   // analyzeCode(context)
    // ),
    vscode.commands.registerCommand("devmate.refactor", () =>
      refactorCode(context)
    ),
    vscode.commands.registerCommand("devmate.suggest", () =>
      getSuggestions(context)
    ),
    vscode.commands.registerCommand("devmate.openDashboard", openDashboard),
    vscode.commands.registerCommand("devmate.openPanel", () => {
      DevMatePanel.createOrShow(context.extensionUri);
    })
  );

  // Register auto-suggest feature
  registerAutoSuggest(context);

  // Show welcome message
  vscode.window.showInformationMessage("🚀 DevMate AI Assistant is ready!");
}

async function getApiUrl(): Promise<string> {
  const config = vscode.workspace.getConfiguration("devmate");
  return config.get<string>("apiUrl", "http://localhost:3000");
}

async function openDashboard() {
  const apiUrl = await getApiUrl();
  vscode.env.openExternal(vscode.Uri.parse(`${apiUrl}/dashboard`));
}

export function deactivate() {
  outputChannel.dispose();
}
