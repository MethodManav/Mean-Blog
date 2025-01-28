import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, FileText, PenLine, FileQuestion } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { useState } from "react";
import { subjectDetails } from "@/types/subject";

type Chapter = {
  id: number;
  title: string;
  pdf: string;
  notes?: string;
  assessment?: string;
};

type Course = {
  id: number;
  name: string;
  image: string;
  chapters: Chapter[];
};

interface SubjectCardProps {
  subjectData: subjectDetails;
}

export default function SubjectCard({ subjectData }: SubjectCardProps) {
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleExpanded = () => {
    setIsExpanded((prev) => !prev);
  };

  return (
    <div>
      <Card
        className={`w-full max-w-sm overflow-hidden transition-shadow hover:shadow-lg ${
          isExpanded && "rounded-b-none"
        }`}
      >
        <motion.div
          initial={{ scale: 1 }}
          whileHover={{ scale: 1.02 }}
          transition={{ duration: 0.2 }}
        >
          <div className="relative aspect-[4/3] overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
            <h3 className="absolute bottom-4 left-4 text-2xl font-bold text-white">
              {isExpanded ? "" : subjectData.name}
            </h3>
          </div>

          <CardContent className="p-4">
            <Button
              variant="ghost"
              className="w-full justify-between"
              onClick={toggleExpanded}
            >
              <span>View Chapters</span>
              <motion.div
                animate={{ rotate: isExpanded ? 180 : 0 }}
                transition={{ duration: 0.3 }}
              >
                <ChevronDown className="h-4 w-4" />
              </motion.div>
            </Button>
          </CardContent>
        </motion.div>
      </Card>
      {isExpanded && (
        <Card className="rounded-t-none">
          <CardContent>
            <AnimatePresence>
              <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: "auto", opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                transition={{ duration: 0.3 }}
                className="overflow-hidden"
              >
                <div className="pt-4 space-y-4">
                  {subjectData.Chapters.map((chapter) => (
                    <motion.div
                      key={chapter.id}
                      initial={{ x: -20, opacity: 0 }}
                      animate={{ x: 0, opacity: 1 }}
                      transition={{ duration: 0.3 }}
                      className="p-4 rounded-lg bg-muted"
                    >
                      <h4 className="font-medium mb-3">{chapter.name}</h4>
                      <div className="flex flex-wrap gap-2">
                        {chapter.notes && (
                          <Badge
                            variant="secondary"
                            className="flex items-center gap-1"
                          >
                            <FileText className="h-3 w-3" />
                            PDF
                          </Badge>
                        )}
                        {chapter.notes && (
                          <Badge
                            variant="secondary"
                            className="flex items-center gap-1"
                          >
                            <PenLine className="h-3 w-3" />
                            Notes
                          </Badge>
                        )}
                        {chapter.assessment && (
                          <Badge
                            variant="secondary"
                            className="flex items-center gap-1"
                          >
                            <FileQuestion className="h-3 w-3" />
                            Assessment
                          </Badge>
                        )}
                      </div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            </AnimatePresence>
          </CardContent>
        </Card>
      )}
    </div>
  );
}
