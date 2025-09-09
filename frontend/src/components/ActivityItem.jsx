export default function ActivityItem({ event }) {
  return (
    <li className="bg-gray-800 p-4 border border-gray-700 rounded shadow-sm">
      <p className="text-gray-200 font-medium">
        {event.type} at <span className="text-blue-400">{event.repo.name}</span>
      </p>
      <p className="text-gray-400 text-sm">
        Created at: {new Date(event.created_at).toLocaleString()}
      </p>
      <p className="text-gray-300 text-sm">
        Commit Message:{" "}
        {event.payload.commits && event.payload.commits.length > 0
          ? event.payload.commits[0].message
          : "No commit message"}
      </p>
    </li>
  );
}
