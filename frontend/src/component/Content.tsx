"use client";

import { Button } from "@/components/ui/button";
import { Bookmark } from "lucide-react";
import { useState, useEffect } from "react";

export default function Content() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate loading delay
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <main className="flex-1 p-6 overflow-y-auto">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {/* Article Card (repeated for demonstration) */}
        {[1, 2, 3, 4, 5, 6].map((i) => (
          <div key={i} className="bg-gray-800 rounded-lg overflow-hidden">
            <div className="p-4">
              <h3 className="text-lg font-semibold mb-2">Article Title {i}</h3>
              <p className="text-sm text-gray-400 mb-4">Today • 2m read time</p>
              <div className="aspect-w-16 aspect-h-9 mb-4">
                <img
                  src={`/placeholder.svg?height=200&width=400&text=Article+Image+${i}`}
                  alt={`Article ${i}`}
                  className="object-cover rounded"
                />
              </div>
              <div className="flex justify-between items-center text-gray-400">
                <div className="flex space-x-2">
                  <Button variant="ghost" size="sm">
                    👍 {Math.floor(Math.random() * 100)}
                  </Button>
                  <Button variant="ghost" size="sm">
                    💬 {Math.floor(Math.random() * 20)}
                  </Button>
                </div>
                <Button variant="ghost" size="sm">
                  <Bookmark size={16} />
                </Button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </main>
  );
}
