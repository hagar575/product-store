# Product Store 

A full-stack MERN product store application where users can create, update, and delete products. Built with a React (Vite) frontend with Chakra UI and a Node.js/Express + MongoDB backend. Deployed to Render.

**Live Demo:** https://product-store-rels.onrender.com/

## Features

- Create a product with name, price, and image URL.
- Update a product.
- Delete a product.
- Light / dark mode toggle.
- Fully responsive.
- Toast notifications and confirmation dialogs for actions.

## Tech Stack

**Frontend**
- React (Vite)
- Chakra UI (components, color mode, toaster, dialog snippets)
- React Router DOM (multi-page navigation)
- React Icons
- Zustand (state management)

**Backend**
- Node.js / Express
- MongoDB with Mongoose (NoSQL — collections & documents instead of tables/rows)
- dotenv (environment variables)
- Nodemon (dev auto-restart)

**Deployment**
- Render

## Prerequisites

- Node.js (v18+)
- A MongoDB database.

## Setup and Installation

### 1. Clone the repository
 
```bash
git clone https://github.com/hagar575/product-store.git
cd product-store-project
```
 
### 2. Root setup
 
The root `package.json` (created with `npm init -y`) is used to simplify deployment. It can hold scripts that install and build the frontend, then start the backend, all from one command.
 
```bash
npm install
```
 
### 3. Backend setup
 
```bash
cd backend
npm install
```
 
Create a `.env` file inside `backend/`:
 
```
PORT=5000
MONGO_URI=your_mongodb_connection_string
NODE_ENV=development
```
 
Run the backend in dev mode (auto-restarts on file changes via nodemon):
 
```bash
npm run dev
```
 
### 4. Frontend setup
 
```bash
cd frontend
npm install
npm run dev
```
 
Frontend runs by default at `http://localhost:5173`.
 
## Available Scripts
 
**Backend** (`/backend`)
- `npm run dev` - Start server with nodemon (auto-restart on changes).
- `npm start` - Start server normally
**Frontend** (`/frontend`).
- `npm run dev` - Start development server.
- `npm run build` - Build for production.
- `npm run preview` - Preview the production build.

## API Endpoints
 
| Method | Endpoint            | Description           |
|--------|----------------------|------------------------|
| GET    | `/api/products`      | Get all products       |
| POST   | `/api/products`      | Create a new product   |
| PUT    | `/api/products/:id`  | Update a product       |
| DELETE | `/api/products/:id`  | Delete a product       |
 
## Environment Variables

- `PORT` - Port the backend server runs on.       
- `MONGO_URI` - MongoDB connection string.           
- `NODE_ENV` - `development` or `production`. 
 
## UI Components
 
- **Navbar** - navigation + light/dark mode toggle.
- **Create Page** - form with three fields: product name, price, image URL.
- **Home Page** - displays all products with edit/delete actions.
- Toast and dialog components powered by Chakra UI snippets.

## Possible Future Improvements

- Search/filter products by name or category.
- Image upload instead of just an image URL field.
- Product reviews/ratings.
- Authentication and authorization.

## Acknowledgments
 
- [Chakra UI](https://chakra-ui.com) for components and snippets.
- [Unsplash](https://unsplash.com) for images.
- [Render](https://render.com) for hosting.

## License

This project is open source and available under the [MIT License](LICENSE).
