import React from 'react';
import { Star, Clock, Calendar, ChevronRight } from 'lucide-react';

export default function MovieSection() {
  const movies = [
    {
      title: "Inception",
      rating: 4.8,
      image: "https://images.unsplash.com/photo-1440404653325-ab127d49abc1?auto=format&fit=crop&q=80&w=600",
      genre: "Sci-Fi",
      showtime: "7:30 PM"
    },
    {
      title: "The Dark Knight",
      rating: 4.9,
      image: "https://images.unsplash.com/photo-1478720568477-152d9b164e26?auto=format&fit=crop&q=80&w=600",
      genre: "Action",
      showtime: "8:00 PM"
    },
    {
      title: "Interstellar",
      rating: 4.7,
      image: "https://images.unsplash.com/photo-1534447677768-be436bb09401?auto=format&fit=crop&q=80&w=600",
      genre: "Sci-Fi",
      showtime: "6:45 PM"
    }
  ];

  return (
    <section className="mt-8">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-2xl font-bold">Now Playing</h2>
        <button className="flex items-center gap-2 text-sm text-purple-400 hover:text-purple-300">
          View All <ChevronRight className="w-4 h-4" />
        </button>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {movies.map((movie) => (
          <MovieCard key={movie.title} {...movie} />
        ))}
      </div>
    </section>
  );
}

function MovieCard({ title, rating, image, genre, showtime }: {
  title: string;
  rating: number;
  image: string;
  genre: string;
  showtime: string;
}) {
  return (
    <div className="bg-zinc-900 rounded-xl overflow-hidden group">
      <div className="relative">
        <img 
          src={image} 
          alt={title}
          className="w-full h-48 object-cover transform group-hover:scale-110 transition-transform duration-300"
        />
        <div className="absolute top-2 right-2 flex items-center gap-1 bg-black/60 rounded-full px-2 py-1">
          <Star className="w-4 h-4 text-yellow-400 fill-yellow-400" />
          <span className="text-sm">{rating}</span>
        </div>
      </div>
      
      <div className="p-4">
        <h3 className="text-lg font-semibold mb-2">{title}</h3>
        <div className="flex items-center gap-4 text-sm text-zinc-400 mb-4">
          <span>{genre}</span>
          <div className="flex items-center gap-1">
            <Clock className="w-4 h-4" />
            <span>{showtime}</span>
          </div>
        </div>
        
        <div className="flex gap-2">
          <button className="flex-1 bg-purple-600 hover:bg-purple-700 text-white py-2 rounded-lg text-sm font-medium">
            Buy Tickets
          </button>
          <button className="flex items-center justify-center w-10 h-10 bg-zinc-800 hover:bg-zinc-700 rounded-lg">
            <Calendar className="w-5 h-5" />
          </button>
        </div>
      </div>
    </div>
  );
}