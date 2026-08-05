import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Code, Cpu, ArrowRight, Shield } from "lucide-react";
import Link from "next/link";

export default function Home() {
  return (
    <div className="container mx-auto px-4 py-12 md:py-20">
      <section className="flex flex-col items-center justify-center text-center min-h-[70vh]">
        <h1 className="font-headline text-5xl md:text-7xl font-extrabold tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-primary to-blue-400 mb-4">
          Welcome to YashVerse
        </h1>
        <p className="max-w-2xl mx-auto text-lg md:text-xl text-muted-foreground mb-8">
          Curious, creative, and always leveling up. I’m Yash, a teen who blends tech, wit, and real talk.
        </p>
        <div className="flex justify-center gap-4">
          <Button asChild size="lg">
            <Link href="/projects">
              View My Work <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </Button>
          <Button asChild size="lg" variant="outline">
            <Link href="/contact">Get in Touch</Link>
          </Button>
        </div>
      </section>

      <section className="my-16 md:my-24">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <Card className="text-center hover:shadow-primary/20 hover:shadow-lg transition-shadow duration-300">
            <CardHeader>
              <div className="mx-auto bg-primary/10 rounded-full p-3 w-fit">
                <Code className="h-8 w-8 text-primary" />
              </div>
              <CardTitle className="font-headline text-2xl mt-4">
                Years Coding
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-5xl font-bold text-primary">5+</p>
              <p className="text-muted-foreground mt-2">
                Exploring various technologies and frameworks.
              </p>
            </CardContent>
          </Card>
          <Card className="text-center hover:shadow-primary/20 hover:shadow-lg transition-shadow duration-300">
            <CardHeader>
              <div className="mx-auto bg-primary/10 rounded-full p-3 w-fit">
                <Cpu className="h-8 w-8 text-primary" />
              </div>
              <CardTitle className="font-headline text-2xl mt-4">
                Projects Completed
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-5xl font-bold text-primary">20+</p>
              <p className="text-muted-foreground mt-2">
                From simple scripts to complex web applications.
              </p>
            </CardContent>
          </Card>
          <Card className="text-center hover:shadow-primary/20 hover:shadow-lg transition-shadow duration-300">
            <CardHeader>
              <div className="mx-auto bg-primary/10 rounded-full p-3 w-fit">
                 <Shield className="h-8 w-8 text-primary" />
              </div>
              <CardTitle className="font-headline text-2xl mt-4">
                Core Value
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-3xl font-bold text-primary">Curiosity</p>
              <p className="text-muted-foreground mt-2">
                Driven by a passion for learning and solving problems.
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      <section className="text-center max-w-3xl mx-auto">
        <h2 className="font-headline text-3xl md:text-4xl font-bold mb-4">
          A Brief Intro
        </h2>
        <p className="text-muted-foreground text-lg">
          I’m a Queen’s University engineering student and AI Business & Systems Automation Engineer at MDS Aerospace. I enjoy turning ideas into working prototypes from robotic mechanisms and machine-learning experiments to accessible web experiences.
        </p>
      </section>
    </div>
  );
}
