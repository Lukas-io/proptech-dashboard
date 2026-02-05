# Favicon Setup Instructions

## Current Setup

✅ **favicon.svg** - Modern browsers (Chrome, Firefox, Safari)
✅ **manifest.json** - Web app manifest with icon references
✅ References in `app/layout.tsx`

## For Production: Create Multi-Size ICO

To create a proper `favicon.ico` with multiple sizes for maximum compatibility:

### Option 1: Online Tool (Easiest)
1. Visit https://realfavicongenerator.net/
2. Upload `public/icons/logo.svg`
3. Configure settings:
   - iOS: Use #105B48 as background
   - Android: Use #105B48 as background
   - Windows: Use white logo on #105B48
4. Download and extract to `public/` folder

### Option 2: Using ImageMagick (Command Line)
```bash
# Install ImageMagick (if not installed)
brew install imagemagick

# Convert SVG to multiple PNG sizes
magick public/icons/logo.svg -resize 16x16 public/favicon-16.png
magick public/icons/logo.svg -resize 32x32 public/favicon-32.png
magick public/icons/logo.svg -resize 48x48 public/favicon-48.png
magick public/icons/logo.svg -resize 192x192 public/favicon-192.png
magick public/icons/logo.svg -resize 512x512 public/favicon-512.png

# Create multi-size ICO
magick public/favicon-16.png public/favicon-32.png public/favicon-48.png public/favicon.ico

# Create Apple Touch Icon
magick public/icons/logo.svg -resize 180x180 -background "#105B48" -flatten public/apple-touch-icon.png
```

### Option 3: Using Inkscape (GUI)
1. Open `public/icons/logo.svg` in Inkscape
2. File → Export PNG Image
3. Export at sizes: 16x16, 32x32, 48x48, 192x192, 512x512
4. Use an online ICO converter to combine PNG files into favicon.ico

## Files to Generate

Create these files in `public/` folder:
- ✅ `favicon.svg` (already created)
- ⏳ `favicon.ico` (16x16, 32x32, 48x48 combined)
- ⏳ `favicon-16.png`
- ⏳ `favicon-32.png`
- ⏳ `favicon-192.png` (for manifest.json)
- ⏳ `favicon-512.png` (for manifest.json)
- ⏳ `apple-touch-icon.png` (180x180)

## Current Browser Support

✅ Modern browsers will use `favicon.svg`
✅ Progressive Web Apps will use manifest.json icons
⚠️ Older browsers/IE will fallback to default until .ico is created

## Testing

After creating all favicon files:
1. Clear browser cache
2. Visit http://localhost:3000
3. Check browser tab for favicon
4. Test on mobile devices
5. Validate with: https://realfavicongenerator.net/favicon_checker

## Logo Colors

- Background: `#105B48` (Primary Green)
- Logo: `#FFFFFF` (White)
