import type { Child } from "hono/jsx";
import { about, jobs, links, moreWork, profile, projects, reviews, skills, stack, stats } from "./data";

const description = `${profile.title} with 8+ years in MERN, generative AI and automation. Based in ${profile.location}.`;

function SectionHead({ id, title, note }: { id: string; title: Child; note: string }) {
  return (
    <div id={id} class="flex scroll-mt-4 items-end justify-between gap-4 border-b-3 pt-16 pb-6 md:pt-24">
      <h2 class="text-[clamp(40px,6vw,88px)] leading-[.9] font-bold tracking-[-.05em] uppercase">{title}</h2>
      <span class="shrink-0 text-sm font-bold md:text-base">({note})</span>
    </div>
  );
}

export function Page() {
  const year = new Date().getFullYear();
  return (
    <html lang="en">
      <head>
        <meta charset="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>{`${profile.name} — ${profile.title}`}</title>
        <meta name="description" content={description} />
        <meta property="og:title" content={profile.name} />
        <meta property="og:description" content={description} />
        <meta property="og:url" content="https://hmdlohar.github.io/" />
        <meta property="og:type" content="website" />
        <meta name="theme-color" content="#f2f0eb" />
        <link rel="canonical" href="https://hmdlohar.github.io/" />
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin="" />
        <link href="https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@400;500;700&display=swap" rel="stylesheet" />
        <link rel="stylesheet" href="/styles.css" />
      </head>
      <body class="bg-paper text-ink antialiased selection:bg-sun">
        <div class="mx-auto max-w-[1240px] px-4 md:px-6">
          <nav class="flex flex-col gap-2.5 border-b-3 py-5 text-sm font-bold uppercase md:flex-row md:justify-between">
            <span>{profile.name} ©{year}</span>
            <div class="flex flex-wrap gap-x-5 gap-y-1 md:gap-x-6">
              <a class="hover:bg-sun" href="#work">Work</a>
              <a class="hover:bg-sun" href="#experience">Experience</a>
              <a class="hover:bg-sun" href={profile.resume}>Resume</a>
              <a class="hover:bg-sun" href="#contact">Contact</a>
            </div>
          </nav>

          <header class="grid border-b-3 md:grid-cols-[1.6fr_1fr]">
            <div class="border-b-3 py-10 md:border-r-3 md:border-b-0 md:py-14 md:pr-10">
              <h1 class="text-[clamp(40px,10.5vw,150px)] leading-[.86] font-bold tracking-[-.05em] uppercase">
                {profile.headline.map((w, i) => (
                  <>
                    {i === 2 ? <mark class="bg-sun px-[.08em] text-ink">{w}</mark> : w}
                    <br />
                  </>
                ))}
              </h1>
            </div>
            <div class="flex flex-col justify-between gap-8 py-8 md:py-14 md:pl-10">
              <p class="text-lg md:text-[21px]">{profile.intro}</p>
              <div class="flex flex-wrap items-center gap-6">
                <a
                  class="inline-block bg-ink px-6 py-4 font-bold text-paper uppercase shadow-[6px_6px_0_var(--color-sun)] transition hover:-translate-0.5 hover:shadow-[8px_8px_0_var(--color-blue)]"
                  href={`mailto:${profile.email}`}
                >
                  Hire me →
                </a>
                <a class="font-bold uppercase underline decoration-3 underline-offset-4 hover:bg-sun" href={profile.resume}>
                  Resume
                </a>
              </div>
            </div>
          </header>
        </div>

        <div class="overflow-hidden bg-ink py-3.5 text-xl font-bold whitespace-nowrap text-sun uppercase md:text-[28px]" aria-hidden="true">
          <div class="inline-block animate-marquee">{[...stack, ...stack].map((s) => `${s} ✦ `).join("")}</div>
        </div>

        <main class="mx-auto max-w-[1240px] px-4 md:px-6">
          <div class="grid grid-cols-2 gap-[3px] border-b-3 bg-ink md:grid-cols-4">
            {stats.map((s) => (
              <div class="bg-paper px-4 py-6 md:px-6 md:py-8">
                <b class="block text-[clamp(44px,8vw,72px)] leading-none tracking-[-.05em]">{s.value}</b>
                <span class="text-[13px] font-bold uppercase">{s.label}</span>
              </div>
            ))}
          </div>

          <SectionHead id="work" title={<>Selected<br />work</>} note={String(projects.length).padStart(2, "0")} />
          {projects.map((p, i) => (
            <article class="grid gap-3 border-b-3 py-7 transition-colors md:grid-cols-[80px_1fr_1.2fr_200px] md:items-start md:gap-6 md:hover:bg-sun">
              <span class="text-xl font-bold">{String(i + 1).padStart(2, "0")}</span>
              <div>
                <h3 class="text-[28px] leading-none font-bold tracking-[-.03em] md:text-[32px]">{p.name}</h3>
                <p class="mt-2 text-sm font-bold uppercase">
                  {p.org ? `${p.org} · ` : ""}
                  {p.period}
                </p>
              </div>
              <div>
                <p>{p.summary}</p>
                <ul class="mt-3 flex flex-wrap gap-1.5">
                  {p.tags.map((t) => (
                    <li class="border-2 px-2 py-0.5 text-xs font-bold uppercase">{t}</li>
                  ))}
                </ul>
              </div>
              <p class="text-[44px] leading-none font-bold tracking-[-.04em] text-blue md:text-right">
                {p.metric.value}
                <small class="mt-1.5 block text-sm tracking-normal">{p.metric.label}</small>
              </p>
            </article>
          ))}

          <h3 class="pt-12 pb-4 text-2xl font-bold uppercase">More work</h3>
          <ul class="grid border-t-3 sm:grid-cols-2 sm:gap-x-8 lg:grid-cols-3">
            {moreWork.map((w) => (
              <li class="border-b-2 py-3">
                <b>{w.name}</b> <span class="opacity-70">— {w.desc}</span>
              </li>
            ))}
          </ul>

          <SectionHead id="experience" title="Experience" note="2017—now" />
          {jobs.map((j) => (
            <div class="grid gap-3 border-b-3 py-7 md:grid-cols-[200px_1fr_1.4fr] md:gap-6">
              <span class="h-fit w-fit bg-ink px-2 py-0.5 text-sm font-bold text-paper">{j.period}</span>
              <h3 class="text-[22px] leading-tight font-bold">
                {j.role}
                <span class="block font-medium opacity-70">{j.company}</span>
              </h3>
              <ul class="list-['→__'] space-y-1.5 pl-6">
                {j.points.map((pt) => (
                  <li>{pt}</li>
                ))}
              </ul>
            </div>
          ))}

          <SectionHead id="skills" title="Toolbox" note={`${skills.length} areas`} />
          {skills.map((s) => (
            <div class="grid gap-3 border-b-3 py-5 md:grid-cols-[280px_1fr] md:items-center">
              <h3 class="font-bold uppercase">{s.group}</h3>
              <ul class="flex flex-wrap gap-2">
                {s.items.map((it) => (
                  <li class="bg-ink px-3 py-1 font-medium text-paper">{it}</li>
                ))}
              </ul>
            </div>
          ))}

          <SectionHead id="reviews" title="Clients say" note="30+ reviews" />
          <div class="grid gap-[3px] border-b-3 bg-ink md:grid-cols-2">
            {reviews.map((r) => (
              <figure class="bg-paper py-8 pr-6 md:even:pl-8">
                <blockquote class="text-2xl leading-[1.15] font-medium tracking-[-.02em] md:text-[28px]">“{r.quote}”</blockquote>
                <figcaption class="mt-4 text-[13px] font-bold uppercase">
                  {r.by} — {r.from}
                </figcaption>
              </figure>
            ))}
          </div>

          <SectionHead id="about" title="Also" note="awards · school · life" />
          <div class="grid gap-[3px] border-b-3 bg-ink md:grid-cols-3">
            {about.map((a) => (
              <div class="bg-paper py-8 pr-6 md:not-first:pl-6">
                <h3 class="mb-4 text-xl font-bold uppercase">{a.title}</h3>
                <ul class="list-['→__'] space-y-2 pl-6">
                  {a.items.map((it) => (
                    <li>{it}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </main>

        <footer id="contact" class="mt-24 bg-blue py-20 text-white">
          <div class="mx-auto max-w-[1240px] px-4 md:px-6">
            <h2 class="text-[clamp(56px,11vw,160px)] leading-[.86] font-bold tracking-[-.05em] uppercase">
              Let's
              <br />
              work.
            </h2>
            <a class="mt-8 inline-block text-[clamp(20px,4vw,40px)] font-bold break-all text-sun underline decoration-3 underline-offset-6" href={`mailto:${profile.email}`}>
              {profile.email}
            </a>
            <div class="mt-8 flex flex-wrap gap-x-8 gap-y-3 font-bold uppercase">
              {links.map((l) => (
                <a class="hover:text-sun" href={l.url} target="_blank" rel="noopener">
                  {l.label} ↗
                </a>
              ))}
              <a class="hover:text-sun" href={profile.resume}>Resume ↗</a>
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}
