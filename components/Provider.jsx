"use client";
import React, { use, useEffect } from "react";
import { ThemeProvider as NextThemesProvider } from "next-themes";
import { onAuthStateChanged } from "firebase/auth";
import { AuthContext } from "@/app/_context/AuthContext";
import { useState } from "react";
import { auth } from "@/app/config/firebaseConfig";
import { ConvexProvider, ConvexReactClient, useMutation } from "convex/react";
import { api } from "@/convex/_generated/api";

function Provider({ children }) {
    const [user, setUser] = useState(null);
    const CreateUser = useMutation(api.users.createNewUser);
   
    
    useEffect(() => {
      const unSubscribe = onAuthStateChanged(auth, async (user) => {
          console.log("Auth State Changed:", user);
         
          if (user) {
              // Only create user if they are logged in
              try {
                  const result = await CreateUser({
                      name: user.displayName,
                      email: user.email,
                      photoURL: user.photoURL
                  });
                  console.log("User created:", result);
                  setUser(result);
              } catch (error) {
                  console.error("Error creating user:", error);
              }
          } else {
              console.warn("No user logged in, skipping user creation.");
          }
      });
  
      return unSubscribe;
  }, [CreateUser]); // Add dependency
  
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
