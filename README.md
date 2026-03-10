# Digital Agency Website - Full Stack Application

A modern, professional website for a digital services agency built with React and Node.js/Express.

## 📁 Project Structure

```
/client                    # Frontend React application
  /src
    /components           # Reusable components (Navbar, Footer, ServiceCard, ProjectCard)
    /pages               # Page components (Home, Services, Portfolio, About, Contact)
    /services            # API service files
    App.jsx
    main.jsx
    index.css
  package.json
  vite.config.js
  tailwind.config.js
  postcss.config.js

/server                   # Backend Node.js/Express API
  /routes                # API routes
  /controllers           # Route controllers
  /data                  # Data storage (messages.json)
  server.js
  package.json
```

## ⚙️ Tech Stack

### Frontend
- **React 18** - UI library
- **React Router v6** - Client-side routing
- **Tailwind CSS** - Utility-first CSS framework
- **Axios** - HTTP client
- **Vite** - Build tool and dev server

### Backend
- **Node.js** - JavaScript runtime
- **Express.js** - Web framework
- **CORS** - Cross-origin resource sharing
- **Body Parser** - Request body parsing

## 🚀 Getting Started

### Prerequisites
- Node.js (v14 or higher)
- npm or yarn

### Installation

#### 1. Clone/Navigate to the project
```bash
cd "c:\Users\ADMIN\Desktop\Proyectos\Nuestra página"
```

#### 2. Install Backend Dependencies
```bash
cd server
npm install
```

#### 3. Install Frontend Dependencies
```bash
cd ../client
npm install
```

## 📦 Running the Application

### Start the Backend Server
```bash
cd server
npm start
```
The API will run on `http://localhost:5000`

### Start the Frontend Development Server
```bash
cd client
npm run dev
```
The frontend will run on `http://localhost:3000`

### Build for Production
```bash
cd client
npm run build
```

## 🌐 Website Pages

### 1. **Home** (`/`)
- Hero section with headline and CTA
- Company description
- Services overview
- Benefits section
- Call-to-action

### 2. **Services** (`/services`)
- Three main services in card layout
- Detailed service descriptions
- Pricing section
- Icons and detailed information

### 3. **Portfolio** (`/portfolio`)
- Grid of sample projects
- Project filtering by category
- Project cards with descriptions

### 4. **About** (`/about`)
- Company mission and vision
- Team section
- Key statistics
- Why choose us section

### 5. **Contact** (`/contact`)
- Contact form with validation
- Business information
- FAQ section
- Social media links

## 📋 Services Offered

1. **Website Development**
   - Custom responsive design
   - SEO optimization
   - Booking systems
   - E-commerce integration

2. **Business Automation**
   - Lead capture automation
   - Appointment scheduling
   - Email workflows
   - CRM integration

3. **AI Chatbots**
   - WhatsApp integration
   - Website chat widget
   - Lead qualification
   - 24/7 availability

## 🔌 API Endpoints

### POST `/api/contact`
Submit a contact form message.

**Request Body:**
```json
{
  "name": "John Doe",
  "email": "john@example.com",
  "company": "ABC Company",
  "message": "I'm interested in your services..."
}
```

**Response:**
```json
{
  "success": true,
  "message": "Thank you for your message. We will get back to you soon!",
  "data": {
    "id": 1234567890,
    "name": "John Doe",
    "email": "john@example.com",
    "company": "ABC Company",
    "message": "I'm interested in your services...",
    "createdAt": "2024-03-10T10:30:00.000Z"
  }
}
```

### GET `/api/messages`
Retrieve all contact messages (for admin purposes).

## 🎨 Design Features

- **Modern & Minimal Design** - Clean interface focusing on content
- **Responsive Layout** - Mobile-first approach
- **Smooth Animations** - Fade-in and slide-up effects on page load
- **Tailwind CSS Styling** - Custom color scheme and utilities
- **Reusable Components** - Consistent design patterns
- **Professional Color Scheme** - Blue primary colors with accent colors

## 🔑 Key Components

### Navbar
- Fixed navigation with logo
- Desktop and mobile menus
- Hamburger menu for mobile
- CTA button

### Footer
- Company information
- Quick links
- Social media links
- Copyright notice

### ServiceCard
- Icon display
- Title and description
- Call-to-action button
- Hover animations

### ProjectCard
- Image placeholder
- Project name and description
- Category badge
- Hover effects

## 📝 Form Validation

The contact form includes:
- Required field validation
- Email format validation
- Error messages
- Success confirmation
- Loading state during submission

## 🛠️ Configuration

### Backend (.env)
```
PORT=5000
```

### Frontend
The frontend automatically proxies API requests to `http://localhost:5000/api`

## 📊 Data Storage

Contact messages are stored in `server/data/messages.json` in the following format:

```json
[
  {
    "id": 1234567890,
    "name": "John Doe",
    "email": "john@example.com",
    "company": "ABC Company",
    "message": "Message content",
    "createdAt": "2024-03-10T10:30:00.000Z"
  }
]
```

## 🎯 Customization

### Change Colors
Edit `client/tailwind.config.js` to modify the primary, secondary, and accent colors.

### Update Content
- Edit page components in `client/src/pages/`
- Update service descriptions and portfolio items
- Modify company information in Footer

### Add New Pages
1. Create a new file in `client/src/pages/`
2. Add a new Route in `App.jsx`
3. Add navigation link in `Navbar.jsx`

## 🐛 Troubleshooting

### Port Already in Use
If port 5000 or 3000 is already in use:
1. Change the port in `server/server.js` or `client/vite.config.js`
2. Update the API URL in `client/src/services/api.js`

### CORS Errors
The backend is configured to accept requests from the frontend. If you get CORS errors:
1. Check that the backend is running on port 5000
2. Verify the API URL in `client/src/services/api.js`

### Form Not Submitting
1. Ensure the backend server is running
2. Check browser console for errors
3. Verify the `/api/contact` endpoint is accessible

## 📱 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## 📄 License

This project is open source and available under the MIT License.

## 🤝 Support

For questions or issues, contact: info@digitalagency.com

---

**Happy coding!** 🚀
