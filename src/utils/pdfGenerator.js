import { jsPDF } from 'jspdf'
import html2canvas from 'html2canvas'

/**
 * Generates a PDF report from the dashboard data.
 * @param {object} dashboardData - The data object for the dashboard.
 */
export async function generateDashboardPDF(dashboardData) {
  if (!dashboardData) {
    throw new Error('No data provided to generate PDF.')
  }

  const pdf = new jsPDF('p', 'mm', 'a4')
  const pageWidth = pdf.internal.pageSize.getWidth()
  const pageHeight = pdf.internal.pageSize.getHeight()
  let yPosition = 20

  // --- Header ---
  pdf.setFontSize(22)
  pdf.setTextColor('#d32f2f') // A shade of red
  pdf.text('WealthLite Dashboard Report', 20, yPosition)
  yPosition += 10

  pdf.setFontSize(10)
  pdf.setTextColor(150, 150, 150)
  pdf.text(`Report Generated: ${new Date().toLocaleString()}`, 20, yPosition)
  yPosition += 20

  // --- Key Metrics (AUM & SIP) ---
  const { aum, sip, stats, clients } = dashboardData
  pdf.setFontSize(16).setTextColor(0, 0, 0)
  pdf.text('Key Metrics', 20, yPosition)
  yPosition += 10

  pdf.setFontSize(12).setTextColor(50, 50, 50)
  pdf.text(`AUM: ₹${(aum.value / 10000000).toFixed(2)} Cr`, 20, yPosition)
  pdf.text(`SIP: ₹${(sip.value / 100000).toFixed(2)} L`, 80, yPosition)
  yPosition += 15

  // --- Statistics ---
  pdf.setFontSize(16).setTextColor(0, 0, 0)
  pdf.text('Recent Activity', 20, yPosition)
  yPosition += 10

  const statItems = [
    `Purchases: ${stats.purchases.toLocaleString()}`,
    `Redemptions: ${stats.redemptions.toLocaleString()}`,
    `New SIPs: ${stats.newSip.toLocaleString()}`,
    `Rejected Transactions: ${stats.rejectedTransactions.toLocaleString()}`,
  ]

  pdf.setFontSize(12).setTextColor(50, 50, 50)
  pdf.text(statItems, 20, yPosition)
  yPosition += 30

  // --- Charts ---
  // This part requires the DOM, so it's best run on the client-side.
  // The function expects that elements with `data-chart` attributes exist.
  if (typeof document !== 'undefined') {
    const chartElements = document.querySelectorAll('[data-chart]')
    pdf.setFontSize(16).setTextColor(0, 0, 0)
    pdf.text('Visual Reports', 20, yPosition)
    yPosition += 10

    for (const element of Array.from(chartElements)) {
      if (yPosition > pageHeight - 80) { // Check for page break
        pdf.addPage()
        yPosition = 20
      }
      try {
        const canvas = await html2canvas(element, {
          scale: 2,
          backgroundColor: '#ffffff',
          logging: false,
          useCORS: true,
        })
        const imgData = canvas.toDataURL('image/png')
        const imgWidth = pageWidth - 40
        const imgHeight = (canvas.height * imgWidth) / canvas.width
        pdf.addImage(imgData, 'PNG', 20, yPosition, imgWidth, imgHeight)
        yPosition += imgHeight + 15
      } catch (error) {
        console.error('Failed to capture chart for PDF:', error)
        pdf.setTextColor(255, 0, 0).text(`Could not render chart: ${element.dataset.chart}`, 20, yPosition)
        yPosition += 10
      }
    }
  }

  // --- Save PDF ---
  pdf.save(`WealthLite-Report-${new Date().toISOString().split('T')[0]}.pdf`)
}
