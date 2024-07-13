/* eslint-disable */
// @ts-nocheck
import { Metadata } from 'next'
import ClientPage from './ClientPage'

export const metadata: Metadata = {
  title: 'Adopt Gabù',
  description: 'Meet Gabù, the fiesty poodle looking for a loving home.',
}

export default function Page() {
  return <ClientPage />
}
