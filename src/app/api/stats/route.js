import { NextResponse } from 'next/server'

// Mock data for general statistics
function getStatsData() {
  return {
    purchases: Math.floor(Math.random() * 1000) + 500,
    redemptions: Math.floor(Math.random() * 800) + 200,
    rejectedTransactions: Math.floor(Math.random() * 50) + 10,
    sipRejections: Math.floor(Math.random() * 30) + 5,
    newSip: Math.floor(Math.random() * 200) + 100,
  }
}

export async function GET() {
  const data = getStatsData()
  return NextResponse.json(data)
}
