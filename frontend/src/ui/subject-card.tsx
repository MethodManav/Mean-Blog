"use client";

import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, FileText, PenLine, FileQuestion } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

interface Chapter {
  id: number;
  title: string;
  pdf?: string;
  notes?: string;
  assessment?: string;
}

interface SubjectCardProps {
  id: number;
  title: string;
  image: string;
  chapters: Chapter[];
  isExpanded: boolean;
  toggleExpanded: () => void;
}

export default function SubjectCard({
  title,
  image,
  chapters,
  isExpanded,
  toggleExpanded,
}: SubjectCardProps) {
  return (
    <Card className="w-full max-w-sm overflow-hidden transition-shadow hover:shadow-lg">
      <motion.div
        initial={{ scale: 1 }}
        whileHover={{ scale: 1.02 }}
        transition={{ duration: 0.2 }}
      >
        <div className="relative aspect-[4/3] overflow-hidden">
          <img
            src={image}
            alt={title}
            className="object-cover w-full h-full transition-transform duration-500 hover:scale-110"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
          <h3 className="absolute bottom-4 left-4 text-2xl font-bold text-white">
            {title}
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

          <AnimatePresence>
            {isExpanded && (
              <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: "auto", opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                transition={{ duration: 0.3 }}
                className="overflow-hidden"
              >
                <div className="pt-4 space-y-4">
                  {chapters.map((chapter) => (
                    <motion.div
                      key={chapter.id}
                      initial={{ x: -20, opacity: 0 }}
                      animate={{ x: 0, opacity: 1 }}
                      transition={{ duration: 0.3 }}
                      className="p-4 rounded-lg bg-muted"
                    >
                      <h4 className="font-medium mb-3">{chapter.title}</h4>
                      <div className="flex flex-wrap gap-2">
                        {chapter.pdf && (
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
            )}
          </AnimatePresence>
        </CardContent>
      </motion.div>
    </Card>
  );
}
