import Header from "./components/Header"
import ActivityItem from "./components/ActivityItem"
import ActivityFeed from "./components/ActivityFeed"
import Footer from "./components/Footer"


export default function App() {
  
    return (
    <div className="min-h-screen bg-gray-900 text-white">
      <Header />
      <div className="flex-grow">
        <ActivityFeed />
      </div>
      <Footer />
    </div>
    )
  
}