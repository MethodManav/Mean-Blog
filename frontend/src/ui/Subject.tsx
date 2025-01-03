import SubjectCard from "./SubjectCard";

const sampleSubjects = [
  {
    id: 1,
    title: "Mathematics",
    image: "/placeholder.svg?height=300&width=400",
    chapters: [
      {
        id: 1,
        title: "Algebra Fundamentals",
        pdf: "/path/to/pdf",
        notes: "/path/to/notes",
        assessment: "/path/to/assessment",
      },
      {
        id: 2,
        title: "Linear Equations",
        pdf: "/path/to/pdf",
        notes: "/path/to/notes",
      },
      {
        id: 3,
        title: "Quadratic Functions",
        pdf: "/path/to/pdf",
        assessment: "/path/to/assessment",
      },
    ],
  },
  {
    id: 2,
    title: "Physics",
    image: "/placeholder.svg?height=300&width=400",
    chapters: [
      {
        id: 1,
        title: "Mechanics",
        pdf: "/path/to/pdf",
        notes: "/path/to/notes",
      },
      {
        id: 2,
        title: "Thermodynamics",
        pdf: "/path/to/pdf",
        assessment: "/path/to/assessment",
      },
    ],
  },
];

export default function Subject() {

  return (
    <div className="min-h-screen p-8">
      <div className="max-w-5xl mx-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {sampleSubjects.map((subject) => (
            <SubjectCard
              key={subject.id}
              subjectData={subject}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
