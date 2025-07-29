import { useEffect, useLayoutEffect } from "react";

// Use useLayoutEffect on the client, useEffect on the server (for SSR safety)
const useIsomorphicEffect =
  typeof window !== "undefined" ? useLayoutEffect : useEffect;

export default useIsomorphicEffect;