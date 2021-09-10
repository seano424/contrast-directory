export default function Footer() {
  return (
    <footer className="flex flex-col lg:flex-row w-full h-48 gap-8 mb-20 px-12">
      <div className="flex flex-col space-y-3">
        <h4 className="flex items-center space-x-2 text-primary">
          <img src="/images/logo.svg" alt="Logo image" />
          <span>Contrast</span>
        </h4>
        <p className="w-[29rem] text-neutral-300 font-light">
          Explore a collection of 3400+ curated design resources, both free and
          paid, developers can use to create landing pages quicker.{' '}
        </p>
      </div>
      <div className="grid grid-cols-4 w-full">
        <div className="flex flex-col space-y-2">
          <h4 className="mb-2">Resources</h4>
          <p className="text-neutral-300 font-light">Fonts</p>
          <p className="text-neutral-300 font-light">Illustrations</p>
          <p className="text-neutral-300 font-light">Mockups</p>
          <p className="text-neutral-300 font-light">Icons</p>
          <p className="text-neutral-300 font-light">Books</p>
        </div>
        <div className="flex flex-col space-y-2">
          <h4 className="mb-2">Company</h4>
          <p className="text-neutral-300 font-light">About</p>
          <p className="text-neutral-300 font-light">Blog</p>
        </div>
        <div className="flex flex-col space-y-2">
          <h4 className="mb-2">Support</h4>
          <p className="text-neutral-300 font-light">FAQ</p>
          <p className="text-neutral-300 font-light">Contact</p>
        </div>
        <div className="flex flex-col space-y-2">
          <h4 className="mb-2">Sponsor</h4>
          <p className="text-neutral-300 font-light">Sponsor Resource</p>
        </div>
      </div>
    </footer>
  )
}
