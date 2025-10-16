import LogoLoop from '../components/LogoLoop/LogoLoop';
import "../css/Skills.css"
import cssLogo from '../assets/imageLogos/css.png';
import jsLogo from '../assets/imageLogos/javascript.png';
import tsLogo from '../assets/imageLogos/typescript.png';
import pythonLogo from '../assets/imageLogos/python.png';
import reactLogo from '../assets/imageLogos/react.png';
import nodejsLogo from '../assets/imageLogos/nodejs.png';
import mongodbLogo from '../assets/imageLogos/mongodb.png';
import mysqlLogo from '../assets/imageLogos/mysql.png';
import supaBaseLogo from '../assets/imageLogos/supabase.png';
import dockerLogo from '../assets/imageLogos/docker.png';
import vscode from '../assets/imageLogos/vscode.png';
import jetbrains from '../assets/imageLogos/jetbrains.png';


const languageLogos = [
    { src: cssLogo, alt: "CSS"},
    { src: jsLogo, alt: "JavaScript" },
    { src: tsLogo, alt: "TypeScript"},
    { src: pythonLogo, alt: "Python"},
];

const frameworkLogos = [
    { src: reactLogo, alt: "React",  },
    { src: nodejsLogo, alt: "Node.js" },
];

const databaseLogos = [
    { src: mongodbLogo, alt: "MongoDB"},
    { src: mysqlLogo, alt: "MySQL"},
    { src: supaBaseLogo, alt: "SupaBase"},
];

const toolLogos = [
    { src: vscode, alt: "VS Code"},
    { src: dockerLogo, alt: "Docker"},
    { src: jetbrains, alt: "JetBrains"},
];

export default function Skills() {
    return(
        <div className="skills-page">
            <div>
                <h1>Meine technischen Fähigkeiten</h1>
                <p>Hier sind einige der Technologien und Werkzeuge, mit denen ich Erfahrung habe:</p>
            </div>

            <div>
                <h2>Sprachen & Styles(JavaScript, TypeScript, Python, CSS)</h2>
            </div>

            <div style={{ height: '200px', position: 'relative', overflow: 'hidden'}}>
                <LogoLoop
                    logos={languageLogos}
                    speed={50}
                    direction="left"
                    logoHeight={50}
                    gap={100}
                    pauseOnHover
                    scaleOnHover
                    fadeOut
                    fadeOutColor="#ffffff"
                    ariaLabel="Sprachen und Styles Logos"
                />
            </div>

            <div>
                <h2>Frameworks & Runtimes (React, Node.js)</h2>
            </div>
            <div style={{ height: '200px', position: 'relative', overflow: 'hidden'}}>
                <LogoLoop
                    logos={frameworkLogos}
                    speed={50}
                    direction="right"
                    logoHeight={45}
                    gap={100}
                    pauseOnHover
                    scaleOnHover
                    fadeOut
                    fadeOutColor="#ffffff"
                    ariaLabel="Runtimes und Bibliotheken Logos"
                />
            </div>

            <div>
                <h2>Datenbanken (MongoDB, MySQL, Supabase)</h2>
            </div>
            <div style={{ height: '200px', position: 'relative', overflow: 'hidden'}}>
                <LogoLoop
                    logos={databaseLogos}
                    speed={75}
                    direction="left"
                    logoHeight={40}
                    gap={100}
                    pauseOnHover
                    scaleOnHover
                    fadeOut
                    fadeOutColor="#ffffff"
                    ariaLabel="Datenbanken Logos"
                />
            </div>

            <div>
                <h2>Tools (VS Code, Docker, JetBrains)</h2>
            </div>
            <div style={{ height: '200px', position: 'relative', overflow: 'hidden'}}>
                <LogoLoop
                    logos={toolLogos}
                    speed={75}
                    direction="right"
                    logoHeight={35}
                    gap={500}
                    pauseOnHover
                    scaleOnHover
                    fadeOut
                    fadeOutColor="#ffffff"
                    ariaLabel="Tools Logos"
                />
            </div>

        </div>
    )
}