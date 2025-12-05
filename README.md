# DevMate - AI-Powered Coding Assistant

DevMate is an intelligent coding assistant designed to help developers streamline their workflow with AI-powered features including code summaries, smart snippets, context-aware assistance, and personalized learning recommendations.

## Features

- 🤖 **AI Chat Interface** - Interactive chat powered by Grok API for real-time assistance
- 📝 **Dynamic Code Summaries** - Get instant explanations of code segments using LLaMA API
- 💡 **Smart Code Snippets** - Context-aware code generation
- 🎯 **Context-Aware Assistance** - Tailored help based on your project setup
- 📚 **Personalized Learning** - Custom resource recommendations
- 🌍 **Multi-language Support** - Available in English, Urdu, and more
- 🎨 **Modern UI** - Sleek, animated interface with dark theme

## Tech Stack

- **Frontend**: Next.js 14, React 18, TypeScript
- **UI Framework**: Ant Design 5
- **Animations**: Framer Motion
- **Code Highlighting**: Prism.js, React Syntax Highlighter
- **AI Models**: LLaMA-Versatile, Grok API
- **Deployment**: Vercel (with serverless functions)

## Prerequisites

- Node.js 18+
- npm or yarn
- LLaMA API key
- Grok API key

## Installation

1. **Clone the repository**

```bash
git clone https://github.com/yourusername/devmate.git
cd devmate
```

2. **Install dependencies**

```bash
npm install
# or
yarn install
```

3. **Set up environment variables**

Create a `.env.local` file in the root directory:

```env
LLAMA_API_KEY=your_llama_api_key_here
GROK_API_KEY=your_grok_api_key_here
LLAMA_API_URL=https://api.llama-api.com/v1
GROK_API_URL=https://api.x.ai/v1
NODE_ENV=development
NEXT_PUBLIC_APP_URL=http://localhost:3000
```

4. **Run the development server**

```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## Project Structure

```
devmate/
├── src/
│   ├── app/                 # Next.js app directory
│   │   ├── api/            # API routes
│   │   ├── layout.tsx      # Root layout
│   │   ├── page.tsx        # Home page
│   │   └── globals.css     # Global styles
│   ├── components/         # React components
│   │   ├── features/       # Feature components
│   │   ├── home/           # Home page sections
│   │   ├── layout/         # Layout components
│   │   └── ui/             # UI components
│   ├── lib/                # Utility functions
│   │   ├── api/            # API clients
│   │   ├── hooks/          # Custom hooks
│   │   └── utils/          # Helper functions
│   ├── types/              # TypeScript types
│   ├── config/             # Configuration files
│   └── styles/             # Additional styles
├── public/                 # Static assets
├── .env.local             # Environment variables
└── package.json           # Dependencies
```

## API Routes

- `/api/chat` - Chat with AI assistant
- `/api/code-summary` - Analyze and summarize code
- `/api/snippets` - Generate code snippets
- `/api/recommendations` - Get learning recommendations

## Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm start` - Start production server
- `npm run lint` - Run ESLint
- `npm run type-check` - Run TypeScript type checking

## Deployment

### Deploy to Vercel

1. Push your code to GitHub
2. Import your repository in Vercel
3. Add environment variables in Vercel dashboard
4. Deploy!

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new)

## VS Code Extension (Coming Soon)

The VS Code extension will provide:

- Inline code suggestions
- Right-click context menu actions
- Sidebar panel integration
- Keyboard shortcuts

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License.

## Support

For support, email support@devmate.ai or join our Discord community.

## Acknowledgments

- LLaMA API for code analysis
- Grok API for conversational AI
- Ant Design for UI components
- Vercel for hosting

---

Built with ❤️ by the DevMate Team
