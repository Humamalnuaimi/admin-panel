# Rewin Admin Panel Theme Specification

## Overview
This document defines the complete design system for the Rewin Admin Panel, ensuring consistency across all components and pages. The theme follows a modern glassmorphism design with a dark gradient background.

---

## 🎨 Color Palette

### Primary Colors
- **Primary Gradient**: `linear-gradient(135deg, #667eea 0%, #764ba2 100%)`
- **Secondary Gradient**: `linear-gradient(135deg, rgba(102, 126, 234, 0.1) 0%, rgba(118, 75, 162, 0.1) 100%)`

### Background Colors
- **Main Background**: 
  ```css
  background: radial-gradient(1200px 800px at 18% 10%, rgba(120,140,255,0.45), transparent 60%),
              radial-gradient(1100px 700px at 80% 25%, rgba(150,110,220,0.40), transparent 60%),
              linear-gradient(135deg, #0c1020 0%, #161a33 100%);
  ```
- **Card Background**: `rgba(255, 255, 255, 0.05)` - `rgba(255, 255, 255, 0.1)`
- **Sidebar Background**: `rgba(255, 255, 255, 0.1)`

### Text Colors
- **Primary Text**: `white` / `#ffffff`
- **Secondary Text**: `rgba(255, 255, 255, 0.8)`
- **Muted Text**: `rgba(255, 255, 255, 0.7)`
- **Disabled Text**: `rgba(255, 255, 255, 0.6)`
- **Placeholder Text**: `rgba(255, 255, 255, 0.6)`

### Status Colors
- **Success**: `#10b981` / `rgba(34, 197, 94, 0.1)` (background)
- **Error**: `#ef4444` / `rgba(239, 68, 68, 0.1)` (background)
- **Warning**: `#f59e0b` / `rgba(245, 158, 11, 0.1)` (background)
- **Info**: `#3b82f6` / `rgba(59, 130, 246, 0.1)` (background)

### Activity Type Colors
- **User**: `rgba(59, 130, 246, 0.1)` - Blue
- **Outlet**: `rgba(139, 92, 246, 0.1)` - Purple
- **Revenue**: `rgba(34, 197, 94, 0.1)` - Green
- **Customer**: `rgba(245, 158, 11, 0.1)` - Orange
- **Default**: `rgba(107, 114, 128, 0.1)` - Gray

---

## 🔤 Typography

### Font Family
```css
font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
             'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
             sans-serif;
```

### Font Sizes & Weights
- **Page Title**: `2.5rem` / `font-weight: 700`
- **Section Title**: `1.5rem` / `font-weight: 600`
- **Card Title**: `1.25rem` / `font-weight: 600`
- **Body Text**: `1rem` / `font-weight: 400`
- **Small Text**: `0.875rem` / `font-weight: 500`
- **Caption**: `0.75rem` / `font-weight: 400`

### Special Typography
- **Gradient Text** (for main titles):
  ```css
  background: linear-gradient(135deg, #ffffff 0%, #e2e8f0 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  ```

---

## 🎯 Layout & Spacing

### Grid System
- **Stats Grid**: `repeat(auto-fit, minmax(280px, 1fr))`
- **Card Grid**: `repeat(auto-fill, minmax(350px, 1fr))`
- **Gap Standard**: `1.5rem` (24px)

### Spacing Scale
- **xs**: `0.25rem` (4px)
- **sm**: `0.5rem` (8px)
- **md**: `1rem` (16px)
- **lg**: `1.5rem` (24px)
- **xl**: `2rem` (32px)
- **2xl**: `3rem` (48px)
- **3xl**: `4rem` (64px)

### Container Sizes
- **Sidebar Width**: `280px`
- **Main Content**: `calc(100vw - 280px)`
- **Modal Max Width**: `500px`
- **Card Max Width**: None (responsive)

---

## 🏗️ Component Specifications

### Glassmorphism Cards
```css
background: rgba(255, 255, 255, 0.05);
backdrop-filter: blur(20px);
border: 1px solid rgba(255, 255, 255, 0.1);
border-radius: 20px;
padding: 2rem;
```

### Enhanced Header Cards
```css
/* Base card + gradient overlay */
position: relative;
overflow: hidden;

/* Gradient overlay */
&::before {
  content: '';
  position: absolute;
  top: 0; left: 0; right: 0; bottom: 0;
  background: linear-gradient(135deg, rgba(102, 126, 234, 0.1) 0%, rgba(118, 75, 162, 0.1) 100%);
  border-radius: 20px;
  pointer-events: none;
}
```

