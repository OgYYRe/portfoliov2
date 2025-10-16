import ShinyText from '../components/ShinyText/ShinyText';
import "../css/Home.css"
import profilbild from '../assets/profil/profilbild.jpg';

export default function Home(){
    return (
        <div className="home-page">
            <div className="home-row">
                <img src={profilbild} alt="Profil" className="profile-img" />
                <div id='intro-container'>
                    <ShinyText text="Willkommen auf meiner Portfolio-Seite!
                    Mein Name ist Oguzhan Cetinkaya. Ich bin im Jahr 1992 in der Türkei geboren,
                    wo ich an der Universität Rechtwissenschaft studiert habe. Ich bin Anwalt.
                    Mein Interesse liegt mehr auf Mathematik, Technologie, deshalb habe ich mich entschieden,
                    Software-Entwickler zu sein. Dafür mache ich eine Berufslehre als Applikationsentwickler an der Benedict Schule.
                    Seit 2021 lebe ich in der Schweiz. Ich fühle mich hier sehr wohl." speed={3} />
                </div>
            </div>
            <div className="contact-row">
                <fieldset className="kontaktformular">
                    <legend>Schnellkontakt-Formular</legend>
                    <form name="contact" method="POST" data-netlify="true">
                        <input type="hidden" name="form-name" value="contact" />
                        <label htmlFor="name">Name:</label>
                        <input type="text" name="name" id="name" placeholder="Dein Name" required />
                        <label htmlFor="email">E-Mail:</label>
                        <input type="email" name="email" id="email" placeholder="deine@email.com" required />
                        <label htmlFor="message">Nachricht:</label>
                        <textarea name="message" id="message" placeholder="Deine Nachricht" required></textarea>
                        <button type="submit">Senden</button>
                    </form>
                    <br /><div id="result"></div>
                </fieldset>
            </div>
        </div>
    );
}