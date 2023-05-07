import { useState } from 'react'
import css from './contact.module.css'

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
        <div id='connect' className={css.connect}>
            <p className={css.contactHeader}>Connect</p>
            <hr className={css[`${theme}HR`]}/>
            <div className={css.contactFormContainer}>
                <p className={css.contactFormText}>If you need a hand on a project, are keen to collaborate or just want to have a chat, feel free to send me a message and I will get back to you as soon as I can!</p>
                <form action="https://send.pageclip.co/qJ8wrVg59JAHR9HvfvOVpFxlqp3LvzKW" className={'pageclip-form' && css.contactForm} method="post" onSubmit={onSubmit}>
                    <input type="hidden" name="_subject" value="Portfolio - new message!"></input>
                    <label htmlFor="name" className={css.contactFormLabel} >Name</label>
                    <input name="name" id="name" type="text" className={`${css.contactFormInput} ${css[`${theme}Input`]}`} required/>
                    <label htmlFor="email" className={css.contactFormLabel}>Email</label>
                    <input name="email" id="email" type="email" className={`${css.contactFormInput} ${css[`${theme}Input`]}`} required />
                    <label htmlFor="message" className={css.contactFormLabel}>Message</label>
                    <textarea id="message" name="message" placeholder="Write your message here.." rows='4'className={`${css.contactFormMessage} ${css[`${theme}Input`]}`} required></textarea>
                    <button type="submit" className={`pageclip-form__submit ${css.contactFormButton} ${css[`${theme}ContactButton`]}`}>Say Hello!</button>
                    {showSuccessMessage && <div className={css.successMessage}>Successfully sent!</div>}
                </form>
            </div>
        </div>
    )
}