### Stats Cards with Top Bar
```css
/* Base card + colored top bar */
&::before {
  content: '';
  position: absolute;
  top: 0; left: 0; right: 0;
  height: 4px;
  background: linear-gradient(90deg, #3b82f6 0%, #1d4ed8 100%); /* Blue variant */
  border-radius: 20px 20px 0 0;
}
```

---

## 🔘 Button Specifications

### Primary Button
```css
background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
color: white;
padding: 0.75rem 1.5rem;
border-radius: 12px;
border: none;
font-weight: 600;
font-size: 0.875rem;
box-shadow: 0 4px 15px rgba(102, 126, 234, 0.3);
transition: all 0.3s ease;

&:hover {
  transform: translateY(-2px);
  box-shadow: 0 6px 20px rgba(102, 126, 234, 0.4);
}
```

### Secondary Button
```css
background: rgba(255, 255, 255, 0.1);
border: 1px solid rgba(255, 255, 255, 0.2);
color: rgba(255, 255, 255, 0.9);
padding: 0.75rem 1.5rem;
border-radius: 12px;
font-weight: 500;
font-size: 0.875rem;
backdrop-filter: blur(10px);
transition: all 0.3s ease;

&:hover {
  background: rgba(255, 255, 255, 0.2);
  transform: translateY(-2px);
}
```

### Icon Buttons (Action Buttons)
```css
padding: 0.5rem;
background: rgba(255, 255, 255, 0.1);
border: 1px solid rgba(255, 255, 255, 0.2);
border-radius: 8px;
color: rgba(255, 255, 255, 0.9);
backdrop-filter: blur(10px);
transition: all 0.3s ease;

&:hover {
  background: rgba(255, 255, 255, 0.2);
  transform: translateY(-2px);
}
```

### Danger Button
```css
background: rgba(239, 68, 68, 0.1);
border: 1px solid rgba(239, 68, 68, 0.2);
color: #ef4444;
/* Same padding and transitions as icon buttons */
```

---

## 📱 Navigation & Sidebar

### Sidebar Specifications
```css
width: 280px;
background: rgba(255, 255, 255, 0.1);
backdrop-filter: blur(20px);
border-right: 1px solid rgba(255, 255, 255, 0.2);
position: fixed;
height: 100vh;
```

### Logo Design
```css
width: 40px;
height: 40px;
background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
border-radius: 12px;
display: flex;
align-items: center;
justify-content: center;
color: white;
font-weight: 600;
font-size: 1.25rem;
```

### Navigation Items
```css
/* Default state */
padding: 1rem 1.5rem;
color: rgba(255, 255, 255, 0.8);
border-radius: 12px;
transition: all 0.3s ease;

/* Hover state */
&:hover {
  background: rgba(255, 255, 255, 0.1);
  color: white;
  transform: translateX(4px);
}

/* Active state */
&.active {
  background: rgba(255, 255, 255, 0.2);
  color: white;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
}
```

---

## 🎭 Animation & Transitions

### Standard Transitions
- **Default**: `all 0.3s ease`
- **Quick**: `all 0.2s ease`
- **Slow**: `all 0.5s ease`

### Hover Effects
- **Cards**: `transform: translateY(-5px)` + `box-shadow: 0 10px 30px rgba(102, 126, 234, 0.2)`
- **Buttons**: `transform: translateY(-2px)` + enhanced shadow
- **Nav Items**: `transform: translateX(4px)`

### Loading Animation
```css
@keyframes spin {
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
}

.spinner {
  width: 40px;
  height: 40px;
  border: 3px solid rgba(255, 255, 255, 0.3);
  border-top: 3px solid white;
  border-radius: 50%;
  animation: spin 1s linear infinite;
}
```

---

## 🔧 Form Elements

### Input Fields
```css
background: transparent;
border: 1px solid rgba(255, 255, 255, 0.2);
border-radius: 12px;
padding: 0.75rem 1rem;
color: white;
font-size: 14px;

&:focus {
  border-color: rgba(255, 255, 255, 0.5);
  box-shadow: 0 0 0 3px rgba(255, 255, 255, 0.1);
}

&::placeholder {
  color: rgba(255, 255, 255, 0.6);
}
```

