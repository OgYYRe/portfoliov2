import { useState } from "react";
import "../css/Projects.css";
import sertifika from '../assets/projects/sertifika.png';
import flora from '../assets/projects/flora.png';
import powerShell from '../assets/projects/powershell.png';
import toDoList from '../assets/projects/todoList.png';


const projects = [
  {
    image: sertifika,
    title: "Projekt 1",
    desc: "Mit Next.js entwickelt, enthält ein Mini-Backend und eine Supabase-Datenbank.",
    link: "https://www.sertifikahizmetleri.com/"
  },
  {
    image: flora,
    title: "Projekt 2",
    desc: "Für die Präsentation meiner Freundin im Uni-Modul erstellt.",
    link: "https://flora-co-wp.vercel.app/"
  },
  {
    image: powerShell,
    title: "Projekt 3",
    desc: "Abschlussprojekt für einen Informatik-Modul an meiner Schule."
  },
  {
    image: toDoList,
    title: "Projekt 4",
    desc: "Web-App, die wir als Zweierteam für einen anderen Modul entwickelt haben."
  }
];

export default function Projects() {
  const [modalIndex, setModalIndex] = useState<number | null>(null);
  const openModal = (i: number) => setModalIndex(i);
  const closeModal = () => setModalIndex(null);
  return (
    <div className="projects-page">
      <div className="projects-title">Meine Projekte</div>
      <div className="projects-grid">
        {projects.map((p, i) => (
          <div className="project-card" key={i}>
            <img className="project-image" src={p.image} alt={p.title} onClick={() => openModal(i)} style={{cursor:'pointer'}} />
            <div className="project-title">{p.title}</div>
            <div className="project-desc">{p.desc}</div>
            {p.link && p.link !== "#" && (
              <a className="project-link" href={p.link} target="_blank" rel="noopener noreferrer">Zur Webseite</a>
            )}
          </div>
        ))}
      </div>
      {modalIndex !== null && (
        <div className="project-modal-overlay" onClick={closeModal}>
          <div className="project-modal-popup" onClick={e => e.stopPropagation()}>
            <button className="project-modal-close" onClick={closeModal}>×</button>
            <img src={projects[modalIndex].image} alt={projects[modalIndex].title} className="project-modal-image" />
            <div className="project-modal-title">{projects[modalIndex].title}</div>
            <div className="project-modal-desc">{projects[modalIndex].desc}</div>
            {projects[modalIndex].link && projects[modalIndex].link !== "#" && (
              <a className="project-modal-link" href={projects[modalIndex].link} target="_blank" rel="noopener noreferrer">Zur Webseite</a>
            )}
          </div>
        </div>
      )}
    </div>
  );
}