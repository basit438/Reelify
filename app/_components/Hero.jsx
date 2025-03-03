import { Button } from '@/components/ui/button';
import React from 'react';
import Authentication from '../_components/Authentication';

function Hero() {
  return (
    <div className="flex flex-col gap-6 text-accent-foreground p-8 pt-24 rounded-xl shadow-lg">
      <h2 className="text-5xl sm:text-6xl font-extrabold text-white text-center leading-tight">
        Generate Shorts in One Click with AI
      </h2>
      <p className="text-lg sm:text-xl text-white text-center max-w-3xl mx-auto opacity-80">
        Shorts Generator is a platform that allows you to generate shorts in seconds using AI. Try it now and save time!
      </p>
      <div className="flex justify-center gap-6 mt-6">
        <Authentication>
        <Button className="w-full sm:w-auto px-8 py-3 text-lg font-semibold rounded-lg transition-all duration-300 ease-in-out transform hover:bg-blue-600 focus:ring-4 focus:ring-blue-500">
            Get Started
        </Button>
        </Authentication>
        <Button
          variant="outline"
          className="w-full sm:w-auto px-8 py-3 text-lg font-semibold rounded-lg border-2 border-white text-white hover:bg-white hover:text-blue-500 focus:ring-4 focus:ring-blue-500"
        >
          Explore
        </Button>
      </div>
    </div>
  );
}

export default Hero;
