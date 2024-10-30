#### `npx create-react-app fsteck`
#### `npm install react-scripts@latest`

To link this fsteck React app to GitHub, follow these steps:

### **1. Initialize a Git Repository in the Project**

1. **Navigate to your project directory** in the terminal:
   ```bash
   cd fsteck
   ```

2. **Initialize a Git repository**:
   ```bash
   git init
   ```

3. **Add all files and make your first commit**:
   ```bash
   git add .
   git commit -m "Initial commit - Fsteck site"
   ```

### **2. Create a GitHub Repository**

1. Go to [GitHub](https://github.com) and log into your account.
2. Click on **New Repository**.
3. Name your repository (e.g., `static-site`) and add a description if you want.
4. Select **Public** or **Private** and click **Create Repository**.

### **3. Link Your Local Repository to GitHub**

1. Copy the remote URL for your new GitHub repository from the GitHub page (it should look something like `https://github.com/username/static-site.git`).
2. Go back to your terminal and add the GitHub repository as the remote origin:
   ```bash
   git remote add origin <your-github-repo-url>
   ```

3. **Push the code to GitHub**:
   ```bash
   git push -u origin main
   ```

### **4. Deploying (Optional)**
To make it publicly accessible, you can deploy it to a hosting platform:
- **GitHub Pages**: If you want to deploy on GitHub Pages, you can use the `gh-pages` package to build and deploy.
- **Vercel** or **Netlify**: These platforms allow you to connect your GitHub repository and will automatically deploy the site.

Once pushed, you can view your code on GitHub by going to the repository link!
```bash
echo "# fsteck-app" >> README.md
git init
git add README.md
git commit -m "first commit"
git branch -M main
git remote add origin https://github.com/somushanker44/fsteck-app.git
git push -u origin main
```
If you have an issue with authentication, **personal access tokens** (PAT) instead of passwords.

Here’s how to fix it:

### **1. Generate a Personal Access Token (PAT)**

1. Go to **GitHub** and log into your account.
2. Click on your profile icon (top-right) > **Settings**.
3. In the left sidebar, select **Developer settings** > **Personal access tokens** > **Tokens (classic)**.
4. Click on **Generate new token**.
5. Give the token a **name** and set an **expiration date** (or select "No expiration" if preferred).
6. Under **Select scopes**, check the following:
   - `repo` (for full control of private repositories)
7. Click **Generate token** at the bottom.
8. Copy the generated token and save it in a secure location. (You won’t be able to see it again!)

### **2. Use the Token in Place of Your Password**

In your terminal or VS Code:
1. When you run `git push`, it will prompt you for your **username** and **password**.
2. Enter your GitHub username as usual.
3. For the password, **paste the PAT instead of your GitHub password**.

### **3. (Optional) Store the Credentials in VS Code**

To avoid entering your username and token every time:
1. In VS Code, go to **Settings** (File > Preferences > Settings or `Ctrl+,`).
2. Search for `Git: Credential Helper` and enable it, which will cache your credentials securely.

Alternatively, run this command in the terminal to store your credentials for future use:
```bash
git config --global credential.helper cache
```

This should resolve the authentication issue, and your Git push command should now work with the access token.

React Router: For navigation between pages.
```bash
npm install react-router-dom
```
Framer Motion: For animations.
```bash
npm install framer-motion
```