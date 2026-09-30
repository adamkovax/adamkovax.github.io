import { createContext, useContext, type ReactNode } from "react";
import { hu, type Content } from "./hu";

// A nyelvválasztó később ide kerül: egy state a nyelvre, és a megfelelő
// Content objektum. Most csak a magyar változat létezik.
const ContentContext = createContext<Content>(hu);

export function ContentProvider({ children }: { children: ReactNode }) {
  return <ContentContext.Provider value={hu}>{children}</ContentContext.Provider>;
}

export function useContent() {
  return useContext(ContentContext);
}
