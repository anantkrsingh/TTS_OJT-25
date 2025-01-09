# Class 5 How to Create and Host a Simple Website Using Git and GitHub

This guide will walk you through creating a simple `index.html` file, setting up a Git repository, configuring Git in your terminal, pushing your code to GitHub, and hosting your website on GitHub Pages. We'll also cover how to make changes and update your hosted site.

---

## Step 1: Create a Simple Website

1. Open your text editor and create a new file named `index.html`.
2. Add the following HTML code to the file:

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>My First Website</title>
</head>
<body>
    <h1>Welcome to My First Website!</h1>
    <p>This is a simple website hosted on GitHub Pages.</p>
</body>
</html>
```

3. Save the file in a new folder named `my-website`.

---

## Step 2: Initialize a Git Repository

1. Open your terminal and navigate to the `my-website` folder:

```bash
cd path/to/my-website
```

2. Initialize a Git repository:

```bash
git init
```

3. Check the repository status:

```bash
git status
```

4. Stage your `index.html` file:

```bash
git add index.html
```

5. Commit your changes:

```bash
git commit -m "Initial commit: Add index.html"
```

---

## Step 3: Create a GitHub Repository

1. Log in to your [GitHub account](https://github.com/).
2. Click the "+" icon in the top-right corner and select "New repository".
3. Name your repository `my-website` and click "Create repository".

---

## Step 4: Push Your Code to GitHub

1. In your terminal, link the local repository to the remote GitHub repository:

```bash
git remote add origin https://github.com/your-username/my-website.git
```

2. Push your code to GitHub:

```bash
git branch -M main
git push -u origin main
```

---

## Step 5: Host Your Website on GitHub Pages

1. Go to your repository on GitHub.
2. Click on "Settings" in the repository menu.
3. Scroll down to the "Pages" section.
4. Under "Source," select the `main` branch and click "Save".
5. Your site will be available at `https://your-username.github.io/my-website/`.

---

## Step 6: Make and Push Changes

1. Edit your `index.html` file, for example, change the heading:

```html
<h1>Welcome to My Updated Website!</h1>
```

2. Save the changes and check the Git status:

```bash
git status
```

3. Stage and commit the changes:

```bash
git add index.html
git commit -m "Update heading in index.html"
```

4. Push the changes to GitHub:

```bash
git push
```

5. Your GitHub Pages site will automatically update with the latest changes.

---

## Conclusion
You have successfully created, hosted, and updated a simple website using Git and GitHub. This process can be applied to more complex projects as you continue to develop your skills.

