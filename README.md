# Lakshay Sain - Portfolio Website

A modern, responsive portfolio website showcasing my skills, projects, education, and experience in Mechanical Engineering and AI/ML.

![Portfolio Preview](https://img.shields.io/badge/Status-Live-success)
![HTML5](https://img.shields.io/badge/HTML5-E34F26?logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/CSS3-1572B6?logo=css3&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?logo=javascript&logoColor=black)

## 🚀 Features

- **Responsive Design**: Mobile-first approach that works seamlessly on all devices
- **Modern UI/UX**: Clean, professional design with smooth animations
- **Interactive Elements**: Project modals, smooth scrolling, and hover effects
- **Optimized Performance**: Fast loading times with lazy loading and efficient code
- **Accessible**: Semantic HTML, keyboard navigation, and ARIA labels
- **SEO Optimized**: Comprehensive meta tags and Open Graph support

## 📁 Project Structure

```
portfolio-website/
├── index.html              # Main HTML file
├── css/
│   ├── style.css          # Main styles and animations
│   └── responsive.css     # Responsive design breakpoints
├── js/
│   ├── main.js           # Core functionality and interactions
│   └── animations.js     # Scroll animations and effects
├── images/               # Image assets directory
├── assets/
│   └── resume.pdf       # Resume file
└── README.md            # Documentation
```

## 🛠️ Technologies Used

- **HTML5**: Semantic markup
- **CSS3**: Modern styling with flexbox, grid, and animations
- **JavaScript (ES6+)**: Vanilla JS for interactivity
- **Google Fonts**: Poppins font family
- **Font Awesome**: Icons library

## 📋 Sections

1. **Hero/Landing**: Eye-catching gradient background with introduction
2. **About**: Professional summary and skills categorization
3. **Education**: Timeline-based education history
4. **Experience**: Professional work experience
5. **Projects**: Interactive project showcase with modals
6. **Certifications**: Professional certifications display
7. **Skills**: Visual skill bars with proficiency levels
8. **Contact**: Contact form and information
9. **Footer**: Quick links and academic reference

## 🚀 Getting Started

### Prerequisites

- A modern web browser (Chrome, Firefox, Safari, Edge)
- A text editor (VS Code, Sublime Text, etc.) for customization
- Basic knowledge of HTML/CSS/JS for modifications

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/Lakshay2004/portfolio-website.git
   cd portfolio-website
   ```

2. **Open in browser**
   - Simply open `index.html` in your web browser
   - Or use a local server for development:
   ```bash
   # Using Python 3
   python -m http.server 8000
   
   # Using Node.js (http-server)
   npx http-server
   ```

3. **Access the website**
   - Open `http://localhost:8000` in your browser

## 🎨 Customization

### Changing Colors

Edit the CSS variables in `css/style.css`:

```css
:root {
    --primary-color: #6366f1;
    --secondary-color: #8b5cf6;
    --accent-color: #ec4899;
    /* ... other variables ... */
}
```

### Adding Your Resume

Replace the placeholder file in `assets/resume.pdf` with your actual resume PDF.

### Updating Personal Information

Edit `index.html` to update:
- Personal details (name, email, phone, location)
- Social media links
- Project descriptions
- Education history
- Work experience

### Adding Projects

Add new project cards in the Projects section and update the project data in `js/main.js`:

```javascript
const projectData = {
    4: {
        title: 'Your Project Name',
        description: 'Project description',
        tags: ['Tag1', 'Tag2'],
        icon: 'fa-icon-name'
    }
};
```

## 📱 Responsive Breakpoints

- **Desktop**: 1400px and above
- **Laptop**: 992px - 1399px
- **Tablet**: 768px - 991px
- **Mobile**: 480px - 767px
- **Small Mobile**: Below 480px

## 🌐 Deployment

### GitHub Pages

1. Go to your repository settings
2. Navigate to "Pages" section
3. Select the branch (usually `main`)
4. Click "Save"
5. Your site will be live at `https://yourusername.github.io/portfolio-website/`

### Netlify

1. Sign up at [Netlify](https://netlify.com)
2. Click "Add new site" → "Import an existing project"
3. Connect your GitHub repository
4. Click "Deploy site"

### Vercel

1. Sign up at [Vercel](https://vercel.com)
2. Click "Import Project"
3. Import from your GitHub repository
4. Click "Deploy"

## 🔧 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Opera (latest)

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 👤 Contact

**Lakshay Sain**

- Email: sainlakshay508@gmail.com
- Phone: +91 7988637067
- GitHub: [@Lakshay2004](https://github.com/Lakshay2004)
- Location: Haryana, India

## 🎓 Academic Reference

**Dr. Pardeep Sharma**  
Associate Professor  
Department of Mechanical Engineering  
DCRUST, Murthal

- Email: pardeepkumar.me@dcrustm.org
- Contact: +91 97296 60266

## 🙏 Acknowledgments

- Design inspiration from modern portfolio websites
- Icons by Font Awesome
- Fonts by Google Fonts
- Color gradients inspired by modern UI trends

## 📝 Notes

- Replace placeholder images with actual images for better visual appeal
- Add real resume PDF to the assets folder
- Update social media links with your actual profiles
- Consider integrating contact form with backend service (Formspree, EmailJS, etc.)
- Add Google Analytics for tracking (optional)

---

**© 2025 Lakshay Sain. All rights reserved.**
