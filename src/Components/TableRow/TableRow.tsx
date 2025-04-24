const TableRow = ({ asset, index }: { asset: any; index: number }) => {
  const formatChange = (val: number) => (
    <span
      className={`whitespace-nowrap font-medium ${val >= 0 ? "text-green-500" : "text-red-500"}`}
    >
      {val >= 0 ? "▲" : "▼"} {Math.abs(val).toFixed(2)}%
    </span>
  );

  return (
    <tr className="hover:bg-gray-100 transition duration-150 text-sm whitespace-nowrap">
      <td className="px-4 py-3 text-gray-700">{index}</td>

      {/* Name & logo */}
      <td className="px-4 py-3 flex items-center gap-2 min-w-[120px]">
        <img src={asset.logo} alt={asset.symbol} width={24} height={24} className="inline-block" />
        <div>
          <div className="font-medium text-gray-800">{asset.name}</div>
          <div className="text-xs text-gray-500 uppercase">{asset.symbol}</div>
        </div>
      </td>

      <td className="px-4 py-3 text-right font-medium text-gray-800 min-w-[100px]">
        ${asset.price.toLocaleString()}
      </td>

      <td className="px-4 py-3 text-right">{formatChange(asset.change1h)}</td>
      <td className="px-4 py-3 text-right">{formatChange(asset.change24h)}</td>
      <td className="px-4 py-3 text-right">{formatChange(asset.change7d)}</td>

      <td className="px-4 py-3 text-right text-gray-700 min-w-[140px]">
        ${asset.marketCap.toLocaleString()}
      </td>

      <td className="px-4 py-3 text-right text-gray-700 min-w-[140px]">
        ${asset.volume24h.toLocaleString()}
      </td>

      <td className="px-4 py-3 text-right text-gray-700 min-w-[120px]">
        {asset.circulatingSupply.toLocaleString()}
      </td>

      {/* <td className="px-4 py-3 text-right text-gray-700 min-w-[100px]">
        {asset.maxSupply ? asset.maxSupply.toLocaleString() : "∞"}
      </td> */}

      <td className="px-4 py-3 text-center min-w-[80px]">
        <img src={asset.chart7d} alt="chart" width={60} className="mx-auto" />
      </td>
    </tr>
  );
};

export default TableRow;
