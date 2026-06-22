# 🚀 Kyra Jean Bassig — Portfolio

A professional developer portfolio built with **React + Vite**.

---

## 📁 Folder Structure

```
my-portfolio/
├── public/
│   ├── profile.jpg          ← PUT YOUR PHOTO HERE
│   ├── projects/
│   │   ├── project1.png     ← PUT PROJECT SCREENSHOTS HERE
│   │   └── project2.png
│   └── Kyra_Jean_Bassig_CV.pdf  ← PUT YOUR CV/RESUME HERE
├── src/
│   ├── components/
│   │   ├── Navbar.jsx       ← Navigation bar
│   │   ├── Hero.jsx         ← Landing section
│   │   ├── About.jsx        ← About me section
│   │   ├── Skills.jsx       ← Skills & tools
│   │   ├── Projects.jsx     ← Project showcase
│   │   ├── Contact.jsx      ← Contact form
│   │   └── Footer.jsx       ← Footer
│   ├── App.jsx              ← Root component
│   ├── index.css            ← All styles
│   └── main.jsx             ← Entry point
├── index.html
├── package.json
└── vite.config.js
```

---

## ⚡ Quick Start

```bash
# 1. Install dependencies
npm install

# 2. Install EmailJS for the contact form
npm install @emailjs/browser

# 3. Start development server
npm run dev

# 4. Open in browser
# → http://localhost:5173
```

---

## ✏️ Things You MUST Edit

### 1. Your Photo
- Add your photo to `/public/profile.jpg`
- In `Hero.jsx` change: `const PHOTO_URL = "/profile.jpg"`
- In `About.jsx` change: `const PHOTO_URL = "/profile.jpg"`

### 2. Your Info
Edit these files with your real info:
- `Hero.jsx` — name, title, description, social links
- `About.jsx` — bio text, education year, location
- `Skills.jsx` — your actual skills
- `Projects.jsx` — your real projects + GitHub/live links
- `Contact.jsx` — your email, phone, location
- `Footer.jsx` — your social links

### 3. Social Links
Replace `YOUR_USERNAME` in Navbar, Hero, Projects, and Footer with your real:
- GitHub username
- LinkedIn username
- Facebook username
- Real email address

### 4. Project Screenshots
- Put screenshots in `/public/projects/`
- In `Projects.jsx`, set `image: "/projects/your-screenshot.png"`

### 5. CV/Resume
- Put your PDF in `/public/Kyra_Jean_Bassig_CV.pdf`
- The download button in Hero already links to it

### 6. EmailJS (Contact Form)
1. Go to https://www.emailjs.com → Sign up (free)
2. Add Email Service → choose Gmail
3. Create Email Template with these variables:
   - `{{from_name}}` — sender's name
   - `{{from_email}}` — sender's email
   - `{{subject}}` — subject
   - `{{message}}` — message body
4. Copy your **Service ID**, **Template ID**, and **Public Key**
5. In `Contact.jsx`, replace:
   ```js
   const EMAILJS_SERVICE_ID  = 'YOUR_SERVICE_ID'
   const EMAILJS_TEMPLATE_ID = 'YOUR_TEMPLATE_ID'
   const EMAILJS_PUBLIC_KEY  = 'YOUR_PUBLIC_KEY'
   ```

---

## 🚀 Deploy to Vercel (Free)

```bash
# Build the project
npm run build

# Option 1: Drag /dist folder to https://vercel.com/new

# Option 2: Use Vercel CLI
npm install -g vercel
vercel
```

---

## 🎨 Customizing Colors

In `src/index.css`, edit the `:root` variables:

```css
:root {
  --bg:       #060d19;    /* Main background */
  --accent:   #38bdf8;    /* Blue accent color */
  --accent-2: #a78bfa;    /* Purple accent color */
  --text:     #e8f0fe;    /* Main text */
}
```

---

Built with ❤️ using React + Vite
