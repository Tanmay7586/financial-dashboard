'use client'

import { useState } from 'react'
import { FileDown, Loader2 } from 'lucide-react'

export default function PDFExport({ dashboardData }) {
  const [isGenerating, setIsGenerating] = useState(false)

  const generatePDF = async () => {
    setIsGenerating(true)

    try {
      // Dynamic import (avoids SSR issues in Next.js)
      const { jsPDF } = await import('jspdf')
      const html2canvas = (await import('html2canvas')).default

      const pdf = new jsPDF('p', 'mm', 'a4')
      const pageWidth = pdf.internal.pageSize.getWidth()
      const pageHeight = pdf.internal.pageSize.getHeight()

      // Header
      pdf.setFontSize(20)
      pdf.setTextColor(220, 38, 38) // red-600
      pdf.text('Financial Dashboard Report', 20, 25)

      pdf.setFontSize(10)
      pdf.setTextColor(100, 100, 100)
      pdf.text(`Generated on: ${new Date().toLocaleDateString()}`, 20, 35)

      let yPosition = 50

      // Key Metrics
      pdf.setFontSize(16).setTextColor(0, 0, 0)
      pdf.text('Key Metrics', 20, yPosition)
      yPosition += 15

      pdf.setFontSize(12).setTextColor(0, 0, 0)
      pdf.text(`AUM: ₹${(dashboardData.aum.value / 10000000).toFixed(2)} Cr`, 20, yPosition)
      pdf.setTextColor(dashboardData.aum.change >= 0 ? 34 : 239, dashboardData.aum.change >= 0 ? 197 : 68, dashboardData.aum.change >= 0 ? 94 : 68)
      pdf.text(`${dashboardData.aum.change >= 0 ? '+' : ''}${dashboardData.aum.change.toFixed(2)}% MoM`, 80, yPosition)
      yPosition += 10

      pdf.setTextColor(0, 0, 0)
      pdf.text(`SIP: ₹${(dashboardData.sip.value / 100000).toFixed(2)} L`, 20, yPosition)
      pdf.setTextColor(dashboardData.sip.change >= 0 ? 34 : 239, dashboardData.sip.change >= 0 ? 197 : 68, dashboardData.sip.change >= 0 ? 94 : 68)
      pdf.text(`${dashboardData.sip.change >= 0 ? '+' : ''}${dashboardData.sip.change.toFixed(2)}% MoM`, 80, yPosition)
      yPosition += 20

      // Statistics
      pdf.setFontSize(16).setTextColor(0, 0, 0)
      pdf.text('Statistics', 20, yPosition)
      yPosition += 15

      const stats = [
        ['Purchases', dashboardData.stats.purchases],
        ['Redemptions', dashboardData.stats.redemptions],
        ['Rejected Transactions', dashboardData.stats.rejectedTransactions],
        ['SIP Rejections', dashboardData.stats.sipRejections],
        ['New SIP', dashboardData.stats.newSip],
      ]

      pdf.setFontSize(12)
      stats.forEach(([label, value]) => {
        pdf.text(`${label}: ${value.toLocaleString()}`, 20, yPosition)
        yPosition += 8
      })
      yPosition += 10

      // Client Distribution
      pdf.setFontSize(16).setTextColor(0, 0, 0)
      pdf.text('Client Distribution', 20, yPosition)
      yPosition += 15

      pdf.setFontSize(12)
      const totalClients = dashboardData.clients.reduce((sum, c) => sum + c.value, 0)
      dashboardData.clients.forEach(client => {
        const percentage = ((client.value / totalClients) * 100).toFixed(1)
        pdf.text(`${client.name}: ${client.value} (${percentage}%)`, 20, yPosition)
        yPosition += 8
      })

      // Charts
      if (typeof document !== 'undefined') {
        const chartElements = document.querySelectorAll('[data-chart]')

        for (let i = 0; i < chartElements.length; i++) {
          const element = chartElements[i]
          if (yPosition > pageHeight - 60) {
            pdf.addPage()
            yPosition = 20
          }

          try {
            const canvas = await html2canvas(element, {
              backgroundColor: '#ffffff',
              scale: 2,
              logging: false,
            })

            const imgData = canvas.toDataURL('image/png')
            const imgWidth = pageWidth - 40
            const imgHeight = (canvas.height * imgWidth) / canvas.width

            pdf.addImage(imgData, 'PNG', 20, yPosition, imgWidth, imgHeight)
            yPosition += imgHeight + 10
          } catch (error) {
            console.error('Error capturing chart:', error)
          }
        }
      }

      // Save PDF
      pdf.save('financial-dashboard-report.pdf')
    } catch (error) {
      console.error('Error generating PDF:', error)
      alert('Error generating PDF. Please try again.')
    } finally {
      setIsGenerating(false)
    }
  }

  return (
    <button
      onClick={generatePDF}
      disabled={isGenerating}
      className="btn-primary flex items-center space-x-2"
    >
      {isGenerating ? (
        <Loader2 className="h-4 w-4 animate-spin" />
      ) : (
        <FileDown className="h-4 w-4" />
      )}
      <span>{isGenerating ? 'Generating...' : 'Export PDF'}</span>
    </button>
  )
}
