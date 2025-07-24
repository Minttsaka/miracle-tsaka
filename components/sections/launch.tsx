"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Play, X } from "lucide-react"
import Link from "next/link"

export default function VideoLaunchModal() {
  const [isOpen, setIsOpen] = useState(false)
  const [isPlaying, setIsPlaying] = useState(false)

  const handleVideoPlay = () => {
    setIsPlaying(true)
  }

  const handleVideoEnd = () => {
    setIsPlaying(false)
  }

  return (
    <div >
      <Dialog open={isOpen} onOpenChange={setIsOpen}>
          <DialogTrigger className="mt-5" asChild>
            <Button
              size="lg"
              className=" hover:bg-green-700 text-white px-8 py-4 text-xs font-semibold rounded-full shadow-lg hover:shadow-xl transition-all duration-300"
            >
              <Play className="mr-2 h-5 w-5" />
              Watch Launch Video
            </Button>
          </DialogTrigger>

          <DialogContent className="max-w-7xl w-full p-0 bg-black border-gray-800">
            <DialogHeader className="sr-only">
              <DialogTitle>XtrremeRegion Launch Video</DialogTitle>
              <DialogDescription>Watch the official launch video for XtrremeRegion</DialogDescription>
            </DialogHeader>

            <div className="relative">
              <button
                onClick={() => setIsOpen(false)}
                className="absolute top-4 right-4 z-10 bg-black/50 hover:bg-black/70 text-white rounded-full p-2 transition-colors"
              >
                <X className="h-4 w-4" />
              </button>

              <div className="aspect-video bg-black">
                <video
                  className="w-full h-full object-top"
                  controls
                  autoPlay
                  onPlay={handleVideoPlay}
                  onEnded={handleVideoEnd}
                  poster="/placeholder.svg?height=720&width=1280"
                >
                  <source src="/xtreme.mp4" type="video/mp4" />
                  <track kind="captions" src="/xtreme.mp4" srcLang="en" label="English" />
                  Your browser does not support the video tag.
                </video>
              </div>

              {!isPlaying && (
                <div className="absolute inset-0 flex items-center justify-center bg-black/30">
                  <div className="text-center text-white space-y-4">
                    <div className="w-20 h-20 bg-white/20 rounded-full flex items-center justify-center backdrop-blur-sm">
                      <Play className="h-8 w-8 ml-1" />
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold">XtrremeRegion Launch</h3>
                      <p className="text-gray-300">Click play to begin</p>
                    </div>
                  </div>
                </div>
              )}
            </div>

            <div className="p-6 bg-gray-900">
              <div className="space-y-2">
                <h3 className="text-xl font-semibold text-white">XtremeRegion</h3>
                <p className="text-gray-300">
                  XTREME-REGION is empowering institutions, schools and individual with advanced communication tools using ai to reach their full potential.
                </p>
              </div>

              <div className="flex gap-3 mt-4">
                <Button className=" hover:bg-green-700">
                 <Link href="https://xtremeregion.com" target="_blank" rel="noopener noreferrer">
                    Visit XtremeRegion
                  </Link>
                </Button>
              </div>
            </div>
          </DialogContent>
        </Dialog>
    </div>
  )
}
