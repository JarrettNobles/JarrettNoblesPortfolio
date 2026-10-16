import { about, highlights, profile, projects, skills, type Project } from "@/lib/data";

const nav = [
  { href: "#projects", label: "Projects" },
  { href: "#about", label: "About" },
  { href: "#skills", label: "Skills" },
  { href: "#contact", label: "Contact" },
];

function SectionHeading({ id, kicker, title }: { id: string; kicker: string; title: string }) {
  return (
    <div id={id} className="scroll-mt-24 mb-10">
      <p className="font-mono text-sm text-accent">{kicker}</p>
      <h2 className="mt-2 text-3xl font-semibold tracking-tight sm:text-4xl">{title}</h2>
    </div>
  );
}

function ProjectCard({ project }: { project: Project }) {
  return (
    <article className="group flex flex-col rounded-2xl border border-border bg-surface p-6 transition hover:border-accent/50">
      {project.image && (
        // eslint-disable-next-line @next/next/no-img-element
        <img
          src={project.image}
          alt={`${project.name} screenshot`}
          className="mb-5 aspect-video w-full rounded-lg border border-border object-cover"
        />
      )}
      <h3 className="text-xl font-semibold">{project.name}</h3>
      <p className="mt-1 text-muted">{project.summary}</p>
      <ul className="mt-4 space-y-2 text-sm leading-relaxed">
        {project.bullets.map((b) => (
          <li key={b} className="flex gap-2">
            <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
            <span>{b}</span>
          </li>
        ))}
      </ul>
      <div className="mt-5 flex flex-wrap gap-2">
        {project.stack.map((t) => (
          <span key={t} className="rounded-full border border-border px-3 py-1 font-mono text-xs text-muted">
            {t}
          </span>
        ))}
      </div>
      {(project.liveUrl || project.repoUrl) && (
        <div className="mt-auto flex gap-4 pt-6 text-sm font-medium">
          {project.liveUrl && (
            <a href={project.liveUrl} target="_blank" rel="noreferrer" className="text-accent hover:underline">
              Live site ↗
            </a>
          )}
          {project.repoUrl && (
            <a href={project.repoUrl} target="_blank" rel="noreferrer" className="text-foreground hover:text-accent">
              Code ↗
            </a>
          )}
        </div>
      )}
    </article>
  );
}

export default function Home() {
  const contactLinks = [
    { label: "Email", href: `mailto:${profile.email}`, text: profile.email },
    { label: "GitHub", href: profile.github, text: "github.com/JarrettNobles" },
    { label: "LinkedIn", href: profile.linkedin, text: "LinkedIn profile" },
    { label: "Upwork", href: profile.upwork, text: "Upwork profile" },
  ].filter((l) => l.href);

  return (
    <>
      <header className="sticky top-0 z-10 border-b border-border/60 bg-background/80 backdrop-blur">
        <nav className="mx-auto flex max-w-5xl items-center justify-between px-4 py-4 sm:px-6">
          <a href="#top" className="font-mono text-sm font-semibold">
            jarrett<span className="text-accent">.</span>nobles
          </a>
          <ul className="flex gap-4 text-sm text-muted sm:gap-6">
            {nav.map((n) => (
              <li key={n.href} className={n.href === "#skills" ? "hidden sm:block" : ""}>
                <a href={n.href} className="hover:text-foreground">
                  {n.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </header>

      <main id="top" className="mx-auto w-full max-w-5xl flex-1 px-4 sm:px-6">
        {/* Hero */}
        <section className="py-20 sm:py-28">
          <p className="font-mono text-sm text-accent">Hi, I&apos;m</p>
          <h1 className="mt-3 text-5xl font-bold tracking-tight sm:text-7xl">{profile.name}</h1>
          <p className="mt-4 text-xl font-medium text-foreground/90 sm:text-2xl">{profile.title}</p>
          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-muted">{profile.tagline}</p>
          <div className="mt-10 flex flex-wrap gap-4">
            <a
              href="#projects"
              className="rounded-full bg-accent px-6 py-3 font-semibold text-background transition hover:opacity-90"
            >
              View my work
            </a>
            <a
              href="#contact"
              className="rounded-full border border-border px-6 py-3 font-semibold transition hover:border-accent hover:text-accent"
            >
              Contact me
            </a>
          </div>
          <dl className="mt-16 grid gap-6 sm:grid-cols-3">
            {highlights.map((h) => (
              <div key={h.label} className="rounded-2xl border border-border bg-surface p-5">
                <dt className="text-sm text-muted">{h.label}</dt>
                <dd className="mt-1 text-3xl font-bold text-accent">{h.value}</dd>
              </div>
            ))}
          </dl>
        </section>

        {/* Projects */}
        <section className="py-16">
          <SectionHeading id="projects" kicker="01 / Projects" title="Things I've built" />
          <div className="grid gap-6 md:grid-cols-2">
            {projects.map((p) => (
              <ProjectCard key={p.name} project={p} />
            ))}
          </div>
        </section>

        {/* About */}
        <section className="py-16">
          <SectionHeading id="about" kicker="02 / About" title="About me" />
          <div className="max-w-3xl space-y-5 text-lg leading-relaxed text-muted">
            {about.map((para) => (
              <p key={para.slice(0, 20)}>{para}</p>
            ))}
          </div>
        </section>

        {/* Skills */}
        <section className="py-16">
          <SectionHeading id="skills" kicker="03 / Skills" title="What I work with" />
          <div className="grid gap-6 sm:grid-cols-2">
            {skills.map((s) => (
              <div key={s.group} className="rounded-2xl border border-border bg-surface p-6">
                <h3 className="font-semibold">{s.group}</h3>
                <div className="mt-4 flex flex-wrap gap-2">
                  {s.items.map((i) => (
                    <span key={i} className="rounded-md bg-background px-3 py-1.5 text-sm">
                      {i}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Contact */}
        <section className="py-16 pb-24">
          <SectionHeading id="contact" kicker="04 / Contact" title="Let's work together" />
          <p className="max-w-2xl text-lg leading-relaxed text-muted">
            Need a website, a custom web app, or help with a database? Send me a message with what
            you&apos;re building, and I&apos;ll tell you how I&apos;d approach it.
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <a
              href={`mailto:${profile.email}`}
              className="rounded-full bg-accent px-6 py-3 font-semibold text-background transition hover:opacity-90"
            >
              Email me
            </a>
            {profile.resume && (
              <a
                href={profile.resume}
                target="_blank"
                rel="noreferrer"
                className="rounded-full border border-border px-6 py-3 font-semibold transition hover:border-accent hover:text-accent"
              >
                Download résumé
              </a>
            )}
          </div>
          <ul className="mt-10 grid gap-3 sm:grid-cols-2">
            {contactLinks.map((l) => (
              <li key={l.label}>
                <a
                  href={l.href}
                  target={l.label === "Email" ? undefined : "_blank"}
                  rel="noreferrer"
                  className="flex items-center justify-between rounded-xl border border-border bg-surface px-5 py-4 transition hover:border-accent/50"
                >
                  <span className="text-sm text-muted">{l.label}</span>
                  <span className="truncate pl-4 font-medium">{l.text}</span>
                </a>
              </li>
            ))}
          </ul>
        </section>
      </main>

      <footer className="border-t border-border py-8 text-center text-sm text-muted">
        © {profile.name}. Built with Next.js and Tailwind CSS.
      </footer>
    </>
  );
}
