import { useState } from 'react'

export const Contact = ({ theme }) => {
    const [showSuccessMessage, setSuccessMessage] = useState(false)

    const onSubmit = () => setSuccessMessage(true)

    const form = document.querySelector('.pageclip-form')
    form && window.Pageclip.form(form, {
        onSubmit: function (event) { },
        onResponse: function (error, response) { console.log({ error, response }) },
        successTemplate: '<span>Thank you!</span>'
    })

    return (
        <div id='connect'>
            <p className="contactHeader">Connect</p>
            <hr className={`${theme}HR`}/>
            <div className="contactFormContainer">
                <p className="contactFormText">If you need a hand on a project, are keen to collaborate or just want to have a chat, feel free to send me a message and I will get back to you as soon as I can!</p>
                <form action="https://send.pageclip.co/qJ8wrVg59JAHR9HvfvOVpFxlqp3LvzKW" className="pageclip-form contactForm" method="post" onSubmit={onSubmit}>
                    <input type="hidden" name="_subject" value="Portfolio - new message!"></input>
                    <label htmlFor="name" className="contactFormLabel" >Name</label>
                    <input name="name" id="name" type="text" className={`contactFormInput ${theme}Input`} required/>
                    <label htmlFor="email" className="contactFormLabel">Email</label>
                    <input name="email" id="email" type="email" className={`contactFormInput ${theme}Input`} required />
                    <label htmlFor="message" className="contactFormLabel">Message</label>
                    <textarea id="message" name="message" placeholder="Write your message here.." rows='4'className={`contactFormMessage ${theme}Input`} required></textarea>
                    <button type="submit" className='pageclip-form__submit'>Say Hello!</button>
                    {showSuccessMessage && <div className='successMessage'>Successfully sent!</div>}
                </form>
            </div>
        </div>
    )
}
