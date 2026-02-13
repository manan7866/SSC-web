import { useRef, useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/s-card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Camera, Upload, X } from "lucide-react";
import { useDropzone } from "react-dropzone";
import { useAuth } from "@/context/AuthContext";
import { uploadAvatar, updateAvatarInProfile, removeAvatar } from "@/hooks/avatarServices";
import { toast } from "sonner";
import { LoaderCircle } from "lucide-react";

interface AvatarUploadProps {
  onAvatarChange?: (avatarUrl: string) => void;
}

export default function AvatarUpload({ onAvatarChange }: AvatarUploadProps) {
  const [previewUrl, setPreviewUrl] = useState<string | null>(null);
  const [isUploading, setIsUploading] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);
  const { user, fetchUserProfile } = useAuth();

  const onDrop = async (acceptedFiles: File[]) => {
    if (acceptedFiles.length === 0) return;

    const file = acceptedFiles[0];
    
    // Validate file type
    const validTypes = ['image/jpeg', 'image/png', 'image/webp', 'image/gif'];
    if (!validTypes.includes(file.type)) {
      toast.error('Invalid file type. Only JPEG, PNG, WebP, and GIF images are supported.');
      return;
    }

    // Validate file size (max 5MB)
    const maxSize = 5 * 1024 * 1024; // 5MB in bytes
    if (file.size > maxSize) {
      toast.error('File size exceeds 5MB limit.');
      return;
    }

    // Create preview
    const objectUrl = URL.createObjectURL(file);
    setPreviewUrl(objectUrl);

    try {
      setIsUploading(true);
      
      // Upload the avatar (this should update the profile automatically on the backend)
      const avatarUrl = await uploadAvatar(file);
      
      // Refresh user profile to get updated avatar
      if (fetchUserProfile) {
        await fetchUserProfile();
      }
      
      // Notify parent component of avatar change
      if (onAvatarChange) {
        onAvatarChange(avatarUrl);
      }
      
      toast.success('Avatar updated successfully!');
    } catch (error: any) {
      console.error('Avatar upload error:', error);
      toast.error(error.message || 'Failed to upload avatar');
    } finally {
      setIsUploading(false);
      // Clean up the object URL to free memory
      URL.revokeObjectURL(objectUrl);
    }
  };

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop,
    accept: {
      'image/*': ['.jpeg', '.jpg', '.png', '.webp', '.gif']
    },
    maxFiles: 1,
    maxSize: 5 * 1024 * 1024, // 5MB
  });

  const handleRemoveAvatar = async () => {
    try {
      await removeAvatar();
      
      // Refresh user profile to reflect the change
      if (fetchUserProfile) {
        await fetchUserProfile();
      }
      
      setPreviewUrl(null);
      toast.success('Avatar removed successfully!');
    } catch (error: any) {
      console.error('Remove avatar error:', error);
      toast.error(error.message || 'Failed to remove avatar');
    }
  };

  const handleFileInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length > 0) {
      const file = e.target.files[0];
      // Simulate drop event
      onDrop([file]);
    }
  };

  const currentAvatar = previewUrl || user?.avatar;

  return (
    <Card className="w-full">
      <CardHeader>
        <CardTitle className="text-fixnix-lightpurple">Profile Picture</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="flex flex-col items-center space-y-4">
          <div className="relative group">
            <Avatar className="h-32 w-32">
              <AvatarImage 
                src={currentAvatar || undefined} 
                alt="Profile" 
                onError={(e) => {
                  // Fallback to default avatar if image fails to load
                  (e.target as HTMLImageElement).src = "https://via.placeholder.com/70x70";
                }}
              />
              <AvatarFallback className="text-3xl">
                {user?.fullName?.slice(0, 2) || 'U'}
              </AvatarFallback>
            </Avatar>
            
            {/* Overlay with camera icon on hover */}
            <div 
              {...getRootProps()} 
              className={`absolute inset-0 bg-black bg-opacity-50 rounded-full flex items-center justify-center cursor-pointer transition-opacity ${
                isDragActive ? 'opacity-100' : 'opacity-0 group-hover:opacity-100'
              }`}
            >
              <Camera className="text-white h-8 w-8" />
            </div>
            
            <input {...getInputProps()} />
          </div>
          
          <div className="text-center">
            <p className="text-sm text-muted-foreground">
              {isDragActive 
                ? "Drop the image here" 
                : "Drag & drop an image, or click to browse"}
            </p>
            <p className="text-xs text-muted-foreground mt-1">
              JPEG, PNG, WebP, or GIF (Max 5MB)
            </p>
          </div>
          
          <div className="flex gap-2">
            <Button
              type="button"
              variant="outline"
              onClick={() => fileInputRef.current?.click()}
              disabled={isUploading}
            >
              <Upload className="mr-2 h-4 w-4" />
              Choose File
            </Button>
            
            {(currentAvatar || previewUrl) && (
              <Button
                type="button"
                variant="destructive"
                onClick={handleRemoveAvatar}
                disabled={isUploading}
              >
                <X className="mr-2 h-4 w-4" />
                Remove
              </Button>
            )}
          </div>
          
          <input
            type="file"
            ref={fileInputRef}
            onChange={handleFileInputChange}
            className="hidden"
            accept="image/*"
          />
        </div>
      </CardContent>
      <CardFooter>
        {isUploading && (
          <div className="flex items-center text-sm text-muted-foreground">
            <LoaderCircle className="animate-spin mr-2 h-4 w-4" />
            Uploading...
          </div>
        )}
      </CardFooter>
    </Card>
  );
}