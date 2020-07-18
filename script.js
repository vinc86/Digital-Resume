'use strict'

const sideButtons = document.querySelectorAll('.side-section-title');
const btnEn = document.querySelector('.btn-en');
const btnDe = document.querySelector('.btn-de');

//text parts
const languages = document.querySelector('.languages');
const aboutParagraph = document.querySelector('.about');
const content = document.querySelector('.content');


/* //switch to german
btnDe.addEventListener('click', () => {
    sideButtons.forEach(button => {
        if (button.innerText === "CAREER GOALS") {
            button.innerText = "KARRIEREZIEL";
        }
        if (button.innerText === "LANGUAGES") {
            button.innerText = "SPRACHEN";
        }
    })

    aboutParagraph.innerHTML = `Full-Stack-Webentwickler mit 2 Jahren Erfahrung, der an einer
    1-Jahres-Intensivschulung in Full-Stack-Webentwicklung (MERN-Stack) teilnimmt. Ich suche eine Position, in der ich meine
    jüngsten Erfahrungen anwenden kann, um mich selbst herauszufordern und lösungsorientierte
    Ansätze zu liefern`;
    aboutParagraph.style.marginBottom = '-138px';

    languages.innerHTML = `
    <ul>
    <li>• <b>Italienisch:</b> Muttersprache</li>
    <li>• <b>Deutsch:</b> Wort und Schrift</li>
    <li>• <b>Englisch:</b> fließend Wort und Schrift</li>
</ul>
    `
    content.innerHTML = `
    <section class="learning-paths">
                    <h2 class='section-title'>RELEVANTEN AUSBILDUNGEN</h2>
                    <div class="section-content">
                        <div class="content">
                            <h2 class="content-title">Fullstack Web Development</h2>
                            <h3 class='content-sub-title'>DCI Digital CAreer Institute GmbH, Berlin</h3>
                            <ul>
                                <li>• Durchführung einer einjährigen Vollzeit-Weiterbildung unter Einbeziehung von
                                    Technologien aus dem MERN-Stack.</li>
                                <li>• Fertigstellung mehrerer kleiner und eines abschließenden großen Projekts
                                    einschließlich Front- und Backend.</li>
                            </ul>
                        </div>
                        <div class="content">
                            <h2 class="content-title">Software Developer Aufbaukurs</h2>
                            <h3 class='content-sub-title'>One Way Informatic, Rom - Italien</h3>
                            <ul>
                                <li>• Basiskurs C++ vermittlung von grundlegende Kenntnisse zur Programmierung in der
                                    Programmiersprache C++.</li>
                                <li>• Strukturierte Analyse, Erstellung von Blockdiagrammen, Object Oriented Programming
                                </li>
                            </ul>
                        </div>
                    </div>
                </section>
                <section class="experience">
                    <h2 class='section-title'>AKTUELLE ERFAHRUNG</h2>
                    <div class="content">
                        <h2 class="content-title">Tutor</h2>
                        <h3 class='content-sub-title'>DCI Digital Career Institute GmbH, Berlin</h3>
                        <ul>
                            <li>• Unterstützung bei der Durchführung von Übungen, vertieftes Lernen von Konzepten und
                                Logik
                                in Bezug auf das Schreiben von Code für Front- und Backend-Technologien</li>
                        </ul>
                    </div>
                </section>
    `
})


 */



/* 
//swith to english

btnEn.addEventListener('click', () => {
    sideButtons.forEach(button => {
        if (button.innerText === "KARRIEREZIEL") {
            button.innerText = "CAREER GOALS";
        }
        if (button.innerText === "SPRACHEN") {
            button.innerText = "LANGUAGES";
        }
    })

    aboutParagraph.innerText = "Full-stack web developer with 2 years\n of experience participating in a 1-year intensive training in full-stack web development (MERN stack).\n I'm looking for a position where I can apply my recent experience to challenge myself and deliver solution-oriented approaches";
    aboutParagraph.style.lineHeight = '17.2px';

    languages.innerHTML = `
    <ul>
    <li>• <b>Italian:</b> Mother tongue</li>
    <li>• <b>German:</b> Spoken and Written</li>
    <li>• <b>English:</b> fluent Spoken und Written</li>
</ul>
    `
    content.innerHTML = `
    <section class="learning-paths">
                    <h2 class='section-title'>RELEVANT TRAINING</h2>
                    <div class="section-content">
                        <div class="content">
                            <h2 class="content-title">Fullstack Web Development</h2>
                            <h3 class='content-sub-title'>DCI Digital CAreer Institute GmbH, Berlin</h3>
                            <ul>
                                <li>• Accomplishing a one-year-full-time training including technologies from MERN
                                stack</li>
                                <li>• Completing multiple small and one final large practical project to practise
                                programming skills</li>
                            </ul>
                        </div>
                        <div class="content">
                            <h2 class="content-title">Software Developer Aufbaukurs</h2>
                            <h3 class='content-sub-title'>One Way Informatic, Rom - Italien</h3>
                            <ul>
                                <li>• Basic C++ course to impart basic knowledge of programming in the programming language C++.</li>
                                <li>• Structured analysis, creation of block diagrams, Object Oriented Programming
                                </li>
                            </ul>
                        </div>
                    </div>
                </section>
                <section class="experience">
                    <h2 class='section-title'>CURRENT EXPERIENCE</h2>
                    <div class="content">
                        <h2 class="content-title">Tutor</h2>
                        <h3 class='content-sub-title'>DCI Digital Career Institute GmbH, Berlin</h3>
                        <ul>
                            <li>• Support in conducting exercises, in-depth learning of concepts and logic related to writing code for front- and backend technologies</li>
                        </ul>
                    </div>
                </section>
    
    `
})
 */

sideButtons.forEach(button => {
    button.addEventListener('click', (e) => {
        const nextSiblingClass = e.target.nextElementSibling.classList

        if (nextSiblingClass.contains('about')) {
            const about = document.querySelector('.about');
            about.classList.toggle('open-about');
        } else if (nextSiblingClass.contains('skills-container')) {
            const skills = document.querySelector('.skills-container');
            skills.classList.toggle('open-skills');
        } else {
            const skills = document.querySelector('.languages');
            skills.classList.toggle('open-languages');
        }

    })
})