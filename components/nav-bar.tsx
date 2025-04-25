"use client"

import * as React from "react"
import Link from "next/link"
import { motion } from "framer-motion"
import { cn } from "@/lib/utils"

const navItems = [
  { href: "#hero", label: "Home" },
  { href: "#about", label: "About" },
  { href: "#experience", label: "Experience" },
  { href: "#projects", label: "Projects" },
  { href: "#contact", label: "Contact" },
]

export function NavBar() {
  const [active, setActive] = React.useState("/")

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className="bg-background border-b"
    >
      <nav className="container flex items-center justify-between h-16 px-4">
        <Link href="/" className="text-xl font-bold">
          HS
        </Link>
        <ul className="flex items-center space-x-8">
          {navItems.map((item) => (
            <li key={item.href}>
              <Link
                href={item.href}
                className={cn(
                  "relative px-2 py-1 text-sm transition-colors hover:text-primary",
                  active === item.href ? "text-primary text-gray-700 font-semibold" : "text-gray-700 font-semibold"
                )}
                onClick={() => setActive(item.href)}
              >
                {item.label}
                {active === item.href && (
                  <motion.div
                    layoutId="underline"
                    className="absolute left-0 right-0 h-0.5 bg-primary bottom-0"
                  />
                )}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </motion.header>
  )
}

