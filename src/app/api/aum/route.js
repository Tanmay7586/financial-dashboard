import { NextResponse } from 'next/server'

// Mock data for Assets Under Management (AUM)
function getAumData(days) {
  return {
    value: 1219000000, // 12.19 Cr
    change: 0.77,
    trend: Array.from({ length: days }, () => Math.random() * 2 - 1),
  }
}

export async function GET(request) {
  const { searchParams } = new URL(request.url)
  const timeRange = searchParams.get('timeRange') || '7 Days'
  const days = parseInt(timeRange.split(' ')[0]) || 7

  const data = getAumData(days)
  return NextResponse.json(data)
}
