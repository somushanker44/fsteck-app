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

