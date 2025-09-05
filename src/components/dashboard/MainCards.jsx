"use client";
import { TrendingUp, TrendingDown } from "lucide-react";

export default function MainCards({ aumData, sipData }) {
  const formatCurrency = (value) => {
    if (value >= 10000000) {
      return `₹${(value / 10000000).toFixed(2)} Cr`;
    }
    return `₹${(value / 100000).toFixed(2)} L`;
  };

  const formatPercentage = (value) => {
    return `${value > 0 ? "+" : ""}${value.toFixed(2)}%`;
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      {/* AUM Card */}
      <div className="card">
        <div className="flex justify-between items-start mb-2">
          {/* Apply dark mode text color here */}
          <h3 className="text-sm font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wide">
            CURRENT AUM
          </h3>
          <button className="btn-view-report">View Report</button>
        </div>
        {/* And here */}
        <p className="text-3xl font-bold text-gray-800 dark:text-white mb-2">
          {formatCurrency(aumData.value)}
        </p>
        <div className="flex justify-between items-center text-sm">
          <div
            className={`flex items-center space-x-1 ${
              aumData.change >= 0 ? "text-green-600" : "text-red-600"
            }`}
          >
            {aumData.change >= 0 ? (
              <TrendingUp size={16} />
            ) : (
              <TrendingDown size={16} />
            )}
            <span>{formatPercentage(aumData.change)} MoM</span>
          </div>
          <button className="font-semibold text-gray-600 dark:text-gray-400 hover:text-red-600 dark:hover:text-red-400">
            View Trend ▾
          </button>
        </div>
      </div>

      {/* SIP Card */}
      <div className="card">
        <div className="flex justify-between items-start mb-2">
          {/* Apply dark mode text color here */}
          <h3 className="text-sm font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wide">
            CURRENT SIP
          </h3>
          <button className="btn-view-report">View Report</button>
        </div>
        {/* And here */}
        <p className="text-3xl font-bold text-gray-800 dark:text-white mb-2">
          {formatCurrency(sipData.value)}
        </p>
        <div className="flex justify-between items-center text-sm">
          <div
            className={`flex items-center space-x-1 ${
              sipData.change >= 0 ? "text-green-600" : "text-red-600"
            }`}
          >
            {sipData.change >= 0 ? (
              <TrendingUp size={16} />
            ) : (
              <TrendingDown size={16} />
            )}
            <span>{formatPercentage(sipData.change)} MoM</span>
          </div>
          <button className="font-semibold text-gray-600 dark:text-gray-400 hover:text-red-600 dark:hover:text-red-400">
            View Trend ▾
          </button>
        </div>
      </div>
    </div>
  );
}
