"use client";

import * as React from "react";
import { Check, Cloud, Loader2, UploadCloud } from "lucide-react";
import { useDropzone } from "react-dropzone";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { cn } from "@/lib/utils";

// This would typically come from your API/database
const categories = [
  { value: "documents", label: "Documents" },
  { value: "images", label: "Images" },
  { value: "videos", label: "Videos" },
  { value: "audio", label: "Audio" },
  { value: "other", label: "Other" },
];

const priorities = [
  { value: "low", label: "Low Priority" },
  { value: "medium", label: "Medium Priority" },
  { value: "high", label: "High Priority" },
];

interface FileUploadFormProps {
  onSubmit?: (data: FormData) => Promise<void>;
}

export const FileUpload = ({ onSubmit }: FileUploadFormProps) => {
  const [file, setFile] = React.useState<File | null>(null);
  const [category, setCategory] = React.useState("");
  const [priority, setPriority] = React.useState("");
  const [isUploading, setIsUploading] = React.useState(false);
  const [uploadStatus, setUploadStatus] = React.useState<
    "idle" | "success" | "error"
  >("idle");

  const onDrop = React.useCallback((acceptedFiles: File[]) => {
    setFile(acceptedFiles[0]);
  }, []);

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop,
    maxFiles: 1,
  });

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!file || !category || !priority) return;

    try {
      setIsUploading(true);
      const formData = new FormData();
      formData.append("file", file);
      formData.append("category", category);
      formData.append("priority", priority);

      // Simulate API call
      await new Promise((resolve) => setTimeout(resolve, 2000));
      if (onSubmit) {
        await onSubmit(formData);
      }

      setUploadStatus("success");
    } catch (error) {
      setUploadStatus("error");
    } finally {
      setIsUploading(false);
    }
  }

  const isComplete = file && category && priority;
  const showSuccess = uploadStatus === "success";
  const showError = uploadStatus === "error";

  return (
    <form onSubmit={handleSubmit}>
      <Card className="w-full max-w-md">
        <CardHeader>
          <CardTitle>Upload File</CardTitle>
          <CardDescription>
            Upload your file with category and priority settings.
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div
            {...getRootProps()}
            className={cn(
              "relative flex flex-col items-center justify-center rounded-lg border border-dashed p-6 transition-colors",
              isDragActive
                ? "border-primary/50 bg-primary/5"
                : "border-muted-foreground/25 hover:border-primary/50",
              file && "border-primary/50 bg-primary/5"
            )}
          >
            <input {...getInputProps()} />
            {file ? (
              <>
                <Cloud className="h-8 w-8 text-primary/50" />
                <p className="mt-2 text-sm font-medium">{file.name}</p>
                <p className="text-xs text-muted-foreground">
                  {(file.size / 1024 / 1024).toFixed(2)} MB
                </p>
              </>
            ) : (
              <>
                <UploadCloud className="h-8 w-8 text-muted-foreground/50" />
                <p className="mt-2 text-sm font-medium">
                  Drag & drop your file here or click to browse
                </p>
                <p className="text-xs text-muted-foreground">
                  Support all file types up to 50MB
                </p>
              </>
            )}
          </div>
          <Select value={category} onValueChange={setCategory}>
            <SelectTrigger>
              <SelectValue placeholder="Select category" />
            </SelectTrigger>
            <SelectContent>
              {categories.map((category) => (
                <SelectItem key={category.value} value={category.value}>
                  {category.label}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
          <Select value={priority} onValueChange={setPriority}>
            <SelectTrigger>
              <SelectValue placeholder="Select priority" />
            </SelectTrigger>
            <SelectContent>
              {priorities.map((priority) => (
                <SelectItem key={priority.value} value={priority.value}>
                  {priority.label}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </CardContent>
        <CardFooter className="flex flex-col gap-4">
          <Button
            type="submit"
            className="w-full"
            disabled={!isComplete || isUploading}
          >
            {isUploading ? (
              <>
                <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                Uploading...
              </>
            ) : showSuccess ? (
              <>
                <Check className="mr-2 h-4 w-4" />
                Uploaded Successfully
              </>
            ) : (
              "Upload File"
            )}
          </Button>
          {showError && (
            <p className="text-sm text-destructive">
              Something went wrong. Please try again.
            </p>
          )}
        </CardFooter>
      </Card>
    </form>
  );
};
