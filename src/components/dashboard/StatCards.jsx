'use client'
import { ShoppingCart, RefreshCw, XCircle, AlertCircle, Plus, TrendingUp } from 'lucide-react'

export default function StatCards({ statsData }) {
  const stats = [
    {
      name: 'Purchases',
      value: statsData.purchases || 0,
      icon: ShoppingCart,
      color: 'text-blue-500',
      bgColor: 'bg-blue-50',
    },
    {
      name: 'Redemptions',
      value: statsData.redemptions || 0,
      icon: RefreshCw,
      color: 'text-green-500',
      bgColor: 'bg-green-50',
    },
    {
      name: 'Reg. Transactions',
      value: statsData.rejectedTransactions || 0,
      icon: XCircle,
      color: 'text-red-500',
      bgColor: 'bg-red-50',
    },
    {
      name: 'SIP Rejections',
      value: statsData.sipRejections || 0,
      icon: AlertCircle,
      color: 'text-orange-500',
      bgColor: 'bg-orange-50',
    },
    {
      name: 'New SIP',
      value: statsData.newSip || 0,
      icon: Plus,
      color: 'text-purple-500',
      bgColor: 'bg-purple-50',
    },
  ]

  const formatValue = (value) => value.toLocaleString()

  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4">
      {stats.map((stat) => (
        <div
          key={stat.name}
          className="bg-gray-50 rounded-lg p-4 flex flex-col justify-between border border-gray-200"
        >
          <div className="flex justify-between items-center mb-4">
            <div className={`p-2 rounded-full ${stat.bgColor}`}>
              <stat.icon className={`h-6 w-6 ${stat.color}`} />
            </div>
             <TrendingUp className="h-6 w-6 text-gray-300" />
          </div>
          <div>
            <p className="text-sm text-gray-500 mb-1">{stat.name}</p>
            <p className="text-xl font-bold text-gray-900">
              {formatValue(stat.value)}
            </p>
             <p className="text-xs text-gray-400">0.00 INR</p>
          </div>
        </div>
      ))}
    </div>
  )
}
