# Personal Portfolio

This is a personal portfolio website for showcasing skills, experience, projects, and achievements. It is highly
customizable and built using modern technologies to provide a professional showcase for individuals.

## Table of Contents

- [Features](#features)
- [Technologies Used](#technologies-used)
- [Getting Started](#getting-started)
- [Customization](#customization)
- [Deployment](#deployment)
- [License](#license)

---

## Features

- **Interactive Splash Screen** - Displays a customizable animated splash screen.
- **Greeting Section** - Introduction with your name, role, and a short summary.
- **Social Media Links** - Showcasing social platforms to connect with you.
- **Skills Showcase** - Clearly display technical and soft skills icons with descriptions.
- **Education and Experience** - Highlight your academic background and professional journey.
- **Projects** - Showcase personal and work-related projects with links.
- **Achievements** - Display certifications, accomplishments, or highlights.
- **Custom Themes** - Ability to customize globally using SCSS.
- **Responsive Design** - Fully optimized for all screen sizes.

---

## Technologies Used

- **Frontend**: React.js, JavaScript, SCSS
- **Animations**: React-Easy-Emoji, Lottie Animations
- **Build Tools**: Node.js, React Scripts
- **Icons**: Font Awesome
- **Deployment**: GitHub Pages

---

## Getting Started

### 1. Prerequisites

Make sure you have the following installed:

- [Node.js](https://nodejs.org/) (LTS version recommended)
- [npm](https://www.npmjs.com/) (comes with Node.js)

### 2. Clone the Repository

```bash
git clone https://github.com/divyanshg10/portfolio.git
cd portfolio
```

### 3. Install Dependencies

Run the following command to install required dependencies:

```bash
npm install
```

### 4. Start the Development Server

Run the following command to start the development server:

```bash
npm start
```

Your portfolio will be available at `http://localhost:3000`.

---

## Customization

### 1. Edit Content

Modify the file `src/portfolio.js` to customize your portfolio:

- **Greeting Section**: Update name, title, and subtitle.
- **Social Media Links**: Provide links to your social handles.
- **Skills Section**: Add or remove skills with appropriate Font Awesome class names.
- **Education/Experience**: Update education info or add work details.
- **Projects**: Add your projects with links and descriptions.
- **Achievements**: Include details about your accomplishments.

### 2. Change Theme Colors

Edit the `_globalColor.scss` file in the `src/` directory to change the color palette globally.

### 3. Update Icons

Icon customization can be done using Font Awesome. Refer to the [Font Awesome Gallery](https://fontawesome.com/icons)
for available options.

---

## Deployment

This portfolio can be deployed on **GitHub Pages** or any static hosting platform.

### Deploy on GitHub Pages

1. Install the `gh-pages` package:
   ```bash
   npm install gh-pages
   ```

2. Open `package.json`, and add the homepage URL of your website:
   ```json
   "homepage": "https://yourusername.github.io/portfolio"
   ```

3. Deploy using:
   ```bash
   npm run deploy
   ```

Your portfolio will be live at `https://yourusername.github.io/portfolio`.

---

## License

This project is open-source and available under the [MIT License](LICENSE).

Feel free to fork, customize, and use it for personal or professional purposes!

---

## Acknowledgements

- Inspired by several modern portfolio templates.
- Built with love using **React.js** and **SCSS**.

---

### Have Feedback?

Reach out via [LinkedIn](https://www.linkedin.com/in/divyanshg10/) or other social media links provided in the
portfolio. 😊