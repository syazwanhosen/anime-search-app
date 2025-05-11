# 🎌 Anime Search App

A responsive and performant Anime Search Application built with **React 19**, **Redux**, **TypeScript**, **Axios**, and **Material UI**, consuming the [Jikan API](https://docs.api.jikan.moe/) to search and view anime details.

---

## 🚀 Features

- 🔍 **Instant Anime Search** with debounce (250ms)
- 📄 **Anime Detail Page** with title, image, and metadata
- 📦 **Redux State Management** with action/reducer/service separation
- ⏳ **Loading Indicators** with graceful fallback UI
- ❌ **Error Handling** for network or empty result states
- 📄 **Pagination** using server-side data
- 📱 Fully responsive and accessible UI using **Material UI**

---

## 🛠️ Tech Stack

| Technology       | Description                        |
|------------------|------------------------------------|
| React 19         | Core UI library                    |
| Redux (no thunk) | State management                   |
| React Router DOM | Routing between Search/Detail      |
| Axios            | HTTP requests                      |
| Material UI      | UI component framework             |
| TypeScript       | Type safety                        |

---

## 📁 Project Structure

```bash
src/
├── actions/         # Redux action creators
├── components/      # Shared, reusable UI components
├── constants/       # App-wide constants (e.g. stat card)
├── hooks/           # Custom React hooks (e.g. useDebounce)
├── pages/           # Route-based page components (Search, Details)
├── reducers/        # Redux reducers
├── routes/          # Application routes configuration
├── services/        # API interaction layer (e.g. animeService)
├── store/           # Redux store setup and configuration
├── types/           # TypeScript types and interfaces
├── App.tsx          # Root application component
├── index.tsx        # App entry point
```

## 🧰 Getting Started

1. **Clone the repository**

```bash
git clone https://github.com/syazwanhosen/anime-search-app.git
cd anime-search-app
```

2. **Install dependencies**

```bash
npm install
```

Or using Yarn:

```bash
yarn install
```

3. **Setup Environment Variables**
Create a .env file in the root of the project and add the following variables:
```bash
REACT_APP_API_BASE_URL=https://api.jikan.moe/v4
```

4. **Running the App**
To start the development server:
```bash
npm run start
```

Or using Yarn:

```bash
yarn start
```

The app will be available at http://localhost:3000.


## 📦 API Reference
This app uses the Jikan API v4:

Search: https://api.jikan.moe/v4/anime?q=naruto&page=1

Details: https://api.jikan.moe/v4/anime/{id}

No authentication required.