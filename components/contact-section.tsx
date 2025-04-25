"use client"

import { motion } from "framer-motion"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Github, Linkedin, Mail} from 'lucide-react'

export function ContactSection() {
  return (
    <section id="contact" className="py-20 bg-white">
     
      <div className="container px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="max-w-2xl mx-auto text-center mb-16"
        >
          <h2 className="text-4xl font-bold mb-4">Get in Touch</h2>
          <p className="font-semibold text-gray-600">
            Have a question or want to work together?
          </p>
        </motion.div>
        <div className="max-w-xl mx-auto">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <Card className="border border-gray-200 rounded-xl hover:shadow-md transition-shadow bg-white p-8">
              <CardHeader>
                <CardTitle className="text-2xl font-bold text-gray-800">Contact Information</CardTitle>
              </CardHeader>
              <CardContent className="space-y-8">
                <div className="flex items-center gap-4 hover:transform hover:translate-y-[-2px] transition-all">
                  <div className="rounded-full bg-gray-50 p-3">
                    <Mail className="w-5 h-5 text-gray-700" />
                  </div>
                  <a href="mailto:haseebsayed960@gmail.com" className="text-gray-700 hover:text-blue-600 transition-colors">
                    haseebsayed960@gmail.com
                  </a>
                </div>
                <div className="flex gap-6 justify-center">
                  <a
                    href="https://github.com/Ohhaseeb"
                    className="p-3 rounded-full bg-gray-50 hover:bg-gray-100 hover:shadow-sm transition-all"
                  >
                    <Github className="w-6 h-6 text-gray-700" />
                  </a>
                  <a
                    href="https://www.linkedin.com/in/haseeb-sayed-045207292/"
                    className="p-3 rounded-full bg-gray-50 hover:bg-gray-100 hover:shadow-sm transition-all"
                  >
                    <Linkedin className="w-6 h-6 text-gray-700" />
                  </a>
                  
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

