export interface Chapter {
  id: number;
  name: string;
  title: string;
  pdf?: string;
  notes?: string;
  assessment?: string;
}

export interface Subject {
  id: string;
  title: string;
  image: string;
  chapters: Chapter[];
}

export interface subjectDetails {
  id: number;
  name: string;
  description: string;
  Chapters: Chapter[];
}
