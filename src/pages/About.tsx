import ChromaGrid from "../components/ChromaGrid/ChromaGrid.tsx";
import grill from "../assets/aboutme/grill.png";
import velo from "../assets/aboutme/velo.png";
import wandern from "../assets/aboutme/wandern.png";
import code from "../assets/aboutme/code.png";
import reise from "../assets/aboutme/reise.jpg";



const items = [
    {
        image: grill,
        title: "Grill",
        subtitle: "am Vierwaldstättersee",
        handle: "@URI",
        borderColor: "#3B82F6",
        gradient: "linear-gradient(145deg, #3B82F6, #000)",
        url: "https://maps.app.goo.gl/NJ1YRsaBnMQzSVGPA?g_st=ipc"
    },
    {
        image: velo,
        title: "Velofahren",
        subtitle: "am Greifensee",
        handle: "@ZÜRICH",
        borderColor: "#f63b3b",
        gradient: "linear-gradient(145deg, #3B82F6, #000)",
        url: "https://maps.app.goo.gl/sHuKFVF4sodDR9fA9"
    },
    {
        image: wandern,
        title: "Wandern",
        subtitle: "mit Kollegen",
        handle: "@ZÜRICH",
        borderColor: "#703bf6",
        gradient: "linear-gradient(145deg, #3B82F6, #000)",
        url: "https://maps.app.goo.gl/DTGgpdx9MqUAbDnC8"
    },
    {
        image: code,
        title: "Coding Event",
        subtitle: "am See Vierkant See",
        handle: "@ZUG",
        borderColor: "#ffffff",
        gradient: "linear-gradient(145deg, #3B82F6, #000)",
        url: "https://maps.app.goo.gl/T5qYj4u3r1cxbpYB6"
    },
    {
        image: reise,
        title: "Reisen",
        subtitle: "am See Vierkant See",
        handle: "@TESSIN",
        borderColor: "#e33bf6",
        gradient: "linear-gradient(145deg, #3B82F6, #000)",
        url: "https://maps.app.goo.gl/SpVa371GaVmbqN2ZA?g_st=ipc"
    }
];


export default function About() {
    return(
        <div>
            <div className="album" style={{ textAlign: 'center', padding: '20px', marginTop:'120px' }}>
                Meine Hobbies & Manche Aktivitäten

            <div style={{ position: 'relative' }}>
                <ChromaGrid
                    items={items}
                    radius={300}
                    damping={0.45}
                    fadeOut={0.6}
                    ease="power3.out"
                />
            </div>

            </div>
        </div>
    )
}