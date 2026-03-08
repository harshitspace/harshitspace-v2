import ProjectCard from "@/components/ProjectCard";

export default function ProjectsPage() {
  const projects = [
    {
      title: "YT Playlist Calculator",
      status: "[200 OK] Streamlit Live",
      statusType: "success" as const,
      description:
        "A utility tool that leverages the YouTube Data API to fetch and calculate the precise total duration of any video playlist.",
      techStack: ["Python", "Streamlit", "YouTube Data API"],
      githubUrl: "https://github.com/harshitspace/yt-playlist-calculator",
      liveUrl: "https://ytplaylistcalculator.streamlit.app",
    },
    {
      title: "DevTinder",
      status: "[200 OK] AWS EC2",
      statusType: "success" as const,
      description:
        "A professional networking platform tailored for developers to connect and collaborate. Engineered secure bi-directional matching with real-time chat functionality.",
      techStack: [
        "MongoDB",
        "Express",
        "React",
        "Node.js",
        "Socket.io",
        "AWS EC2",
      ],
      githubUrl: "https://github.com/harshitspace/devTinder",
    },
    {
      title: "NetflixGPT",
      status: "[200 OK] LLM Active",
      statusType: "success" as const,
      description:
        "Intelligent movie recommendation engine integrating Firebase authentication and the Gemini API for dynamic content retrieval via semantic search.",
      techStack: ["React.js", "Firebase", "Gemini API", "TMDB", "Tailwind"],
      githubUrl: "https://github.com/harshitspace/netflix-gpt",
    },
    {
      title: "ParkedIn",
      status: "[200 OK] Stable",
      statusType: "success" as const,
      description:
        "Spatial management architecture built on a lightweight relational database for real-time slot tracking and efficient vehicle management.",
      techStack: ["Python", "Flask", "SQLite", "Jinja2"],
      githubUrl: "https://github.com/harshitspace/parkedIn",
    },
  ];

  return (
    <section className="animate-fadeIn">
      <h2 className="text-accent text-[1.5rem] font-bold border-b border-dashed border-border-dark pb-2 uppercase mt-0 mb-8">
        02. Executable_Binaries
      </h2>

      <div className="flex flex-col">
        {projects.map((proj, idx) => (
          <ProjectCard key={idx} {...proj} />
        ))}
      </div>
    </section>
  );
}
