/* eslint-disable */
// @ts-nocheck
'use client'

import React from 'react'
import { PawPrintIcon } from './Icons'

export function Adopt() {
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const form = e.currentTarget
    const data = new FormData(form)

    try {
      const response = await fetch(form.action, {
        method: form.method,
        body: data,
        headers: {
          'Accept': 'application/json'
        }
      })

      if (response.ok) {
        form.reset()
        alert('Thank you for your interest! We will get back to you soon.')
      } else {
        alert('Something went wrong. Please try again.')
      }
    } catch (error) {
      console.error('Error:', error)
      alert('Oops! Something went wrong. Please try again.')
    }
  }

  return (
    <main className="grid place-content-center justify-center min-h-screen flex-col items-center text-slate-700 lg:bg-white lg:shadow 
    bg:none rounded-3xl p-10">
      <div className="container px-0 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center py-2">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-slate-700 py-2">Apply to Adopt</h2>
            <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed pt-3">
              Tell us why you're the perfect fit to adopt Gabù. Ask us questions. We'll review your application and get back to you soon. 
            </p>
          </div>
        </div>
      </div>
      <div className="grid grid-cols-1 max-w-[900px] md:min-w-[400px] min-h-[300px] rounded-xl
        backdrop-blur-[2px] z-10 lg:m-10 lg:p-5 pt-0 mt-10 text-left text-slate-800 w-full items-center justify-center">
        <form className="space-y-6" onSubmit={handleSubmit} action="https://formspree.io/f/mjkbkwzn" method="POST">
          <div>
            <label htmlFor="name" className="block mb-1">
              Your Name:
            </label>
            <input
              type="text"
              id="name"
              name="name"
              className="w-full px-3 py-2 border border-slate-300/70 rounded-md bg-white focus:outline focus:outline-1 focus:outline-rose-200"
              placeholder="Enter your name"
              required
            />
          </div>

          <div>
            <label htmlFor="email" className="block mb-1">
              Email:
            </label>
            <input
              type="email"
              id="email"
              name="email"
              className="w-full px-3 py-2 border border-slate-300/70 rounded-md bg-slate-300/[4%] focus:outline focus:outline-1 focus:outline-rose-200"
              placeholder="Enter your email"
              required
            />
          </div>

          <div>
            <label htmlFor="phone" className="block mb-1">
              Phone Number:
            </label>
            <input
              type="tel"
              id="phone"
              name="phone"
              className="w-full px-3 py-2 border border-slate-300/70 rounded-md bg-slate-300/[4%] focus:outline focus:outline-1 focus:outline-rose-200"
              placeholder="Enter your phone number"
            />
          </div>

          <div>
            <label htmlFor="location" className="block mb-1">
              Where do you live?
            </label>
            <input
              type="text"
              id="location"
              name="location"
              className="w-full px-3 py-2 border border-slate-300/70 rounded-md bg-slate-300/[4%] focus:outline focus:outline-1 focus:outline-rose-200"
              placeholder="City, State"
            />
          </div>

          <div>
            <label htmlFor="message" className="block mb-1">
              Tell us about yourself and why you want to adopt Gabù, let us know if you have any questions:
            </label>
            <textarea
              id="message"
              name="message"
              className="w-full px-3 py-2 border border-slate-300/70 rounded-md bg-slate-300/[4%] focus:outline focus:outline-1 focus:outline-rose-200"
              rows={3}
              placeholder="Send us a message"
              required
            ></textarea>
          </div>

          <div className="grid place-content-center justify-center">
            <button
              type="submit"
              className="px-4 py-2 bg-rose-300/50 border border-slate-400/50 text-slate-800 rounded-xl hover:bg-rose-600/80 hover:text-white"
            >
              <span className="grid grid-cols-2 w-[120px] px-3 text-center">
                <PawPrintIcon className="h-6 w-6" />
                <span className="text-center font-semibold pr-4 translate-x-[-10px]">Submit</span>
              </span>
            </button>
          </div>
        </form>
      </div>
    </main>
  )
}