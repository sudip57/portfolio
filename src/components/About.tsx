import SectionHeading from './SectionHeading'
import { motion } from 'framer-motion'
import useSectionInView from '../libs/hooks'

const About = () => {
  const { ref } = useSectionInView('About')

  return (
    <motion.section
      ref={ref}
      className="mb-28 max-w-[28rem] text-center leading-8 sm:mb-40 scroll-mt-28"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
      id="about"
    >
      <SectionHeading>About Me</SectionHeading>
      <p className="mb-3 text-justify">
        As a junior <span className="font-medium"> ReactJS</span> developer, I
        am committed to delivering innovative solutions that meet and exceed my
        client expectations.{' '}
        <span className="italic">My favorite part of programming</span> is the
        problem-solving aspect. I <span className="underline">love</span> the
        feeling of finally figuring out a solution to a problem. I possess a
        solid grasp of{' '}
        <span className="font-medium">
          ReactJS, Redux, JavaScript, HTML5/CSS3.
        </span>{' '}
        I am also familiar with TypeScript. I am always looking to learn new
        technologies. I am currently looking for a{' '}
        <span className="font-medium">full-time position</span> as a software
        developer.
      </p>
    </motion.section>
  )
}

export default About
