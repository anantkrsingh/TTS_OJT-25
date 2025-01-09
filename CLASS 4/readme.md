# Class 4 State Management in React: Counter App Example

## Introduction
State management is a crucial concept in React that helps maintain and share data (state) across components in a predictable way. In this README, we will explore state management by creating a simple Counter App using React with Vite. We'll cover the file and folder structure, followed by an explanation of how state management works in React.

## Project Setup

### 1. Install Vite
First, create a new Vite project:
```bash
yarn create vite counter-app --template react
cd counter-app
yarn install
```

### 2. Install Tailwind CSS
Set up Tailwind CSS in the project:
```bash
yarn add -D tailwindcss postcss autoprefixer
npx tailwindcss init
```

Configure `tailwind.config.cjs` to enable Tailwind:
```javascript
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {},
  },
  plugins: [],
};
```

Add Tailwind's base styles in `src/index.css`:
```css
@tailwind base;
@tailwind components;
@tailwind utilities;
```

### 3. Project Folder Structure
Here’s the recommended folder structure for the Counter App:

```
counter-app/
├── public/
├── src/
│   ├── components/
│   │   └── Counter.jsx
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css
├── package.json
├── vite.config.js
└── README.md
```

## File Explanations

### 1. `src/main.jsx`
The entry point of the application, which renders the root component:
```javascript
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
```

### 2. `src/App.jsx`
The root component that wraps the Counter component:
```javascript
import React from 'react';
import Counter from './components/Counter';

const App = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <h1 className="text-3xl font-bold mb-4">Counter App</h1>
      <Counter />
    </div>
  );
};

export default App;
```

### 3. `src/components/Counter.jsx`
A functional component to display and update the counter:
```javascript
import React, { useState } from 'react';

const Counter = () => {
  const [count, setCount] = useState(0);

  const increment = () => setCount(prevCount => prevCount + 1);
  const decrement = () => setCount(prevCount => prevCount - 1);

  return (
    <div className="bg-white shadow-md rounded p-4 text-center">
      <p className="text-xl mb-4">Current Count: {count}</p>
      <div className="flex justify-center gap-4">
        <button 
          className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
          onClick={increment}
        >
          Increment
        </button>
        <button 
          className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600"
          onClick={decrement}
        >
          Decrement
        </button>
      </div>
    </div>
  );
};

export default Counter;
```

## How State Management Works
1. **React State**: The state of the counter is stored using React's `useState` hook directly in the `Counter` component.
2. **Component Re-rendering**: When `increment` or `decrement` is called, the state updates, and the `Counter` component re-renders to display the new count.
3. **State Isolation**: By using `useState` in the `Counter` component, state management is localized and easy to manage.

## Running the App
To run the app locally:
```bash
yarn dev
```
Open [http://localhost:5173](http://localhost:5173) in your browser to view the Counter App.

## Conclusion
This simple Counter App demonstrates the basics of state management in React using the `useState` hook. By understanding this example, you can scale state management techniques for more complex applications.

