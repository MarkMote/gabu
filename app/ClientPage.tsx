/* eslint-disable */
// @ts-nocheck
'use client'

import React, { useRef } from 'react'
import Image from 'next/image'
import { Adopt } from './Adopt'
import { PlaneIcon, PawPrintIcon, CalendarIcon, HeartIcon } from './Icons'

export default function ClientPage() {
  const adoptFormRef = useRef<HTMLElement>(null)

  const scrollToAdoptForm = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault()
    adoptFormRef.current?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <div className="flex flex-col min-h-[100dvh] bg-white text-slate-800 text-center items-center justify-center">
      <section className="w-full py-0 my-0 md:py-12 lg:py-24 bg-gradient-to-b from-slate-50 to-slate-100 mx-auto min-h-screen
       flex items-center justify-center ">
        <div className="container mx-auto grid gap-0 lg:h-[80dvh] md:grid-cols-2 lg:gap-12 md:bg-gradient-to-br 
        md:from-red-100 md:to-rose-100 md:border-none bg-rose-100/10 md:p-0 md:m-0 px-0 mx-4 py-4 pt-0 sm:my-4 my-0 rounded-xl
        md:h-[600px] h-screen">
          <div className="lg:h-[80dvh] md:h-[600px] h-[50dvh] md:rounded-l-xl rounded-t-xl overflow-hidden">
            <Image
              src="/g7.jpeg"
              alt="Adopt a Dog"
              width={800}
              height={600}
              className="w-full h-full object-cover object-bottom"
            />
          </div>
          <div className="flex flex-col justify-center space-y-2 text-left px-5 lg:mr-12 py-10">
            <div className="md:space-y-6 space-y-4">
              <h1 className="text-2xl sm:text-3xl lg:text-5xl xl:text-6xl/none font-bold tracking-tighter">
                Meet Gabù, the fiesty poodle
              </h1>
              <p className="max-w-[600px] text-sm sm:text-base lg:text-xl text-muted-foreground">
                Gabù is a 6-month-old poodle who loves to dress up and go on walks. 
                He's great on planes, he can disobey in 6 languages, and he's looking for a loving home.
              </p>
            </div>
            <div className="grid gap-1 md:gap-4 py-4">
              <div className="flex items-center gap-4">
                <PawPrintIcon className="h-5 w-5 lg:h-6 lg:w-6" />
                <p className="text-sm sm:text-base lg:text-lg text-muted-foreground">Breed: Miniature poodle</p>
              </div>
              <div className="flex items-center gap-4">
                <CalendarIcon className="h-5 w-5 lg:h-6 lg:w-6" />
                <p className="text-sm sm:text-base lg:text-lg text-muted-foreground">Age: 8 months </p>
              </div>
              <div className="flex items-center gap-4">
                <HeartIcon className="h-5 w-5 lg:h-6 lg:w-6" />
                <p className="text-sm sm:text-base lg:text-lg text-muted-foreground">Temperament: Energetic, 98% friendly 2% grouchy</p>
              </div>
              <div className="flex items-center gap-4">
                <PlaneIcon className="h-5 w-5 lg:h-6 lg:w-6" />
                <p className="text-sm sm:text-base lg:text-lg text-muted-foreground">
                  Location: SF, NYC (willing to travel)
                </p>
              </div>
            </div>
            <a
              href="#"
              onClick={scrollToAdoptForm}
              className="inline-flex h-10 items-center justify-center rounded-md 
              bg-rose-300 shadow-lg 
               px-4 sm:px-6 lg:px-8 text-base sm:text-lg lg:text-xl text-slate-900 font-semibold  
              hover:bg-rose-300/90 focus-visible:outline-rose focus-visible:ring-1 focus-visible:ring-ring 
              disabled:pointer-events-none disabled:opacity-50 "
            >
              Adopt Me! 
            </a>
            <div className='pb-5 sm:pb-1'> </div>
          </div>
        </div>
      </section>
      <section className="w-full py-12 md:py-24 lg:py-32 bg-muted flex justify-center items-center">
        <div className="container px-4 md:px-6">
          <div className="grid gap-10 sm:px-10 md:gap-16 lg:grid-cols-2">
            <div className="space-y-4 text-center lg:text-left">
              <div className="inline-block rounded-lg bg-muted px-3 py-1 font-medium text-sm">Adoption Process</div>
              <h2 className="lg:leading-tighter text-2xl font-bold tracking-tighter sm:text-3xl lg:text-4xl xl:text-[3.4rem] 2xl:text-[3.75rem]">
                Give Gabù a forever home
              </h2>
              <p className="max-w-[600px] text-sm sm:text-base lg:text-lg xl:text-xl/relaxed text-slate-600 mx-auto lg:mx-0">
                We're looking for someone who can give Gabù the love and care he deserves. He needs an experienced dog owner who can handle his energy and temperament;
                ideally with a yard for him to run around in.
                If you're interested in adopting Gabù, please fill out our adoption application.
              </p>
            </div>
            <div className="flex flex-col items-center lg:items-start space-y-6 text-center lg:text-left">
              <div className="inline-block rounded-lg bg-muted px-3 py-1 font-medium text-sm lg:pt-0 pt-4">About Gabu</div>
              <p className="mx-auto lg:mx-0 max-w-[700px] text-sm sm:text-base lg:text-xl/relaxed text-muted-foreground text-slate-600">
                Gabù is a pure-bred miniature poodle. He's around 12 pounds and almost done growing. 
                He's currently splitting his time between San Francisco and New York. 
                He's looking for a stable living environment that involves less travel and more consistency.
                We're happy to fly him out to the right home!  
              </p>
              <a
                href="#"
                onClick={scrollToAdoptForm}
                className="inline-flex h-10 shadow-lg items-center justify-center rounded-md bg-rose-200 hover:bg-rose-200/90 text-slate-900 
                px-5 text-sm sm:text-base lg:text-md font-medium"
              >
                Apply to Adopt Gabù
              </a>
            </div>
          </div>
        </div>
      </section>
      <section className="w-full py-12 md:py-24 lg:py-32 bg-slate-100 flex items-center justify-center">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center pb-12">
            <div className="space-y-2">
              <div className="inline-block rounded-lg bg-muted px-3 py-1 text-sm">More About Gabù</div>
              <h2 className="text-2xl font-bold tracking-tighter sm:text-3xl lg:text-5xl py-4">A lovable and yappy little poodle</h2>
              <p className="max-w-[900px] text-sm sm:text-base lg:text-xl/relaxed pb-2 text-muted-foreground">
                Gabù answers to many names, including little monster, punk, and beastie. 
                He used to belong to an NBA player (really). He's a fan of Russian literature. 
                He's a bit of a diva, but he's also very loving and loyal. 
                Unfortunately if he's not adopted soon, he will be sent to work in the coal mines.
              </p>
            </div>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            <Image src="/g1.jpg" alt="Image 1" width={600} height={600} className="w-full h-[500px] sm:h-[500px] lg:h-[600px] rounded-lg object-cover" />
            <Image src="/g2.jpeg" alt="Image 2" width={600} height={600} className="w-full h-[500px] sm:h-[500px] lg:h-[600px] rounded-lg object-cover" />
            <Image src="/g3.jpeg" alt="Image 3" width={600} height={600} className="w-full h-[500px] sm:h-[500px] lg:h-[600px] rounded-lg object-cover" />
            <Image src="/g4.jpeg" alt="Image 4" width={600} height={600} className="w-full h-[500px] sm:h-[500px] lg:h-[600px] rounded-lg object-cover" />
            <Image src="/g5.jpeg" alt="Image 5" width={600} height={600} className="w-full h-[500px] sm:h-[500px] lg:h-[600px] rounded-lg object-cover" />
            <Image src="/g6.jpeg" alt="Image 6" width={600} height={600} className="w-full h-[500px] sm:h-[500px] lg:h-[600px] rounded-lg object-cover" />
          </div>
        </div>
      </section>
      <section ref={adoptFormRef} className="w-full py-12 md:py-24 lg:py-32 flex items-center justify-center 
      lg:bg-slate-100 bg-white">
        <Adopt/>
      </section>
      <footer className="flex flex-col gap-2 sm:flex-row py-6 w-full shrink-0 items-center px-4 md:px-6 border-t">
        <p className="text-xs text-muted-foreground">&copy; შენთვის, ჩემო ანა</p>
        <nav className="sm:ml-auto flex gap-4 sm:gap-6">
        </nav>
      </footer>
    </div>
  )
}