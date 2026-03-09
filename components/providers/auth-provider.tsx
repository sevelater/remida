"use client";

import { createContext, useContext, useEffect, useMemo, useState } from "react";
import { UserRole } from "@/lib/types";

type AuthContextValue = {
  role: UserRole;
  setRole: (role: UserRole) => void;
};

const ROLE_KEY = "bakery_role_v1";

const AuthContext = createContext<AuthContextValue | null>(null);

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [role, setRoleState] = useState<UserRole>("guest");

  useEffect(() => {
    const saved = window.localStorage.getItem(ROLE_KEY) as UserRole | null;
    if (saved === "guest" || saved === "editor" || saved === "admin") {
      setRoleState(saved);
    }
  }, []);

  const setRole = (nextRole: UserRole) => {
    setRoleState(nextRole);
    window.localStorage.setItem(ROLE_KEY, nextRole);
  };

  const value = useMemo(() => ({ role, setRole }), [role]);
  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

export function useAuth() {
  const ctx = useContext(AuthContext);
  if (!ctx) {
    throw new Error("useAuth must be used inside AuthProvider");
  }
  return ctx;
}

