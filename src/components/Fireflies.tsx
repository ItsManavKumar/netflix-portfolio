/* eslint-disable react-hooks/purity */
export default function Fireflies() {
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden z-0">
      {Array.from({ length: 120 }).map((_, i) => (
        <span
          key={i}
          className="
            absolute block rounded-full
            animate-float
            opacity-60
            blink
          "
          style={{
            width: Math.random() * 3 + 6 + "px",
            height: Math.random() * 3 + 4 + "px",
            left: Math.random() * 100 + "%",
            top: Math.random() * 100 + "%",
            background: "rgba(229, 9, 20, 1)",
boxShadow: `
  0 0 8px rgba(229, 9, 20, 1),
  0 0 22px rgba(255, 60, 60, 0.9)
`,

            animationDelay: `${Math.random()}s`,
            animationDuration: `${7 + Math.random() * 5}s`,
          }}
        />
      ))}
    </div>
  );
}
