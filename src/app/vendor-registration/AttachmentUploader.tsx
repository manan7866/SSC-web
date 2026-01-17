"use client";

import { useState } from "react";
import { Controller, useFormContext } from "react-hook-form";
import {
  Dropzone,
  DropzoneContent,
  DropzoneEmptyState,
} from "@/components/ui/shadcn-io/dropzone";
import { Label } from "@/components/ui/label";
import { Progress } from "@/components/ui/progress";

interface AttachmentUploaderProps {
  name: string; // field name for React Hook Form
  label?: string; // label text
  placeholder?: string; // placeholder text
  accept?: Record<string, string[]>; // e.g. { "application/pdf": [] }
  maxFiles?: number;
  maxSize?: number;
  minSize?: number;
  description?: string; // 👈 custom description
}

const AttachmentUploader: React.FC<AttachmentUploaderProps> = ({
  name,
  label = "Upload Attachment",
  placeholder = "Drag & drop files here or click to browse",
  accept = { "image/*": [] }, // ✅ default images
  maxFiles = 5,
  maxSize = 1024 * 1024 * 5, // 5MB
  minSize = 1024, // 1KB
  description,
}) => {
  const [progress, setProgress] = useState<number>(0);
  const { control } = useFormContext();

  // fake upload progress for demo purposes
  const simulateUpload = (files: File[]) => {
    setProgress(0);
    let uploaded = 0;
    const interval = setInterval(() => {
      uploaded += 10;
      setProgress(uploaded);
      if (uploaded >= 100) {
        clearInterval(interval);
      }
    }, 200);
  };

  return (
    <Controller
      name={name}
      control={control}
      rules={{
        required: `${label} is required`,
      }}
      render={({ field: { onChange, value }, fieldState: { error } }) => (
        <div className="space-y-2">
          {label && <Label htmlFor={name}>{label}</Label>}

          {/* 📌 Description (dynamic or custom) */}
          <p className="text-sm text-gray-500">
            {description
              ? description
              : accept["image/*"]
              ? "Please upload a clear photo (JPEG, PNG). e.g: NIC, Driving Licence, Passport"
              : "Please upload the required document"}
          </p>

          <Dropzone
            accept={accept}
            maxFiles={maxFiles}
            maxSize={maxSize}
            minSize={minSize}
            onDrop={(files) => {
              onChange(files); // update RHF
              simulateUpload(files); // fake progress
            }}
            onError={console.error}
            src={value}
          >
            {!value || value.length === 0 ? (
              <DropzoneEmptyState>{placeholder}</DropzoneEmptyState>
            ) : (
              <DropzoneContent />
            )}
          </Dropzone>

          {progress > 0 && progress < 100 && (
            <Progress value={progress} className="w-full" />
          )}

          {error && <p className="text-red-500 text-sm">{error.message}</p>}
        </div>
      )}
    />
  );
};

export default AttachmentUploader;
