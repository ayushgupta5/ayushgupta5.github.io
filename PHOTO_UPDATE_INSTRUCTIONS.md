# How to Update Your Professional Photo

## Important: Replace Placeholder Image

The portfolio currently uses a placeholder image from Unsplash. You need to replace it with your actual professional photo from Google Drive.

### Steps to Update:

1. **Download your photo from Google Drive**
   - Go to: https://drive.google.com/file/d/1QXyFdgCBLioVFkmIbwWYFqwNOFA79MQx/view?usp=sharing
   - Download the image to your computer

2. **Get a public image URL**
   
   **Option A: Use Google Drive Public Link**
   - Make sure your photo is set to "Anyone with the link can view"
   - Get the direct image URL (you may need to use a Google Drive image URL converter)
   
   **Option B: Upload to an image hosting service**
   - Upload to services like Imgur, Cloudinary, or AWS S3
   - Get the direct image URL
   
   **Option C: Use a local file (if your app supports it)**
   - Place the image in `/public` folder
   - Reference as `/your-photo.jpg`

3. **Update the Hero component**
   - Open `/src/app/components/Hero.tsx`
   - Find line ~80 (the `<img>` tag)
   - Replace the `src` attribute with your actual photo URL
   
   Current placeholder:
   ```jsx
   src="https://images.unsplash.com/photo-1580894732444-8ecded7900cd?..."
   ```
   
   Replace with:
   ```jsx
   src="YOUR_ACTUAL_PHOTO_URL_HERE"
   ```

4. **Save and test**
   - Save the file
   - Refresh your browser to see your actual photo

### Recommended Photo Specs:
- **Format:** JPG or PNG
- **Size:** 800x800px minimum (square aspect ratio)
- **Quality:** High resolution, professional headshot
- **Background:** Clean, professional background
- **File size:** Optimized for web (< 500KB)

### Example:
```jsx
<img
  src="https://your-image-host.com/ayush-gupta-photo.jpg"
  alt="Ayush Kumar Gupta - Software Engineer"
  className="w-full h-auto rounded-xl object-cover aspect-square max-w-md"
/>
```

---

**Note:** The current placeholder image is just for design preview. Make sure to replace it with your actual professional photo for the best presentation.
