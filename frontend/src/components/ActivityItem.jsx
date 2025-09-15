import { FaCodeBranch, FaStar, FaBookOpen } from "react-icons/fa"

export default function ActivityItem({ item }) {
  const { type, repo, created_at, payload } = item

  const renderDetails = () => {
    switch (type) {
      case "PushEvent":
        return (
          <>
            <span className="text-gray-400">Pushed to </span>
            <a
              href={`https://github.com/${repo.name}`}
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:underline"
            >
              {repo.name}
            </a>
            {payload?.commits?.length > 0 && (
              <div className="text-sm text-gray-400 mt-1">
                Commit:{" "}
                <a
                  href={`https://github.com/${repo.name}/commit/${payload.commits[0].sha}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:underline text-white"
                >
                  {payload.commits[0].message}
                </a>
              </div>
            )}
          </>
        )
      case "WatchEvent":
        return (
          <>
            <span className="text-gray-400">Starred </span>
            <a
              href={`https://github.com/${repo.name}`}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-400 hover:underline"
            >
              {repo.name}
            </a>
          </>
        )
      case "ForkEvent":
        return (
          <>
            <span className="text-gray-400">Forked </span>
            <a
              href={`https://github.com/${repo.name}`}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-400 hover:underline"
            >
              {repo.name}
            </a>
          </>
        )
      default:
        return (
          <span className="text-gray-400">
            {type} on{" "}
            <a
              href={`https://github.com/${repo.name}`}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-400 hover:underline"
            >
              {repo.name}
            </a>
          </span>
        )
    }
  }

  const getIcon = () => {
    switch (type) {
      case "PushEvent":
        return <FaCodeBranch className="text-green-400 text-lg" />
      case "WatchEvent":
        return <FaStar className="text-yellow-400 text-lg" />
      case "ForkEvent":
        return <FaBookOpen className="text-purple-400 text-lg" />
      default:
        return <FaCodeBranch className="text-gray-400 text-lg" />
    }
  }

  return (
    <div className="bg-[#161b22] border border-[#30363d] rounded-lg p-4 flex items-start gap-3">
      <div>{getIcon()}</div>
      <div>
        <div className="text-sm">{renderDetails()}</div>
        <p className="text-xs text-[#8b949e] mt-1">
          {new Date(created_at).toLocaleTimeString()}
        </p>
      </div>
    </div>
  )
}
