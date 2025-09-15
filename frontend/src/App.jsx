import { useEffect, useState } from "react";
import io from "socket.io-client";
import ActivityItem from "./components/ActivityItem";
import { formatDateLabel } from "./utils/dateUtils";
import Header from "./components/Header";
import Footer from "./components/Footer";

const socket = io("http://localhost:5000");

export default function App() {
  const [activities, setActivities] = useState([]);

  useEffect(() => {
    socket.on("github activity", (data) => {
      setActivities(data);
    });
    return () => socket.off("github activity");
  }, []);

  const groupByDate = (items) => {
    const groups = {};
    items.forEach((item) => {
      const date = new Date(item.created_at).toDateString();
      if (!groups[date]) groups[date] = [];
      groups[date].push(item);
    });
    return groups;
  };

  const groupedActivities = groupByDate(activities);

  return (
    <div className="flex flex-col min-h-screen bg-[#0d1117]">
      {/* Header */}
       
      <Header />
     

      {/* Main content (grows to fill space between header & footer) */}
      <main className="flex-1 max-w-3xl mx-auto px-4 py-6 pb-12 mb-12">
        {Object.keys(groupedActivities).map((date) => (
          <section key={date} className="mb-12">
            <h2 className="text-sm font-semibold text-[#8b949e] mb-3 border-b border-[#30363d] pb-1">
              {formatDateLabel(date)}
            </h2>
            <div className="space-y-3">
              {groupedActivities[date].map((item) => (
                <ActivityItem key={item.id} item={item} />
              ))}
            </div>
          </section>
        ))}
      </main>

      {/* Footer */}
      
      <Footer className= "mt-16"/>
       
    </div>
  );
}
