import {
  HeartHandshake,
  Rss,
  Shield,
  File,
  BarChart,
  Globe,
  Rocket,
  ChevronRight,
} from "lucide-react";
import Link from "next/link";

import { Marquee } from "@/components/magicui/marquee";
import { FadeInCard } from "@/components/magicui/fadein-card";
import { Button } from "@/components/ui/button";

export function CtaSection() {
  return (
    <section className="py-14">
      <div className="flex w-full flex-col items-center justify-center">
        <div className="relative flex w-full flex-col items-center justify-center overflow-hidden">
          <Marquee repeat={5} reverse className="p-2 [--duration:10s]">
            <FadeInCard className="relative size-20 cursor-pointer overflow-hidden rounded-2xl border p-4 bg-transparent [border:1px_solid_rgba(255,255,255,.1)] [box-shadow:0_-20px_80px_-20px_#ffffff1f_inset]">
              <HeartHandshake size={46} />
              <div className="pointer-events-none absolute left-1/2 top-1/2 h-1/2 w-1/2 -translate-x-1/2 -translate-y-1/2 overflow-visible rounded-full opacity-70 blur-[20px] filter will-change-transform bg-gradient-to-r from-orange-600 via-rose-600 to-violet-600" />
            </FadeInCard>
            <FadeInCard className="relative size-20 cursor-pointer overflow-hidden rounded-2xl border p-4 bg-transparent [border:1px_solid_rgba(255,255,255,.1)] [box-shadow:0_-20px_80px_-20px_#ffffff1f_inset]">
              <Rss size={46} />
              <div className="pointer-events-none absolute left-1/2 top-1/2 h-1/2 w-1/2 -translate-x-1/2 -translate-y-1/2 overflow-visible rounded-full opacity-70 blur-[20px] filter will-change-transform bg-gradient-to-r from-orange-600 via-rose-600 to-violet-600" />
            </FadeInCard>
            <FadeInCard className="relative size-20 cursor-pointer overflow-hidden rounded-2xl border p-4 bg-transparent [border:1px_solid_rgba(255,255,255,.1)] [box-shadow:0_-20px_80px_-20px_#ffffff1f_inset]">
              <Shield size={46} />
              <div className="pointer-events-none absolute left-1/2 top-1/2 h-1/2 w-1/2 -translate-x-1/2 -translate-y-1/2 overflow-visible rounded-full opacity-70 blur-[20px] filter will-change-transform bg-gradient-to-r from-yellow-400 via-orange-500 to-yellow-600" />
            </FadeInCard>
            <FadeInCard className="relative size-20 cursor-pointer overflow-hidden rounded-2xl border p-4 bg-transparent [border:1px_solid_rgba(255,255,255,.1)] [box-shadow:0_-20px_80px_-20px_#ffffff1f_inset]">
              <File size={46} />
              <div className="pointer-events-none absolute left-1/2 top-1/2 h-1/2 w-1/2 -translate-x-1/2 -translate-y-1/2 overflow-visible rounded-full opacity-70 blur-[20px] filter will-change-transform bg-gradient-to-r from-green-500 via-teal-500 to-emerald-600" />
            </FadeInCard>
            <FadeInCard className="relative size-20 cursor-pointer overflow-hidden rounded-2xl border p-4 bg-transparent [border:1px_solid_rgba(255,255,255,.1)] [box-shadow:0_-20px_80px_-20px_#ffffff1f_inset]">
              <BarChart size={46} />
              <div className="pointer-events-none absolute left-1/2 top-1/2 h-1/2 w-1/2 -translate-x-1/2 -translate-y-1/2 overflow-visible rounded-full opacity-70 blur-[20px] filter will-change-transform bg-gradient-to-r from-gray-600 via-gray-500 to-gray-400" />
            </FadeInCard>
            <FadeInCard className="relative size-20 cursor-pointer overflow-hidden rounded-2xl border p-4 bg-transparent [border:1px_solid_rgba(255,255,255,.1)] [box-shadow:0_-20px_80px_-20px_#ffffff1f_inset]">
              <Globe size={46} />
              <div className="pointer-events-none absolute left-1/2 top-1/2 h-1/2 w-1/2 -translate-x-1/2 -translate-y-1/2 overflow-visible rounded-full opacity-70 blur-[20px] filter will-change-transform bg-gradient-to-r from-cyan-500 via-blue-500 to-indigo-500" />
            </FadeInCard>
          </Marquee>
          <Marquee repeat={5} reverse className="p-2 [--duration:25s]">
            <FadeInCard className="relative size-20 cursor-pointer overflow-hidden rounded-2xl border p-4 bg-transparent [border:1px_solid_rgba(255,255,255,.1)] [box-shadow:0_-20px_80px_-20px_#ffffff1f_inset]">
              <Globe size={46} />
              <div className="pointer-events-none absolute left-1/2 top-1/2 h-1/2 w-1/2 -translate-x-1/2 -translate-y-1/2 overflow-visible rounded-full opacity-70 blur-[20px] filter will-change-transform bg-gradient-to-r from-cyan-500 via-blue-500 to-indigo-500" />
            </FadeInCard>
            <FadeInCard className="relative size-20 cursor-pointer overflow-hidden rounded-2xl border p-4 bg-transparent [border:1px_solid_rgba(255,255,255,.1)] [box-shadow:0_-20px_80px_-20px_#ffffff1f_inset]">
              <Rss size={46} />
              <div className="pointer-events-none absolute left-1/2 top-1/2 h-1/2 w-1/2 -translate-x-1/2 -translate-y-1/2 overflow-visible rounded-full opacity-70 blur-[20px] filter will-change-transform bg-gradient-to-r from-orange-600 via-rose-600 to-violet-600" />
            </FadeInCard>
            <FadeInCard className="relative size-20 cursor-pointer overflow-hidden rounded-2xl border p-4 bg-transparent [border:1px_solid_rgba(255,255,255,.1)] [box-shadow:0_-20px_80px_-20px_#ffffff1f_inset]">
              <File size={46} />
              <div className="pointer-events-none absolute left-1/2 top-1/2 h-1/2 w-1/2 -translate-x-1/2 -translate-y-1/2 overflow-visible rounded-full opacity-70 blur-[20px] filter will-change-transform bg-gradient-to-r from-green-500 via-teal-500 to-emerald-600" />
            </FadeInCard>
            <FadeInCard className="relative size-20 cursor-pointer overflow-hidden rounded-2xl border p-4 bg-transparent [border:1px_solid_rgba(255,255,255,.1)] [box-shadow:0_-20px_80px_-20px_#ffffff1f_inset]">
              <HeartHandshake size={46} />
              <div className="pointer-events-none absolute left-1/2 top-1/2 h-1/2 w-1/2 -translate-x-1/2 -translate-y-1/2 overflow-visible rounded-full opacity-70 blur-[20px] filter will-change-transform bg-gradient-to-r from-orange-600 via-rose-600 to-violet-600" />
            </FadeInCard>
            <FadeInCard className="relative size-20 cursor-pointer overflow-hidden rounded-2xl border p-4 bg-transparent [border:1px_solid_rgba(255,255,255,.1)] [box-shadow:0_-20px_80px_-20px_#ffffff1f_inset]">
              <BarChart size={46} />
              <div className="pointer-events-none absolute left-1/2 top-1/2 h-1/2 w-1/2 -translate-x-1/2 -translate-y-1/2 overflow-visible rounded-full opacity-70 blur-[20px] filter will-change-transform bg-gradient-to-r from-gray-600 via-gray-500 to-gray-400" />
            </FadeInCard>
            <FadeInCard className="relative size-20 cursor-pointer overflow-hidden rounded-2xl border p-4 bg-transparent [border:1px_solid_rgba(255,255,255,.1)] [box-shadow:0_-20px_80px_-20px_#ffffff1f_inset]">
              <Shield size={46} />
              <div className="pointer-events-none absolute left-1/2 top-1/2 h-1/2 w-1/2 -translate-x-1/2 -translate-y-1/2 overflow-visible rounded-full opacity-70 blur-[20px] filter will-change-transform bg-gradient-to-r from-yellow-400 via-orange-500 to-yellow-600" />
            </FadeInCard>
          </Marquee>
          <Marquee repeat={5} reverse className="p-2 [--duration:20s]">
            <FadeInCard className="relative size-20 cursor-pointer overflow-hidden rounded-2xl border p-4 bg-transparent [border:1px_solid_rgba(255,255,255,.1)] [box-shadow:0_-20px_80px_-20px_#ffffff1f_inset]">
              <File size={46} />
              <div className="pointer-events-none absolute left-1/2 top-1/2 h-1/2 w-1/2 -translate-x-1/2 -translate-y-1/2 overflow-visible rounded-full opacity-70 blur-[20px] filter will-change-transform bg-gradient-to-r from-green-500 via-teal-500 to-emerald-600" />
            </FadeInCard>
            <FadeInCard className="relative size-20 cursor-pointer overflow-hidden rounded-2xl border p-4 bg-transparent [border:1px_solid_rgba(255,255,255,.1)] [box-shadow:0_-20px_80px_-20px_#ffffff1f_inset]">
              <BarChart size={46} />
              <div className="pointer-events-none absolute left-1/2 top-1/2 h-1/2 w-1/2 -translate-x-1/2 -translate-y-1/2 overflow-visible rounded-full opacity-70 blur-[20px] filter will-change-transform bg-gradient-to-r from-gray-600 via-gray-500 to-gray-400" />
            </FadeInCard>
            <FadeInCard className="relative size-20 cursor-pointer overflow-hidden rounded-2xl border p-4 bg-transparent [border:1px_solid_rgba(255,255,255,.1)] [box-shadow:0_-20px_80px_-20px_#ffffff1f_inset]">
              <HeartHandshake size={46} />
              <div className="pointer-events-none absolute left-1/2 top-1/2 h-1/2 w-1/2 -translate-x-1/2 -translate-y-1/2 overflow-visible rounded-full opacity-70 blur-[20px] filter will-change-transform bg-gradient-to-r from-orange-600 via-rose-600 to-violet-600" />
            </FadeInCard>
            <FadeInCard className="relative size-20 cursor-pointer overflow-hidden rounded-2xl border p-4 bg-transparent [border:1px_solid_rgba(255,255,255,.1)] [box-shadow:0_-20px_80px_-20px_#ffffff1f_inset]">
              <Shield size={46} />
              <div className="pointer-events-none absolute left-1/2 top-1/2 h-1/2 w-1/2 -translate-x-1/2 -translate-y-1/2 overflow-visible rounded-full opacity-70 blur-[20px] filter will-change-transform bg-gradient-to-r from-yellow-400 via-orange-500 to-yellow-600" />
            </FadeInCard>
            <FadeInCard className="relative size-20 cursor-pointer overflow-hidden rounded-2xl border p-4 bg-transparent [border:1px_solid_rgba(255,255,255,.1)] [box-shadow:0_-20px_80px_-20px_#ffffff1f_inset]">
              <Globe size={46} />
              <div className="pointer-events-none absolute left-1/2 top-1/2 h-1/2 w-1/2 -translate-x-1/2 -translate-y-1/2 overflow-visible rounded-full opacity-70 blur-[20px] filter will-change-transform bg-gradient-to-r from-cyan-500 via-blue-500 to-indigo-500" />
            </FadeInCard>
            <FadeInCard className="relative size-20 cursor-pointer overflow-hidden rounded-2xl border p-4 bg-transparent [border:1px_solid_rgba(255,255,255,.1)] [box-shadow:0_-20px_80px_-20px_#ffffff1f_inset]">
              <Rss size={46} />
              <div className="pointer-events-none absolute left-1/2 top-1/2 h-1/2 w-1/2 -translate-x-1/2 -translate-y-1/2 overflow-visible rounded-full opacity-70 blur-[20px] filter will-change-transform bg-gradient-to-r from-orange-600 via-rose-600 to-violet-600" />
            </FadeInCard>
          </Marquee>
          <Marquee repeat={5} reverse className="p-2 [--duration:30s]">
            <FadeInCard className="relative size-20 cursor-pointer overflow-hidden rounded-2xl border p-4 bg-transparent [border:1px_solid_rgba(255,255,255,.1)] [box-shadow:0_-20px_80px_-20px_#ffffff1f_inset]">
              <Shield size={46} />
              <div className="pointer-events-none absolute left-1/2 top-1/2 h-1/2 w-1/2 -translate-x-1/2 -translate-y-1/2 overflow-visible rounded-full opacity-70 blur-[20px] filter will-change-transform bg-gradient-to-r from-yellow-400 via-orange-500 to-yellow-600" />
            </FadeInCard>
            <FadeInCard className="relative size-20 cursor-pointer overflow-hidden rounded-2xl border p-4 bg-transparent [border:1px_solid_rgba(255,255,255,.1)] [box-shadow:0_-20px_80px_-20px_#ffffff1f_inset]">
              <BarChart size={46} />
              <div className="pointer-events-none absolute left-1/2 top-1/2 h-1/2 w-1/2 -translate-x-1/2 -translate-y-1/2 overflow-visible rounded-full opacity-70 blur-[20px] filter will-change-transform bg-gradient-to-r from-gray-600 via-gray-500 to-gray-400" />
            </FadeInCard>
            <FadeInCard className="relative size-20 cursor-pointer overflow-hidden rounded-2xl border p-4 bg-transparent [border:1px_solid_rgba(255,255,255,.1)] [box-shadow:0_-20px_80px_-20px_#ffffff1f_inset]">
              <Globe size={46} />
              <div className="pointer-events-none absolute left-1/2 top-1/2 h-1/2 w-1/2 -translate-x-1/2 -translate-y-1/2 overflow-visible rounded-full opacity-70 blur-[20px] filter will-change-transform bg-gradient-to-r from-cyan-500 via-blue-500 to-indigo-500" />
            </FadeInCard>
            <FadeInCard className="relative size-20 cursor-pointer overflow-hidden rounded-2xl border p-4 bg-transparent [border:1px_solid_rgba(255,255,255,.1)] [box-shadow:0_-20px_80px_-20px_#ffffff1f_inset]">
              <HeartHandshake size={46} />
              <div className="pointer-events-none absolute left-1/2 top-1/2 h-1/2 w-1/2 -translate-x-1/2 -translate-y-1/2 overflow-visible rounded-full opacity-70 blur-[20px] filter will-change-transform bg-gradient-to-r from-orange-600 via-rose-600 to-violet-600" />
            </FadeInCard>
            <FadeInCard className="relative size-20 cursor-pointer overflow-hidden rounded-2xl border p-4 bg-transparent [border:1px_solid_rgba(255,255,255,.1)] [box-shadow:0_-20px_80px_-20px_#ffffff1f_inset]">
              <File size={46} />
              <div className="pointer-events-none absolute left-1/2 top-1/2 h-1/2 w-1/2 -translate-x-1/2 -translate-y-1/2 overflow-visible rounded-full opacity-70 blur-[20px] filter will-change-transform bg-gradient-to-r from-green-500 via-teal-500 to-emerald-600" />
            </FadeInCard>
            <FadeInCard className="relative size-20 cursor-pointer overflow-hidden rounded-2xl border p-4 bg-transparent [border:1px_solid_rgba(255,255,255,.1)] [box-shadow:0_-20px_80px_-20px_#ffffff1f_inset]">
              <Rss size={46} />
              <div className="pointer-events-none absolute left-1/2 top-1/2 h-1/2 w-1/2 -translate-x-1/2 -translate-y-1/2 overflow-visible rounded-full opacity-70 blur-[20px] filter will-change-transform bg-gradient-to-r from-orange-600 via-rose-600 to-violet-600" />
            </FadeInCard>
          </Marquee>
          <Marquee repeat={5} reverse className="p-2 [--duration:20s]">
            <FadeInCard className="relative size-20 cursor-pointer overflow-hidden rounded-2xl border p-4 bg-transparent [border:1px_solid_rgba(255,255,255,.1)] [box-shadow:0_-20px_80px_-20px_#ffffff1f_inset]">
              <Shield size={46} />
              <div className="pointer-events-none absolute left-1/2 top-1/2 h-1/2 w-1/2 -translate-x-1/2 -translate-y-1/2 overflow-visible rounded-full opacity-70 blur-[20px] filter will-change-transform bg-gradient-to-r from-yellow-400 via-orange-500 to-yellow-600" />
            </FadeInCard>
            <FadeInCard className="relative size-20 cursor-pointer overflow-hidden rounded-2xl border p-4 bg-transparent [border:1px_solid_rgba(255,255,255,.1)] [box-shadow:0_-20px_80px_-20px_#ffffff1f_inset]">
              <Rss size={46} />
              <div className="pointer-events-none absolute left-1/2 top-1/2 h-1/2 w-1/2 -translate-x-1/2 -translate-y-1/2 overflow-visible rounded-full opacity-70 blur-[20px] filter will-change-transform bg-gradient-to-r from-orange-600 via-rose-600 to-violet-600" />
            </FadeInCard>
            <FadeInCard className="relative size-20 cursor-pointer overflow-hidden rounded-2xl border p-4 bg-transparent [border:1px_solid_rgba(255,255,255,.1)] [box-shadow:0_-20px_80px_-20px_#ffffff1f_inset]">
              <File size={46} />
              <div className="pointer-events-none absolute left-1/2 top-1/2 h-1/2 w-1/2 -translate-x-1/2 -translate-y-1/2 overflow-visible rounded-full opacity-70 blur-[20px] filter will-change-transform bg-gradient-to-r from-green-500 via-teal-500 to-emerald-600" />
            </FadeInCard>
            <FadeInCard className="relative size-20 cursor-pointer overflow-hidden rounded-2xl border p-4 bg-transparent [border:1px_solid_rgba(255,255,255,.1)] [box-shadow:0_-20px_80px_-20px_#ffffff1f_inset]">
              <BarChart size={46} />
              <div className="pointer-events-none absolute left-1/2 top-1/2 h-1/2 w-1/2 -translate-x-1/2 -translate-y-1/2 overflow-visible rounded-full opacity-70 blur-[20px] filter will-change-transform bg-gradient-to-r from-gray-600 via-gray-500 to-gray-400" />
            </FadeInCard>
            <FadeInCard className="relative size-20 cursor-pointer overflow-hidden rounded-2xl border p-4 bg-transparent [border:1px_solid_rgba(255,255,255,.1)] [box-shadow:0_-20px_80px_-20px_#ffffff1f_inset]">
              <HeartHandshake size={46} />
              <div className="pointer-events-none absolute left-1/2 top-1/2 h-1/2 w-1/2 -translate-x-1/2 -translate-y-1/2 overflow-visible rounded-full opacity-70 blur-[20px] filter will-change-transform bg-gradient-to-r from-orange-600 via-rose-600 to-violet-600" />
            </FadeInCard>
            <FadeInCard className="relative size-20 cursor-pointer overflow-hidden rounded-2xl border p-4 bg-transparent [border:1px_solid_rgba(255,255,255,.1)] [box-shadow:0_-20px_80px_-20px_#ffffff1f_inset]">
              <Globe size={46} />
              <div className="pointer-events-none absolute left-1/2 top-1/2 h-1/2 w-1/2 -translate-x-1/2 -translate-y-1/2 overflow-visible rounded-full opacity-70 blur-[20px] filter will-change-transform bg-gradient-to-r from-cyan-500 via-blue-500 to-indigo-500" />
            </FadeInCard>
          </Marquee>
          <Marquee repeat={5} reverse className="p-2 [--duration:30s]">
            <FadeInCard className="relative size-20 cursor-pointer overflow-hidden rounded-2xl border p-4 bg-transparent [border:1px_solid_rgba(255,255,255,.1)] [box-shadow:0_-20px_80px_-20px_#ffffff1f_inset]">
              <Globe size={46} />
              <div className="pointer-events-none absolute left-1/2 top-1/2 h-1/2 w-1/2 -translate-x-1/2 -translate-y-1/2 overflow-visible rounded-full opacity-70 blur-[20px] filter will-change-transform bg-gradient-to-r from-cyan-500 via-blue-500 to-indigo-500" />
            </FadeInCard>
            <FadeInCard className="relative size-20 cursor-pointer overflow-hidden rounded-2xl border p-4 bg-transparent [border:1px_solid_rgba(255,255,255,.1)] [box-shadow:0_-20px_80px_-20px_#ffffff1f_inset]">
              <HeartHandshake size={46} />
              <div className="pointer-events-none absolute left-1/2 top-1/2 h-1/2 w-1/2 -translate-x-1/2 -translate-y-1/2 overflow-visible rounded-full opacity-70 blur-[20px] filter will-change-transform bg-gradient-to-r from-orange-600 via-rose-600 to-violet-600" />
            </FadeInCard>
            <FadeInCard className="relative size-20 cursor-pointer overflow-hidden rounded-2xl border p-4 bg-transparent [border:1px_solid_rgba(255,255,255,.1)] [box-shadow:0_-20px_80px_-20px_#ffffff1f_inset]">
              <File size={46} />
              <div className="pointer-events-none absolute left-1/2 top-1/2 h-1/2 w-1/2 -translate-x-1/2 -translate-y-1/2 overflow-visible rounded-full opacity-70 blur-[20px] filter will-change-transform bg-gradient-to-r from-green-500 via-teal-500 to-emerald-600" />
            </FadeInCard>
            <FadeInCard className="relative size-20 cursor-pointer overflow-hidden rounded-2xl border p-4 bg-transparent [border:1px_solid_rgba(255,255,255,.1)] [box-shadow:0_-20px_80px_-20px_#ffffff1f_inset]">
              <BarChart size={46} />
              <div className="pointer-events-none absolute left-1/2 top-1/2 h-1/2 w-1/2 -translate-x-1/2 -translate-y-1/2 overflow-visible rounded-full opacity-70 blur-[20px] filter will-change-transform bg-gradient-to-r from-gray-600 via-gray-500 to-gray-400" />
            </FadeInCard>
            <FadeInCard className="relative size-20 cursor-pointer overflow-hidden rounded-2xl border p-4 bg-transparent [border:1px_solid_rgba(255,255,255,.1)] [box-shadow:0_-20px_80px_-20px_#ffffff1f_inset]">
              <Rss size={46} />
              <div className="pointer-events-none absolute left-1/2 top-1/2 h-1/2 w-1/2 -translate-x-1/2 -translate-y-1/2 overflow-visible rounded-full opacity-70 blur-[20px] filter will-change-transform bg-gradient-to-r from-orange-600 via-rose-600 to-violet-600" />
            </FadeInCard>
            <FadeInCard className="relative size-20 cursor-pointer overflow-hidden rounded-2xl border p-4 bg-transparent [border:1px_solid_rgba(255,255,255,.1)] [box-shadow:0_-20px_80px_-20px_#ffffff1f_inset]">
              <Shield size={46} />
              <div className="pointer-events-none absolute left-1/2 top-1/2 h-1/2 w-1/2 -translate-x-1/2 -translate-y-1/2 overflow-visible rounded-full opacity-70 blur-[20px] filter will-change-transform bg-gradient-to-r from-yellow-400 via-orange-500 to-yellow-600" />
            </FadeInCard>
          </Marquee>
          <div className="container absolute z-10">
            <div className="mx-auto size-24 rounded-[2rem] border p-3 shadow-2xl backdrop-blur-md bg-background/10 lg:size-32">
              <Rocket size={16} className="mx-auto size-16 lg:size-24" />
            </div>
            <div className="z-10 mt-4 flex flex-col items-center text-center">
              <h2 className="text-3xl font-bold lg:text-4xl font-heading">
                Grow your network, programmably.
              </h2>
              <p className="mt-2">Create your own on-chain referral system. we take zero fees</p>
              <Button
                size="lg"
                asChild
                variant="outline"
                className="group mt-4 rounded-full px-6 hover:bg-border"
              >
                <Link href="https://app.referprotocol.com/" target="_blank" rel="noreferrer" className="group mt-4 px-6 transition-all duration-300 ease-out">
                  Get Started
                  <ChevronRight
                    size={16}
                    className="ml-1 size-4 transition-all duration-300 ease-out group-hover:translate-x-1"
                  />
                </Link>
              </Button>
            </div>
            <div className="absolute inset-0 -z-10 rounded-full bg-background opacity-40 blur-xl" />
          </div>
          <div className="absolute inset-x-0 bottom-0 h-full bg-gradient-to-b from-transparent to-background to-70%" />
        </div>
      </div>
    </section>
  );
}
