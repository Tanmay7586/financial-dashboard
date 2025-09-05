import { NextResponse } from 'next/server'

// Mock data for the various charts
function getChartsData() {
  return {
    sipBusiness: [
      { name: 'Jan', volume: 1200, amount: 45000000 },
      { name: 'Feb', volume: 900, amount: 38000000 },
      { name: 'Mar', volume: 1500, amount: 52000000 },
      { name: 'Apr', volume: 1100, amount: 41000000 },
      { name: 'May', volume: 1800, amount: 58000000 },
      { name: 'Jun', volume: 1300, amount: 47000000 },
    ],
    monthlyMIS: [
      { month: 'Jan', equity: 35000000, debt: 28000000, hybrid: 15000000 },
      { month: 'Feb', equity: 42000000, debt: 25000000, hybrid: 18000000 },
      { month: 'Mar', equity: 48000000, debt: 30000000, hybrid: 22000000 },
      { month: 'Apr', equity: 38000000, debt: 32000000, hybrid: 19000000 },
      { month: 'May', equity: 55000000, debt: 28000000, hybrid: 25000000 },
      { month: 'Jun', equity: 50000000, debt: 35000000, hybrid: 23000000 },
    ],
  }
}

export async function GET() {
  const data = getChartsData()
  return NextResponse.json(data)
}
