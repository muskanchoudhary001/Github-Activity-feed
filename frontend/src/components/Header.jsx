import { FaGithub } from "react-icons/fa";
import { useEffect, useState } from "react";

export default function Header() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    fetch("http://localhost:5000/user")
      .then((res) => res.json())
      .then((data) => setUser(data))
      .catch((err) => console.error("Error fetching user:", err));
  }, []);

  return (
    <header className="bg-[#161b22] border-b border-[#30363d] text-[#c9d1d9] w-full">
      <div className="max-w-6xl mx-auto flex items-center px-6 py-6 gap-8">
        
        {/* Left: GitHub + name/login */}
        <div className="flex items-center gap-4 flex-1">
          <FaGithub className="text-white" size={48} />
          
          <div className="flex flex-col justify-center">
            <h1 className="text-3xl font-bold text-white">
              {user?.name || "Loading..."}
            </h1>
            <p className="text-lg text-[#8b949e]">
              {user?.login || ""}
            </p>
          </div>
        </div>

        {/* Right: Avatar */}
        <div className="w-20 h-20">
          {user?.avatar_url ? (
            <img
              src={user.avatar_url}
              alt="profile"
              className="w-full h-full rounded-md border border-[#30363d] object-cover"
              onError={(e) => (e.target.src = "/user-profile-illustration.png")}
            />
          ) : (
            <div className="w-full h-full bg-[#21262d] rounded-md border border-[#30363d]" />
          )}
        </div>
      </div>
    </header>
  );
}
