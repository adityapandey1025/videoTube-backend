# YouTube Backend Clone 🎬

A YouTube-inspired backend built using **Node.js, Express.js, MongoDB, and Mongoose**, following the CodeWithHarry / Chai aur Code learning approach.

## Tech Stack

- Node.js & Express.js
- MongoDB & Mongoose
- JWT Authentication
- bcrypt for password hashing
- Multer for file uploads
- Cloudinary for media storage (if configured)

## Features

- [x] User registration and login
- [x] Password hashing with bcrypt
- [x] Access and refresh token generation
- [x] JWT authentication middleware
- [x] Logout functionality
- [ ] Role-based authorization
- [ ] Video management
- [ ] Comments and likes
- [ ] Subscriptions and playlists

## Getting Started

**1. Clone the repository**

```bash
git clone <YOUR_REPOSITORY_URL>
cd youtube-backend
```

**2. Install dependencies**

```bash
npm install
```

**3. Configure environment variables**

Create a `.env` file using `.env.example` as a reference. Add your MongoDB URI and JWT secrets.

**4. Start the server**

```bash
npm run dev
```

Use the command configured in your `package.json`.

## Project Structure

```text
src/
├── controllers/
├── models/
├── routes/
├── middlewares/
├── utils/
├── app.js
└── index.js
```

## Development

This project is being developed independently for learning backend development, REST API design, authentication, authorization, and MongoDB operations.

**Status:** In Development 🚧
