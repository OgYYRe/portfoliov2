import {Route, Routes} from "react-router-dom";
import Home from "./pages/Home.tsx";
import Header from "./components/Header/Header.tsx";
import About from "./pages/About.tsx";
import Certificates from "./pages/Certificates.tsx";
import Projects from "./pages/Projects.tsx";
import Skills from "./pages/Skills.tsx";
import Impressum from "./pages/Impressum.tsx";
import Footer from "./components/Footer/Footer.tsx";
import LiquidEther  from './components/LiquidEther/LiquidEther';
import "./App.css"

export default function App(){
    return (
        <div className={"app"} style={{ minHeight: "100dvh", display: "flex", flexDirection: "column" }}>
            <LiquidEther //Background
                colors={['#5227FF', '#FF9FFC', '#B19EEF']}
                mouseForce={20}
                cursorSize={100}
                isViscous={false}
                viscous={30}
                iterationsViscous={32}
                iterationsPoisson={32}
                resolution={0.5}
                isBounce={false}
                autoDemo={true}
                autoSpeed={0.5}
                autoIntensity={2.2}
                takeoverDuration={0.25}
                autoResumeDelay={3000}
                autoRampDuration={0.6}
                style={{
                    position: 'fixed',
                    inset: 0,
                    zIndex: -1,
                    width: '100%',
                    height: '100%',
                    pointerEvents: 'none'
                }}
            />


            <Header />

            <main className={"main"} style={{ flex: 1 }}>
                <div className={"container"}>
                <Routes>
                    <Route path="/" element={<Home/>} />
                    <Route path="/about" element={<About/>}/>
                    <Route path="/certificates" element={<Certificates/>}/>
                    <Route path="/projects" element={<Projects/>}/>
                    <Route path="/skills" element={<Skills/>}/>
                    <Route path="/impressum" element={<Impressum/>}/>
                </Routes>
                </div>
            </main>



            <Footer />
        </div>

    );
}