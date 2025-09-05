"use client";
import { useDashboardData } from "@/hooks/useDashboardData";
import Header from "@/components/layout/Header";
import Navigation from "@/components/layout/Navigation";
import MainCards from "@/components/dashboard/MainCards";
import TimeFilter from "@/components/dashboard/TimeFilter";
import StatCards from "@/components/dashboard/StatCards";
import ClientsChart from "@/components/charts/ClientsChart";
import SIPBusinessChart from "@/components/charts/SIPBusinessChart";
import MonthlyMISChart from "@/components/charts/MonthlyMISChart";
import LoadingSpinner from "@/components/ui/LoadingSpinner";

export default function Dashboard() {
  const { data, loading, error, updateTimeRange } = useDashboardData();

  if (error) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-red-600 mb-4">
            Something went wrong
          </h2>
          <p className="text-gray-600 mb-6">{error}</p>
          <button
            onClick={() => window.location.reload()}
            className="btn-primary"
          >
            Try Again
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen">
      <Header />
      <Navigation />

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {loading && !data ? (
          <div className="flex items-center justify-center h-[60vh]">
            <LoadingSpinner size="lg" />
          </div>
        ) : data ? (
          <div className="space-y-6">
            <MainCards aumData={data.aum} sipData={data.sip} />
            <div className="card">
              <TimeFilter onFilterChange={updateTimeRange} loading={loading} />
              <StatCards statsData={data.stats} />
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-5 gap-6">
              <div className="lg:col-span-2" data-chart="clients">
                <ClientsChart data={data.clients} />
              </div>
              <div className="lg:col-span-3 grid grid-cols-1 md:grid-cols-2 gap-6">
                <div data-chart="sip-business">
                  <SIPBusinessChart data={data.sipBusiness} />
                </div>
                <div data-chart="monthly-mis">
                  <MonthlyMISChart data={data.monthlyMIS} />
                </div>
              </div>
            </div>
          </div>
        ) : null}
      </main>
    </div>
  );
}
