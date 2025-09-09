export default function Header() {
  return (
    <div className="bg-gray-800 p-4 flex justify-between items-center shadow">
      <div>
        <h1 className="text-2xl font-bold">Yukihiro "Matz" Matsumoto</h1>
        <p className="text-gray-400">matz</p>
      </div>
      <img
        src="https://avatars.githubusercontent.com/u/30733?v=4"
        alt="avatar"
        className="w-16 h-16 rounded-md border border-gray-700"
      />
    </div>
  );
}
