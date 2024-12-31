import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Bell, ChevronDown, Search } from "lucide-react";
import { Link } from "react-router-dom";

export const Navbar = () => {
  return (
    <header className="flex items-center justify-between p-4 border-b border-gray-800">
      <div className="flex items-center space-x-4">
        <h1 className="text-xl font-bold">Mean Dev</h1>
        <div className="relative left-20">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
          <Input
            type="text"
            placeholder="Search anything on daily.dev"
            className="pl-10 pr-4 py-2 bg-gray-800 rounded-md w-64"
          />
        </div>
      </div>
      <div className="flex items-center space-x-4">
        <Link to={"/create"}>
          <Button variant="outline" className="bg-white text-black">
            New post
          </Button>
        </Link>
        <Bell className="text-gray-400" />
        <div className="flex items-center space-x-2">
          <div className="w-8 h-8 bg-purple-500 rounded-full"></div>
          <ChevronDown className="text-gray-400" />
        </div>
      </div>
    </header>
  );
};
