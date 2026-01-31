# Secure File Sharing System - Project Structure

## Directory Layout

```
Secure-File-Sharing-System/
├── backend/                      # Backend Node.js/Express server
│   ├── controllers/              # Request handlers
│   ├── routes/                   # API route definitions
│   ├── models/                   # MongoDB/Mongoose models
│   │   ├── File.js              # File metadata model
│   │   └── User.js              # User/Admin model
│   ├── middleware/              # Custom middleware
│   │   └── auth.js              # Authentication & authorization
│   ├── uploads/                 # Uploaded files storage
│   ├── .env.example             # Environment variables template
│   ├── .gitignore              # Backend git ignore rules
│   ├── package.json            # Backend dependencies
│   └── server.js               # Server entry point
│
├── frontend/                    # React TypeScript frontend
│   ├── src/
│   │   ├── components/         # Reusable React components
│   │   │   ├── Analytics.tsx   # Analytics dashboard component
│   │   │   ├── RecentShares.tsx # Recent shares list
│   │   │   ├── Settings.tsx    # Settings component
│   │   │   ├── Sidebar.tsx     # Navigation sidebar
│   │   │   └── UploadShare.tsx # File upload component
│   │   ├── pages/              # Page components
│   │   │   ├── App.tsx         # Main application
│   │   │   └── main.tsx        # Application entry point
│   │   ├── services/           # API service layer
│   │   │   └── Sharing.js      # File sharing services
│   │   └── assets/             # Static assets (CSS, images)
│   │       ├── App.css         # App-specific styles
│   │       └── index.css       # Global styles
│   ├── .gitignore              # Frontend git ignore rules
│   ├── eslint.config.js        # ESLint configuration
│   ├── index.html              # HTML template
│   ├── package.json            # Frontend dependencies
│   ├── tsconfig.json           # TypeScript configuration
│   ├── tsconfig.app.json       # App TypeScript config
│   ├── tsconfig.node.json      # Node TypeScript config
│   ├── vite.config.ts          # Vite bundler configuration
│   └── vite-env.d.ts           # Vite type definitions
│
└── README.md                    # Project documentation
```

## Technology Stack

### Backend
- **Runtime:** Node.js
- **Framework:** Express.js
- **Database:** MongoDB with Mongoose ODM
- **File Upload:** Multer
- **Authentication:** JWT (jsonwebtoken) & bcryptjs
- **Security:** CORS, dotenv

### Frontend
- **Framework:** React 18
- **Language:** TypeScript
- **Build Tool:** Vite
- **HTTP Client:** Axios
- **Icons:** Lucide React
- **Linting:** ESLint

## Setup Instructions

### 1. Backend Setup
```bash
cd backend
npm install
cp .env.example .env
# Edit .env with your configuration
npm run dev
```

### 2. Frontend Setup
```bash
cd frontend
npm install
npm run dev
```

### 3. Database Setup
- Install MongoDB locally or use MongoDB Atlas
- Update MONGO_URI in backend/.env

## Development Workflow

1. Start MongoDB service
2. Run backend: `cd backend && npm run dev`
3. Run frontend: `cd frontend && npm run dev`
4. Access app at http://localhost:5173

## Next Steps

### Backend Development
- [ ] Create file upload controller
- [ ] Implement authentication routes
- [ ] Add file download endpoint
- [ ] Create admin management routes
- [ ] Add input validation
- [ ] Implement password hashing for files

### Frontend Development
- [ ] Connect components to backend API
- [ ] Add routing (React Router)
- [ ] Implement authentication flow
- [ ] Create admin dashboard
- [ ] Add form validation
- [ ] Implement error handling

## API Endpoints (To Be Implemented)

### File Operations
- POST /api/files/upload - Upload file
- GET /api/files/:id - Download file
- GET /api/files - List files (admin)
- DELETE /api/files/:id - Delete file (admin)

### Authentication
- POST /api/auth/register - Register user
- POST /api/auth/login - Login
- GET /api/auth/verify - Verify token

### Analytics
- GET /api/analytics/stats - Get usage statistics
