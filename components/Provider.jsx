"use client";
import React, { use, useEffect } from "react";
import { ThemeProvider as NextThemesProvider } from "next-themes";
import { onAuthStateChanged } from "firebase/auth";
import { AuthContext } from "@/app/_context/AuthContext";
import { useState } from "react";
import { auth } from "@/app/config/firebaseConfig";

function Provider({ children }) {
    const [user, setUser] = useState(null);
  useEffect(() => {
    const unSubscribe = onAuthStateChanged(auth, (user) => {
      console.log(user);
        setUser(user);
    });
    return unSubscribe;
  }, []);
  return (
    <div>
      <AuthContext.Provider value={{ user}}>
        <NextThemesProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </NextThemesProvider>
      </AuthContext.Provider>
    </div>
  );
}
export const useAuthContext = () => {
    const context = use(AuthContext);
    if (!context) {
        throw new Error("useAuthContext must be used within an AuthProvider");
    }
    return context;
}

export default Provider;
