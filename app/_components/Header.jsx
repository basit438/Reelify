"use client";
import { Button } from '@/components/ui/button';
import Image from 'next/image';
import React from 'react';
import Authentication from '../_components/Authentication';
import { useAuthContext } from '@/components/Provider';

function Header() {
  const { user } = useAuthContext();
  console.log(user);

  return (
    <header className="flex justify-between items-center p-4">
      <div className="flex items-center gap-2">
        <Image
          src="/logo.svg"
          alt="logo"
          width={40}
          height={40}
          color="white"
          className="w-10 h-10"
        />
        <h1 className="text-2xl font-bold">Shorts Generator</h1>
      </div>

      {/* Conditional rendering based on user */}
      {!user ? (
        <Authentication>
          <Button>Get Started</Button>
        </Authentication>
      ) : (
        <div className="flex items-center gap-4">
          <Button>Dashboard</Button>
          <Image
            src={user?.photoURL || '/default-avatar.png'} // Ensure a fallback image if no photoURL is available
            alt="user"
            width={40}
            height={40}
            color="white"
            className="w-10 h-10 rounded-full"
          />
        </div>
      )}
    </header>
  );
}

export default Header;
