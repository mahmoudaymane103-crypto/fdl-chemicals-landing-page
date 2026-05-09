# FDL Chemicals - Landing Page

A premium, studio-grade landing page for FDL Chemicals, a B2B chemical import/export company based in Casablanca, Morocco.

## 🚀 Features

- **Industrial Design**: Dark industrial palette with acid yellow accents
- **Smooth Animations**: GSAP + ScrollTrigger + Lenis for premium interactions
- **Responsive**: Mobile-first design with breakpoints at 768px and 1280px
- **Professional Backend**: Node.js/Express server with API endpoints
- **Security**: Helmet.js for security headers, CORS configuration
- **Performance**: Compression middleware, optimized static file serving
- **Multilingual**: Available in French for North African and European markets

## 🛠️ Tech Stack

- **Frontend**: Pure HTML5, CSS3, ES6+ JavaScript
- **Backend**: Node.js, Express.js
- **Animations**: GSAP, ScrollTrigger, Lenis smooth scroll
- **Security**: Helmet.js, CORS
- **Performance**: Compression, static file optimization

## 📁 Project Structure

```
fdl-chemicals/
├── public/                 # Static files
│   ├── index.html         # Main landing page
│   ├── styles.css         # Styles with design tokens
│   └── script.js          # Client-side JavaScript
├── .github/               # GitHub configuration
│   └── copilot-instructions.md
├── server.js              # Express server
├── package.json           # Dependencies and scripts
├── .env                   # Environment variables
└── README.md             # This file
```

## 🚀 Quick Start

### Prerequisites

- Node.js 16.0.0 or higher
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd fdl-chemicals
```

2. Install dependencies:
```bash
npm install
```

3. Create environment file:
```bash
cp .env.example .env
# Edit .env with your configuration
```

4. Start the development server:
```bash
npm run dev
```

5. Open your browser to `http://localhost:3000`

## 📜 Available Scripts

- `npm start` - Start production server
- `npm run dev` - Start development server with auto-reload
- `npm run build` - Build for production (placeholder)

## 🌐 API Endpoints

- `GET /api/health` - Health check endpoint
- `POST /api/contact` - Contact form submission

## 🎨 Design System

### Color Palette
- Background: `#0a0b0d`
- Surface: `#111318`
- Surface 2: `#181c23`
- Border: `rgba(255,255,255,0.07)`
- Accent: `#c8f04a`
- Text Primary: `#f0ede6`
- Text Secondary: `#8a8f9a`
- Text Muted: `#4a4f5a`

### Typography
- Display: Barlow Condensed (900 weight)
- Mono: IBM Plex Mono
- Body: Barlow

## 🔒 Security Features

- Helmet.js for security headers
- CORS configuration
- Input validation and sanitization
- Rate limiting ready (can be added)

## 📱 Responsive Breakpoints

- Mobile: < 768px
- Tablet: 768px - 1280px
- Desktop: > 1280px

## 🌍 Localization

Currently available in French. English version can be added by creating separate routes or subdomains.

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## 📄 License

ISC License - see LICENSE file for details.

## 📞 Contact

FDL Chemicals
- Email: info@fdlchemicals.ma
- Phone: +212 522 123 456
- Address: 123 Boulevard Mohammed V, Casablanca, Morocco

---

Built with ❤️ for the chemical industry</content>
<parameter name="filePath">c:\Users\mahmo\FDL\README.md