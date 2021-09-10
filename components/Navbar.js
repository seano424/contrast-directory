import Link from 'next/link'
import Button from './Button'
export default function Navbar() {
  return (
    <nav className="flex justify-between w-full mt-4 px-12 xl:px-0">
      <section className="flex items-center space-x-4">
        <Link href="/">
          <a className="text-primary flex items-center space-x-2">
            <svg
              width="16"
              height="32"
              viewBox="0 0 16 32"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M16 -6.99382e-07C11.7565 -5.13895e-07 7.68687 1.68571 4.68629 4.68629C1.68571 7.68687 -5.64497e-07 11.7565 -6.99382e-07 16C-8.34267e-07 20.2435 1.68571 24.3131 4.68629 27.3137C7.68687 30.3143 11.7565 32 16 32L16 16L16 -6.99382e-07Z"
                fill="#4D13D1"
              />
            </svg>
            <span className="font-bold text-lg">Contrast</span>
          </a>
        </Link>
        <Link href="/">
          <a className=" font-light text-gray-500 text-lg">Browse</a>
        </Link>
      </section>
      <section className="xl:hidden">
        <img src="/images/Hamburger.svg" alt="Hamburger" />
      </section>
      <section className="hidden xl:flex items-center space-x-4">
        <span className="flex relative items-center">
          <svg
            className="absolute left-8"
            width="20"
            height="20"
            viewBox="0 0 20 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g clipPath="url(#clip0)">
              <path
                d="M19.8408 18.0383L14.67 12.8675C15.6425 11.53 16.2175 9.885 16.2175 8.10833C16.2175 3.6375 12.58 0 8.10833 0C3.6375 0 0 3.6375 0 8.10833C0 12.58 3.6375 16.2167 8.10833 16.2167C9.80333 16.2167 11.3775 15.6942 12.6808 14.8017L17.8792 20L19.8408 18.0383ZM2.37833 8.10833C2.37833 4.94833 4.94917 2.3775 8.10917 2.3775C11.2692 2.3775 13.84 4.94833 13.84 8.10833C13.84 11.2683 11.2692 13.8392 8.10917 13.8392C4.94833 13.8392 2.37833 11.2683 2.37833 8.10833Z"
                fill="#9D9EA6"
              />
            </g>
            <defs>
              <clipPath id="clip0">
                <rect width="20" height="20" fill="white" />
              </clipPath>
            </defs>
          </svg>
        </span>
        <input
          type="text"
          className=" bg-neutral-200 h-[3.5rem] w-[15rem] pl-12 rounded focus:outline-none"
          placeholder="Search resources"
        />
        <Button />
      </section>
    </nav>
  )
}
