# Real Estate Arbitrage Platform

A web-based platform that scrapes real estate listings, identifies underpriced properties, and delivers alerts to subscribers.

## Features

- **Real-time property alerts** - Get instant notifications when undervalued properties are found
- **Cross-platform analysis** - Comprehensive data from Sreality.cz and Bazos.cz
- **Market insights and analytics** - Advanced data visualization and market trends
- **Smart filters for customized searches** - Tailored property search with custom criteria
- **User authentication and subscription plans** - Secure user accounts with tiered access
- **Responsive design** - Optimized for desktop and mobile devices
- **Real-time data updates** - Live property data synchronization

## Tech Stack

- **Frontend**: React 18 with TypeScript
- **Styling**: Tailwind CSS for responsive design
- **Build Tool**: Vite for fast development and optimized builds
- **Icons**: Lucide React for consistent iconography
- **Deployment**: Cloudflare Pages with Wrangler

## Prerequisites

Before getting started, ensure you have the following installed:

- **Node.js** (version 18.0 or higher)
- **npm** (version 8.0 or higher) or **yarn**
- **Git** for version control

## Installation

### 1. Clone the Repository

```bash
git clone https://github.com/Matthew-pros/CZ-RealEstate-agent.git
cd CZ-RealEstate-agent
```

### 2. Install Dependencies

```bash
npm install
```

Or if you prefer yarn:

```bash
yarn install
```

### 3. Environment Setup

Create a `.env` file in the root directory and add any necessary environment variables:

```bash
# Example environment variables
VITE_API_URL=your_api_url_here
VITE_APP_NAME="Real Estate Arbitrage Platform"
```

## Running the Application

### Development Mode

Start the development server with hot reloading:

```bash
npm run dev
```

Or with yarn:

```bash
yarn dev
```

The application will be available at `http://localhost:5173`

### Development Features

- **Hot Module Replacement (HMR)** for instant updates
- **TypeScript type checking** in real-time
- **ESLint integration** for code quality
- **Tailwind CSS** with JIT compilation

## Building for Production

### 1. Create Production Build

```bash
npm run build
```

This will:
- Compile TypeScript to JavaScript
- Bundle and minify all assets
- Optimize images and other static files
- Generate a `dist/` directory with production-ready files

### 2. Preview Production Build

Test the production build locally:

```bash
npm run preview
```

### 3. Serve Static Files

You can serve the production build using any static file server:

```bash
# Using npx serve
npx serve dist

# Using Python
python -m http.server 8000 -d dist

# Using Node.js http-server
npx http-server dist
```

## Deployment

### Cloudflare Pages (Current Setup)

This project is configured for deployment on Cloudflare Pages using Wrangler:

#### Prerequisites
- Cloudflare account
- Wrangler CLI installed globally

#### Deploy Steps

1. **Install Wrangler globally:**
```bash
npm install -g wrangler
```

2. **Login to Cloudflare:**
```bash
wrangler login
```

3. **Deploy to Cloudflare Pages:**
```bash
npm run deploy
# Or directly with wrangler
wrangler pages deploy dist
```

### Streamlit Cloud Deployment

This project is configured for easy deployment to Streamlit Cloud. The `streamlit_app.py` script will automatically build the React frontend and serve it.

#### Prerequisites
- A GitHub repository with your project code.
- A Streamlit Cloud account.

#### Deployment Steps

1. **Push to GitHub:** Ensure your latest code is pushed to your GitHub repository.
2. **Visit Streamlit Cloud:** Go to [share.streamlit.io](https://share.streamlit.io).
3. **Connect Repository:** Click "New app" and connect your GitHub repository.
4. **Configure Deployment:**
   - **Repository:** Choose your repository.
   - **Branch:** Choose the branch you want to deploy (e.g., `main`).
   - **Main file path:** `streamlit_app.py`.
5. **Deploy:** Click "Deploy" and wait for the build process to complete. Streamlit Cloud will automatically install the necessary dependencies from `requirements.txt` and `packages.txt`, run the `streamlit_app.py` script, which in turn builds the React application and serves it.

### Alternative Deployment Options

#### Vercel
```bash
npm i -g vercel
vercel --prod
```

#### Netlify
```bash
npm run build
# Drag and drop the 'dist' folder to Netlify
```

#### GitHub Pages
```bash
npm run build
# Push the 'dist' folder to gh-pages branch
```

## Development Workflow

### Code Quality

The project includes several tools for maintaining code quality:

```bash
# Lint code
npm run lint

# Fix linting issues
npm run lint:fix

# Type checking
npx tsc --noEmit
```

### Project Structure

```
CZ-RealEstate-agent/
├── src/
│   ├── components/          # React components
│   ├── pages/              # Application pages
│   ├── hooks/              # Custom React hooks
│   ├── utils/              # Utility functions
│   ├── types/              # TypeScript type definitions
│   └── styles/             # CSS and styling files
├── public/                 # Static assets
├── dist/                   # Production build output
├── wrangler.toml          # Cloudflare Pages configuration
├── package.json           # Dependencies and scripts
├── vite.config.ts         # Vite configuration
├── tailwind.config.js     # Tailwind CSS configuration
└── tsconfig.json          # TypeScript configuration
```

## Troubleshooting

### Common Issues

1. **Port already in use:**
   ```bash
   lsof -ti:5173 | xargs kill -9
   ```

2. **Node modules issues:**
   ```bash
   rm -rf node_modules package-lock.json
   npm install
   ```

3. **Build failures:**
   ```bash
   npm run clean
   npm run build
   ```

### Performance Optimization

- **Code Splitting:** The build process automatically splits code for optimal loading
- **Asset Optimization:** Images and other assets are automatically compressed
- **Tree Shaking:** Unused code is automatically removed from the production build

## Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

This project is private and proprietary.

## Support

For support or questions, please contact the development team or create an issue in the repository.
