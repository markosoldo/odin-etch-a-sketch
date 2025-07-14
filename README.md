# The Odin Project: Etch a Sketch

Part of Odin Foundations course

🔗 **[App live demo](https://markosoldo.github.io/odin-etch-a-sketch/)**

## Short Description

A simple interactive Etch-a-Sketch web application that allows users to draw on a customizable grid with various modes such as color, rainbow, and eraser. Users can adjust grid size, toggle grid lines, and clear their drawings.

## Startup Instructions

To run the app locally, open the `index.html` file in your preferred web browser. You can do this by simply double-clicking the `index.html` file or by running a local server if you prefer.

Example (using terminal):

```bash
# Navigate to the project directory (replace with the actual path)
cd /your/path/to/odin-etch-a-sketch

# Start a simple HTTP server using Python 3 (port 8000 is default)
python3 -m http.server 8000

# Open your browser and go to:
http://localhost:8000
```

Alternatively, if you are opening directly:

- On Windows: double-click `index.html`
- On Mac/Linux: open in your browser via file explorer or terminal

## How It Works

The app creates a grid of div elements that users can draw on. The grid size is adjustable via a slider, which dynamically recreates the grid. Users can toggle between different drawing modes:

- **Color Mode:** Draw with a selected color.
- **Rainbow Mode:** Draw with random colors.
- **Eraser Mode:** Remove color from cells.

Event listeners handle mouse interactions, allowing click-and-drag drawing. Grid lines can be toggled on or off for better visual guidance. The "Clear" button resets the grid.

## Project Overview

### File Structure

```
odin-etch-a-sketch/
├── index.html       # Main structure and controls
├── style.css        # Styling for layout and appearance
├── script.js        # JavaScript logic for interactivity
├── img/             # Directory with images
└── README.md        # This documentation file
```

### Key JavaScript Elements

- **Variables:** DOM elements for controls and grid container
- **Functions:**
  - `handleRange()`: Adjusts grid size
  - `handleGridToggle()`: Toggles grid borders
  - `handleModeToggle()`: Switches active drawing mode
  - `fillGrid()`: Paints grid cells based on mode
  - `clearGrid()`: Resets all cells to white

### Usage Summary

- Adjust grid size with slider
- Toggle grid lines
- Select mode: color, rainbow, eraser
- Draw by clicking and dragging
- Clear the grid with a button

## Author

This project was created by Marko Soldo. Feel free to fork and improve!
