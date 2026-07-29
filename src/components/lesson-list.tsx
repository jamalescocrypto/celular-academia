"use client";

import { useState } from "react";
import type { Lesson } from "@/lib/lessons";
import { VideoPlayer } from "@/components/video-player";
import Image from "next/image";
import { PlayCircle } from "lucide-react";

interface LessonListProps {
  lessons: Lesson[];
}

export function LessonList({ lessons }: LessonListProps) {
  const [playingLesson, setPlayingLesson] = useState<string | null>(null);

  return (
    <div className="space-y-8">
      {lessons.map((lesson) => (
        <div
          key={lesson.id}
          className="rounded-lg border bg-card text-card-foreground shadow-sm"
        >
          <div className="p-6">
            <h3 className="flex items-center gap-4 text-lg font-bold md:text-xl">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-primary text-primary-foreground">
                {lesson.id}
              </div>
              <span>
                Aula {parseInt(lesson.id, 10)}: {lesson.title}
              </span>
            </h3>
          </div>
          <div className="px-6 pb-6">
            {playingLesson === lesson.id ? (
              <VideoPlayer
                src={lesson.videoUrl}
                title={`Aula ${parseInt(lesson.id, 10)}: ${lesson.title}`}
              />
            ) : (
              <div
                className="relative aspect-video w-full cursor-pointer overflow-hidden rounded-lg border"
                onClick={() => setPlayingLesson(lesson.id)}
              >
                <Image
                  src={lesson.imageUrl}
                  alt={lesson.title}
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 flex items-center justify-center bg-black/50 transition-colors hover:bg-black/30">
                  <PlayCircle className="h-16 w-16 text-white" />
                </div>
              </div>
            )}
          </div>
        </div>
      ))}
    </div>
  );
}
