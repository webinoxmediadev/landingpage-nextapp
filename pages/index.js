import Head from 'next/head'
import Image from 'next/image'


export default function Home() {
  return (
    <>
      <Head>
        <title>WebinoxMedia</title>
        <meta name="keywords" content="web application development, ecommerce development, react application development, django web app api development, digital marketing" />
        <meta name="description" content="WebinoxMedia is an eCommerce development company in India provides advanced grade eCommerce software development services on the latest technology trends." />
        
      </Head>

      <div className="relative min-h-[calc(100vh-72px)] bg-scroll">
        <Image src="/images/code.jpg" layout="fill" objectFit="cover" alt="hero background image" />
      </div>
      <div className="absolute inset-y-72 md:inset-y-auto md:bottom-60 inset-x-4 md:inset-x-12 space-y-6 z-50">
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white">Webinox<span className="text-blue-400">Media</span></h1>
        <p className="mt-2 text-white">Ecommerce development, CRM Development, Business Website,<br /> Custom web Application Development and Lots more @WebinoxMedia</p>
        <div className="flex items-center space-x-3 md:space-x-5">
            <button className="text-xs md:text-base bg-[#f9f9f9] text-black flex items-center justify-center py-2.5 px-6 rounded hover:bg-blue-900 hover:text-white" onClick={() => ""}>
                <span className="uppercase font-medium tracking-wide">Portfolio</span>
            </button>

            <button className="text-xs md:text-base bg-black/30 text-[#f9f9f9] border border-white flex items-center justify-center py-2.5 px-6 rounded hover:bg-blue-600" onClick={() => ""}>
                <span className="uppercase font-medium tracking-wide">Request Quote</span>
            </button>
        </div>
      </div>
    </>
  )
}
