import { AnimatePresence, m } from "framer-motion";
import { logoPaths, pathVariants } from "@/constants";

type LogoIconProps = {
  isClosed: boolean;
};

export function LogoIcon({ isClosed }: LogoIconProps) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="122"
      height="22"
      viewBox="0 0 122 22"
      fill="none"
    >
      <path
        d="M8.192 21.44H2.176V10.24H0V5.312H2.304C2.944 2.272 5.92 0 11.2 0H12.48V4.288H10.24C8.576 4.288 7.776 4.448 7.808 5.312H12.48V10.24H8.192V21.44Z"
        fill="white"
      />
      <AnimatePresence initial={false}>
        {!isClosed &&
          logoPaths.map((d, i) => (
            <m.path
              key={i}
              d={d}
              fill="white"
              variants={pathVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
              custom={i}
            />
          ))}
      </AnimatePresence>
    </svg>
  );
}
