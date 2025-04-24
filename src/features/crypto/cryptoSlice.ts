import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface CryptoAsset {
  id: string;
  name: string;
  symbol: string;
  logo: string;
  price: number;
  change1h: number;
  change24h: number;
  change7d: number;
  marketCap: number;
  volume24h: number;
  circulatingSupply: number;
  maxSupply: number | null;
  chart7d: string;
}

interface CryptoState {
  assets: CryptoAsset[];
}

const initialState: CryptoState = {
  assets: [
    {
      id: "btc",
      name: "Bitcoin",
      symbol: "BTC",
      logo: "/assets/logo/BTC.png",
      price: 93759.48,
      change1h: 0.43,
      change24h: 0.93,
      change7d: 11.11,
      marketCap: 1861618902186,
      volume24h: 43874950947,
      circulatingSupply: 19850000,
      maxSupply: 21000000,
      chart7d: "/assets/charts/image.png",
    },
    {
      id: "eth",
      name: "Ethereum",
      symbol: "ETH",
      logo: "/assets/ethereum-eth-logo.svg",
      price: 1802.46,
      change1h: 0.6,
      change24h: 3.21,
      change7d: 13.68,
      marketCap: 217581279327,
      volume24h: 23547469307,
      circulatingSupply: 120710000,
      maxSupply: null,
      chart7d: "/assets/charts/image.png",
    },
    {
      id: "usdt",
      name: "Tether",
      symbol: "USDT",
      logo: "/assets/tether-usdt-logo.svg",
      price: 1.0,
      change1h: 0.0,
      change24h: 0.0,
      change7d: 0.04,
      marketCap: 145320022085,
      volume24h: 92288882007,
      circulatingSupply: 145270000000,
      maxSupply: null,
      chart7d: "/assets/charts/image.png",
    },
    {
      id: "xrp",
      name: "XRP",
      symbol: "XRP",
      logo: "/assets/xrp-xrp-logo.svg",
      price: 2.22,
      change1h: 0.46,
      change24h: 0.54,
      change7d: 6.18,
      marketCap: 130073814966,
      volume24h: 5131481491,
      circulatingSupply: 58390000000,
      maxSupply: 100000000000,
      chart7d: "/assets/charts/image.png",
    },
    {
      id: "bnb",
      name: "BNB",
      symbol: "BNB",
      logo: "/assets/bnb-bnb-logo.svg",
      price: 606.65,
      change1h: 0.09,
      change24h: -1.2,
      change7d: 3.73,
      marketCap: 85471956947,
      volume24h: 1874281784,
      circulatingSupply: 140890000,
      maxSupply: 200000000,
      chart7d: "/assets/charts/image.png",
    },
    {
      id: "sol",
      name: "Solana",
      symbol: "SOL",
      logo: "/assets/solana-sol-logo.svg",
      price: 151.51,
      change1h: 0.53,
      change24h: 1.26,
      change7d: 14.74,
      marketCap: 78381958631,
      volume24h: 4881674486,
      circulatingSupply: 517310000,
      maxSupply: null,
      chart7d: "/assets/charts/image.png",
    },
  ],
};

const cryptoSlice = createSlice({
  name: "crypto",
  initialState,
  reducers: {
    setAssets(state, action: PayloadAction<CryptoAsset[]>) {
      state.assets = action.payload;
    },
    updateAsset(state, action: PayloadAction<CryptoAsset>) {
      const index = state.assets.findIndex((a) => a.id === action.payload.id);
      if (index !== -1) {
        state.assets[index] = action.payload;
      }
    },
    sortByName(state, action: PayloadAction<"asc" | "desc">) {
      state.assets.sort((a, b) => {
        if (action.payload === "asc") {
          return a.name.localeCompare(b.name);
        } else {
          return b.name.localeCompare(a.name);
        }
      });
    },
    sortByMarketCap(state, action: PayloadAction<"asc" | "desc">) {
      state.assets.sort((a, b) => {
        if (action.payload === "asc") {
          return a.marketCap - b.marketCap;
        } else {
          return b.marketCap - a.marketCap;
        }
      });
    },
  },
});

export const { setAssets, updateAsset,sortByName,sortByMarketCap } = cryptoSlice.actions;
export default cryptoSlice.reducer;
