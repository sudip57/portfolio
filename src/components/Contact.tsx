import { FaPaperPlane } from 'react-icons/fa'
import SectionHeading from './SectionHeading'
import { motion } from 'framer-motion'
import useSectionInView from '../libs/hooks'
import { FormEvent } from 'react'
import emailjs from '@emailjs/browser'
const Contact = () => {
  const { ref } = useSectionInView('Contact')

  const sendEmail = (e: FormEvent) => {
    e.preventDefault()
    const formElement = e.target as HTMLFormElement

    emailjs
      .sendForm(
        'service_iwwft67',
        'template_arbpsxw',
        formElement,
        'U_GF7ZDhCoLYi93jm',
      )
      .then(
        (result) => {
          console.log(result.text)
        },
        (error) => {
          console.log(error.text)
        },
      )
    formElement.reset()
  }
  return (
    <motion.section
      className="mb-20 sm:mb-28 w-[min(100%,38rem)] text-center scroll-mt-28 "
      id="contact"
      ref={ref}
      initial={{
        opacity: 0,
      }}
      whileInView={{
        opacity: 1,
      }}
      transition={{
        duration: 1,
      }}
      viewport={{
        once: true,
      }}
    >
      <SectionHeading>Contact Me</SectionHeading>
      <p className="text-gray-700 -mt-6 dark:text-white/80">
        Please contact me directly at {''}
        <a className="underline" href="mailto:s.sudippaudel@gmail.com">
          s.sudippaudel@gmail.com
        </a>{' '}
        or through this form.
      </p>
      <form
        className="mt-10 flex flex-col dark:text-black"
        onSubmit={sendEmail}
      >
        <input
          type="email"
          className="h-14 rounded-lg px-4 borderBlack dark:bg-opacity-80 dark:bg-white dark:focus:bg-opacity-100 transition-all dark:outline-none"
          placeholder="Your email"
          name="email"
          required
          maxLength={500}
        />
        <textarea
          className="h-52 my-3 rounded-lg borderBlack p-4 resize-none dark:bg-opacity-80 dark:bg-white dark:focus:bg-opacity-100 transition-all dark:outline-none"
          placeholder="Your message"
          name="message"
          required
          maxLength={500}
        />
        <button
          type="submit"
          className="group flex justify-center items-center h-[3rem] w-[8rem] bg-gray-900 text-white rounded-full outline-none transition-all gap-2 focus:scale-110 hover:scale-110 active:scale-105 hover:bg-gray-950 dark:bg-white dark:bg-opacity-10"
        >
          Submit{' '}
          <FaPaperPlane className="text-xs opacity-70 transition-all group-hover:translate-x-1 group-hover:-translate-y-1 " />
        </button>
      </form>
    </motion.section>
  )
}

export default Contact
