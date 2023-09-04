import { FaPaperPlane } from 'react-icons/fa'
import SectionHeading from './SectionHeading'
import { motion } from 'framer-motion'
import useSectionInView from '../libs/hooks'
import { ChangeEvent, useState } from 'react'

const Contact = () => {
  const { ref } = useSectionInView('Contact')
  const [formState, setFormState] = useState({})
  // const config = {
  //   Username: 's.sudippaudel@gmail.com',
  //   Password: '099E39D1F5788D1FB28D690021D79B02AF23',
  //   Host: 'smtp.elasticemail.com',
  //   Port: 2525,
  //   To: 'them@website.com',
  //   From: 'you@isp.com',
  //   Subject: 'This is the subject',
  //   Body: 'And this is the body',
  // }

  const changeHandler = (
    event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    setFormState({ ...formState, [event.target.value]: event.target.value })
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
      <form className="mt-10 flex flex-col dark:text-black">
        <input
          type="email"
          className="h-14 rounded-lg px-4 borderBlack dark:bg-opacity-80 dark:bg-white dark:focus:bg-opacity-100 transition-all dark:outline-none"
          placeholder="Your email"
          name="email"
          required
          maxLength={500}
          onChange={changeHandler}
        />
        <textarea
          className="h-52 my-3 rounded-lg borderBlack p-4 resize-none dark:bg-opacity-80 dark:bg-white dark:focus:bg-opacity-100 transition-all dark:outline-none"
          placeholder="Your message"
          name="textarea"
          required
          maxLength={500}
          onChange={changeHandler}
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
