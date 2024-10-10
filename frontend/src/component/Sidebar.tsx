import { Home, Zap, MessageSquare, BookMarked, Settings } from "lucide-react";
import { Link } from "react-router-dom";

export default function Sidebar({ isDarkTheme }: { isDarkTheme: boolean }) {
  return (
    <div className="hidden md:flex flex-col w-64 bg-white dark:bg-gray-800 p-3">
      <nav className="space-y-2">
        <Link
          to="#"
          className="flex items-center space-x-2 px-4 py-2 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700 rounded-md"
        >
          <Home className="h-5 w-5" />
          <span>Home</span>
        </Link>
        <Link
          to="#"
          className="flex items-center space-x-2 px-4 py-2 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700 rounded-md"
        >
          <Zap className="h-5 w-5" />
          <span>Popular</span>
        </Link>
        <Link
          to="#"
          className="flex items-center space-x-2 px-4 py-2 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700 rounded-md"
        >
          <MessageSquare className="h-5 w-5" />
          <span>Discussions</span>
        </Link>
        <Link
          to="#"
          className="flex items-center space-x-2 px-4 py-2 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700 rounded-md"
        >
          <BookMarked className="h-5 w-5" />
          <span>Bookmarks</span>
        </Link>
      </nav>
      <div className="mt-auto">
        <Link
          to="#"
          className="flex items-center space-x-2 px-4 py-2 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700 rounded-md"
        >
          <Settings className="h-5 w-5" />
          <span>Settings</span>
        </Link>
      </div>
    </div>
  );
}
