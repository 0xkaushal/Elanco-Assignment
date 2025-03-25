import Link from 'next/link'
import React from 'react'

export default function Header() {
  return (
    <div className="relative flex flex-wrap items-center justify-between w-full bg-white group py-7 shrink-0">
    <div>
    <Link href={`/`}><img className="h-24" src="https://imgs.search.brave.com/ewULy2Q3mjYBPf8EEXzhP3exuLyVpd2vAQuyRpV3GMs/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pLmV0/c3lzdGF0aWMuY29t/LzE2MzQ4NjU4L2Mv/MTczNi8xNzM2LzIy/NS8wL2lsLzYzZjlh/NC8xMzY2ODEyOTQ4/L2lsXzYwMHg2MDAu/MTM2NjgxMjk0OF9l/ZHAwLmpwZw"/></Link>
    </div>
    <div className="items-center justify-between hidden gap-12 text-black md:flex">
        <Link className="text-lg font-normal text-dark-grey-700 hover:text-dark-grey-900" href='/countries/region/Asia'>Asia</Link>
        <Link className="text-lg font-normal text-dark-grey-700 hover:text-dark-grey-900"  href='/countries/region/Americas'>Americas</Link>
        <Link className="text-lg font-normal text-dark-grey-700 hover:text-dark-grey-900"  href='/countries/region/Europe'>Europe</Link>
        <Link className="text-lg font-normal text-dark-grey-700 hover:text-dark-grey-900"  href='/countries/region/Oceania'>Oceania</Link>
    </div>
</div>
  )
}
