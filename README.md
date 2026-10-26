# Todo List App

A clean, animated Todo list built with plain HTML, CSS and JavaScript. It has no frameworks or dependencies, and your tasks are saved in the browser.

## Features

- Add, complete and delete tasks
- Filter by All, Active or Done
- Clear all completed tasks in one click
- Progress bar that fills as you finish tasks
- Tasks persist after refresh (localStorage)
- Smooth animations for adding, completing and deleting tasks
- Responsive layout that works on desktop and mobile
- Keyboard-friendly, and respects the reduced-motion setting

## Project Structure

```
todo/
├── index.html   # page structure
├── style.css    # styling and animations
└── script.js    # app logic
```

## Getting Started

1. Download or clone this repository.
2. Open `index.html` in any modern browser.

No build step or installation is needed.

## How It Works

The app keeps all tasks in a single `todos` array. Every action (add, toggle, delete, filter, clear) updates that array, saves it to `localStorage`, and calls one `render()` function that redraws the list.

## Technologies

- HTML5
- CSS3 (transitions, keyframe animations, CSS variables)
- Vanilla JavaScript (ES6)

## Customization

Change the colors by editing the CSS variables at the top of `style.css`:

```css
:root {
  --bg: #1d2b3a;
  --accent: #2f9e8f;
  --danger: #d9534f;
}
```

## License

This project is open source and free to use.
