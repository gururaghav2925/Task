# Deployment Guide for Vercel

This guide will help you deploy the frontend (client) to Vercel.

## Prerequisites

1. GitHub account with the repository pushed
2. Vercel account (sign up at https://vercel.com)
3. Backend already deployed (currently on Render: https://taskify-jhhu.onrender.com)

## Step 1: Prepare for Deployment

### Environment Variables

Make sure your backend (server) is deployed and accessible. The frontend will connect to:
- **Production**: `https://taskify-jhhu.onrender.com`
- **Development**: `http://localhost:5000`

### Update Environment Variables (Optional)

If you want to override the API URL, create a `.env.production` file in the `client` folder:

```env
VITE_APP_BASE_URL=https://taskify-jhhu.onrender.com
VITE_APP_FIREBASE_API_KEY=your_firebase_api_key
```

## Step 2: Deploy to Vercel

### Option A: Deploy via Vercel Dashboard (Recommended)

1. **Go to Vercel Dashboard**
   - Visit https://vercel.com
   - Sign in with your GitHub account

2. **Import Project**
   - Click "Add New" → "Project"
   - Import your GitHub repository: `gururaghav2925/Task`

3. **Configure Project**
   - **Framework Preset**: Vite
   - **Root Directory**: `client` (IMPORTANT!)
   - **Build Command**: `npm run build`
   - **Output Directory**: `dist`
   - **Install Command**: `npm install`

4. **Environment Variables**
   - Add the following environment variables:
     - `VITE_APP_BASE_URL` = `https://taskify-jhhu.onrender.com`
     - `VITE_APP_FIREBASE_API_KEY` = Your Firebase API key

5. **Deploy**
   - Click "Deploy"
   - Wait for the deployment to complete

### Option B: Deploy via Vercel CLI

1. **Install Vercel CLI**
   ```bash
   npm install -g vercel
   ```

2. **Login to Vercel**
   ```bash
   vercel login
   ```

3. **Navigate to client directory**
   ```bash
   cd client
   ```

4. **Deploy**
   ```bash
   vercel
   ```

5. **Follow the prompts**
   - Link to existing project or create new
   - Set root directory if needed
   - Add environment variables

## Step 3: Configure Backend CORS

Make sure your backend (on Render) has the Vercel URL in its CORS configuration:

In `server/index.js`, update the CORS origin:

```javascript
origin: [
  "http://localhost:3000",
  "http://localhost:5173",
  "https://your-vercel-app.vercel.app", // Add your Vercel URL here
  "https://taskify-lyart-five.vercel.app"
],
```

## Step 4: Verify Deployment

1. Visit your Vercel deployment URL
2. Test the login functionality
3. Check browser console for any errors
4. Verify API calls are going to the correct backend URL

## Troubleshooting

### Build Fails
- Check that all dependencies are in `package.json`
- Ensure `npm run build` works locally
- Check Vercel build logs for errors

### API Calls Fail
- Verify backend URL is correct in environment variables
- Check CORS configuration on backend
- Verify backend is running and accessible

### Environment Variables Not Working
- Make sure variables start with `VITE_` prefix
- Redeploy after adding new environment variables
- Check Vercel environment variables settings

## Updating Deployment

After pushing changes to GitHub:

1. **Automatic Deployment** (if connected to GitHub):
   - Vercel will automatically deploy on push to main branch

2. **Manual Deployment**:
   ```bash
   cd client
   vercel --prod
   ```

## Notes

- The backend should remain on Render (or another service)
- Frontend on Vercel communicates with backend via API calls
- Make sure both frontend and backend URLs are whitelisted in CORS
- Environment variables must start with `VITE_` to be accessible in Vite

