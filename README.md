# React Posts Viewer (React Query + Infinite Scroll)

This project is a simple and clean React application built to
demonstrate:

-   **React Query** for data fetching, caching, and pagination\
-   **Infinite scrolling** using Intersection Observer\
-   **React Router** for navigation\
-   **Material UI** for UI components\
-   Fetching posts from the open-source API:\
    `https://jsonplaceholder.typicode.com/posts`

## 🚀 Features

### 1. Posts List Page

-   Fetches posts using React Query's `useInfiniteQuery`
-   Renders posts in pages of 10
-   Uses **Intersection Observer** to load more posts automatically
-   Smooth infinite scroll experience

### 2. Post Details Page

-   Click on any post to navigate to `/post/:id`
-   Fetches individual post using `useQuery`
-   Shows title, body, and additional metadata

### 3. Error & Loading States

-   Uses Material UI components for loaders and error banners

### 4. Clean Folder Structure

    src/
     ├─ components/
     ├─ hooks/
     ├─ api/
     └─ App.js

## 🛠️ Tech Stack

-   React\
-   React Query\
-   React Router\
-   Material UI\
-   Intersection Observer\
-   JSONPlaceholder API

## 🔧 How to Run Locally

### 1. Install dependencies

    npm install

### 2. Start Dev Server

    npm run dev

or

    npm start
