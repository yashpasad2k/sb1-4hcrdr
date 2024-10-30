import React from 'react';
import { Home, Music, Film, Ticket, Heart, Clock, Plus, Library } from 'lucide-react';

export default function Sidebar() {
  return (
    <aside className="w-64 bg-zinc-900 p-4 flex flex-col gap-y-4 h-[calc(100vh-64px)] sticky top-16">
      <div className="space-y-2">
        <SidebarItem icon={Home} text="Home" active />
        <SidebarItem icon={Music} text="Music" />
        <SidebarItem icon={Film} text="Movies" />
        <SidebarItem icon={Ticket} text="Tickets" />
      </div>
      
      <div className="mt-4 pt-4 border-t border-zinc-800 space-y-2">
        <div className="flex items-center justify-between px-4">
          <div className="flex items-center gap-2 text-zinc-400">
            <Library className="w-5 h-5" />
            <span className="text-sm font-medium">Your Library</span>
          </div>
          <button className="p-1 hover:bg-zinc-800 rounded-full">
            <Plus className="w-4 h-4" />
          </button>
        </div>
        <SidebarItem icon={Heart} text="Liked Songs" />
        <SidebarItem icon={Clock} text="Watch Later" />
      </div>
      
      <div className="mt-auto p-4 bg-zinc-800/50 rounded-lg">
        <h4 className="text-sm font-medium mb-2">Now Playing in Theaters</h4>
        <p className="text-xs text-zinc-400">Get tickets for the latest blockbusters and indie films.</p>
        <button className="mt-3 w-full bg-white text-black py-2 rounded-full text-sm font-medium hover:bg-zinc-200">
          Browse Movies
        </button>
      </div>
    </aside>
  );
}

function SidebarItem({ icon: Icon, text, active }: { icon: any; text: string; active?: boolean }) {
  return (
    <button
      className={`flex items-center gap-4 px-4 py-2 w-full rounded-lg transition-colors ${
        active ? 'bg-zinc-800' : 'hover:bg-zinc-800/50'
      }`}
    >
      <Icon className="w-5 h-5" />
      <span className="text-sm font-medium">{text}</span>
    </button>
  );
}