
"use client"

import { motion } from "framer-motion"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Github, Linkedin, Mail} from 'lucide-react'

export function ContactSection() {
  return (
    <section id="contact" className="py-20 bg-gradient-to-b from-[#93A5CF] to-background/50">
      <div className="container px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="max-w-2xl mx-auto text-center mb-16"
        >
          <h2 className="text-3xl font-bold mb-4">Get in Touch</h2>
          <p className="text-muted-foreground">
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
            <Card className="backdrop-blur-sm bg-white/50 rounded-xl">
              <CardHeader>
                <CardTitle className="text-2xl">Contact Information</CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="flex items-center gap-4 ">
                  <Mail className="w-5 h-5 text-primary" />
                  <a href="mailto:your.email@example.com" className="hover:text-primary transition-colors">
                    haseebsayed960@gmail.com
                  </a>
                </div>
                <div className="flex gap-4 justify-center">
                  <a
                    href="https://github.com/Ohhaseeb"
                    className="p-3 rounded-full bg-primary/10 hover:bg-primary/20 transition-colors"
                  >
                    <Github className="w-6 h-6" />
                  </a>
                  <a
                    href="https://www.linkedin.com/in/haseeb-sayed-045207292/"
                    className="p-3 rounded-full bg-primary/10 hover:bg-primary/20 transition-colors"
                  >
                    <Linkedin className="w-6 h-6" />
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

