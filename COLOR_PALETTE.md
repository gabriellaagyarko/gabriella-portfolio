# Color Palette Documentation

This document outlines the new color palette added to the Gabriella Portfolio project.

## Primary Colors

### Dark Purple
- **Base Color**: `#4a1a4a`
- **CSS Variable**: `--color-dark-purple`
- **Available Shades**: 50, 100, 200, 300, 400, 500, 600, 700, 800, 900

### Bright Blue
- **Base Color**: `#00bfff`
- **CSS Variable**: `--color-bright-blue`
- **Available Shades**: 50, 100, 200, 300, 400, 500, 600, 700, 800, 900

### White
- **Base Color**: `#ffffff`
- **CSS Variable**: `--color-white`

### Gray
- **Base Color**: `#6b7280`
- **CSS Variable**: `--color-gray`
- **Available Shades**: 50, 100, 200, 300, 400, 500, 600, 700, 800, 900

### Dark Blue
- **Base Color**: `#1e3a8a`
- **CSS Variable**: `--color-dark-blue`
- **Available Shades**: 50, 100, 200, 300, 400, 500, 600, 700, 800, 900

## Usage Examples

### Background Colors
```html
<div class="bg-dark-purple">Dark Purple Background</div>
<div class="bg-bright-blue-500">Bright Blue 500 Background</div>
<div class="bg-dark-blue-700">Dark Blue 700 Background</div>
```

### Text Colors
```html
<h1 class="text-dark-purple">Dark Purple Text</h1>
<p class="text-bright-blue-600">Bright Blue 600 Text</p>
<span class="text-dark-blue-800">Dark Blue 800 Text</span>
```

### Border Colors
```html
<div class="border-2 border-dark-purple">Dark Purple Border</div>
<input class="border border-bright-blue-400">Bright Blue 400 Border</input>
```

### Gradients
```html
<div class="bg-gradient-to-r from-dark-purple to-bright-blue">Two-color gradient</div>
<div class="bg-gradient-to-r from-dark-purple via-bright-blue to-dark-blue">Three-color gradient</div>
```

### Hover States
```html
<button class="bg-dark-purple hover:bg-dark-purple-700">Hover to darker purple</button>
<a class="text-bright-blue hover:text-bright-blue-600">Hover to brighter blue</a>
```

## Available Utility Classes

### Background Colors
- `.bg-dark-purple`, `.bg-dark-purple-50` through `.bg-dark-purple-900`
- `.bg-bright-blue`, `.bg-bright-blue-50` through `.bg-bright-blue-900`
- `.bg-dark-blue`, `.bg-dark-blue-50` through `.bg-dark-blue-900`

### Text Colors
- `.text-dark-purple`, `.text-dark-purple-50` through `.text-dark-purple-900`
- `.text-bright-blue`, `.text-bright-blue-50` through `.text-bright-blue-900`
- `.text-dark-blue`, `.text-dark-blue-50` through `.text-dark-blue-900`

### Border Colors
- `.border-dark-purple`, `.border-dark-purple-50` through `.border-dark-purple-900`
- `.border-bright-blue`, `.border-bright-blue-50` through `.border-bright-blue-900`
- `.border-dark-blue`, `.border-dark-blue-50` through `.border-dark-blue-900`

### Gradient Classes
- `.from-dark-purple`, `.to-bright-blue`, `.to-dark-blue`
- `.from-bright-blue`, `.to-dark-purple`, `.to-dark-blue`
- `.from-dark-blue`, `.to-dark-purple`, `.to-bright-blue`
- Multi-color gradients with `.via-` classes

### Hover States
- `.hover:bg-dark-purple`, `.hover:bg-dark-purple-600`, `.hover:bg-dark-purple-700`
- `.hover:text-dark-purple`, `.hover:text-dark-purple-600`
- `.hover:border-dark-purple`
- Similar patterns for bright-blue and dark-blue

## Color Accessibility

All colors have been designed with accessibility in mind:
- Dark purple provides excellent contrast on light backgrounds
- Bright blue is vibrant and accessible
- Dark blue offers strong contrast for text
- Gray shades provide subtle variations for UI elements

## Integration with Existing Colors

The new color palette works seamlessly with the existing color system:
- Maintains consistency with current design patterns
- Can be combined with existing blue, gray, and other color utilities
- Follows the same naming conventions as Tailwind CSS

## Examples in Components

The HomePage component has been updated to demonstrate the new colors:
- Portfolio title uses a three-color gradient: `from-dark-purple via-bright-blue to-dark-blue`
- Primary button uses the same gradient
- Secondary button uses bright blue with hover effects

This creates a cohesive and modern color scheme that enhances the visual appeal of the portfolio.
