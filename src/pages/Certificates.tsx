import "../css/Certificates.css";
import ibmSoftware from '../assets/certificates/ibm-software.png';
import ibmCloud from '../assets/certificates/ibm-cloud.png';
import ibmHtml from '../assets/certificates/ibm-html.png';
import ibmGit from '../assets/certificates/ibm-git.png';
import sapCode from '../assets/certificates/sap-codejam.png';
import { useState } from "react";

const certificates = [
  {
    image: ibmSoftware,
    title: "Introduction to Software Engineering",
    link: "https://coursera.org/verify/CLDR9RTJIS8T"
  },
  {
    image: ibmCloud,
    title: "Introduction to Cloud Computing",
    link: "https://coursera.org/verify/4SXECUMY3ATA"
  },
  {
    image: ibmHtml,
    title: "Introduction to HTML, CSS, & JavaScript",
    link: "https://coursera.org/verify/SMV3LJHJR70Y"
  },
  {
    image: ibmGit,
    title: "Getting Started with Git and GitHub",
    link: "https://coursera.org/verify/KXUVXPBQR7F7"
  },
  {
    image: sapCode,
    title: "Developer Skills - CodeJam: SAP Build - Create Event-Based Processes",
    link: "https://www.credly.com/badges/b67072c7-b760-4170-8e75-ace60fedf551/public_url"
  }
];

export default function Certificates() {
  const [modalIndex, setModalIndex] = useState<number | null>(null);
  const openModal = (i: number) => setModalIndex(i);
  const closeModal = () => setModalIndex(null);
  return (
    <div className="certificates-page">
      <div className="certificates-title">Meine Zertifikate</div>
      <div className="certificates-grid">
        {certificates.map((c, i) => (
          <div className="certificate-card" key={i}>
            <img className="certificate-image" src={c.image} alt={c.title} onClick={() => openModal(i)} style={{cursor:'pointer'}} />
            <div className="certificate-title">{c.title}</div>
            {c.link && (
              <a className="certificate-link" href={c.link} target="_blank" rel="noopener noreferrer">Zertifikat ansehen</a>
            )}
          </div>
        ))}
      </div>
      {modalIndex !== null && (
        <div className="certificate-modal-overlay" onClick={closeModal}>
          <div className="certificate-modal" onClick={e => e.stopPropagation()}>
            <img src={certificates[modalIndex].image} alt={certificates[modalIndex].title} className="certificate-modal-image" />
            <button className="certificate-modal-close" onClick={closeModal}>×</button>
          </div>
        </div>
      )}
    </div>
  );
}