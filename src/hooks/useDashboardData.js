"use client";
import { useState, useEffect, useCallback } from "react";

export const useDashboardData = () => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [timeRange, setTimeRange] = useState("7 Days");

  const fetchData = useCallback(async (range) => {
    setLoading(true);
    setError(null);

    try {
      // Create an array of fetch promises for all endpoints
      const endpoints = ["aum", "sip", "stats", "client", "charts"]; // Corrected 'clients' to 'client'
      const promises = endpoints.map((endpoint) =>
        fetch(`/api/${endpoint}?timeRange=${encodeURIComponent(range)}`).then(
          (res) => {
            if (!res.ok) {
              throw new Error(`Failed to fetch ${endpoint} data`);
            }
            return res.json();
          }
        )
      );

      // Resolve all promises in parallel
      const [aum, sip, stats, clientData, charts] = await Promise.all(promises);

      // Combine the results into a single object matching the original structure
      const fullData = {
        aum,
        sip,
        stats,
        clients: clientData, // Assign the fetched data to the 'clients' key
        sipBusiness: charts.sipBusiness,
        monthlyMIS: charts.monthlyMIS,
      };

      setData(fullData);
    } catch (err) {
      setError(err.message);
      console.error("Error fetching dashboard data:", err);
    } finally {
      setLoading(false);
    }
  }, []); // useCallback dependency array is empty as it doesn't depend on props or state

  const updateTimeRange = (range) => {
    setTimeRange(range);
    fetchData(range);
  };

  const refreshData = () => {
    fetchData(timeRange);
  };

  useEffect(() => {
    fetchData(timeRange);
  }, [fetchData, timeRange]);

  return {
    data,
    loading,
    error,
    timeRange,
    updateTimeRange,
    refreshData,
  };
};
