
"use client";

import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import Image from "@/components/Appimage";
import { ChevronLeft, ChevronRight } from "lucide-react";
import aboutData from "@/user_data/about.json";
import AppVideo from "@/components/Appvideo";


interface MediaItem {
  type: string;
  url: string;
  hint: string;
}

const { stories } = aboutData;

function StoryDialogContent({ story }: { story: typeof stories[0] }) {
  const [activeIndex, setActiveIndex] = useState(0);

  const next = (e: React.MouseEvent) => {
    e.stopPropagation();
    setActiveIndex((prev) => (prev + 1) % story.media.length);
  };

  const prev = (e: React.MouseEvent) => {
    e.stopPropagation();
    setActiveIndex((prev) => (prev - 1 + story.media.length) % story.media.length);
  };

  const currentMedia = story.media[activeIndex];

  return (
    <DialogContent className="max-w-2xl p-0 overflow-hidden">
      <div className="relative w-full aspect-video bg-muted group">
        {currentMedia.type === "video" ? (
          <AppVideo
            src={currentMedia.url}
            controls
            className="w-full h-full object-contain"
          />
        ) : (
          <Image
            src={currentMedia.url}
            alt={story.imageAlt}
            data-ai-hint={currentMedia.hint}
            fill
            className="object-contain"
          />
        )}
        
        {story.media.length > 1 && (
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
              {story.media.map((_, i) => (
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
      <div className="p-6">
        <DialogHeader>
          <DialogTitle className="font-headline text-3xl mb-1">{story.title}</DialogTitle>
          <DialogDescription className="text-md text-muted-foreground">{story.description}</DialogDescription>
        </DialogHeader>
        <div className="py-4">
          <p className="text-muted-foreground leading-relaxed">
            {story.popupContent}
          </p>
        </div>
      </div>
    </DialogContent>
  );
}

export default function AboutPage() {
  return (
    <div className="container mx-auto px-4 py-12 md:py-20">
      <header className="text-center mb-12">
        <h1 className="font-headline text-4xl md:text-5xl font-extrabold tracking-tight mb-2">
          My Digital Journal
        </h1>
        <p className="text-lg text-muted-foreground">
          A few chapters from my story so far. Click on any card to read more.
        </p>
      </header>

      <div className="space-y-16">
        {stories.map((story, index) => (
          <Dialog key={index}>
            <DialogTrigger asChild>
              <Card className="overflow-hidden shadow-lg transition-all duration-300 hover:shadow-primary/20 hover:-translate-y-1 cursor-pointer">
                <div className="grid md:grid-cols-2">
                  <div className={cn("relative h-64 md:h-full", story.layout === 'imageRight' ? 'md:order-2' : '')}>
                    <Image
                      src={story.media[0].url}
                      alt={story.imageAlt}
                      data-ai-hint={story.media[0].hint}
                      fill
                      className="object-contain"
                      priority={index === 0}
                    />
                  </div>
                  <div className={cn("p-8 flex flex-col justify-center", story.layout === 'imageRight' ? 'md:order-1' : '')}>
                    <CardHeader>
                      <CardTitle className="font-headline text-3xl">{story.title}</CardTitle>
                      <CardDescription className="text-md">{story.description}</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <p className="text-muted-foreground">
                        {story.content}
                      </p>
                    </CardContent>
                  </div>
                </div>
              </Card>
            </DialogTrigger>
            <StoryDialogContent story={story} />
          </Dialog>
        ))}
      </div>
    </div>
  );
}
