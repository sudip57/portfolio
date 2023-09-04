const Footer = () => {
  const date = new Date()
  const year = date.getFullYear()
  return (
    <footer className="mb-10 px-4 text-center text-gray-500">
      <small className="mb-2 block text-xs">
        &copy; {year} Sudip. All rights reserved
      </small>
      <p className="text-xs">
        <span className="font-semibold">About this website:</span> built with
        React, Typescript, Tailwind Css, Framer Motion
      </p>
    </footer>
  )
}

export default Footer
