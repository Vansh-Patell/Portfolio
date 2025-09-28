/**
 * Font verification utility
 * Add this to any component to test font inheritance
 */

export const FontTest = () => {
  return (
    <div className="fixed top-4 right-4 bg-black/80 text-white p-4 rounded-lg text-xs z-50 font-mono">
      <div className="space-y-2">
        <div className="font-sans">Body: font-sans (Inter)</div>
        <div className="font-heading">Heading: font-heading (Space Grotesk)</div>
        <div className="font-mono">Code: font-mono (JetBrains Mono)</div>
      </div>
    </div>
  )
}

// Usage: Add <FontTest /> to any component temporarily to verify fonts