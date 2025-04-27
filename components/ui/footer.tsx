"use client"

import Link from "next/link"
import { TwitterIcon, GithubIcon, LinkedinIcon, MailIcon } from "lucide-react"

export function Footer() {
  return (
    <footer className="bg-blue-800 py-12 text-white">
      <div className="container mx-auto px-4 text-center">
        <div className="mb-8">
          <h3 className="text-2xl font-bold">Living, learning, & leveling up one day at a time.</h3>
        </div>
        <div className="flex justify-center gap-4 mb-8">
          <SocialLink href="https://github.com/Ohhaseeb" icon={<GithubIcon className="w-5 h-5" />} />
          <SocialLink href="https://www.linkedin.com/in/haseeb-sayed-045207292/" icon={<LinkedinIcon className="w-5 h-5" />} />
          <SocialLink href="mailto:haseebsayed960@gmail.com" icon={<MailIcon className="w-5 h-5" />} />
        </div>
        <p className="text-sm text-blue-200">If you want to contact me, you can use the links above.</p>
      </div>
    </footer>
  )
}

interface SocialLinkProps {
  href: string
  icon: React.ReactNode
}

function SocialLink({ href, icon }: SocialLinkProps) {
  return (
    <Link
      href={href}
      className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center hover:bg-white hover:text-blue-700 transition-colors"
    >
      {icon}
    </Link>
  )
} 