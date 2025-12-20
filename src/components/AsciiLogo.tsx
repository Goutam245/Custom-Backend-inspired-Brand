import { motion } from 'framer-motion';

export const AsciiLogo = () => {
  const logo = `
 ██████╗ ██████╗ ███████╗██╗    ██╗
██╔═══██╗██╔══██╗██╔════╝██║    ██║
██║   ██║██████╔╝█████╗  ██║ █╗ ██║
██║▄▄ ██║██╔══██╗██╔══╝  ██║███╗██║
╚██████╔╝██║  ██║███████╗╚███╔███╔╝
 ╚══▀▀═╝ ╚═╝  ╚═╝╚══════╝ ╚══╝╚══╝ 
    C O L L E C T I V E
`;

  return (
    <motion.pre
      className="font-mono text-primary text-glow-strong text-[0.35rem] sm:text-[0.5rem] md:text-xs lg:text-sm leading-tight select-none whitespace-pre"
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
    >
      {logo}
    </motion.pre>
  );
};

export default AsciiLogo;
