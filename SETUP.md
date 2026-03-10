# Project Setup Instructions

## Prerequisites
- Node.js v14+ installed
- npm or yarn package manager
- Windows PowerShell or Command Prompt

## Installation Steps

### 1. Install Backend Dependencies

```powershell
cd "c:\Users\ADMIN\Desktop\Proyectos\Nuestra página\server"
npm install
```

**Packages installed:**
- express@4.18.2
- cors@2.8.5
- body-parser@1.20.2
- nodemon@3.0.1 (dev)

### 2. Install Frontend Dependencies

```powershell
cd "c:\Users\ADMIN\Desktop\Proyectos\Nuestra página\client"
npm install
```

**Packages installed:**
- react@18.2.0
- react-dom@18.2.0
- react-router-dom@6.20.0
- axios@1.6.2
- vite@5.0.2
- tailwindcss@3.3.5
- postcss@8.4.31
- autoprefixer@10.4.16

## Running the Application

### Terminal 1 - Backend Server

```powershell
cd "c:\Users\ADMIN\Desktop\Proyectos\Nuestra página\server"
npm start
```

Expected output:
```
Server running on http://localhost:5000
```

### Terminal 2 - Frontend Development Server

```powershell
cd "c:\Users\ADMIN\Desktop\Proyectos\Nuestra página\client"
npm run dev
```

Expected output:
```
  ➜  Local:   http://localhost:3000/
  ➜  press h to show help
```

### Terminal 3 - View Backend Messages (Optional)

To see submitted contact forms:

```powershell
cd "c:\Users\ADMIN\Desktop\Proyectos\Nuestra página\server\data"
cat messages.json
# or open the file directly: explorer messages.json
```

## Verifying Installation

1. **Backend Health Check**
   - Visit: http://localhost:5000/api/health
   - Should return: `{"status":"Server is running"}`

2. **Frontend**
   - Visit: http://localhost:3000
   - Should load the home page without errors

3. **Test Contact Form**
   - Navigate to: http://localhost:3000/contact
   - Fill and submit the form
   - Check backend: http://localhost:5000/api/messages

## Building for Production

### Frontend Build

```powershell
cd "c:\Users\ADMIN\Desktop\Proyectos\Nuestra página\client"
npm run build
```

This creates an optimized build in the `dist/` folder.

### Preview Production Build

```powershell
npm run preview
```

## Environment Variables

### Server (.env)
Create a `.env` file in the server folder:

```
PORT=5000
```

Or use the provided `.env.example` as a template.

## File Structure Verification

Ensure all files are created:

```
Nuestra página/
├── client/
│   ├── src/
│   │   ├── components/
│   │   │   ├── Navbar.jsx
│   │   │   ├── Footer.jsx
│   │   │   ├── ServiceCard.jsx
│   │   │   └── ProjectCard.jsx
│   │   ├── pages/
│   │   │   ├── Home.jsx
│   │   │   ├── Services.jsx
│   │   │   ├── Portfolio.jsx
│   │   │   ├── About.jsx
│   │   │   └── Contact.jsx
│   │   ├── services/
│   │   │   └── api.js
│   │   ├── App.jsx
│   │   ├── main.jsx
│   │   └── index.css
│   ├── index.html
│   ├── package.json
│   ├── vite.config.js
│   ├── tailwind.config.js
│   └── postcss.config.js
│
├── server/
│   ├── routes/
│   │   └── contact.js
│   ├── controllers/
│   │   └── contactController.js
│   ├── data/
│   │   └── messages.json (created on first contact)
│   ├── server.js
│   ├── package.json
│   └── .env.example
│
├── README.md
├── QUICKSTART.md
└── SETUP.md (this file)
```

## Troubleshooting

### Problem: npm install fails
```powershell
# Clear npm cache
npm cache clean --force

# Remove node_modules and package-lock.json
Remove-Item -Recurse -Force node_modules
Remove-Item package-lock.json

# Reinstall
npm install
```

### Problem: Port 3000 or 5000 in use
```powershell
# Find process using port 3000
netstat -ano | findstr :3000

# Kill the process (replace PID with actual process ID)
taskkill /PID <PID> /F

# Or change the port in the config file
```

### Problem: CORS errors
- Ensure the backend server is running
- Verify the API URL in `client/src/services/api.js` matches your backend URL
- Check browser console for detailed error messages

### Problem: Form not submitting
1. Open browser DevTools (F12)
2. Check the Network tab to see API requests
3. Check the Console tab for JavaScript errors
4. Verify backend is running and accessible

## Next Steps

1. Customize content and branding
2. Add real project images
3. Setup email notifications
4. Deploy to production
5. Setup custom domain
6. Add analytics tracking

See README.md for detailed documentation.
