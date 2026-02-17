# Kitaab: A Writebook Inspired Hugo Theme

![Writebook Inspiration](https://img.shields.io/badge/Inspired%20by-Writebook%20by%2037signals-blue?style=for-the-badge)
![Hugo](https://img.shields.io/badge/Built%20with-Hugo-ff4088?style=for-the-badge&logo=hugo)

**Kitaab** is a clean, minimal, and focused Hugo theme designed for authors, researchers, and anyone who wants to publish long-form content beautifully. It is **inspired** by the aesthetic and user experience of **[Writebook](https://once.com/writebook)** by **37signals**.

## ✨ Design Philosophy
This project draws inspiration from the "Once" philosophy by 37signals—creating software that is simple, owned, and purposeful. Kitaab captures the focused reading experience of Writebook, providing:
- **Typography-First Design**: Optimized for readability and long-form consumption.
- **Distraction-Free Layout**: A clean interface that puts your words front and center.
- **Responsive Architecture**: Looks beautiful on desktops, tablets, and phones.
- **Simple Navigation**: A streamlined table of contents and chapter flow.

## 🚀 Getting Started

### Prerequisites
- [Hugo](https://gohugo.io/installation/) installed on your machine.

### Installation
1. Clone this repository:
   ```bash
   git clone https://github.com/ukhwaja/hugo-kitaab.git
   ```
2. Navigate to your project directory:
   ```bash
   cd hugo-kitaab
   ```
3. Run the Hugo server:
   ```bash
   hugo server
   ```

## 📖 Project Structure
- `content/chapters/`: Your book's chapters belong here. Use numeric prefixes (e.g., `01-introduction.md`) to maintain order.
- `layouts/`: Custom HTML templates that define the Writebook look.
- `static/`: Assets like CSS, fonts, and images.
- `themes/writebook/`: The core theme logic.

## 🛠️ Configuration
Edit `hugo.toml` to customize your book:
```toml
title = 'My Writebook'
theme = 'writebook'

[params]
  author = "Your Name"
  description = "A brief description of your masterpiece."
  cover_image = "/images/cover.png"
```

## 🙏 Credits & Disclaimer
This project is an independent implementation of the **Writebook** design by **37signals**. All design credits for the original concept go to the 37signals team. This is not an official 37signals product.

---
*Crafted with ❤️ for the love of writing.*
