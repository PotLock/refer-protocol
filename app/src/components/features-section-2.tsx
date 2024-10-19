import { Activity, Check, Megaphone, Lock, LayoutPanelLeft, Network } from "lucide-react";

import {
  Carousel,
  CarouselPrevious,
  CarouselContent,
  CarouselItem,
  CarouselNext,
} from "@/components/ui/carousel";
import { Card, CardContent } from "@/components/ui/card";

export function Features2() {
  return (
    <section id="use-cases" className="container flex flex-col items-center gap-6 py-24 sm:gap-7">
      <div className="flex flex-col gap-3">
        <h2 className="font-heading text-3xl font-semibold tracking-tight sm:text-4xl text-balance text-center">
          Use Cases
        </h2>
      </div>
      <Carousel opts={{ loop: true, align: "start" }} className="mt-6 w-full px-4 xl:px-0">
        <CarouselPrevious className="-left-6 size-7 xl:-left-12 xl:size-8" />
        <CarouselContent className="pb-4">
          <CarouselItem className="md:basis-1/2 lg:basis-1/3">
            <div className="h-full p-1">
              <Card className="h-full shadow-md">
                <CardContent className="flex flex-col items-start gap-5 p-7">
                  <div className="inline-flex items-center justify-center rounded-md border border-border bg-secondary p-2">
                    <Activity size={28} className="text-primary" />
                  </div>
                  <div>
                    <h4 className="mb-2 text-lg font-semibold text-foreground">
                      Sybil Resistant Communities&nbsp;
                    </h4>
                  </div>
                </CardContent>
              </Card>
            </div>
          </CarouselItem>
          <CarouselItem className="md:basis-1/2 lg:basis-1/3">
            <div className="h-full p-1">
              <Card className="h-full shadow-md">
                <CardContent className="flex flex-col items-start gap-5 p-7">
                  <div className="inline-flex items-center justify-center rounded-md border border-border bg-secondary p-2">
                    <Check size={28} className="text-primary" />
                  </div>
                  <div>
                    <h4 className="mb-2 text-lg font-semibold text-foreground">
                      Decentralized identity verification
                    </h4>
                  </div>
                </CardContent>
              </Card>
            </div>
          </CarouselItem>
          <CarouselItem className="md:basis-1/2 lg:basis-1/3">
            <div className="h-full p-1">
              <Card className="h-full shadow-md">
                <CardContent className="flex flex-col items-start gap-5 p-7">
                  <div className="inline-flex items-center justify-center rounded-md border border-border bg-secondary p-2">
                    <Megaphone size={28} className="text-primary" />
                  </div>
                  <div>
                    <h4 className="mb-2 text-lg font-semibold text-foreground">
                      Web3 growth marketing
                    </h4>
                  </div>
                </CardContent>
              </Card>
            </div>
          </CarouselItem>
          <CarouselItem className="md:basis-1/2 lg:basis-1/3">
            <div className="h-full p-1">
              <Card className="h-full shadow-md">
                <CardContent className="flex flex-col items-start gap-5 p-7">
                  <div className="inline-flex items-center justify-center rounded-md border border-border bg-secondary p-2">
                    <Lock size={28} className="text-primary" />
                  </div>
                  <div>
                    <h4 className="mb-2 text-lg font-semibold text-foreground">
                      Token-gated access systems
                    </h4>
                  </div>
                </CardContent>
              </Card>
            </div>
          </CarouselItem>
          <CarouselItem className="md:basis-1/2 lg:basis-1/3">
            <div className="h-full p-1">
              <Card className="h-full shadow-md">
                <CardContent className="flex flex-col items-start gap-5 p-7">
                  <div className="inline-flex items-center justify-center rounded-md border border-border bg-secondary p-2">
                    <LayoutPanelLeft size={28} className="text-primary" />
                  </div>
                  <div>
                    <h4 className="mb-2 text-lg font-semibold text-foreground">
                      Multi Level Marketing
                    </h4>
                  </div>
                </CardContent>
              </Card>
            </div>
          </CarouselItem>
          <CarouselItem className="md:basis-1/2 lg:basis-1/3">
            <div className="h-full p-1">
              <Card className="h-full shadow-md">
                <CardContent className="flex flex-col items-start gap-5 p-7">
                  <div className="inline-flex items-center justify-center rounded-md border border-border bg-secondary p-2">
                    <Network size={28} className="text-primary" />
                  </div>
                  <div>
                    <h4 className="mb-2 text-lg font-semibold text-foreground">Social Networks</h4>
                  </div>
                </CardContent>
              </Card>
            </div>
          </CarouselItem>
        </CarouselContent>
        <CarouselNext className="-right-6 size-7 xl:-right-12 xl:size-8" />
      </Carousel>
    </section>
  );
}
