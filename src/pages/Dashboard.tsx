import { useState, useEffect } from "react";
import axios from "axios";
import {
  FaAddressBook,
  FaAddressCard,
  FaCalendar,
  FaEye,
  FaFileAlt,
} from "react-icons/fa";

export const Dashboard = () => {
  const [stats, setStats] = useState([]);
  const [uniqueVisitors, setUniqueVisitors] = useState(0);
  const [filteredStats, setFilteredStats] = useState([]);
  const [selectedMonth, setSelectedMonth] = useState("");
  const [pageVisits, setPageVisits] = useState<Record<string, number>>({});

  useEffect(() => {
    const fetchStats = async () => {
      try {
        const response = await axios.get(
          "https://indonesiahalalpartner.com/get_stats.php"
        );
        const data = response.data;

        setStats(data);
        setFilteredStats(data);

        const uniqueIps = new Set(data.map((stat: any) => stat.ip_address));
        setUniqueVisitors(uniqueIps.size);
      } catch (error) {
        console.error("Error fetching stats:", error);
      }
    };

    fetchStats();
  }, []);

  const handleMonthChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const month = event.target.value;
    setSelectedMonth(month);

    if (month === "") {
      setFilteredStats(stats);
      setPageVisits({});
    } else {
      const currentYear = new Date().getFullYear();

      const filtered = stats.filter((stat: any) => {
        if (!stat.visit_time) return false;

        const formattedDate = stat.visit_time.replace(" ", "T");
        const visitDate = new Date(formattedDate);

        if (isNaN(visitDate.getTime())) {
          console.warn(`Invalid date format: ${stat.visit_time}`);
          return false;
        }

        return (
          visitDate.getMonth() + 1 === parseInt(month) &&
          visitDate.getFullYear() === currentYear
        );
      });

      setFilteredStats(filtered);

      const pageVisitsCount: Record<string, Set<string>> = {};
      filtered.forEach((stat: any) => {
        if (!pageVisitsCount[stat.page_visited]) {
          pageVisitsCount[stat.page_visited] = new Set();
        }
        pageVisitsCount[stat.page_visited].add(stat.ip_address);
      });

      const pageVisitsCountFinal: Record<string, number> = {};
      for (const page in pageVisitsCount) {
        pageVisitsCountFinal[page] = pageVisitsCount[page].size;
      }

      setPageVisits(pageVisitsCountFinal);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-200 py-10 px-5">
      <div className="max-w-5xl mx-auto bg-white shadow-xl rounded-lg p-8">
        <div className="mb-8 text-center">
          <h1 className="text-4xl font-bold text-gray-800 mb-2">
            Visitor Statistics
          </h1>
          <p className="text-lg font-medium text-gray-600">
            A detailed overview of your website visitors
          </p>
        </div>

        <div className="flex items-center justify-between mb-6">
          <div className="text-lg font-medium text-gray-700">
            Total Unique Visitors:{" "}
            <span className="text-xl font-bold text-green-600">
              {uniqueVisitors}
            </span>
          </div>

          <div>
            <label className="text-gray-700 font-medium mr-4">
              Filter by Month:
            </label>
            <select
              value={selectedMonth}
              onChange={handleMonthChange}
              className="border border-gray-300 rounded-lg px-4 py-2"
            >
              <option value="">All</option>
              <option value="1">January</option>
              <option value="2">February</option>
              <option value="3">March</option>
              <option value="4">April</option>
              <option value="5">May</option>
              <option value="6">June</option>
              <option value="7">July</option>
              <option value="8">August</option>
              <option value="9">September</option>
              <option value="10">October</option>
              <option value="11">November</option>
              <option value="12">December</option>
            </select>
          </div>

          <div className="bg-green-100 text-green-700 px-4 py-2 rounded-full shadow-sm">
            <FaEye className="inline mr-2" /> {uniqueVisitors} Unique Visitors
          </div>
        </div>

        {selectedMonth != "" && (
          <div className="mb-6">
            <h2 className="text-lg font-semibold text-gray-700">
              Page Visits in Selected Month
            </h2>
            {Object.keys(pageVisits).length > 0 ? (
              <ul className="list-disc list-inside mt-2">
                {Object.entries(pageVisits).map(([page, count]) => (
                  <li key={page} className="text-gray-600">
                    <strong>{page}</strong>: {count} unique visitors
                  </li>
                ))}
              </ul>
            ) : (
              <p className="text-gray-500 mt-2">
                No data available for this month.
              </p>
            )}
          </div>
        )}

        <div className="overflow-x-auto">
          <table className="min-w-full bg-white border border-gray-200 rounded-lg shadow-md">
            <thead>
              <tr className="bg-gray-800 text-white uppercase text-sm leading-normal">
                <th className="py-3 px-6 text-left">
                  <FaFileAlt className="inline mr-2" />
                  Page Visited
                </th>
                <th className="py-3 px-6 text-left">
                  <FaAddressCard className="inline mr-2" />
                  IP Address
                </th>
                <th className="py-3 px-6 text-left">
                  <FaAddressBook className="inline mr-2" />
                  Location
                </th>
                <th className="py-3 px-6 text-center">
                  <FaCalendar className="inline mr-2" />
                  Month
                </th>
                <th className="py-3 px-6 text-center">
                  <FaEye className="inline mr-2" />
                  Visits
                </th>
              </tr>
            </thead>
            <tbody className="text-gray-700 text-sm font-light">
              {filteredStats.length > 0 ? (
                filteredStats.map((stat: any, index) => (
                  <tr
                    key={index}
                    className={`border-b border-gray-200 hover:bg-gray-100 ${
                      index % 2 === 0 ? "bg-gray-50" : "bg-white"
                    }`}
                  >
                    <td className="py-3 px-6 text-left">{stat.page_visited}</td>
                    <td className="py-3 px-6 text-left">{stat.ip_address}</td>
                    <td className="py-3 px-6 text-left">
                      {stat.country}, {stat.region}, {stat.city}
                    </td>
                    <td className="py-3 px-6 text-center">
                      {stat.visit_month} - {stat.visit_year}
                    </td>
                    <td className="py-3 px-6 text-center">
                      {stat.visit_count}
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td
                    colSpan={5}
                    className="text-center py-6 text-gray-500 font-medium"
                  >
                    No visitor data available.
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};
