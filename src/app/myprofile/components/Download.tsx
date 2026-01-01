import Link from "next/link";
import { Button } from "@/components/ui/button";

type Product = {
  mp3Url?: string | null;
  mp4Url?: string | null;
  url?: string | null;
};

export default function ProductDownload({ product }: { product: Product }) {
  const fileUrl = product.mp3Url || product.mp4Url || product.url || "#";

  // Extract file extension (e.g. mp3, mp4, pdf)
  const fileExt = fileUrl.split(".").pop()?.toLowerCase();

  // Decide if preview is possible
  const isAudio = fileExt === "mp3";
  const isVideo = fileExt === "mp4";
  const isPdf = fileExt === "pdf";

  return (
    <div className="space-y-3">
      {isAudio && (
        <audio controls className="w-full">
          <source src={fileUrl} type="audio/mpeg" />
          Your browser does not support the audio element.
        </audio>
      )}

      {isVideo && (
        <video controls className="w-full rounded-lg shadow">
          <source src={fileUrl} type="video/mp4" />
          Your browser does not support the video element.
        </video>
      )}

      {isPdf && (
        <iframe
          src={fileUrl}
          className="w-full h-[500px] border rounded-lg"
          title="PDF Preview"
        />
      )}

      {/* Always show download button */}
      <Link href={fileUrl} download>
        <Button size="sm" variant="default" className="bg-fixnix-lightpurple">
          Download
        </Button>
      </Link>
    </div>
  );
}
