import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { BookOpen, ExternalLink, FlaskConical, GraduationCap } from "lucide-react";
import Link from "next/link";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { cn } from "@/lib/utils";
import academicData from "@/user_data/academic.json";

const { educationHistory, publications, researchInterests } = academicData;

export default function AcademicPage() {
  const mainEducation = educationHistory.slice(0, 2);
  const additionalEducation = educationHistory.slice(2);

  const visibleInterests = researchInterests.slice(0, 2);
  const hiddenInterests = researchInterests.slice(2);

  return (
    <div className="container mx-auto px-4 py-12 md:py-20">
      <header className="text-center mb-12">
        <h1 className="font-headline text-4xl md:text-5xl font-extrabold tracking-tight mb-2">
          Academic Journey
        </h1>
        <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
          A summary of my educational background, research interests, and publications.
        </p>
      </header>

      <div className="space-y-8 max-w-4xl mx-auto">
        <Card className="shadow-lg transition-all duration-300 hover:shadow-primary/20 group relative overflow-visible">
          <CardHeader className="pb-4">
            <div className="flex items-center gap-4">
              <div className="bg-primary/10 p-3 rounded-full">
                <GraduationCap className="h-8 w-8 text-primary" />
              </div>
              <div>
                <CardTitle className="font-headline text-3xl">Education</CardTitle>
                <CardDescription>My formal learning path.</CardDescription>
              </div>
            </div>
          </CardHeader>
          <CardContent className="relative space-y-4 pl-8 border-l-2 border-primary ml-10 pb-4">
              <div className="space-y-6">
                {mainEducation.map((edu, index) => (
                  <div key={index}>
                    <h3 className="font-bold text-xl">{edu.degree}</h3>
                    <p className="text-muted-foreground text-sm">
                      <Link href={edu.universityUrl} target="_blank" rel="noopener noreferrer" className="inline-flex items-center group/link hover:underline hover:text-primary transition-colors">
                        {edu.university}
                        <span className="inline-block w-0 group-hover/link:w-5 transition-[width] duration-300 ease-in-out overflow-hidden">
                          <ExternalLink className="h-4 w-4 ml-1" />
                        </span>
                      </Link>
                      , {edu.years}
                    </p>
                    <p className="mt-1 text-sm">{edu.description}</p>
                  </div>
                ))}
              </div>

              {additionalEducation.length > 0 && (
                <Accordion type="single" collapsible className="w-full">
                  <AccordionItem value="additional-edu" className="border-none">
                    <AccordionTrigger 
                      className={cn(
                        "absolute -left-[1px] bottom-4 translate-x-[-50%]",
                        "flex h-8 w-8 items-center justify-center rounded-full border-2 border-primary bg-background p-0",
                        "opacity-0 transition-opacity duration-300 group-hover:opacity-100",
                        "[&[data-state=open]>svg]:rotate-180 [&>svg]:h-5 [&>svg]:w-5 [&>svg]:text-primary"
                      )}
                    >
                      <span className="sr-only">Toggle additional education</span>
                    </AccordionTrigger>
                    <AccordionContent className="space-y-6 pt-6 pb-2">
                      {additionalEducation.map((edu, index) => (
                        <div key={index}>
                          <h3 className="font-bold text-xl">{edu.degree}</h3>
                          <p className="text-muted-foreground text-sm">
                            <Link href={edu.universityUrl} target="_blank" rel="noopener noreferrer" className="inline-flex items-center group/link hover:underline hover:text-primary transition-colors">
                              {edu.university}
                              <span className="inline-block w-0 group-hover/link:w-5 transition-[width] duration-300 ease-in-out overflow-hidden">
                                <ExternalLink className="h-4 w-4 ml-1" />
                              </span>
                            </Link>
                            , {edu.years}
                          </p>
                          <p className="mt-1 text-sm">{edu.description}</p>
                        </div>
                      ))}
                    </AccordionContent>
                  </AccordionItem>
                </Accordion>
              )}
          </CardContent>
        </Card>

        <Card className="shadow-lg transition-all duration-300 hover:shadow-primary/20">
          <CardHeader>
             <div className="flex items-center gap-4">
              <div className="bg-primary/10 p-3 rounded-full">
                <BookOpen className="h-8 w-8 text-primary" />
              </div>
              <div>
                <CardTitle className="font-headline text-3xl">Publications</CardTitle>
                <CardDescription>Contributions to the field.</CardDescription>
              </div>
            </div>
          </CardHeader>
          <CardContent className="pb-6">
            {publications.length > 0 ? (
              <div className="space-y-6">
                {publications.map((pub, index) => (
                  <div className="pl-4 border-l-2 border-muted" key={index}>
                    <h4 className="font-semibold text-lg">{pub.title}</h4>
                    <p className="text-xs text-muted-foreground">{pub.conference}</p>
                    <p className="mt-2 text-sm text-muted-foreground">{pub.authorsAndSummary}</p>
                  </div>
                ))}
              </div>
            ) : (
              <div className="text-center text-muted-foreground italic py-4">
                <p>Working on some new papers. Check back soon!</p>
              </div>
            )}
          </CardContent>
        </Card>

        <Card className="shadow-lg transition-all duration-300 hover:shadow-primary/20 group overflow-hidden">
          <CardHeader>
             <div className="flex items-center gap-4">
              <div className="bg-primary/10 p-3 rounded-full">
                <FlaskConical className="h-8 w-8 text-primary" />
              </div>
              <div>
                <CardTitle className="font-headline text-3xl">Research Interests</CardTitle>
                <CardDescription>Areas I'm passionate about exploring.</CardDescription>
              </div>
            </div>
          </CardHeader>
          <CardContent className="pb-4">
            <ul className="list-disc list-inside space-y-2 text-muted-foreground">
              {visibleInterests.map((interest, index) => (
                <li key={index} className="text-sm">{interest}</li>
              ))}
            </ul>
            
            <div className="grid grid-rows-[0fr] transition-[grid-template-rows] duration-500 ease-in-out group-hover:grid-rows-[1fr]">
              <div className="overflow-hidden">
                <ul className="list-disc list-inside space-y-2 text-muted-foreground pt-2">
                  {hiddenInterests.map((interest, index) => (
                    <li key={index + 2} className="text-sm">{interest}</li>
                  ))}
                </ul>
              </div>
            </div>
            
            <div className="mt-2 text-[10px] text-primary/60 font-medium group-hover:opacity-0 group-hover:h-0 group-hover:mt-0 transition-all duration-300 overflow-hidden uppercase tracking-wider">
              Hover to see more interests...
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}