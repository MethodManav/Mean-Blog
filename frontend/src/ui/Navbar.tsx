export const Navbar = () => {
  return (
    <header className="flex items-center justify-between p-4 border-b border-gray-800 sm:flex-row flex-col space-y-4 sm:space-y-0">
      <div className="flex items-center space-x-4">
        <h1 className="text-xl font-bold">Mean Dev</h1>
        <div className="relative left-20 sm:left-0">
          {/* <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
          <Input
            type="text"
            placeholder="Search anything on daily.dev"
            className="pl-10 pr-4 py-2 bg-gray-800 rounded-md w-64 sm:w-80"
          /> */}
        </div>
      </div>
      {/* <div className="flex items-center space-x-4">
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
      </div> */}
    </header>
  );
};
