import { SubjectCard } from "./subject-card";

export default function Subject() {
  const subjects = [
    {
      id: "1",
      title: "Mathematics",
      image: "/placeholder.svg?height=400&width=600",
      chapters: [
        {
          id: "math-1",
          title: "Chapter 1: Introduction to Calculus",
          pdf: "#",
          notes: "#",
          assessment: "#",
        },
        {
          id: "math-2",
          title: "Chapter 2: Differentiation",
          pdf: "#",
          notes: "#",
          assessment: "#",
        },
        {
          id: "math-3",
          title: "Chapter 3: Integration",
          pdf: "#",
          notes: "#",
          assessment: "#",
        },
      ],
    },
    {
      id: "2",
      title: "Physics",
      image: "/placeholder.svg?height=400&width=600",
      chapters: [
        {
          id: "phys-1",
          title: "Chapter 1: Classical Mechanics",
          pdf: "#",
          notes: "#",
          assessment: "#",
        },
        {
          id: "phys-2",
          title: "Chapter 2: Thermodynamics",
          pdf: "#",
          notes: "#",
          assessment: "#",
        },
        {
          id: "phys-3",
          title: "Chapter 3: Electromagnetism",
          pdf: "#",
          notes: "#",
        },
      ],
    },
    {
      id: "3",
      title: "Chemistry",
      image: "/placeholder.svg?height=400&width=600",
      chapters: [
        {
          id: "chem-1",
          title: "Chapter 1: Atomic Structure",
          pdf: "#",
          notes: "#",
          assessment: "#",
        },
        {
          id: "chem-2",
          title: "Chapter 2: Chemical Bonding",
          pdf: "#",
          notes: "#",
        },
        {
          id: "chem-3",
          title: "Chapter 3: Organic Chemistry",
          pdf: "#",
          assessment: "#",
        },
      ],
    },
  ];
  return (
    <main className="container mx-auto px-4 py-8">
      <div className="space-y-6">
        <div className="space-y-2">
          <h1 className="text-3xl font-bold tracking-tight">Your Subjects</h1>
          <p className="text-muted-foreground">
            Click on a subject to view its chapters and resources
          </p>
        </div>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {subjects.map((subject) => (
            <SubjectCard key={subject.id} subject={subject} />
          ))}
        </div>
      </div>
    </main>
  );
}
