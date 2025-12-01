# Alumni Connect Backend

## Project Structure

```
Backend/
├── src/
│   ├── config/
│   │   └── db.js                    # MongoDB connection configuration
│   ├── controllers/
│   │   └── authController.js        # Authentication controllers (signup, login, logout, checkAuth)
│   ├── models/
│   │   ├── Clubs.model.js          # Club schema and model
│   │   ├── Message.model.js        # Message schema and model
│   │   ├── Opportunity.model.js    # Opportunity schema and model
│   │   └── User.model.js           # User schema and model
│   ├── routes/
│   │   ├── authRoute.js            # Authentication routes
│   │   ├── clubs.js                # Club CRUD routes
│   │   ├── message.js              # Message routes
│   │   ├── opportunity.js          # Opportunity CRUD routes
│   │   ├── testRoute.js            # Test/health check route
│   │   └── user.js                 # User CRUD routes
│   ├── utils/
│   │   └── generateTokenAndSetCookie.js  # JWT token generation utility
│   └── server.js                   # Main application entry point
├── .env.example                    # Environment variables template
└── package.json                    # Project dependencies and scripts
```

## Setup Instructions

### 1. Install Dependencies

```bash
npm install
```

### 2. Configure Environment Variables

Copy `.env.example` to `.env` and update the values:

```bash
cp .env.example .env
```

Edit `.env` with your configuration:

- `DATABASE_URL`: Your MongoDB connection string
- `PORT`: Server port (default: 3000)
- `NODE_ENV`: Environment (development/production)
- `JWT_SECRET`: Secret key for JWT tokens (change this!)

### 3. Start the Server

**Development mode (with auto-reload):**

```bash
npm run dev
```

**Production mode:**

```bash
npm start
```

## API Endpoints

### Authentication

- `POST /api/auth/signup` - Register a new user
- `POST /api/auth/login` - Login user
- `POST /api/auth/logout` - Logout user
- `GET /api/auth/check` - Check authentication status

### Clubs

- `GET /api/clubs` - Get all clubs
- `GET /api/clubs/:id` - Get specific club

### Users

- `POST /api/users` - Create new user
- `GET /api/users` - Get all users
- `GET /api/users/:id` - Get specific user
- `PUT /api/users/:id` - Update user
- `DELETE /api/users/:id` - Delete user

### Opportunities

- `POST /api/opportunities` - Create new opportunity
- `GET /api/opportunities` - Get all opportunities
- `GET /api/opportunities/:id` - Get specific opportunity
- `PUT /api/opportunities/:id` - Update opportunity
- `DELETE /api/opportunities/:id` - Delete opportunity

### Messages

- `POST /api/messages` - Send a message
- `GET /api/messages` - Get all messages
- `GET /api/messages/:sender/:receiver` - Get messages between two users
- `GET /api/messages/:id` - Get specific message
- `DELETE /api/messages/:id` - Delete message

### Test

- `GET /` - API health check

## Technology Stack

- **Runtime**: Node.js with ES Modules
- **Framework**: Express 5.x
- **Database**: MongoDB with Mongoose ODM
- **Authentication**: JWT (JSON Web Tokens) with httpOnly cookies
- **Password Hashing**: bcryptjs
- **Middleware**: CORS, cookie-parser

## Notes

- All routes use ES6 module syntax (`import/export`)
- All models include timestamps for `createdAt` and `updatedAt`
- Authentication uses JWT tokens stored in httpOnly cookies
- CORS is enabled for cross-origin requests
