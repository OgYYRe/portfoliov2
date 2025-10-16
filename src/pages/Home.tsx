import ShinyText from '../components/ShinyText/ShinyText';
import "../css/Home.css"

export default function Home(){
    return (
    <div id='intro-container'>
        <ShinyText text="Willkommen auf meiner Portfolio-Seite!
        Mein Name ist Oguzhan Cetinkaya. Ich bin im Jahr 1992 in der Türkei geboren,
        wo ich an der Universität Rechtwissenschaft studiert habe. Ich bin Anwalt.
        Mein Interesse liegt mehr auf Mathematik, Technologie, deshalb habe ich mich entschieden,
        Software-Entwickler zu sein. Dafür mache ich eine Berufslehre als Applikationsentwickler an der Benedict Schule.
        Seit 2021 lebe ich in der Schweiz. Ich fühle mich hier sehr wohl." speed={3} />
    </div>
    );
}