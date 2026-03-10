# 🚀 Quick Start Guide

## ⚡ 5-Minute Setup

### Step 1: Open PowerShell and Navigate to Project
```powershell
cd "c:\Users\ADMIN\Desktop\Proyectos\Nuestra página"
```

### Step 2: Start Backend Server (Terminal 1)
```powershell
cd server
npm install
npm start
```

Expected output:
```
Server running on http://localhost:5000
```

### Step 3: Start Frontend Server (Terminal 2)
```powershell
cd client
npm install
npm run dev
```

Expected output:
```
  ➜  Local:   http://localhost:3000/
```

### Step 4: Open in Browser
Visit `http://localhost:3000` and explore the website!

---

## 📱 What's Included

### Frontend Pages
- ✅ **Home** - Hero section with CTA, services overview, benefits
- ✅ **Services** - Detailed service cards with pricing
- ✅ **Portfolio** - Project grid with filtering
- ✅ **About** - Company mission, vision, team, stats
- ✅ **Contact** - Contact form with API integration, FAQ

### Features
- ✅ Responsive design (mobile-friendly)
- ✅ Smooth animations and transitions
- ✅ Professional Tailwind CSS styling
- ✅ Reusable components
- ✅ Navigation bar and footer
- ✅ Contact form with validation
- ✅ Backend API integration

### Backend API
- ✅ `POST /api/contact` - Submit contact form
- ✅ `GET /api/messages` - Retrieve messages (admin)
- ✅ `GET /api/health` - Server health check
- ✅ CORS enabled for frontend communication
- ✅ Form validation and error handling
- ✅ Data persistence in JSON file

---

## 📂 Project Structure

```
Nuestra página/
├── client/                 # React Frontend
│   ├── src/
│   │   ├── components/     # Navbar, Footer, ServiceCard, ProjectCard
│   │   ├── pages/          # Home, Services, Portfolio, About, Contact
│   │   ├── services/       # api.js (Axios client)
│   │   ├── App.jsx
│   │   ├── main.jsx
│   │   └── index.css       # Tailwind setup
│   ├── index.html
│   ├── package.json
│   ├── vite.config.js
│   ├── tailwind.config.js
│   └── postcss.config.js
│
├── server/                 # Express Backend
│   ├── routes/            # API routes
│   ├── controllers/       # Route handlers
│   ├── data/              # messages.json storage
│   ├── server.js
│   ├── package.json
│   └── .env.example
│
└── README.md              # Full documentation
```

---

## 🎨 Customization Examples

### Change Company Name
1. Edit `client/src/components/Navbar.jsx` line 10
2. Edit `client/src/components/Footer.jsx` line 9

### Update Services
Edit `client/src/pages/Services.jsx` and add/modify the services array

### Change Colors
Edit `client/tailwind.config.js` extend section:
```js
colors: {
  primary: '#3b82f6',    // Change this
  secondary: '#1e40af',  // Change this
  accent: '#f59e0b',     // Change this
}
```

### Add New Portfolio Project
Add to the projects array in `client/src/pages/Portfolio.jsx`:
```js
{
  name: 'Project Name',
  description: 'Brief description',
  category: 'website', // 'website', 'automation', 'chatbot'
  image: null,
}
```

---

## 🔌 Testing the Contact Form

1. Go to `http://localhost:3000/contact`
2. Fill in the form:
   - Name: John Doe
   - Email: john@example.com
   - Company: ABC Company
   - Message: Test message
3. Click "Send Message"
4. Check the success message

**View submitted messages:**
```powershell
# Open server/data/messages.json to see stored contact submissions
```

---

## 🐛 Common Issues & Fixes

### Issue: "Cannot GET /api/contact"
- **Fix**: Make sure backend server is running on port 5000
- Check that you ran `npm start` in the server folder

### Issue: Frontend shows "Cannot connect to API"
- **Fix**: Ensure CORS is enabled (already configured)
- Check that backend is running
- Verify proxy URL in `vite.config.js` is correct

### Issue: Port 3000 or 5000 already in use
- **Fix**: Change the port in `server/server.js` (line 3: `const PORT = ...`)
- Or in `client/vite.config.js` (line 4: `port: 3000`)

### Issue: npm install fails
- **Fix**: Clear npm cache: `npm cache clean --force`
- Delete `node_modules` folder and `package-lock.json`
- Run `npm install` again

---

## 📊 API Endpoints Reference

### Submit Contact Form
```
POST http://localhost:5000/api/contact
Content-Type: application/json

{
  "name": "John Doe",
  "email": "john@example.com",
  "company": "ABC Company",
  "message": "Your message here"
}

Response (200 OK):
{
  "success": true,
  "message": "Thank you for your message. We will get back to you soon!",
  "data": {
    "id": 1234567890,
    "name": "John Doe",
    "email": "john@example.com",
    "company": "ABC Company",
    "message": "Your message here",
    "createdAt": "2024-03-10T10:30:00.000Z"
  }
}
```

### Get All Messages
```
GET http://localhost:5000/api/messages

Response (200 OK):
{
  "success": true,
  "count": 5,
  "data": [...]
}
```

---

## 🎯 Next Steps

1. **Customize Content** - Update company name, services, and contact info
2. **Add Images** - Replace placeholder images with real project images
3. **Setup Email** - Integrate email service (SendGrid, Mailgun, etc.)
4. **Add Database** - Replace JSON file with MongoDB or PostgreSQL
5. **Deploy** - Deploy frontend to Vercel/Netlify, backend to Heroku/Railway
6. **Add Analytics** - Integrate Google Analytics or Mixpanel
7. **SEO Optimization** - Add meta tags and structured data

---

## 📚 Useful Commands

```powershell
# Backend
cd server
npm install              # Install dependencies
npm start               # Start server (production)
npm run dev             # Start with nodemon (development)

# Frontend
cd client
npm install             # Install dependencies
npm run dev             # Start dev server
npm run build           # Build for production
npm run preview         # Preview production build
```

---

## 🎓 Learning Resources

- [React Documentation](https://react.dev)
- [React Router Docs](https://reactrouter.com)
- [Tailwind CSS Docs](https://tailwindcss.com)
- [Express.js Guide](https://expressjs.com)
- [Axios Documentation](https://axios-http.com)

---

## 📞 Support

For issues or questions:
1. Check the README.md for detailed documentation
2. Review the code comments in each file
3. Check the browser console for error messages
4. Review the server console for API errors

---

**Ready to launch? Happy coding! 🚀**
