import { AppDispatch } from "../app/store";
import { updateAsset } from "../features/crypto/cryptoSlice";

export const simulatePriceUpdates = (dispatch: AppDispatch, assets: any[]) => {
  setInterval(() => {
    const updatedAssets = assets.map((asset) => {
      const rand = (Math.random() * 2 - 1) * 0.05;
      const newPrice = asset.price * (1 + rand);
      return {
        ...asset,
        price: parseFloat(newPrice.toFixed(2)),
        change1h: parseFloat((rand * 100).toFixed(2)),
        change24h: parseFloat((rand * 24).toFixed(2)),
        change7d: parseFloat((rand * 168).toFixed(2)),
        volume24h: asset.volume24h * (1 + rand),
      };
    });

    updatedAssets.forEach((asset) => {
      dispatch(updateAsset(asset));
    });
  }, 1000);
};
