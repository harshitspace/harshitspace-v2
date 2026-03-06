import Typewriter from "@/components/Typewriter";

export default function AboutPage() {
  const initText = `>  Executing profile_init.sh...
> Loading user data...
> SUCCESS: Harshit Raj profile loaded.

Hello! I specialize in building robust backend architectures and seamless frontend experiences. Currently maintaining a 9.2 CGPA in Data Science at IIT Madras while actively developing scalable full-stack applications.`;

  return (
    <section className="animate-fadeIn">
      <h2 className="text-accent text-[1.5rem] font-bold border-b border-dashed border-border-dark pb-2 uppercase mt-0">
        01. System.init()
      </h2>

      <div className="text-[1.1rem] text-[#ccc] mt-6 leading-[1.8] min-h-[80px]">
        <Typewriter text={initText} speed={25} />
        {/* The Blinking Cursor */}
        <span className="inline-block w-[8px] h-[1.2em] bg-accent align-bottom animate-blink"></span>
      </div>

      <div className="mt-12 text-[#888] border-l-2 border-[#333] pl-4 space-y-2">
        <p>Location: Bengaluru, IN</p>
        <p>Target: Full-Stack Web Development</p>
        <p>Core Stack: MERN, Python (FastAPI/Flask)</p>
      </div>
    </section>
  );
}
