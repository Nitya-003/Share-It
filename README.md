# 📁 Share-IT: Secure File Sharing System

![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)
![Open Source Love](https://badges.frapsoft.com/os/v1/open-source.svg?v=103)
![PRs Welcome](https://img.shields.io/badge/PRs-welcome-brightgreen.svg)
![Node.js](https://img.shields.io/badge/Node.js-18+-339933?logo=node.js)
![React](https://img.shields.io/badge/React-18+-61DAFB?logo=react)
![MongoDB](https://img.shields.io/badge/MongoDB-Latest-13AA52?logo=mongodb)

Share-IT is a secure, scalable, and user-friendly full-stack web application for secure internal file sharing. It empowers organizations to upload and distribute files through unique, time-bound, and password-protected links—eliminating the security risks of public cloud storage and email attachments.

**Perfect for:** HR departments, Legal teams, Development teams, and any organization prioritizing data confidentiality.

---

## 📋 Table of Contents

- [🎯 Key Features](#-key-features)
- [💡 Why Share-IT?](#-why-share-it)
- [🛠️ Technology Stack](#%EF%B8%8F-technology-stack)
- [🔄 System Architecture](#-system-architecture)
- [📂 Project Structure](#-project-structure)
- [⚡ Quick Start](#-quick-start)
  - [Prerequisites](#prerequisites)
  - [Installation](#installation)
  - [Configuration](#configuration)
  - [Running the Application](#running-the-application)
- [📖 Usage Guide](#-usage-guide)
- [🔌 API Documentation](#-api-documentation)
- [🧪 Testing](#-testing)
- [🐛 Troubleshooting](#-troubleshooting)
- [📝 Project Structure Details](#-project-structure-details)
- [🚀 Deployment](#-deployment)
- [🤝 Contributing](#-contributing)
- [⚖️ License](#%EF%B8%8F-license)

---

## 🎯 Key Features

### Core Functionality
- **🔐 Secure Uploads** - Multi-format validation with configurable file size limits and virus scanning ready
- **⏰ Time-Bound Links** - Automatic link expiration after a configurable duration (1 hour to 30 days)
- **🛡️ Password Protection** - Optional AES-256 encryption with strong password requirements
- **📊 Admin Dashboard** - Comprehensive analytics for file traffic, storage usage, and user activity
- **🔑 JWT Authentication** - Secure token-based authentication for admin operations
- **📱 Responsive Design** - Seamless experience across desktop, tablet, and mobile devices
- **📥 Download Tracking** - Monitor who accessed and downloaded files with timestamps
- **🗑️ Automatic Cleanup** - Expired files and their metadata automatically purged from the system

---

## 💡 Why Share-IT?

In an era of sophisticated data breaches, relying on public cloud links or unencrypted email attachments is unacceptable. Share-IT addresses critical enterprise needs:

### 1. **Corporate Confidentiality & Compliance**
- Ideal for HR (payroll, background checks) and Legal departments (contracts, NDAs)
- Files automatically "vanish" after set duration, reducing compliance burden
- Audit trails for regulatory requirements (GDPR, HIPAA, SOX)

### 2. **Reduced Storage Bloat & Cost Savings**
- Time-bound links enforce a "clean-as-you-go" storage policy
- Prevents servers from filling with forgotten, outdated files
- Reduces long-term storage costs and maintenance overhead

### 3. **Eliminate Shadow IT**
- Provides a controlled, audited internal alternative to personal Dropbox/WeTransfer
- Prevents sensitive data from leaking to personal cloud accounts
- Maintains organizational control over shared data

### 4. **Developer Collaboration**
- Securely share `.env` templates, credentials, and configuration files
- Password-protected links for team members and contractors
- Zero exposure to public repositories or version control systems

### 5. **Privacy-First Design**
- No third-party dependency for sensitive data
- On-premise or private cloud deployment options
- Complete data ownership and control

---

## 🛠️ Technology Stack

| **Category** | **Technologies** |
|---|---|
| **Frontend** | React 18+, TypeScript, Vite, Axios, Tailwind CSS (or your CSS framework) |
| **Backend** | Node.js 18+, Express.js, JWT Authentication |
| **Database** | MongoDB, Mongoose ODM |
| **File Handling** | Multer (middleware), native Node.js streams |
| **Security** | bcrypt, crypto (AES-256), helmet, express-rate-limit |
| **Development** | Git, GitHub, Postman, ESLint, Prettier |
| **Deployment** | Docker (optional), CI/CD ready |

---

## 🔄 System Architecture

```mermaid
graph TD
    A[User Selects File] --> B{Validation}
    B -- Type/Size OK --> C[Upload to Server]
    B -- Invalid --> D[Error Message]
    C --> E[Generate Unique Link & Token]
    E --> F{Add Protection?}
    F -- Password --> G[Hash & Encrypt]
    F -- No Password --> H[Store Metadata]
    G --> H
    H --> I[(MongoDB)]
    I --> J[Return Share Link]
    J --> K[User Shares Link]
    K --> L{Recipient Access}
    L -- Password Required --> M[Verify Password]
    L -- Direct Access --> N[Check Expiry]
    M -- Valid --> N
    N -- Expired --> O[Deny Access]
    N -- Valid --> P[Download File]
    P --> Q[Update Statistics]
    Q --> R[Log Access]
```

---

## 📂 Project Structure

```
Secure-File-Sharing-System/
├── backend/                          # Node.js & Express server
│   ├── controllers/                 # Business logic for routes
│   │   ├── fileController.js        # File upload/download handlers
│   │   ├── authController.js        # Authentication logic
│   │   └── adminController.js       # Admin dashboard handlers
│   ├── models/                      # Mongoose schemas
│   │   ├── File.js                  # File metadata schema
│   │   └── User.js                  # User/admin schema
│   ├── routes/                      # API endpoint definitions
│   │   ├── fileRoutes.js            # File operations
│   │   ├── authRoutes.js            # Auth endpoints
│   │   └── adminRoutes.js           # Admin endpoints
│   ├── middleware/                  # Custom middleware
│   │   ├── authMiddleware.js        # JWT verification
│   │   ├── multerConfig.js          # File upload config
│   │   └── errorHandler.js          # Global error handling
│   ├── utils/                       # Utility functions
│   │   ├── encryption.js            # AES encryption/decryption
│   │   ├── tokenGenerator.js        # Unique link generation
│   │   └── validators.js            # Input validation
│   ├── uploads/                     # Physical file storage directory
│   ├── .env.example                 # Environment variables template
│   ├── server.js                    # Express app setup & entry point
│   ├── package.json                 # Backend dependencies
│   └── README.md                    # Backend-specific documentation
│
├── frontend/                         # React + TypeScript client
│   ├── src/
│   │   ├── components/              # Reusable UI components
│   │   │   ├── FileUpload.tsx       # Upload form component
│   │   │   ├── ShareLink.tsx        # Link display component
│   │   │   ├── AdminDashboard.tsx   # Admin panel
│   │   │   └── Navigation.tsx       # Navigation bar
│   │   ├── pages/                   # Page components
│   │   │   ├── Home.tsx             # Landing page
│   │   │   ├── Dashboard.tsx        # User dashboard
│   │   │   ├── Admin.tsx            # Admin panel
│   │   │   └── Download.tsx         # Download/access page
│   │   ├── services/                # API integration layer
│   │   │   ├── api.ts               # Axios configuration & endpoints
│   │   │   ├── fileService.ts       # File operations
│   │   │   └── authService.ts       # Authentication
│   │   ├── hooks/                   # Custom React hooks
│   │   ├── styles/                  # Global & component styles
│   │   ├── App.tsx                  # Root component
│   │   ├── main.tsx                 # React entry point
│   │   └── vite-env.d.ts            # Vite type definitions
│   ├── .env.example                 # Environment variables template
│   ├── vite.config.ts               # Vite build configuration
│   ├── tsconfig.json                # TypeScript configuration
│   ├── package.json                 # Frontend dependencies
│   └── README.md                    # Frontend-specific documentation
│
├── CODE_OF_CONDUCT.md               # Community guidelines
├── CONTRIBUTING.md                  # Contribution guidelines
├── LICENSE                          # GPL v3 License
├── PROJECT_STRUCTURE.md             # Detailed structure documentation
└── README.md                        # This file
```

---

## ⚡ Quick Start

### Prerequisites

Before you begin, ensure you have the following installed:
- **Node.js** 18.0.0 or higher ([Download](https://nodejs.org/))
- **npm** 9.0.0 or higher (comes with Node.js)
- **MongoDB** 5.0 or higher ([Download](https://www.mongodb.com/try/download/community) or use [MongoDB Atlas](https://www.mongodb.com/cloud/atlas) for cloud)
- **Git** for version control ([Download](https://git-scm.com/))

### Installation

**Step 1: Clone the Repository**
```bash
git clone https://github.com/yourusername/Secure-File-Sharing-System.git
cd Secure-File-Sharing-System
```

**Step 2: Install Backend Dependencies**
```bash
cd backend
npm install
```

**Step 3: Install Frontend Dependencies**
```bash
cd ../frontend
npm install
```

### Configuration

**Step 1: Backend Environment Setup**

Create a `.env` file in the `backend/` directory:
```bash
cp backend/.env.example backend/.env
```

Edit `backend/.env` with your configuration:
```
# Server Configuration
PORT=5000
NODE_ENV=development

# Database Configuration
MONGO_URI=mongodb://localhost:27017/secureFileDB
# For MongoDB Atlas: mongodb+srv://username:password@cluster.mongodb.net/secureFileDB

# JWT Configuration
JWT_SECRET=your-super-secret-jwt-key-change-this-in-production
JWT_EXPIRE=7d

# File Upload Configuration
MAX_FILE_SIZE=52428800  # 50MB in bytes
ALLOWED_EXTENSIONS=pdf,doc,docx,xlsx,xls,ppt,pptx,txt,zip,jpg,png

# Link Expiry Configuration (in seconds)
DEFAULT_EXPIRY=86400     # 24 hours
MAX_EXPIRY=2592000      # 30 days

# Frontend URL (for CORS)
FRONTEND_URL=http://localhost:5173

# Email Configuration (optional, for notifications)
SMTP_HOST=smtp.gmail.com
SMTP_PORT=587
SMTP_USER=your-email@gmail.com
SMTP_PASS=your-app-password
```

**Step 2: Frontend Environment Setup**

Create a `.env` file in the `frontend/` directory:
```bash
cp frontend/.env.example frontend/.env
```

Edit `frontend/.env`:
```
VITE_API_URL=http://localhost:5000/api
VITE_APP_NAME=Share-IT
```

### Running the Application

**Terminal 1: Start Backend Server**
```bash
cd backend
npm run dev
```
Expected output:
```
✓ Server running on http://localhost:5000
✓ Connected to MongoDB
```

**Terminal 2: Start Frontend Development Server**
```bash
cd frontend
npm run dev
```
Expected output:
```
✓ Local: http://localhost:5173/
```

### Access the Application

- **Frontend:** http://localhost:5173
- **API:** http://localhost:5000/api
- **Admin Dashboard:** http://localhost:5173/admin (requires authentication)

---

## 📖 Usage Guide

### For End Users

1. **Upload a File**
   - Navigate to the home page
   - Click "Upload File" button
   - Select a file (respects size limits)
   - (Optional) Set expiry time (default: 24 hours)
   - (Optional) Add password protection
   - Click "Generate Link"

2. **Share the Link**
   - Copy the generated link
   - Share via email, chat, or messaging platform
   - Optionally share the password separately for security

3. **Access Shared Files**
   - Recipient clicks the link
   - If password-protected, enters password
   - Views file metadata (size, upload date, expiry)
   - Downloads the file before it expires

### For Administrators

1. **Login to Dashboard**
   - Navigate to `/admin`
   - Enter admin credentials (initial setup required)
   - JWT token stored in localStorage

2. **Monitor Activity**
   - View all uploaded files and metadata
   - See access statistics and download counts
   - Monitor storage usage and quotas

3. **Manage Files**
   - View active and expired files
   - Manually remove files if needed
   - View audit logs and access history

4. **System Settings**
   - Configure file size limits
   - Set default expiry duration
   - Manage admin users and permissions

---

## 🔌 API Documentation

### Base URL
```
http://localhost:5000/api
```

### Authentication
All protected endpoints require a Bearer token:
```
Authorization: Bearer <JWT_TOKEN>
```

### Key Endpoints

#### **File Operations**

**POST /files/upload** - Upload a file
```bash
curl -X POST http://localhost:5000/api/files/upload \
  -F "file=@document.pdf" \
  -F "expiry=86400" \
  -F "password=securePass123" \
  -H "Authorization: Bearer TOKEN"
```

**GET /files/:fileId** - Download a file
```bash
curl http://localhost:5000/api/files/FILE_ID \
  -H "Authorization: Bearer TOKEN"
```

**GET /files/:fileId/metadata** - Get file metadata
```bash
curl http://localhost:5000/api/files/FILE_ID/metadata \
  -H "Authorization: Bearer TOKEN"
```

#### **Authentication**

**POST /auth/register** - Register new admin
```bash
curl -X POST http://localhost:5000/api/auth/register \
  -H "Content-Type: application/json" \
  -d '{"email":"admin@example.com","password":"securePass123"}'
```

**POST /auth/login** - Login
```bash
curl -X POST http://localhost:5000/api/auth/login \
  -H "Content-Type: application/json" \
  -d '{"email":"admin@example.com","password":"securePass123"}'
```

#### **Admin Operations**

**GET /admin/dashboard** - Get dashboard statistics
```bash
curl http://localhost:5000/api/admin/dashboard \
  -H "Authorization: Bearer TOKEN"
```

**GET /admin/files** - List all files
```bash
curl http://localhost:5000/api/admin/files \
  -H "Authorization: Bearer TOKEN"
```

For comprehensive API documentation, see [API_DOCS.md](./API_DOCS.md) (if available in repo).

---

## 🧪 Testing

### Backend Tests
```bash
cd backend
npm test
```

### Frontend Tests
```bash
cd frontend
npm test
```

### Manual Testing with Postman
1. Import the Postman collection from `postman-collection.json`
2. Set environment variables (`BASE_URL`, `TOKEN`, etc.)
3. Run requests against local or staging environment

---

## 🐛 Troubleshooting

### MongoDB Connection Issues

**Problem:** `MongooseError: Cannot connect to MongoDB`

**Solution:**
```bash
# Ensure MongoDB is running
mongod

# Check MongoDB URI in .env
# Local: mongodb://localhost:27017/secureFileDB
# Atlas: mongodb+srv://user:password@cluster.mongodb.net/dbname

# Verify connection with mongo shell
mongosh "mongodb://localhost:27017/secureFileDB"
```

### File Upload Fails

**Problem:** `413 Payload Too Large` or `File size exceeds limit`

**Solution:**
- Check `MAX_FILE_SIZE` in `.env` (default 50MB)
- Increase if needed, but be cautious of server resources
- Check `/backend/middleware/multerConfig.js` for additional limits

### CORS Errors

**Problem:** `Access to XMLHttpRequest blocked by CORS policy`

**Solution:**
```bash
# Verify FRONTEND_URL in backend/.env matches actual frontend URL
# Local development: http://localhost:5173
# Production: https://yourdomain.com

# Restart backend server after changes
```

### JWT Token Expired

**Problem:** `401 Unauthorized: Token expired`

**Solution:**
- Token automatically refreshes on login
- Clear browser localStorage and login again
- Increase `JWT_EXPIRE` in `.env` if needed

### Port Already in Use

**Problem:** `Error: listen EADDRINUSE :::5000`

**Solution:**
```bash
# macOS/Linux: Find and kill process
lsof -i :5000
kill -9 <PID>

# Windows: Find and kill process
netstat -ano | findstr :5000
taskkill /PID <PID> /F

# Or change PORT in .env
PORT=5001
```

---

## 📝 Project Structure Details

For more detailed information about project organization and conventions, see:
- [PROJECT_STRUCTURE.md](./PROJECT_STRUCTURE.md) - Comprehensive structure documentation
- [Backend README](./backend/README.md) - Backend-specific setup and development
- [Frontend README](./frontend/README.md) - Frontend-specific setup and development

---

## 🚀 Deployment

### Docker Deployment

**Build Docker Image:**
```bash
docker-compose up --build
```

**Using Docker Individually:**
```bash
# Backend
cd backend
docker build -t share-it-backend .
docker run -p 5000:5000 --env-file .env share-it-backend

# Frontend
cd frontend
docker build -t share-it-frontend .
docker run -p 5173:5173 share-it-frontend
```

### Cloud Deployment Options

- **Heroku:** See [DEPLOYMENT_HEROKU.md](./docs/DEPLOYMENT_HEROKU.md)
- **AWS:** See [DEPLOYMENT_AWS.md](./docs/DEPLOYMENT_AWS.md)
- **DigitalOcean:** See [DEPLOYMENT_DIGITALOCEAN.md](./docs/DEPLOYMENT_DIGITALOCEAN.md)
- **Vercel (Frontend Only):** See [DEPLOYMENT_VERCEL.md](./docs/DEPLOYMENT_VERCEL.md)

### Production Checklist

- [ ] Use environment variables for all secrets
- [ ] Enable HTTPS/SSL certificates
- [ ] Set up database backups and recovery
- [ ] Configure rate limiting on API endpoints
- [ ] Set up monitoring and logging
- [ ] Enable CORS for production domain only
- [ ] Configure firewall rules and security groups
- [ ] Test file upload/download with production settings
- [ ] Set up automated error reporting (Sentry, etc.)
- [ ] Document disaster recovery procedures

---

## 🤝 Contributing

We welcome contributions from developers of all skill levels! Whether it's bug fixes, feature additions, or documentation improvements, your help is valued.

### Getting Started with Contributing

1. **Read our Guidelines:** See [CONTRIBUTING.md](./CONTRIBUTING.md) for detailed contribution instructions
2. **Follow Code Standards:** Review [CODE_OF_CONDUCT.md](./CODE_OF_CONDUCT.md) for community expectations
3. **Set Up Development Environment:** Follow the Quick Start section above

### Development Workflow

```bash
# 1. Fork the repository on GitHub
# 2. Clone your fork
git clone https://github.com/YOUR_USERNAME/Secure-File-Sharing-System.git

# 3. Create a feature branch
git checkout -b feature/your-feature-name

# 4. Make your changes and test thoroughly
npm run lint      # Check code quality
npm test         # Run tests

# 5. Commit with clear messages
git commit -m "Add feature: brief description"

# 6. Push to your fork
git push origin feature/your-feature-name

# 7. Create a Pull Request on GitHub
```

### Areas We Need Help With

- 🐛 Bug fixes and issue resolution
- ✨ New features and enhancements
- 📚 Documentation improvements
- 🧪 Test coverage expansion
- 🎨 UI/UX improvements
- 🌍 Translation and internationalization
- 🚀 Performance optimization

---

## ⚖️ License

This project is licensed under the **GNU General Public License v3.0 (GPLv3)**.

This ensures that:
- ✅ The code remains free and open-source
- ✅ Any modifications must be shared under the same license
- ✅ Commercial use is permitted with proper attribution
- ✅ Users have the freedom to study, modify, and distribute the code

See the [LICENSE](./LICENSE) file for the complete legal text and terms.

---

## 📞 Support & Community

- **Issues & Bugs:** [GitHub Issues](https://github.com/yourusername/Secure-File-Sharing-System/issues)
- **Discussions:** [GitHub Discussions](https://github.com/yourusername/Secure-File-Sharing-System/discussions)
- **Email Support:** contact@example.com
- **Documentation:** [Wiki](https://github.com/yourusername/Secure-File-Sharing-System/wiki)

---

## 🎓 Learning Resources

- [Node.js Documentation](https://nodejs.org/docs/)
- [Express.js Guide](https://expressjs.com/)
- [MongoDB Manual](https://docs.mongodb.com/manual/)
- [React Documentation](https://react.dev/)
- [TypeScript Handbook](https://www.typescriptlang.org/docs/)

---

## 🌟 Acknowledgments

- Thanks to all contributors who have helped improve Share-IT
- Special thanks to the open-source community for amazing libraries and tools
- Inspired by the need for secure, simple file sharing solutions

---

<div align="center">

### **_Built to provide a secure bridge for data, ensuring privacy remains a right, not a privilege._**

**[Star us on GitHub](https://github.com/yourusername/Secure-File-Sharing-System) ⭐ • [Follow us on Twitter](https://twitter.com/yourhandle) 🐦 • [Support the Project](https://github.com/sponsors/yourusername) ❤️**

</div>