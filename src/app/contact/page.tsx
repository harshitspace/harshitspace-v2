import { FaEnvelope, FaGithub, FaLinkedin, FaXTwitter } from "react-icons/fa6";

export default function ContactPage() {
  return (
    <section className="animate-fadeIn w-full max-w-full">
      <h2 className="text-accent text-[1.5rem] font-bold border-b border-dashed border-border-dark pb-2 uppercase mt-0 mb-6">
        03. Network_Requests
      </h2>

      <p className="mt-4 text-[#aaa] text-[1.05rem]">
        Connection protocols open for collaboration, hackathons, and full-stack
        opportunities.
      </p>

      {/* Responsive padding (p-5 on mobile, p-8 on desktop) and w-full */}
      <div className="mt-8 bg-[#0a0a0a] p-5 md:p-8 border border-dashed border-[#333] flex flex-col gap-6 w-full">
        <div className="flex items-center gap-4 w-full">
          <FaEnvelope className="text-accent text-xl md:text-2xl w-[24px] md:w-[30px] shrink-0" />
          <a
            href="mailto:hey@harshitspace.in"
            className="text-text hover:text-accent transition-colors text-[0.95rem] md:text-lg break-all text-decoration-none"
          >
            hey@harshitspace.in
          </a>
        </div>

        <div className="flex items-center gap-4 w-full">
          <FaGithub className="text-accent text-xl md:text-2xl w-[24px] md:w-[30px] shrink-0" />
          <a
            href="https://github.com/harshitspace"
            target="_blank"
            rel="noopener noreferrer"
            className="text-text hover:text-accent transition-colors text-[0.95rem] md:text-lg break-all text-decoration-none"
          >
            github.com/harshitspace
          </a>
        </div>

        <div className="flex items-center gap-4 w-full">
          <FaLinkedin className="text-accent text-xl md:text-2xl w-[24px] md:w-[30px] shrink-0" />
          <a
            href="https://linkedin.com/in/harshitspace"
            target="_blank"
            rel="noopener noreferrer"
            className="text-text hover:text-accent transition-colors text-[0.95rem] md:text-lg break-all text-decoration-none"
          >
            linkedin.com/in/harshitspace
          </a>
        </div>

        <div className="flex items-center gap-4 w-full">
          <FaXTwitter className="text-accent text-xl md:text-2xl w-[24px] md:w-[30px] shrink-0" />
          <a
            href="https://x.com/harshitspace"
            target="_blank"
            rel="noopener noreferrer"
            className="text-text hover:text-accent transition-colors text-[0.95rem] md:text-lg break-all text-decoration-none"
          >
            x.com/harshitspace
          </a>
        </div>
      </div>
    </section>
  );
}
