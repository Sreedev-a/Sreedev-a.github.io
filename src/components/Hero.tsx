import Image from "next/image";
import { ArrowDown, ArrowRight, Github, Linkedin, Mail, MapPin } from "lucide-react";
import { portfolio as p } from "@/data/portfolio";
import styles from "./Hero.module.css";

export function Hero() {
  return (
    <section className={`hero section ${styles.hero}`} id="home">
      <div className={`hero-copy ${styles.copy}`}>
        <span className="eyebrow">Building intelligent systems</span>
        <h1>Hi, I&apos;m Sreedev A.<br /><span>{p.person.role}</span></h1>
        <p className="lead">{p.person.summary}</p>
        <ul className={styles.focus} aria-label="Areas of focus">
          {p.person.focus.map((area) => <li key={area}>{area}</li>)}
        </ul>
        <p className="tagline">{p.person.tagline}</p>
        <div className="hero-buttons">
          <a className="button primary" href="#projects">View My Work <ArrowRight size={18} /></a>
          <a className="button" href={p.socials.resume} target="_blank" rel="noopener noreferrer">Download Resume</a>
        </div>
        <div className="hero-meta">
          <div className="social-row">
            <a href={p.socials.github} target="_blank" rel="noopener noreferrer" aria-label="GitHub"><Github /></a>
            <a href={p.socials.linkedin} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn"><Linkedin /></a>
            <a href={`mailto:${p.person.email}`} aria-label="Email"><Mail /></a>
          </div>
          <span><MapPin size={15} />{p.person.location}</span>
        </div>
      </div>
      <figure className={styles.portrait}>
        <Image
          src="/avatar/sreedev-portrait.png"
          alt="Portrait of Sreedev A"
          fill
          sizes="(max-width: 520px) calc(100vw - 40px), (max-width: 800px) 440px, 480px"
          preload
          className={styles.photo}
        />
      </figure>
      <a className="scroll" href="#about" aria-label="Scroll to About"><span>Scroll</span><ArrowDown size={16} /></a>
    </section>
  );
}
