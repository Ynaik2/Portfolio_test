
"use client";

import { ContactForm } from "@/components/contact-form";
import { Button } from "@/components/ui/button";
import { Github, Linkedin, Instagram, Ghost } from "lucide-react";
import Link from "next/link";

export default function ContactPage() {
  return (
    <div className="container mx-auto px-4 py-12 md:py-20">
      <header className="text-center mb-12">
        <h1 className="font-headline text-4xl md:text-5xl font-extrabold tracking-tight mb-2">
          Let’s build something useful.
        </h1>
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
          Have a question, a project idea, or just want to say hello? Drop me a line.
        </p>
      </header>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-start">
        <div className="md:order-1">
          <ContactForm />
        </div>

        <div className="md:order-2">
          <h2 className="font-headline text-2xl font-bold mb-4">Connect on Social Media</h2>
          <p className="text-muted-foreground mb-6">
            You can also find me on these platforms. I'd love to connect with you!
          </p>
          <div className="space-y-4">
            <Button asChild variant="outline" className="w-full justify-start text-lg p-6">
              <Link href="https://github.com/Ynaik2" target="_blank" rel="noopener noreferrer">
                <Github className="mr-4 h-6 w-6" />
                GitHub
              </Link>
            </Button>
            <Button asChild variant="outline" className="w-full justify-start text-lg p-6">
              <Link href="https://www.linkedin.com/in/yashas-naik-50569b359/" target="_blank" rel="noopener noreferrer">
                <Linkedin className="mr-4 h-6 w-6" />
                LinkedIn
              </Link>
            </Button>
            <Button asChild variant="outline" className="w-full justify-start text-lg p-6">
              <Link href="https://www.instagram.com/yashasnaik.ca/" target="_blank" rel="noopener noreferrer">
                <Instagram className="mr-4 h-6 w-6" />
                Instagram
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
