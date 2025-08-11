# Font Files for W Spa

## Current Status

The font files in this directory are currently placeholders.

## Required Fonts

### Open Sans

- **Weights needed**: 300, 400, 600, 700, 800
- **Format**: WOFF2 (primary), WOFF (fallback)
- **Source**: Google Fonts

### Playfair Display

- **Weights needed**: 400, 500, 700, 800, 900
- **Format**: WOFF2 (primary), WOFF (fallback)
- **Source**: Google Fonts

## Download Instructions

Use Google Fonts Helper (https://gwfh.mranftl.com/fonts) to download the fonts:

1. **Open Sans**: Select weights 300, 400, 600, 700, 800
2. **Playfair Display**: Select weights 400, 500, 700, 800, 900
3. Download WOFF2 format for best compression
4. Name files according to the pattern: `font-name-weight.woff2`

## File Naming Convention

```
open-sans-300.woff2
open-sans-400.woff2
open-sans-600.woff2
open-sans-700.woff2
open-sans-800.woff2

playfair-display-400.woff2
playfair-display-500.woff2
playfair-display-700.woff2
playfair-display-800.woff2
playfair-display-900.woff2
```

## Performance Notes

- The layout.tsx preloads critical fonts (Open Sans 400, Playfair Display 700)
- All fonts use `font-display: swap` for better loading performance
- Consider adding WOFF fallbacks for older browser support if needed
