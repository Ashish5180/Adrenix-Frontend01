export default function Card() {
  return (
    <div className="bg-[#F5F5F5]">
      <div className="mx-auto max-w-7xl py-12 px-4 sm:px-6 lg:px-8 lg:py-24">
        <div className="relative isolate overflow-hidden bg-gray-900 px-6 pt-12 shadow-2xl sm:rounded-3xl sm:px-12 md:pt-20 lg:flex lg:gap-x-16 lg:px-16 lg:pt-0">
          <svg
            viewBox="0 0 1024 1024"
            aria-hidden="true"
            className="absolute left-1/2 top-1/2 -z-10 h-[40rem] w-[40rem] -translate-y-1/2 sm:h-[50rem] sm:w-[50rem] lg:left-full lg:-ml-80 lg:w-[64rem] lg:h-[64rem] lg:-translate-x-1/2 lg:translate-y-0"
          >
            <circle r={512} cx={512} cy={512} fill="url(#759c1415-0410-454c-8f7c-9a820de03641)" fillOpacity="0.7" />
            <defs>
              <radialGradient id="759c1415-0410-454c-8f7c-9a820de03641">
                <stop stopColor="#7775D6" />
                <stop offset={1} stopColor="#E935C1" />
              </radialGradient>
            </defs>
          </svg>
          <div className="mx-auto max-w-md text-center lg:mx-0 lg:flex-auto lg:py-32 lg:text-left">
            <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl md:text-5xl">
              Your New Favorite Tee Awaits
              <br />
              – Shop Now!
            </h2>
            <p className="mt-6 text-lg leading-8 text-gray-300">
            Step into winter with style and comfort! Adrenix brings you a premium collection of cozy essentials and trendy must-haves. Upgrade your wardrobe with the season's best picks. Shop now and make every winter moment unforgettable!
            </p>
            
          </div>
          <div className="relative mt-16 h-72 rounded-xl sm:h-80 lg:mt-8 lg:h-auto lg:w-1/2">
            <img
              alt="Error Image"
              src="https://img.freepik.com/free-photo/young-man-coat-outside-talking-phone-drinking-coffee_1303-6012.jpg?t=st=1732254416~exp=1732258016~hmac=59327345ad98f692432e9812a7e009a9ab1756516ad7d585eeaa3111b819ead4&w=996"
              width={1824}
              height={1080}
              className="mx-auto absolute  w-full max-w-none rounded-md bg-white/5 ring-1 ring-white/10 sm:left-[-50px] sm:top-[-40px] lg:relative lg:left-0 lg:top-0"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
