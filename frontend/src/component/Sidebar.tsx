import {
  Home,
  MessageSquare,
  MessageCircle,
  Bookmark,
  Globe,
  Hash,
  Compass,
  Link2,
  BookOpen,
} from "lucide-react";

export default function Sidebar() {
  return (
    <nav className="w-64 p-4 bg-gray-800 overflow-y-auto h-screen">
      <div className="space-y-6">
        <div>
          <h2 className="text-gray-400 text-sm font-semibold mb-2">Feeds</h2>
          <ul className="space-y-2">
            <li className="flex items-center space-x-3 text-gray-300 hover:bg-gray-700 p-2 rounded">
              <Home size={20} />
              <span>My feed</span>
            </li>
            <li className="flex items-center space-x-3 text-gray-300 hover:bg-gray-700 p-2 rounded">
              <BookOpen size={20} />
              <span>Subjects</span>
            </li>

            {/* Future Feature To Add */}
            {/* <li className="flex items-center space-x-3 text-gray-300 hover:bg-gray-700 p-2 rounded">
              <PlusSquare size={20} />
              <span>Custom feed</span>
            </li> */}
          </ul>
        </div>
        {/* <div>
          <h2 className="text-gray-400 text-sm font-semibold mb-2">Squads</h2>
          <ul className="space-y-2">
            <li className="flex items-center space-x-3 text-gray-300 hover:bg-gray-700 p-2 rounded">
              <Users size={20} />
              <span>Public Squads</span>
            </li>
            <li className="flex items-center space-x-3 text-gray-300 hover:bg-gray-700 p-2 rounded">
              <PlusSquare size={20} />
              <span>New Squad</span>
            </li>
          </ul>
        </div> */}
        <div>
          <h2 className="text-gray-400 text-sm font-semibold mb-2">Discover</h2>
          <ul className="space-y-2">
            <li className="flex items-center space-x-3 text-gray-300 hover:bg-gray-700 p-2 rounded">
              <Compass size={20} />
              <span>Explore</span>
            </li>
            <li className="flex items-center space-x-3 text-gray-300 hover:bg-gray-700 p-2 rounded">
              <MessageSquare size={20} />
              <span>Discussions</span>
            </li>
            <li className="flex items-center space-x-3 text-gray-300 hover:bg-gray-700 p-2 rounded">
              <Hash size={20} />
              <span>Tags</span>
            </li>
            <li className="flex items-center space-x-3 text-gray-300 hover:bg-gray-700 p-2 rounded">
              <Globe size={20} />
              <span>Sources</span>
            </li>
            {/* <li className="flex items-center space-x-3 text-gray-300 hover:bg-gray-700 p-2 rounded">
              <Award size={20} />
              <span>Leaderboard</span>
            </li> */}
          </ul>
        </div>
        <div>
          <h2 className="text-gray-400 text-sm font-semibold mb-2">Activity</h2>
          <ul className="space-y-2">
            <li className="flex items-center space-x-3 text-gray-300 hover:bg-gray-700 p-2 rounded">
              <Link2 size={20} />
              <span>Submit PDF</span>
            </li>
            <li className="flex items-center space-x-3 text-gray-300 hover:bg-gray-700 p-2 rounded">
              <Bookmark size={20} />
              <span>Bookmarks</span>
            </li>
            {/* <li className="flex items-center space-x-3 text-gray-300 hover:bg-gray-700 p-2 rounded">
              <Clock size={20} />
              <span>History</span>
            </li> */}
          </ul>
        </div>
        <div>
          <ul className="space-y-2">
            {/* <li className="flex items-center space-x-3 text-gray-300 hover:bg-gray-700 p-2 rounded">
              <FileText size={20} />
              <span>Docs</span>
            </li> */}
            {/* <li className="flex items-center space-x-3 text-gray-300 hover:bg-gray-700 p-2 rounded">
                <BarChart2 size={20} />
                <span>Changelog</span>
              </li> */}
            <li className="flex items-center space-x-3 text-gray-300 hover:bg-gray-700 p-2 rounded">
              <MessageCircle size={20} />
              <span>Feedback</span>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
