import { useEffect, useState } from 'react'
import { ScreenSize } from 'utils/constants'



const screenSize = {
    md: "(min-width: 768px)",
    lg: "(min-width: 1080px)"
  }

function useMediaQuery(size: keyof ScreenSize): boolean {
  const query = screenSize[size] ?? "md";

  const getMatches = (query: string): boolean => {
    // Prevents SSR issues
    if (typeof window !== 'undefined') {
      return window.matchMedia(query).matches
    }
    return false
  }

  const [matches, setMatches] = useState<boolean>(getMatches(query))

  function handleChange() {
    setMatches(getMatches(query))
  }

  useEffect(() => {
    const matchMedia = window.matchMedia(query)

    // Triggered at the first client-side load and if query changes
    handleChange()

    // Listen matchMedia
      matchMedia.addEventListener('change', handleChange);

    return () => {
        matchMedia.removeEventListener('change', handleChange)
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [query])

  return matches;
}

export default useMediaQuery;