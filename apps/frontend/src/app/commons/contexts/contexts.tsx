"use client";

import { useContext, createContext, useState, ReactNode } from "react";
import { TokenProps } from "@/app/commons/types/types";
import { TokenProviderProps } from "@/app/commons/types/types";

const TokenContext = createContext<TokenProps>({
  token: "",
  setToken: () => {},
});

export const TokenProvider = ({ children }: TokenProviderProps) => {
  const [token, setToken] = useState("");

  return (
    <TokenContext.Provider value={{ token, setToken }}>
      {children}
    </TokenContext.Provider>
  );
};

export const useToken = () => useContext(TokenContext);
