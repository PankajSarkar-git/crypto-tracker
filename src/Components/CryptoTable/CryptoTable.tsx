import { useDispatch, useSelector } from "react-redux";
import TableRow from "../TableRow/TableRow";
import { RootState } from "../../app/store";
import { useEffect, useState } from "react";
import { simulatePriceUpdates } from "../../utils/simulateUpdates";
import { sortByMarketCap, sortByName } from "../../features/crypto/cryptoSlice";

const CryptoTable = () => {
  const assets = useSelector((state: RootState) => state.crypto.assets);
  const dispatch = useDispatch();

  const [nameSortOrder, setNameSortOrder] = useState<"asc" | "desc">("asc");
  const [capSortOrder, setCapSortOrder] = useState<"asc" | "desc">("desc");

  useEffect(() => {
    simulatePriceUpdates(dispatch, assets);
  }, []);

  const handleSortByName = () => {
    const newOrder = nameSortOrder === "asc" ? "desc" : "asc";
    setNameSortOrder(newOrder);
    dispatch(sortByName(newOrder));
  };

  const handleSortByMarketCap = () => {
    const newOrder = capSortOrder === "asc" ? "desc" : "asc";
    setCapSortOrder(newOrder);
    dispatch(sortByMarketCap(newOrder));
  };

  return (
    <div className="w-full overflow-x-auto lg:overflow-x-visible">
      <table className="w-full divide-y divide-gray-200 shadow rounded-xl lg:overflow-x-visible">
        <thead className="bg-gray-50">
          <tr>
            <th className="px-4 py-3 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider">
              #
            </th>
            <th
              onClick={handleSortByName}
              className="px-4 py-3 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider cursor-pointer hover:underline"
            >
              Name {nameSortOrder === "asc" ? "▲" : "▼"}
            </th>
            <th className="px-4 py-3 text-right text-xs font-semibold text-gray-700 uppercase tracking-wider">
              Price
            </th>
            <th className="px-4 py-3 text-right text-xs font-semibold text-gray-700 uppercase tracking-wider">
              1h %
            </th>
            <th className="px-4 py-3 text-right text-xs font-semibold text-gray-700 uppercase tracking-wider">
              24h %
            </th>
            <th className="px-4 py-3 text-right text-xs font-semibold text-gray-700 uppercase tracking-wider">
              7d %
            </th>
            <th
              onClick={handleSortByMarketCap}
              className="px-4 py-3 text-right text-xs font-semibold text-gray-700 uppercase tracking-wider cursor-pointer hover:underline"
            >
              Market Cap {capSortOrder === "asc" ? "▲" : "▼"}
            </th>
            <th className="px-4 py-3 text-right text-xs font-semibold text-gray-700 uppercase tracking-wider">
              Volume (24h)
            </th>
            <th className="px-4 py-3 text-right text-xs font-semibold text-gray-700 uppercase tracking-wider">
              Supply
            </th>
            <th className="px-4 py-3 text-center text-xs font-semibold text-gray-700 uppercase tracking-wider">
              7D Chart
            </th>
          </tr>
        </thead>
        <tbody>
          {assets.map((asset, idx) => (
            <TableRow key={asset.id} asset={asset} index={idx + 1} />
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default CryptoTable;
