import { useRef, useEffect, useState } from 'react'
import axios from 'axios'

export default function Resources() {
  const [fonts, setFonts] = useState([])
  const ref = useRef()
  console.log(fonts)
  useEffect(() => {
    axios
      .get('/data.json')
      .then((res) => setFonts(res.data))
      .catch((err) => console.log(err))
  }, [])

  useEffect(() => {
    ref.current.focus()
  }, [])
  return (
    <section className=" my-20 px-12 xl:px-0">
      <div className="flex w-full justify-between">
        <div className="flex space-x-4">
          <button
            ref={ref}
            className=" focus:bg-neutral-200 focus:outline-none rounded focus:font-bold h-10 w-28"
          >
            Fonts
          </button>
          <button className=" focus:bg-neutral-200 focus:outline-none rounded focus:font-bold h-10 w-28">
            Mockups
          </button>
          <button className=" focus:bg-neutral-200 focus:outline-none rounded focus:font-bold h-10 w-28">
            Illustrations
          </button>
          <button className=" focus:bg-neutral-200 focus:outline-none rounded focus:font-bold h-10 w-28">
            Icons
          </button>
        </div>
        <div>
          <button className="flex items-center justify-center space-x-2 border border-neutral-100 focus:outline-none rounded focus:font-bold h-10 w-28">
            <span>Sort by</span>
            <span>
              <svg
                width="11"
                height="6"
                viewBox="0 0 11 6"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M1 0.75L5.5 5.25L10 0.75" stroke="#595959" />
              </svg>
            </span>
          </button>
        </div>
      </div>
      <div className="flex  flex-col  items-center justify-center md:grid md:grid-cols-2 xl:grid-cols-3 gap-7 mt-14">
        {fonts.map((font, idx) => (
          <div
            key={idx}
            className="p-10 w-full xl:w-[22.5rem] xl:h-[17rem] border border-neutral-100 flex flex-col justify-center rounded"
          >
            <div className="xl:w-[18rem] mx-auto">
              <img
                className="xl:w-20 self-start h-20 object-fill"
                src={`/fonts/${font.Icon}`}
                alt=""
              />
              <h3 className="font-bold mt-2">{font.Title}</h3>
              <div className="xl:w-[18rem]">
                <p className="my-4">{font.Description}</p>
                <a
                  className="font-bold underline"
                  target="_blank"
                  href={font.Link}
                >
                  Visit Resource →
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
