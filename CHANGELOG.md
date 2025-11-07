# Changelog

## [Latest] - 2025-11-07

### Added
- 🎯 **Click-to-Navigate Feature**: All text elements across the entire project now have click handlers that open the [QDLeader Frontend Knowledge Base](https://qdleader.github.io/qdleader/) in a new tab
- ✨ **TypeScript Interfaces**: Added proper TypeScript interfaces for all components
- 📝 **Component Props**: Added `onTextClick` prop to Footer and PartnerCard components for better reusability

### Changed
- ⚡ **Performance Optimization**: Refactored scroll listener to use `requestAnimationFrame` for better performance
- 🔄 **Event Listener Management**: Properly cleanup event listeners in useEffect to prevent memory leaks
- 🎨 **Code Structure**: Extracted technology stack data into constants for better maintainability
- 📦 **Component Optimization**: Converted PartnerCard to use `.map()` for rendering items, reducing code duplication
- 🧹 **Code Cleanup**: Removed duplicate event listener registrations and improved code organization

### Optimized Files

#### `/pages/index.tsx`
- Added `handleTextClick` callback for text navigation
- Optimized scroll handler with requestAnimationFrame
- Added proper event listener cleanup
- Added click handlers to title text
- Improved code readability with better variable naming

#### `/components/partnerCard/index.tsx`
- Added TypeScript interface `PartnerCardProps`
- Extracted tech stacks into constants
- Refactored to use `.map()` for rendering items
- Added click handlers to all technology badges
- Removed duplicate code

#### `/components/footer/index.tsx`
- Added TypeScript interface `FooterProps`
- Added click handler and cursor pointer
- Improved styling with inline styles

#### `/pages/home.tsx`
- Added `handleTextClick` callback
- Optimized router event listeners with proper cleanup
- Added click handlers to all text elements
- Improved code structure with useEffect and useCallback

#### `/pages/pageDetail.tsx`
- Added `handleTextClick` callback
- Added click handlers to all text elements
- Improved TypeScript interfaces (renamed to PascalCase)
- Added error handling in `getInitialProps`

### Technical Improvements

1. **Memory Management**: All event listeners are properly registered and cleaned up
2. **Performance**: Scroll animations use requestAnimationFrame for 60fps smooth rendering
3. **Type Safety**: Better TypeScript typing throughout the project
4. **Reusability**: Components now accept props for better composition
5. **Maintainability**: Constants extracted, code deduplicated, better organization

### User Experience Improvements

- 🖱️ All text elements now show cursor pointer on hover
- 🔗 Clicking any text opens QDLeader knowledge base in a new tab
- ⚡ Smoother scroll animations with better performance
- 🎯 Better accessibility with proper link attributes (noopener, noreferrer)

---

## How to Use

All text elements throughout the application are now interactive:

1. **Main Page (`/`)**: Click on "Hello? Front-end", technology badges, or "Concat Us"
2. **Home Page (`/home`)**: Click on any text or button
3. **Detail Page (`/pageDetail`)**: Click on any text or data items

Every click will open the QDLeader Frontend Knowledge Base in a new browser tab.

