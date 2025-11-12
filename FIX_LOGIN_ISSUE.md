# Fix Login Issue on Vercel

## Problems Found:
1. **CORS trailing slash** - Backend had `https://task-nine-taupe.vercel.app/` with trailing slash
2. **Error handling** - Generic error messages not showing actual errors
3. **API URL logging** - Need better debugging

## Fixes Applied:

### 1. Backend CORS (server/index.js)
- ✅ Removed trailing slash from Vercel URL
- ✅ Added both Vercel URLs to CORS origin

### 2. Frontend Error Handling (client/src/pages/login.jsx)
- ✅ Added better error logging
- ✅ Improved error messages for different error types
- ✅ Added API URL logging for debugging

### 3. API Configuration (client/src/redux/slices/apiSlice.js)
- ✅ Added better environment detection
- ✅ Added detailed logging
- ✅ Added Content-Type headers

## Steps to Fix:

### Step 1: Push Backend Changes to Render
```bash
git add server/index.js
git commit -m "Fix CORS for Vercel deployment"
git push origin main
```
Then redeploy on Render (should auto-deploy if connected to GitHub)

### Step 2: Verify Vercel Environment Variables
1. Go to Vercel Dashboard
2. Select your project
3. Go to Settings → Environment Variables
4. Verify these are set:
   - `VITE_APP_BASE_URL` = `https://taskify-jhhu.onrender.com`
   - `VITE_APP_FIREBASE_API_KEY` = (your Firebase key)

### Step 3: Redeploy Vercel
After pushing frontend changes:
1. Go to Vercel Dashboard
2. Click "Redeploy" or push to GitHub (auto-deploy)

### Step 4: Test
1. Open browser console (F12)
2. Try logging in
3. Check console for:
   - API Base URL
   - Error details
   - Network requests

## Common Issues:

### Issue: "Cannot connect to server"
**Solution:**
- Check if backend is running on Render
- Verify `VITE_APP_BASE_URL` is set correctly in Vercel
- Check Render logs for errors

### Issue: CORS errors
**Solution:**
- Verify Vercel URL is in backend CORS (without trailing slash)
- Backend must be redeployed after CORS change
- Check browser console for CORS error details

### Issue: "Invalid email or password"
**Solution:**
- This is correct error from backend
- Verify user exists in database
- Check if user is active (`isActive: true`)

## Debug Checklist:
- [ ] Backend CORS updated (no trailing slash)
- [ ] Backend redeployed on Render
- [ ] Vercel environment variables set
- [ ] Vercel frontend redeployed
- [ ] Browser console checked for errors
- [ ] Network tab checked for API calls

## Next Steps:
1. Push backend changes to GitHub
2. Wait for Render to redeploy
3. Push frontend changes to GitHub
4. Wait for Vercel to redeploy
5. Test login again

