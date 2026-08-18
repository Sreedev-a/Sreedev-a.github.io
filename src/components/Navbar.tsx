"use client";
import { useEffect, useState } from "react";
import { Github, Linkedin, Menu, X } from "lucide-react";
import { portfolio as p } from "@/data/portfolio";
export function Navbar() {
 const [open,setOpen]=useState(false); const [scrolled,setScrolled]=useState(false);
 useEffect(()=>{const on=()=>setScrolled(scrollY>20); on(); addEventListener("scroll",on,{passive:true}); return()=>removeEventListener("scroll",on)},[]);
 return <header className={`nav-wrap ${scrolled?"scrolled":""}`}><nav aria-label="Main navigation"><a className="wordmark" href="#home">Sreedev A<span>.</span></a><div className={`nav-links ${open?"open":""}`}>{p.nav.map(n=><a key={n} href={`#${n.toLowerCase()}`} onClick={()=>setOpen(false)}>{n}</a>)}</div><div className="nav-actions"><a href={p.socials.github} target="_blank" aria-label="GitHub"><Github size={18}/></a><a href={p.socials.linkedin} target="_blank" aria-label="LinkedIn"><Linkedin size={18}/></a><a className="resume-mini" href={p.socials.resume} target="_blank">Resume</a><button className="menu" onClick={()=>setOpen(!open)} aria-label="Toggle menu" aria-expanded={open}>{open?<X/>:<Menu/>}</button></div></nav></header>
}
