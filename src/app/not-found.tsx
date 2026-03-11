import Link from "next/link";
import { FaTerminal } from "react-icons/fa6";

export default function NotFound() {
  return (
    <section className="animate-fadeIn w-full h-full flex flex-col justify-center items-center text-center">
      <div className="text-[#ff5555] text-[4rem] mb-4">
        <FaTerminal />
      </div>
      <h2 className="text-[#ff5555] text-[2rem] font-mono font-bold mb-2">
        [FATAL EXCEPTION]
      </h2>
      <p className="text-[#aaa] text-[1.1rem] font-mono mb-8">
        Error 404: Directory or executable not found in the current $PATH.
      </p>
      <Link
        href="/"
        className="px-6 py-3 border border-dashed border-accent text-accent hover:bg-accent/10 transition-colors font-mono"
      >
        cd ~/home
      </Link>
    </section>
  );
}
