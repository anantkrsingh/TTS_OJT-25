
# Class 3 
Creating ReactJS Project using Vite & Intsalling TailwindCSS.







## Installation

Installing of yarn with npm

 - Run Powershell as administrator
 
 ```bash
  Set-ExecutionPolicy Unrestricted
  Set-ExecutionPolicy Remote
```

- Installing Yarn
```bash
  npm install -g yarn
```
    
## Creating ReactJS Project


```bash
    yarn create vite
```

Enter project details and press enter 

- Navigate to your project folder 

```bash
    cd project-name
```

- Install project dependecies 

```bash
    yarn
```

- Running development server

```bash
    yarn dev
```



## Installing Tailwind CSS

- Install dependencies using terminal 

```bash
    yarn add -D ailwindcss postcss autoprefixer
    npx tailwindcss init -p
```

- Configure Tailwind CSS
`tailwind.config.js`


```javascript
/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}

```

`index.css`

```css
@tailwind base;
@tailwind components;
@tailwind utilities;

```

- Restart your development Server 


# 🎉 All Set
