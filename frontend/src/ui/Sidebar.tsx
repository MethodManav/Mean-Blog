import { useState } from "react";
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
  Heart,
} from "lucide-react";

export default function Sidebar() {
  const [activeTab, setActiveTab] = useState("my-feed");

  return (
    <div className="flex h-screen">
      {/* Sidebar */}
      <nav className="w-64 p-4 bg-gray-800 overflow-y-auto">
        <div className="space-y-6">
          <div>
            <h2 className="text-gray-400 text-sm font-semibold mb-2">Feeds</h2>
            <ul className="space-y-2">
              <li
                className={`flex items-center space-x-3 text-gray-300 hover:bg-gray-700 p-2 rounded ${
                  activeTab === "my-feed" && "bg-gray-700"
                }`}
                onClick={() => setActiveTab("my-feed")}
              >
                <Home size={20} />
                <span>My feed</span>
              </li>
              <li
                className={`flex items-center space-x-3 text-gray-300 hover:bg-gray-700 p-2 rounded ${
                  activeTab === "subjects" && "bg-gray-700"
                }`}
                onClick={() => setActiveTab("subjects")}
              >
                <BookOpen size={20} />
                <span>Subjects</span>
              </li>
            </ul>
          </div>
          <div>
            <h2 className="text-gray-400 text-sm font-semibold mb-2">
              Discover
            </h2>
            <ul className="space-y-2">
              <li
                className={`flex items-center space-x-3 text-gray-300 hover:bg-gray-700 p-2 rounded ${
                  activeTab === "explore" && "bg-gray-700"
                }`}
                onClick={() => setActiveTab("explore")}
              >
                <Compass size={20} />
                <span>Explore</span>
              </li>
              <li
                className={`flex items-center space-x-3 text-gray-300 hover:bg-gray-700 p-2 rounded ${
                  activeTab === "discussions" && "bg-gray-700"
                }`}
                onClick={() => setActiveTab("discussions")}
              >
                <MessageSquare size={20} />
                <span>Discussions</span>
              </li>
              <li
                className={`flex items-center space-x-3 text-gray-300 hover:bg-gray-700 p-2 rounded ${
                  activeTab === "tags" && "bg-gray-700"
                }`}
                onClick={() => setActiveTab("tags")}
              >
                <Hash size={20} />
                <span>Tags</span>
              </li>
              <li
                className={`flex items-center space-x-3 text-gray-300 hover:bg-gray-700 p-2 rounded ${
                  activeTab === "sources" && "bg-gray-700"
                }`}
                onClick={() => setActiveTab("sources")}
              >
                <Globe size={20} />
                <span>Sources</span>
              </li>
            </ul>
          </div>
          <div>
            <h2 className="text-gray-400 text-sm font-semibold mb-2">
              Activity
            </h2>
            <ul className="space-y-2">
              <li
                className={`flex items-center space-x-3 text-gray-300 hover:bg-gray-700 p-2 rounded ${
                  activeTab === "submit-pdf" && "bg-gray-700"
                }`}
                onClick={() => setActiveTab("submit-pdf")}
              >
                <Link2 size={20} />
                <span>Submit PDF</span>
              </li>
              <li
                className={`flex items-center space-x-3 text-gray-300 hover:bg-gray-700 p-2 rounded ${
                  activeTab === "bookmarks" && "bg-gray-700"
                }`}
                onClick={() => setActiveTab("bookmarks")}
              >
                <Bookmark size={20} />
                <span>Bookmarks</span>
              </li>
              <li
                className={`flex items-center space-x-3 text-gray-300 hover:bg-gray-700 p-2 rounded ${
                  activeTab === "likes" && "bg-gray-700"
                }`}
                onClick={() => setActiveTab("likes")}
              >
                <Heart size={20} />
                <span>Likes</span>
              </li>
            </ul>
          </div>
          <div>
            <ul className="space-y-2">
              <li
                className={`flex items-center space-x-3 text-gray-300 hover:bg-gray-700 p-2 rounded ${
                  activeTab === "feedback" && "bg-gray-700"
                }`}
                onClick={() => setActiveTab("feedback")}
              >
                <MessageCircle size={20} />
                <span>Feedback</span>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      {/* Content Area */}
      <main className="flex-1 p-4 bg-gray-900 text-white">
        {activeTab === "my-feed" && <div>Welcome to My Feed</div>}
        {activeTab === "subjects" && <div>Welcome to My Subject</div>}
        {activeTab === "likes" && <div>Likes</div>}
        {activeTab === "explore" && <div>Explore Content</div>}
        {/* Add content for other tabs here */}
      </main>
    </div>
  );
}
