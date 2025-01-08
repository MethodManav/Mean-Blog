import {
  Bookmark,
  BookOpen,
  Compass,
  Globe,
  Hash,
  Heart,
  Home,
  Link2,
  MessageCircle,
  MessageSquare,
} from "lucide-react";
import Subject from "./Subject";
import { useState } from "react";

export default function Sidebar() {
  const [activeTab, setActiveTab] = useState("subjects");

  return (
    <div className="flex h-screen w-screen">
      {/* Sidebar */}
      <nav className="w-64 p-4 bg-gray-800 overflow-y-auto">
        <div className="space-y-6">
          <div>
            <h2 className="text-gray-400 text-sm font-semibold mb-2">Feeds</h2>
            <ul className="space-y-2">
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
      <main className="flex-1 flex flex-col bg-gray-900 overflow-y-auto">
        {activeTab === "my-feed" && (
          <div className="p-6">Welcome to My Feed</div>
        )}
        {activeTab === "subjects" && <Subject />}
        {activeTab === "likes" && <div className="p-6">Likes</div>}
        {activeTab === "explore" && <div className="p-6">Explore Content</div>}
        {/* Add content for other tabs here */}
      </main>
    </div>
  );
}
