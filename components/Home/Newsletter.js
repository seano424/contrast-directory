export default function Newsletter() {
  return (
    <section className="flex flex-col xl:grid grid-cols-2 bg-primary rounded mb-20 xl:mx-0">
      <div className="text-white p-12 xl:p-0 flex flex-col justify-center xl:w-[32rem] xl:mx-auto">
        <div className="flex xl:flex-col">
          <h2 className=" text-2xl font-bold">
            Receive design resources every week.
          </h2>
          <h2 className=" text-2xl font-bold mb-2">Straight to your inbox.</h2>
        </div>
        <p className="xl:w-[28rem] text-neutral-100">
          Discover dozens of design resources each week from educational
          material to illustrations.
        </p>
        <div className="flex items-center gap-3 my-2 justify-between xl:w-[23.5rem]">
          <input
            className="pl-4 w-[17rem] h-14 focus:outline-none rounded"
            placeholder="john@example.com"
            type="text"
          />
          <button className="bg-primary-200 font-bold text-primary h-14 xl:w-[8.5rem] rounded">
            Subscribe
          </button>
        </div>
        <p className="text-neutral-100">"No spam, unsubscribe anytime."</p>
      </div>
      <div className="flex justify-center lg:justify-start">
        <img src="/images/peeps.svg" alt="" />
      </div>
    </section>
  )
}
