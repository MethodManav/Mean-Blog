"use client";

import { useState, useEffect } from "react";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Skeleton } from "@/components/ui/skeleton";
import { ThumbsUp, MessageSquare, Bookmark } from "lucide-react";

function ArticleCard({ isLoading }: { isLoading: boolean }) {
  if (isLoading) {
    return (
      <Card className="mb-4 bg-white dark:bg-gray-800">
        <CardHeader>
          <Skeleton className="h-4 w-3/4 bg-gray-200 dark:bg-gray-700" />
        </CardHeader>
        <CardContent>
          <Skeleton className="h-4 w-full mb-2 bg-gray-200 dark:bg-gray-700" />
          <Skeleton className="h-4 w-full mb-2 bg-gray-200 dark:bg-gray-700" />
          <Skeleton className="h-4 w-2/3 bg-gray-200 dark:bg-gray-700" />
        </CardContent>
        <CardFooter>
          <Skeleton className="h-8 w-8 rounded-full bg-gray-200 dark:bg-gray-700" />
          <Skeleton className="h-4 w-24 ml-2 bg-gray-200 dark:bg-gray-700" />
        </CardFooter>
      </Card>
    );
  }

  return (
    <Card className="mb-4 bg-white dark:bg-gray-800">
      <CardHeader>
        <CardTitle className="text-lg font-semibold text-gray-900 dark:text-white">
          Article Title
        </CardTitle>
      </CardHeader>
      <CardContent>
        <p className="text-gray-600 dark:text-gray-300">
          This is a brief description of the article. It provides a summary of
          the content and entices the reader to click and read more.
        </p>
      </CardContent>
      <CardFooter className="flex justify-between items-center">
        <div className="flex items-center space-x-4">
          <button className="flex items-center text-gray-500 dark:text-gray-400 hover:text-blue-500 dark:hover:text-blue-400">
            <ThumbsUp className="h-5 w-5 mr-1" />
            <span>123</span>
          </button>
          <button className="flex items-center text-gray-500 dark:text-gray-400 hover:text-blue-500 dark:hover:text-blue-400">
            <MessageSquare className="h-5 w-5 mr-1" />
            <span>45</span>
          </button>
        </div>
        <button className="text-gray-500 dark:text-gray-400 hover:text-yellow-500 dark:hover:text-yellow-400">
          <Bookmark className="h-5 w-5" />
        </button>
      </CardFooter>
    </Card>
  );
}

export default function Content({ isDarkTheme }: { isDarkTheme: boolean }) {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate loading delay
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="flex-1 p-6 overflow-auto bg-gray-100 dark:bg-gray-900">
      <h1 className="text-2xl font-bold mb-6 text-gray-900 dark:text-white">
        My Feed
      </h1>
      {[...Array(5)].map((_, index) => (
        <ArticleCard key={index} isLoading={isLoading} />
      ))}
    </div>
  );
}
