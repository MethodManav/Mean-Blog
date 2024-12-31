"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import {
  ChevronDown,
  FileText,
  NotebookText,
  ClipboardCheck,
} from "lucide-react";

import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Subject } from "@/types/subject";

export function SubjectCard({ subject }: { subject: Subject }) {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <motion.div
      layout
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
    >
      <Card className="overflow-hidden bg-white">
        <CardContent className="p-0">
          <motion.div
            layout
            className="relative cursor-pointer"
            onClick={() => setIsExpanded(!isExpanded)}
          >
            <div className="relative h-48 w-full overflow-hidden">
              <Image
                src={subject.image}
                alt={subject.title}
                fill
                className="object-cover transition-transform duration-300 hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
            </div>

            <div className="absolute bottom-0 left-0 right-0 p-4 text-white">
              <div className="flex items-center justify-between">
                <h3 className="text-xl font-semibold">{subject.title}</h3>
                <motion.div
                  animate={{ rotate: isExpanded ? 180 : 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <ChevronDown className="w-5 h-5" />
                </motion.div>
              </div>
              <Badge variant="secondary" className="mt-2">
                {subject.chapters.length} Chapters
              </Badge>
            </div>
          </motion.div>

          <AnimatePresence>
            {isExpanded && (
              <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: "auto", opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                transition={{ duration: 0.3 }}
                className="border-t"
              >
                {subject.chapters.map((chapter, index) => (
                  <motion.div
                    key={chapter.id}
                    initial={{ x: -20, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ duration: 0.3, delay: index * 0.1 }}
                    className="p-4 border-b last:border-b-0 hover:bg-gray-50"
                  >
                    <h4 className="font-medium mb-3">{chapter.title}</h4>
                    <div className="flex flex-wrap gap-2">
                      {chapter.pdf && (
                        <Button
                          variant="outline"
                          size="sm"
                          className="group hover:border-primary"
                          asChild
                        >
                          <a
                            href={chapter.pdf}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-2"
                          >
                            <FileText className="w-4 h-4 transition-colors group-hover:text-primary" />
                            PDF
                          </a>
                        </Button>
                      )}
                      {chapter.notes && (
                        <Button
                          variant="outline"
                          size="sm"
                          className="group hover:border-primary"
                          asChild
                        >
                          <a
                            href={chapter.notes}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-2"
                          >
                            <NotebookText className="w-4 h-4 transition-colors group-hover:text-primary" />
                            Notes
                          </a>
                        </Button>
                      )}
                      {chapter.assessment && (
                        <Button
                          variant="outline"
                          size="sm"
                          className="group hover:border-primary"
                          asChild
                        >
                          <a
                            href={chapter.assessment}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-2"
                          >
                            <ClipboardCheck className="w-4 h-4 transition-colors group-hover:text-primary" />
                            Assessment
                          </a>
                        </Button>
                      )}
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            )}
          </AnimatePresence>
        </CardContent>
      </Card>
    </motion.div>
  );
}
