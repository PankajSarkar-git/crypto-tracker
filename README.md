

# 📈 Real-Time Crypto Price Tracker

A responsive cryptocurrency tracker built with **React**, **Redux Toolkit**, and **Vite**, simulating real-time price updates via a mocked WebSocket. Inspired by platforms like CoinMarketCap.



---

## 🚀 Features

- 📊 Displays 5 major crypto assets: BTC, ETH, USDT, BNB, ADA
- 🔄 Simulates real-time price updates every 1–2 seconds
- 🌈 Color-coded percentage changes
- 📱 Fully responsive table UI
- 📦 State management with Redux Toolkit
- 📉 Static 7-day price chart (image/SVG)

---

## 🛠 Tech Stack

| Technology        | Purpose                                  |
|-------------------|-------------------------------------------|
| React             | UI Components                            |
| Redux Toolkit     | State management                         |
| Vite              | Fast development & build tool            |
| TypeScript        | Type safety                              |
| CSS Modules/Tailwind (your choice) | Styling              |
| setInterval       | Simulated real-time updates              |

---

## 📂 Project Structure

```
cryptoProject/
├── public/
│   └── assets/ (logos, static charts)
├── src/
│   ├── app/
│   │   └── store.ts
│   ├── features/
│   │   └── crypto/
│   │       ├── cryptoSlice.ts
│   │       └── cryptoSelectors.ts
│   ├── components/
│   │   ├── CryptoTable.tsx
│   │   └── TableRow.tsx
│   ├── utils/
│   │   └── simulateUpdates.ts
│   ├── App.tsx
│   └── main.tsx
├── package.json
└── README.md

```

## ⚙️ Setup Instructions

1. **Clone the repo**
   ```bash
   git clone https://github.com/your-username/crypto-price-tracker.git
   cd crypto-price-tracker
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start development server**
   ```bash
   npm run dev
   ```

4. **Build for production**
   ```bash
   npm run build
   ```

---

## 🧠 Architecture Overview

- **Redux Store**: Centralized crypto state (`price`, `% changes`, `volume`, etc.)
- **Selectors**: Optimized `useSelector` hooks to reduce unnecessary re-renders
- **Updater Class**: Simulates a WebSocket with `setInterval`, dispatching updates to the store
- **Mock Data**: Assets are initialized with static values and updated dynamically

---

## 🎥 Demo Video

👉 

https://github.com/user-attachments/assets/33d37e7d-d109-4447-b3d2-fe63bae07289






---

## 🌟 Bonus Features (Optional Implemented)

- ✅ Filters (Top gainers/losers)
- ✅ localStorage support for state persistence
- ❌ Real WebSocket (Binance API)
- ❌ Unit tests (coming soon)

---

## 🤝 Contributing

Feel free to open issues or submit PRs if you’d like to contribute. Let’s build together!

---

## 📄 License

MIT License

---

Let me know if you'd like me to generate code snippets or help prepare the mock data, Redux slice, or simulation logic.
