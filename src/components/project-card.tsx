
"use client";

import { useState } from "react";
import Image from "@/components/Appimage";
import Link from "next/link";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ArrowRight, ExternalLink, ChevronLeft, ChevronRight } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { cn } from "@/lib/utils";
import AppVideo from "@/components/Appvideo";

interface MediaItem {
  type: string;
  url: string;
  hint: string;
}

type ProjectCardProps = {
  title: string;
  description: string;
  media: MediaItem[];
  tags: string[];
  projectUrl: string;
  details: string;
};

export default function ProjectCard({ title, description, media, tags, projectUrl, details }: ProjectCardProps) {
  const [activeIndex, setActiveIndex] = useState(0);

  const next = (e: React.MouseEvent) => {
    e.stopPropagation();
    setActiveIndex((prev) => (prev + 1) % media.length);
  };

  const prev = (e: React.MouseEvent) => {
    e.stopPropagation();
    setActiveIndex((prev) => (prev - 1 + media.length) % media.length);
  };

  const currentMedia = media[activeIndex];
  const previewImage = media[0]; // First media is always used for card

  return (
    <Dialog onOpenChange={(open) => !open && setActiveIndex(0)}>
      <Card className="flex flex-col overflow-hidden transition-all duration-300 hover:shadow-lg hover:shadow-primary/20 hover:-translate-y-1">
        <div className="relative h-48 w-full">
          <Image
            src={previewImage.url}
            alt={title}
            data-ai-hint={previewImage.hint}
            fill
            className="object-contain"
          />
        </div>
        <CardHeader>
          <CardTitle className="font-headline text-xl">{title}</CardTitle>
          <CardDescription>{description}</CardDescription>
        </CardHeader>
        <CardContent className="flex-grow">
          <div className="flex flex-wrap gap-2">
            {tags.map((tag) => (
              <Badge key={tag} variant="secondary">{tag}</Badge>
            ))}
          </div>
        </CardContent>
        <CardFooter>
          <DialogTrigger asChild>
            <Button className="w-full" variant="outline">
              View Details <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </DialogTrigger>
        </CardFooter>
      </Card>

      <DialogContent className="max-w-3xl p-0 overflow-hidden">
        <DialogHeader className="p-6 pb-4">
          <DialogTitle className="font-headline text-3xl mb-2">{title}</DialogTitle>
           <div className="flex flex-wrap gap-2">
              {tags.map((tag) => (
                <Badge key={tag} variant="secondary">{tag}</Badge>
              ))}
            </div>
        </DialogHeader>
        <div>
            <div className="relative w-full aspect-[3/2] bg-muted group">
                {currentMedia.type === "video" ? (
                  <AppVideo
                    src={currentMedia.url}
                    controls
                    className="w-full h-full object-contain"
                  />
                ) : (
                  <Image
                    src={currentMedia.url}
                    alt={title}
                    data-ai-hint={currentMedia.hint}
                    fill
                    className="object-contain"
                  />
                )}

                {media.length > 1 && (
                  <>
                    <Button
                      variant="ghost"
                      size="icon"
                      className="absolute left-2 top-1/2 -translate-y-1/2 rounded-full bg-background/20 backdrop-blur-sm opacity-0 group-hover:opacity-100 transition-opacity"
                      onClick={prev}
                    >
                      <ChevronLeft className="h-6 w-6" />
                    </Button>
                    <Button
                      variant="ghost"
                      size="icon"
                      className="absolute right-2 top-1/2 -translate-y-1/2 rounded-full bg-background/20 backdrop-blur-sm opacity-0 group-hover:opacity-100 transition-opacity"
                      onClick={next}
                    >
                      <ChevronRight className="h-6 w-6" />
                    </Button>
                    <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-1.5">
                      {media.map((_, i) => (
                        <div
                          key={i}
                          className={cn(
                            "h-1.5 w-1.5 rounded-full transition-all",
                            i === activeIndex ? "bg-primary w-3" : "bg-primary/30"
                          )}
                        />
                      ))}
                    </div>
                  </>
                )}
            </div>
            <div className="p-6 space-y-4">
                <p className="text-muted-foreground">{details}</p>
                {projectUrl && (
                    <Button asChild>
                      <Link href={projectUrl} target="_blank" rel="noopener noreferrer">
                        View Live Project <ExternalLink className="ml-2 h-4 w-4" />
                      </Link>
                    </Button>
                  )}
            </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}
