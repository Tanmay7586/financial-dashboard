'use client'
import { ScatterChart, Scatter, XAxis, YAxis, ZAxis, Tooltip, ResponsiveContainer, Cell } from 'recharts'

export default function ClientsChart({ data }) {
  const COLORS = ['#ef4444', '#22c55e', '#3b82f6', '#f59e0b']

  const CustomTooltip = ({ active, payload }) => {
    if (active && payload && payload.length) {
      const dataPoint = payload[0].payload
      return (
        <div className="bg-white p-3 rounded-lg shadow-lg border border-gray-200">
          <p className="text-sm font-medium text-gray-900">
            {dataPoint.name}: {dataPoint.value.toLocaleString()}
          </p>
        </div>
      )
    }
    return null
  }

  // Add coordinates for positioning bubbles
  const chartData = data.map((item, index) => ({
    ...item,
    x: [10, 35, 60, 40][index % 4],
    y: [20, 50, 25, 70][index % 4],
  }));

  return (
    <div className="card h-full">
      <div className="flex justify-between items-center mb-4">
        <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Clients</h3>
        <button className="btn-view-report">Download Report</button>
      </div>
      
      <div className="h-64">
        <ResponsiveContainer width="100%" height="100%">
          <ScatterChart margin={{ top: 20, right: 20, bottom: 20, left: 20 }}>
            <XAxis type="number" dataKey="x" hide />
            <YAxis type="number" dataKey="y" hide />
            <ZAxis type="number" dataKey="value" range={[1000, 5000]} />
            <Tooltip cursor={{ strokeDasharray: '3 3' }} content={<CustomTooltip />} />
            <Scatter data={chartData} fill="#8884d8">
              {chartData.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
              ))}
            </Scatter>
          </ScatterChart>
        </ResponsiveContainer>
      </div>
    </div>
  )
}
