import { NextResponse } from 'next/server'

// Mock data for Systematic Investment Plan (SIP)
function getSipData(days) {
  return {
    value: 139000000, // 1.39 Cr
    change: 2.1,
    trend: Array.from({ length: days }, () => Math.random() * 3 - 1),
  }
}

export async function GET(request) {
  const { searchParams } = new URL(request.url)
  const timeRange = searchParams.get('timeRange') || '7 Days'
  const days = parseInt(timeRange.split(' ')[0]) || 7

  const data = getSipData(days)
  return NextResponse.json(data)
}
