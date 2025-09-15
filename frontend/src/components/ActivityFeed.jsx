import { useEffect, useState } from "react";
import io from "socket.io-client";
import ActivityItem from "./ActivityItem";

const socket = io("http://localhost:5000"); // backend server

export default function ActivityFeed() {
  const [activities, setActivities] = useState([]);

  useEffect(() => {
    socket.on("github activity", (data) => {
      setActivities(data);
    });

    return () => {
      socket.off("github activity");
    };
  }, []);

  return (
    <div className="space-y-4">
      {activities.length === 0 ? (
        <p className="text-[#8b949e] text-center">No recent activity</p>
      ) : (
        activities.map((activity, idx) => (
          <ActivityItem key={idx} activity={activity} />
        ))
      )}
    </div>
  );
}