### Input with Icon Container
```css
display: grid;
grid-template-columns: 18px 1fr auto;
align-items: center;
gap: 12px;
padding: 14px 16px;
border-radius: 12px;
border: 1px solid rgba(255, 255, 255, 0.25);
background: rgba(255, 255, 255, 0.05);

&:focus-within {
  border-color: rgba(139, 92, 246, 0.5);
  background: rgba(255, 255, 255, 0.08);
  box-shadow: 0 0 0 3px rgba(139, 92, 246, 0.1);
}
```

---

## 🎪 Modal & Overlay

### Modal Overlay
```css
background: rgba(0, 0, 0, 0.5);
backdrop-filter: blur(10px);
```

### Modal Content
```css
background: rgba(255, 255, 255, 0.1);
backdrop-filter: blur(20px);
border-radius: 20px;
border: 1px solid rgba(255, 255, 255, 0.2);
padding: 2rem;
max-width: 500px;
```

---

## 🎨 Icon System

### Icon Library
**Primary**: Lucide React icons

### Icon Sizes
- **Small**: `16px`
- **Medium**: `20px`
- **Large**: `28px`
- **XL**: `40px`
- **XXL**: `64px`

### Common Icons
- **Dashboard**: `BarChart3`
- **Users**: `Users`
- **Outlets**: `Store`
- **Customers**: `User`
- **Analytics**: `TrendingUp`
- **Settings**: `Settings`
- **Logout**: `LogOut`
- **Add**: `Plus`
- **Edit**: `Edit`
- **Delete**: `Trash2`
- **View**: `Eye`
- **Send**: `Send`
- **Mail**: `Mail`

---

## 📊 Data Display

### Tables
```css
.table-container {
  background: rgba(255, 255, 255, 0.05);
  border-radius: 16px;
  border: 1px solid rgba(255, 255, 255, 0.1);
}

th {
  background: rgba(255, 255, 255, 0.1);
  color: white;
  font-weight: 600;
  padding: 1rem;
  text-transform: uppercase;
  letter-spacing: 0.05em;
}

td {
  padding: 1rem;
  border-bottom: 1px solid rgba(255, 255, 255, 0.1);
  color: rgba(255, 255, 255, 0.9);
}
```

### Status Badges
```css
padding: 0.5rem 1rem;
background: rgba(34, 197, 94, 0.1); /* Success variant */
border-radius: 20px;
color: #10b981;
font-size: 0.75rem;
font-weight: 500;
border: 1px solid rgba(34, 197, 94, 0.2);
```

---

## 🎯 Responsive Breakpoints

### Mobile (≤ 768px)
- Sidebar becomes full-width
- Stats grid becomes single column
- Page header stacks vertically
- Reduced padding on cards

### Tablet (769px - 1024px)
- Maintain sidebar
- Adjust grid columns
- Optimize spacing

### Desktop (≥ 1025px)
- Full layout
- Maximum grid columns
- Standard spacing

---

## 🔍 Accessibility

### Focus States
- All interactive elements must have visible focus indicators
- Focus rings: `0 0 0 3px rgba(255, 255, 255, 0.1)`

### Color Contrast
- Ensure minimum 4.5:1 contrast ratio for text
- Use semantic colors for status indicators

### Keyboard Navigation
- All interactive elements must be keyboard accessible
- Logical tab order maintained

---

## 🚀 Performance Guidelines

### Backdrop Filter Usage
- Use sparingly for performance
- Limit to primary UI elements
- Consider fallbacks for older browsers

### Animation Performance
- Use `transform` and `opacity` for animations
- Avoid animating layout properties
- Use `will-change` sparingly

---

## 📝 Implementation Notes

1. **Consistency**: Always use the defined color variables and spacing scale
2. **Glassmorphism**: Apply backdrop-filter only to main UI containers
3. **Gradients**: Use the primary gradient for CTAs and branding elements
4. **Shadows**: Layer shadows for depth (small shadow + colored glow)
5. **Border Radius**: Use consistent radius values (8px, 12px, 16px, 20px)
6. **Text Selection**: Disable on UI elements, enable on content areas

---

## 🎨 Brand Elements

### Logo Usage
- Primary logo: Rewin "R" in gradient container
- Always maintain aspect ratio
- Minimum size: 32px × 32px
- Use white version on dark backgrounds

### Brand Colors
- Primary: `#667eea` to `#764ba2`
- Never use brand colors at full opacity for backgrounds
- Always use rgba variants for subtle effects

---

This theme specification ensures consistent, modern, and accessible design across the entire Rewin Admin Panel. All components should follow these guidelines to maintain visual harmony and user experience quality.
