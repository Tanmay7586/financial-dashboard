import { NextResponse } from 'next/server'

// Mock data for client distribution
const clientsData = [
  { name: 'Online', value: 541, color: '#ef4444' },
  { name: 'New', value: 3824, color: '#22c55e' },
  { name: 'Active', value: 2, color: '#3b82f6' }, // Note: Low value as in original
  { name: 'Inactive', value: 60, color: '#f59e0b' },
]

export async function GET() {
  // Add total for easier percentage calculation on the frontend
  const total = clientsData.reduce((sum, client) => sum + client.value, 0)
  const dataWithTotal = clientsData.map(client => ({ ...client, total }))

  return NextResponse.json(dataWithTotal)
}
