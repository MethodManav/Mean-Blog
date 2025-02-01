import { useEffect, useState } from "react";
import SubjectCard from "./SubjectCard";
import axios from "axios";
import { subjectDetails } from "@/types/subject";

export default function Subject() {
  const [subjectData, setSubjectData] = useState<subjectDetails[]>([]);
  const [isLoading, setIsLoading] = useState(true); // Track loading state
  const serverUrl = import.meta.env.VITE_SERVER;

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`${serverUrl}api/v1/subject/getAll`);
        setSubjectData(response.data.data); // Update state with the fetched data
      } catch (error) {
        console.error("Error fetching data:", error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
  }, []);
  if (isLoading) {
    return <p>Loading subjects...</p>;
  }
  return (
    <div className="h-screen p-8">
      <div className="max-w-5xl mx-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {subjectData.length > 0 ? (
            subjectData.map((subject) => <SubjectCard subjectData={subject} />)
          ) : (
            <p>No subjects available.</p>
          )}
        </div>
      </div>
    </div>
  );
}
