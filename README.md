# RealTrust – Full Stack MERN Real Estate Portfolio

A complete **MERN Stack** real estate portfolio website with a fully functional **Admin Panel**, **Image Cropping**, and **Cloudinary Uploads**.  
Frontend is deployed on **Vercel**, backend on **Render**, and database on **MongoDB Atlas**.

---

## 🚀 Live URLs

| Part | URL |
|------|-----|
| **Frontend (Vercel)** | https://project-fp.vercel.app/ |
| **Backend API (Render)** | https://projectfp.onrender.com |
| **GitHub Repository** | https://github.com/thepgopalhub/projectFP |

---

## 📌 Project Features

### 🌐 Landing Page
Fully responsive landing page consisting of:
- Hero Section  
- Our Projects (fetched from backend)  
- Happy Clients (fetched from backend)  
- Realtor Section  
- Why Choose Us  
- Newsletter Subscription  
- Contact Form (stores in DB)  
- Footer Section  

---

## 🔐 Admin Panel Features

Accessible at:  
```
/admin
```

### 1️⃣ **Project Management**
- Add new project  
- Upload image with **16:9 cropping**
- Delete project  
- Auto-fetch list of projects  

### 2️⃣ **Client Management**
- Add client name  
- Add designation  
- Add review  
- Upload image with **1:1 cropping**  
- Delete client  

### 3️⃣ **Contact Messages**
Displays messages submitted using Contact Form:
- Full Name  
- Email  
- Phone  
- City  
- Message  
- Timestamp  

### 4️⃣ **Newsletter Subscribers**
Shows all subscribed emails sorted by date.

---

## 🎨 Additional Bonus Features
- ⭐ **Image Cropping** using react-image-crop + Canvas  
- ⭐ **Cloudinary Upload Integration**  
- ⭐ Fully responsive UI  
- ⭐ Professional Admin Dashboard UI  

---

## 🛠️ Tech Stack

### **Frontend**
- React (Vite)
- Tailwind CSS
- React Router DOM
- React Hot Toast
- React Image Crop

### **Backend**
- Node.js
- Express.js
- MongoDB + Mongoose
- Cloudinary (Image Upload)
- CORS

### **Deployment**
- Frontend → **Vercel**
- Backend → **Render**
- Database → **MongoDB Atlas**

---

## 📁 Folder Structure

```
projectFP/
│
├── backend/
│   ├── config/
│   │   └── cloudinary.js
│   ├── models/
│   │   ├── Project.js
│   │   ├── Client.js
│   │   ├── ContactMessage.js
│   │   └── Newsletter.js
│   ├── routes/
│   │   ├── projectRoutes.js
│   │   ├── clientRoutes.js
│   │   ├── contactRoutes.js
│   │   ├── newsletterRoutes.js
│   │   └── uploadRoutes.js
│   ├── .env
│   ├── server.js
│   └── package.json
│
├── frontend/
│   ├── src/
│   │   ├── admin/
│   │   │   ├── AdminLayout.jsx
│   │   │   └── pages/
│   │   │       ├── ProjectsPage.jsx
│   │   │       ├── ClientsPage.jsx
│   │   │       ├── MessagesPage.jsx
│   │   │       └── SubscribersPage.jsx
│   │   ├── components/
│   │   │   ├── Navbar.jsx
│   │   │   ├── Hero.jsx
│   │   │   ├── Projects.jsx
│   │   │   ├── Clients.jsx
│   │   │   ├── Contact.jsx
│   │   │   ├── Newsletter.jsx
│   │   │   ├── Footer.jsx
│   │   │   ├── AboutUs.jsx
│   │   │   ├── Realtor.jsx
│   │   │   ├── WhyChooseUs.jsx
│   │   │   └── ImgCropper.jsx
│   │   ├── api/
│   │   │   └── api.js
│   │   ├── App.jsx
│   │   └── main.jsx
│   ├── index.html
│   ├── tailwind.config.js
│   ├── vercel.json
│   └── package.json
│
├── README.md
└── .gitignore
```

---

## ⚙️ Environment Variables

### Backend `.env`
```
PORT=5000
MONGO_URI=your_mongo_connection_string
CLOUDINARY_CLOUD_NAME=xxxx
CLOUDINARY_API_KEY=xxxx
CLOUDINARY_API_SECRET=xxxx
```

---

## ▶️ How to Run Locally

### 1️⃣ Clone Repository
```
git clone https://github.com/thepgopalhub/projectFP
cd projectFP
```

### 2️⃣ Install Backend
```
cd backend
npm install
npm start
```

### 3️⃣ Install Frontend
```
cd frontend
npm install
npm run dev
```

---

## 🚀 Deployment Notes

### Backend (Render)
- Auto deploy on push
- Add environment variables
- Enable CORS
- Ping service if needed

### Frontend (Vercel)
- Framework → Vite
- Root Directory → frontend
- Build Command → `npm run build`
- Output Directory → `dist`
- Add vercel.json for correct routing

---

## 📦 API Endpoints Summary

### Projects  
```
GET /api/projects
POST /api/projects
DELETE /api/projects/:id
```

### Clients  
```
GET /api/clients
POST /api/clients
DELETE /api/clients/:id
```

### Contact  
```
POST /api/contact
GET /api/contact
```

### Newsletter  
```
POST /api/newsletter
GET /api/newsletter
```

### Upload (Cloudinary)
```
POST /api/upload
```

---

## 🎉 Author
**Gopal Choudhary**  
B.Tech IT — Full Stack MERN Developer  

---

## 📄 License
This project is for educational and placement assignment purposes only.

