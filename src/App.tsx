import React from 'react';
import { Play, Pause, SkipForward, SkipBack, Volume2, Calendar, Star, Clock, Film } from 'lucide-react';
import Navbar from './components/Navbar';
import Sidebar from './components/Sidebar';
import MusicPlayer from './components/MusicPlayer';
import MovieSection from './components/MovieSection';

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-zinc-900 to-black text-white">
      <Navbar />
      <div className="flex">
        <Sidebar />
        <main className="flex-1 p-6">
          <div className="mb-8">
            <h1 className="text-3xl font-bold mb-6">Welcome back!</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              <FeaturedCard
                title="Top Movies This Week"
                image="https://images.unsplash.com/photo-1536440136628-849c177e76a1?auto=format&fit=crop&q=80&w=800"
                type="movie"
              />
              <FeaturedCard
                title="New Releases"
                image="https://images.unsplash.com/photo-1470225620780-dba8ba36b745?auto=format&fit=crop&q=80&w=800"
                type="music"
              />
              <FeaturedCard
                title="Coming Soon"
                image="https://images.unsplash.com/photo-1489599849927-2ee91cede3ba?auto=format&fit=crop&q=80&w=800"
                type="event"
              />
            </div>
          </div>
          <MovieSection />
        </main>
      </div>
      <MusicPlayer />
    </div>
  );
}

function FeaturedCard({ title, image, type }: { title: string; image: string; type: 'movie' | 'music' | 'event' }) {
  const icons = {
    movie: Film,
    music: Play,
    event: Calendar
  };
  const Icon = icons[type];
  
  return (
    <div className="relative group overflow-hidden rounded-xl">
      <img 
        src={image} 
        alt={title}
        className="w-full h-48 object-cover transform group-hover:scale-110 transition-transform duration-300"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent flex items-end p-4">
        <div className="flex items-center justify-between w-full">
          <h3 className="text-lg font-semibold">{title}</h3>
          <Icon className="w-6 h-6" />
        </div>
      </div>
    </div>
  );
}

export default App;