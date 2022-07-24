import { useEffect, useState } from 'react'
import Loader from 'react-loaders'
import { useRef } from 'react'
import emailjs from '@emailjs/browser'
import AnimatedLetters from '../AnimatedLetters'
import './index.scss'

const Contact = () => {
  const [letterClass, setLetterClass] = useState('text-animate')
  const form = useRef()

  useEffect(() => {
    async function changeClass() {
      await setTimeout(() => {
        setLetterClass('text-animate-hover')
      }, 4000)
    }
    changeClass()
  }, [])

  const sendEmail = (e) => {
    e.preventDefault()

    emailjs
      .sendForm(
        'service_kyflqxk',
        'template_vdsk90s',
        form.current,
        'gt3Zfth5Wt6lJOCcX'
      )
      .then(
        () => {
          alert('Your message has been sent!')
          window.location.reload(false)
        },
        () => {
          alert('Something went wrong, please try again!')
        }
      )
  }

  return (
    <>
      <div className="container contact-page">
        <div className="container__row">
          <div className="text-zone container__col1">
            <h1>
              <AnimatedLetters
                letterClass={letterClass}
                strArray={['C', 'o', 'n', 't', 'a', 'c', 't', ' ', 'm', 'e']}
                idx={15}
              />
            </h1>
            <p>
              I am interested in freelance opportunities - especially ambitious
              or large projects. However, if you have other request or question,
              don't hesitate to contact me using below form either.
            </p>
            <div className="contact-form">
              <form ref={form} onSubmit={sendEmail}>
                <ul>
                  <li className="half">
                    <input
                      placeholder="Name"
                      type="text"
                      name="from_name"
                      id="from_name"
                      required
                    />
                  </li>
                  <li className="half">
                    <input
                      placeholder="Email"
                      type="email"
                      name="email"
                      id="email"
                      required
                    />
                  </li>
                  <li>
                    <input
                      placeholder="Subject"
                      type="text"
                      name="subject"
                      id="subject"
                      required
                    />
                  </li>
                  <li>
                    <textarea
                      placeholder="Message"
                      name="message"
                      id="message"
                      required
                    ></textarea>
                  </li>
                  <li>
                    <input type="submit" className="flat-button" value="SEND" />
                  </li>
                </ul>
              </form>
            </div>
          </div>
          <div className="container__col2">
          </div>
        </div>
      </div>
      <Loader type="line-scale-pulse-out-rapid" />
    </>
  )
}

export default Contact
