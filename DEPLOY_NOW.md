# 🚀 Deploy to Vercel - Quick Steps

## Step-by-Step Guide

### 1. Go to Vercel
Visit: **https://vercel.com** and sign in with GitHub

### 2. Import Project
1. Click **"Add New"** → **"Project"**
2. Find and select: **`gururaghav2925/Task`**
3. Click **"Import"**

### 3. Configure Project
**IMPORTANT SETTINGS:**
- **Framework Preset**: Select **"Vite"**
- **Root Directory**: Click **"Edit"** and set to **`client`** ⚠️
- **Build Command**: `npm run build` (auto-detected)
- **Output Directory**: `dist` (auto-detected)
- **Install Command**: `npm install` (auto-detected)

### 4. Add Environment Variables
Click **"Environment Variables"** and add:

| Name | Value |
|------|-------|
| `VITE_APP_BASE_URL` | `https://taskify-jhhu.onrender.com` |
| `VITE_APP_FIREBASE_API_KEY` | Your Firebase API key |

### 5. Deploy
Click **"Deploy"** button and wait for deployment to complete

### 6. Get Your Vercel URL
After deployment, you'll see your app URL like:
- `https://your-app-name.vercel.app`

### 7. Update Backend CORS (on Render)
1. Go to your Render dashboard
2. Open your backend service
3. Update `server/index.js` - Add your Vercel URL to CORS:
   ```javascript
   origin: [
     "http://localhost:3000",
     "http://localhost:5173",
     "https://your-vercel-app.vercel.app", // ADD YOUR VERCEL URL HERE
     "https://taskify-lyart-five.vercel.app"
   ],
   ```
4. Push changes to GitHub
5. Render will auto-deploy

### 8. Test Your Deployment
1. Visit your Vercel URL
2. Try logging in
3. Check browser console for any errors

## ✅ Done!
Your app is now live on Vercel!

## 📝 Notes
- **Auto-deployment**: Vercel will auto-deploy on every push to `main` branch
- **Environment Variables**: Only variables starting with `VITE_` work in Vite
- **Backend**: Must be running on Render and have CORS configured

## 🔧 Troubleshooting
- **Build fails?** Check that Root Directory is set to `client`
- **API errors?** Verify `VITE_APP_BASE_URL` is correct
- **CORS errors?** Make sure Vercel URL is in backend CORS

