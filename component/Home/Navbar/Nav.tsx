'use client'

import Link from 'next/link'
import React from 'react'
import { HiSearch, HiMenu } from 'react-icons/hi'
import { menuData } from '@/constant/menuData'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import {
  Sheet,
  SheetContent,
  SheetTrigger,
  SheetTitle,
  SheetHeader,
} from "@/components/ui/sheet"
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible"
import { ChevronDown } from 'lucide-react'

const Nav = () => {
  return (
    <nav className="absolute z-30 w-full px-4 py-4">
      <div className="flex items-center justify-between md:justify-center relative">
        
        {/* Mobile Nav */}
        <div className="flex w-full items-center justify-between md:hidden">
            <Sheet>
            <SheetTrigger asChild>
                <button aria-label="Open menu">
                <HiMenu className="text-white w-6 h-6" />
                </button>
            </SheetTrigger>
            <SheetContent side="left" className="bg-white pt-10 px-4">
                <SheetTitle></SheetTitle>
                <div className="flex flex-col space-y-2 mt-4">
                {menuData.map((menu) => (
                    <Collapsible key={menu.title}>
                    <CollapsibleTrigger className="flex justify-between items-center w-full py-3 text-lg font-semibold text-black border-b">
                        {menu.title}
                        <ChevronDown className="h-5 w-5 transition-transform duration-200 [&[data-state=open]]:rotate-180" />
                    </CollapsibleTrigger>
                    <CollapsibleContent className="py-2 pl-4">
                        {menu.items.map((item) => (
                        <Link
                            key={item.title}
                            href={item.href}
                            className="block py-2 text-gray-700"
                        >
                            {item.title}
                        </Link>
                        ))}
                    </CollapsibleContent>
                    </Collapsible>
                ))}
                <div className="pt-8 flex flex-col gap-4">
                    <button className="text-blue-600 font-semibold text-lg">Нэвтрэх</button>
                    <button className="bg-blue-500 text-white font-semibold py-2 px-4 rounded-xl text-lg">
                    Данс нээх
                    </button>
                </div>
                </div>
            </SheetContent>
            </Sheet>
          <div className="absolute left-1/2 -translate-x-1/2">
            <Link href="/" aria-label="Home">
              <img src="/images/TdbLogo.png" alt="logo" className="h-6 w-auto" />
            </Link>
          </div>
          <div className="flex justify-end">
            <button aria-label="Search">
                <HiSearch className="text-white w-5 h-5" />
            </button>
          </div>
        </div>
        <div className="hidden md:flex items-center justify-between w-full max-w-[1200px] px-8">
          <div>
            <Link href="/" aria-label="Home">
              <img src="/images/TdbLogo.png" alt="logo" className="h-8 w-auto" />
            </Link>
          </div>

          {/* Center nav */}
          <div className="flex items-center space-x-2 bg-black/20 backdrop-blur-xl px-20 py-2 rounded-2xl border border-black/20">
            {menuData.map((menu) => (
              <DropdownMenu key={menu.title}>
                <DropdownMenuTrigger asChild>
                  <button className="inline-flex items-center justify-center rounded-md px-4 py-2 text-sm text-white font-semibold bg-transparent hover:bg-black/20 focus:outline-none focus:bg-black/20">
                    {menu.title}
                  </button>
                </DropdownMenuTrigger>
                <DropdownMenuContent className="w-56 mt-4" align="start" >
                  {menu.items.map((item) => (
                    <DropdownMenuItem key={item.title} asChild>
                      <Link href={item.href}>{item.title}</Link>
                    </DropdownMenuItem>
                  ))}
                </DropdownMenuContent>
              </DropdownMenu>
            ))}
             <button className="p-2 text-white rounded-md hover:bg-black/20 focus:outline-none focus:bg-black/20">
                <HiSearch className="h-5 w-5" />
            </button>
          </div>
          <div className="flex items-center space-x-4">
            <button className="text-white font-semibold">Нэвтрэх</button>
            <button className="bg-blue-500 text-white font-semibold py-1 px-4 rounded-full">Данс нээх</button>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Nav