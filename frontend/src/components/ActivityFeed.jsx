import React, { useEffect, useState } from "react";
import { io } from "socket.io-client";

const socket = io("http://localhost:5000"); // backend URL

const GithubFeed = () => {
  const [events, setEvents] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    socket.on("github activity", (data) => {
      setLoading(false);
      setEvents(data);
    });

    return () => {
      socket.off("github activity");
    };
  }, []);

  return (
    <div className="p-6">
      <h1 className="text-center text-2xl font-bold mb-5">
        GitHub Activity Feed
      </h1>

      {loading ? (
        <p className="text-center text-gray-600">Loading...</p>
      ) : (
        <ul className="space-y-3">
          {events.map((event, index) => (
            <li
              key={index}
              className="bg-white p-4 border border-gray-300 rounded shadow-sm"
            >
              <p className="font-semibold">{event.type}</p>
              <p className="text-gray-700">
                Repo: <span className="font-mono">{event.repo.name}</span>
              </p>
              <p className="text-sm text-gray-500">
                Created: {new Date(event.created_at).toLocaleString()}
              </p>
              <p className="text-sm">
                Commit Message:{" "}
                {event.payload.commits && event.payload.commits.length > 0
                  ? event.payload.commits[0].message
                  : "No commit message"}
              </p>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default GithubFeed;
