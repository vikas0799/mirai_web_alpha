
# 📘 CSS Units Guide

This document explains different **CSS units** and their use-cases.  
It helps understand when to use `px`, `%`, `em`, `rem`, `vh`, `vw`, etc. for fonts, layouts, and spacing.

---

## 🔹 Font-size Units: `rem` and `em`

- **px**: Fixed size (not responsive).  
  Example: `font-size: 16px;` → Always 16px on every device.
- **em**: Relative to parent’s font size.  
  Example: Parent = `20px`, Child = `2em` → Child = `40px`.
- **rem**: Relative to root (`html`) font size.  
  Example: `html { font-size: 16px; }` → `1.5rem = 24px`.

✅ **Best Practice**  
- Use `rem` for base font sizes (responsive + accessible).  
- Use `em` for scaling inside components (like buttons, cards).  

---

## 🔹 Layout Units: `%`, `vh`, `vw`

- **%** → Relative to parent element’s size.  
  Example: `width: 50%;` → Half of parent width.
- **vh / vw** → Relative to viewport (browser window).  
  Example: `height: 100vh;` → Full screen height.
- **px** → Fixed, not responsive.  

### Example:
```css
.box {
  width: 80%;     /* relative to parent */
  height: 50vh;   /* half of screen height */
}
````

---

## 🔹 Why Use `px`?

Use `px` when **exact fixed size** is required (non-responsive values), such as:

* Borders
* Shadows
* Small spacing

Example:

```css
border: 2px solid black;
box-shadow: 5px 5px 10px;
```

---

## ✅ Summary Rules

* **Fonts** → Use `rem` (base) + `em` (nested scaling).
* **Layouts** → Use `%` (parent relative) + `vh/vw` (screen relative).
* **Exact control** → Use `px` for borders, shadows, tiny details.

---

## 📊 Quick Comparison Table

| Unit  | Relative To           | Best For               | Responsive? |
| ----- | --------------------- | ---------------------- | ----------- |
| px    | Fixed                 | Borders, shadows       | ❌ No        |
| %     | Parent element        | Width/height layouts   | ✅ Yes       |
| em    | Parent font-size      | Nested text/components | ✅ Yes       |
| rem   | Root font-size (html) | Global font-sizes      | ✅ Yes       |
| vh/vw | Viewport height/width | Fullscreen layouts     | ✅ Yes       |

---

## 👨‍💻 Author

Made by **Vikas Patel** ✨

```

---

```
