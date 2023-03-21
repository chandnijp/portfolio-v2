export const Contact = ({ theme }) => (
        <div id='contact'>
            <p className="contactHeader">Contact</p>
            <hr />
            <div className="contactForm">
                <p className="contactFormText">If you need a hand on a project, want to collaborate or just want to say hello, feel free to contact me and I will get back to you as soon as I can!</p>
                <button className={`${theme}ContactButton`}><a href="mailto:chandnipatel10@hotmail.com?" className={`${theme}ContactLink`}>Get In Touch</a></button>
            </div>
        </div>
    )
