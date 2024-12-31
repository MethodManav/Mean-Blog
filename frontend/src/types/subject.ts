export interface Chapter {
  id: string;
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
