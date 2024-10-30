import React from 'react';
import { Play, SkipBack, SkipForward, Volume2, Maximize2, ListMusic } from 'lucide-react';

export default function MusicPlayer() {
  return (
    <div className="fixed bottom-0 left-0 right-0 bg-zinc-900 border-t border-zinc-800 px-4 py-3">
      <div className="max-w-screen-2xl mx-auto flex items-center justify-between">
        <div className="flex items-center gap-4 w-1/4">
          <img
            src="https://images.unsplash.com/photo-1470225620780-dba8ba36b745?auto=format&fit=crop&q=80&w=120"
            alt="Album art"
            className="w-14 h-14 rounded-md"
          />
          <div>
            <h4 className="text-sm font-medium">Song Title</h4>
            <p className="text-xs text-zinc-400">Artist Name</p>
          </div>
        </div>
        
        <div className="flex flex-col items-center w-2/4">
          <div className="flex items-center gap-4">
            <button className="p-2 hover:bg-zinc-800 rounded-full">
              <SkipBack className="w-5 h-5" />
            </button>
            <button className="w-10 h-10 bg-white text-black rounded-full flex items-center justify-center hover:scale-105 transition-transform">
              <Play className="w-5 h-5" />
            </button>
            <button className="p-2 hover:bg-zinc-800 rounded-full">
              <SkipForward className="w-5 h-5" />
            </button>
          </div>
          <div className="w-full mt-2 flex items-center gap-2">
            <span className="text-xs text-zinc-400">2:14</span>
            <div className="flex-1 h-1 bg-zinc-800 rounded-full">
              <div className="w-1/3 h-full bg-white rounded-full"></div>
            </div>
            <span className="text-xs text-zinc-400">3:45</span>
          </div>
        </div>
        
        <div className="flex items-center gap-4 w-1/4 justify-end">
          <button className="p-2 hover:bg-zinc-800 rounded-full">
            <ListMusic className="w-5 h-5" />
          </button>
          <div className="flex items-center gap-2">
            <Volume2 className="w-5 h-5" />
            <div className="w-24 h-1 bg-zinc-800 rounded-full">
              <div className="w-2/3 h-full bg-white rounded-full"></div>
            </div>
          </div>
          <button className="p-2 hover:bg-zinc-800 rounded-full">
            <Maximize2 className="w-5 h-5" />
          </button>
        </div>
      </div>
    </div>
  );
}