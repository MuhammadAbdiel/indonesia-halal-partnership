import { useState, useEffect } from "react";
import axios from "axios";

export const Dashboard = () => {
  const [stats, setStats] = useState([]);
  const [uniqueVisitors, setUniqueVisitors] = useState(0);

  useEffect(() => {
    const fetchStats = async () => {
      try {
        const response = await axios.get(
          "https://indonesiahalalpartner.com/get_stats.php"
        );
        const data = response.data;

        setStats(data);

        // Hitung jumlah IP address unik
        const uniqueIps = new Set(data.map((stat: any) => stat.ip_address));
        setUniqueVisitors(uniqueIps.size);
      } catch (error) {
        console.error("Error fetching stats:", error);
      }
    };

    fetchStats();
  }, []);

  return (
    <div className="min-h-screen bg-gray-100 py-10 px-5">
      <div className="max-w-4xl mx-auto bg-white shadow-lg rounded-lg p-6">
        <h1 className="text-3xl font-bold text-gray-800 mb-4">
          Visitor Statistics
        </h1>
        <p className="text-lg font-medium text-gray-600 mb-6">
          Total Unique Visitors:{" "}
          <span className="text-green-600 font-semibold">{uniqueVisitors}</span>
        </p>
        <div className="overflow-x-auto">
          <table className="min-w-full bg-white border border-gray-200 rounded-lg">
            <thead>
              <tr className="bg-gray-200 text-gray-600 uppercase text-sm leading-normal">
                <th className="py-3 px-6 text-left">Page Visited</th>
                <th className="py-3 px-6 text-left">IP Address</th>
                <th className="py-3 px-6 text-center">Visits</th>
              </tr>
            </thead>
            <tbody className="text-gray-600 text-sm font-light">
              {stats.map((stat: any, index) => (
                <tr
                  key={index}
                  className={`border-b border-gray-200 hover:bg-gray-100 ${
                    index % 2 === 0 ? "bg-gray-50" : "bg-white"
                  }`}
                >
                  <td className="py-3 px-6 text-left whitespace-nowrap">
                    {stat.page_visited}
                  </td>
                  <td className="py-3 px-6 text-left">{stat.ip_address}</td>
                  <td className="py-3 px-6 text-center">{stat.count}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};
