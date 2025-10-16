import Link from "@mui/material/Link";
import ElectricBorder from "../ElectricBorder/ElectricBorder.tsx";
import "./Footer.css";

export default function Footer() {
    return (
        <footer className="footer">
            <ElectricBorder color="#7df9ff" speed={0.3} chaos={0.1} thickness={0.5}>
                <div style={{ borderRadius: 8, padding: "12px 20px", width: "max-content", textAlign: "center" }}>
                    📧 <Link href="mailto:cetinkaya-oguzhan@hotmail.com" color="inherit" underline="hover">cetinkaya-oguzhan@hotmail.com</Link>
                    <br />
                    🔗 <Link href="https://www.linkedin.com/in/-oguzhan-cetinkaya/" target="_blank" color="inherit" underline="hover">linkedin.com/in/oguzhan-cetinkaya</Link>
                    <br />
                    🐱 <Link href="https://github.com/OgYYRe" target="_blank" color="inherit" underline="hover">github.com/OgYYRe</Link>
                    <br />
                    📍 Zürich, Schweiz
                    <br />
                    <Link href="/impressum" color="inherit" underline="hover">Impressum</Link>
                </div>
            </ElectricBorder>
        </footer>
    );
}
