import {
  Link,
  Puzzle,
  DollarSign,
  Globe,
  BadgeAlert,
  LayoutDashboard,
  Plug,
  CodeXml,
} from "lucide-react";

export function Features() {
  return (
    <section id="features" className="container flex flex-col items-center gap-6 py-24 sm:gap-7">
      <div className="flex flex-col gap-3">
        <span className="font-bold uppercase text-primary text-center">Features</span>
        <h2 className="font-heading text-3xl font-semibold tracking-tight sm:text-4xl text-balance text-center">
          A referral system made to build on
        </h2>
      </div>
      <p className="text-lg text-muted-foreground text-balance max-w-xl text-center">
        Built open, decentralized, and for developers.
      </p>
      <div className="relative z-10 mx-auto grid max-w-7xl grid-cols-1 py-10 md:grid-cols-2 lg:grid-cols-4">
        <div className="group/feature relative flex flex-col py-10 lg:border-r lg:border-l lg:border-b">
          <div className="pointer-events-none absolute inset-0 size-full from-primary/20 to-transparent opacity-0 transition duration-200 group-hover/feature:opacity-100 bg-gradient-to-t" />
          <div className="relative z-10 mb-4 px-10">
            <Link size={24} className="text-primary" />
          </div>
          <div className="relative z-10 mb-2 px-10 text-lg font-bold">
            <div className="absolute inset-y-0 left-0 h-6 w-1 origin-center rounded-r-full bg-neutral-300 transition-all duration-200 group-hover/feature:h-8 group-hover/feature:bg-primary" />
            <span className="inline-block">On-Chain Tracking</span>
          </div>
          <p className="relative z-10 max-w-xs px-10 text-sm text-muted-foreground">
            Map and authenticate referrals directly on the blockchain, ensuring transparency and
            immutability.
          </p>
        </div>
        <div className="group/feature relative flex flex-col py-10 lg:border-r lg:border-b">
          <div className="pointer-events-none absolute inset-0 size-full from-primary/20 to-transparent opacity-0 transition duration-200 group-hover/feature:opacity-100 bg-gradient-to-t" />
          <div className="relative z-10 mb-4 px-10">
            <Puzzle size={24} className="text-primary" />
          </div>
          <div className="relative z-10 mb-2 px-10 text-lg font-bold">
            <div className="absolute inset-y-0 left-0 h-6 w-1 origin-center rounded-r-full bg-neutral-300 transition-all duration-200 group-hover/feature:h-8 group-hover/feature:bg-primary" />
            <span className="inline-block">Customizable Programs</span>
          </div>
          <p className="relative z-10 max-w-xs px-10 text-sm text-muted-foreground">
            Tailor your referral system with flexible parameters to fit your project&apos;s unique
            needs.
          </p>
        </div>
        <div className="group/feature relative flex flex-col py-10 lg:border-r lg:border-b">
          <div className="pointer-events-none absolute inset-0 size-full from-primary/20 to-transparent opacity-0 transition duration-200 group-hover/feature:opacity-100 bg-gradient-to-t" />
          <div className="relative z-10 mb-4 px-10">
            <DollarSign size={24} className="text-primary" />
          </div>
          <div className="relative z-10 mb-2 px-10 text-lg font-bold">
            <div className="absolute inset-y-0 left-0 h-6 w-1 origin-center rounded-r-full bg-neutral-300 transition-all duration-200 group-hover/feature:h-8 group-hover/feature:bg-primary" />
            <span className="inline-block">Multi-Level Rewards</span>
          </div>
          <p className="relative z-10 max-w-xs px-10 text-sm text-muted-foreground">
            Incentivize not just direct referrers, but also those higher up in the dependency tree.
          </p>
        </div>
        <div className="group/feature relative flex flex-col py-10 lg:border-r lg:border-b">
          <div className="pointer-events-none absolute inset-0 size-full from-primary/20 to-transparent opacity-0 transition duration-200 group-hover/feature:opacity-100 bg-gradient-to-t" />
          <div className="relative z-10 mb-4 px-10">
            <Globe size={24} className="text-primary" />
          </div>
          <div className="relative z-10 mb-2 px-10 text-lg font-bold">
            <div className="absolute inset-y-0 left-0 h-6 w-1 origin-center rounded-r-full bg-neutral-300 transition-all duration-200 group-hover/feature:h-8 group-hover/feature:bg-primary" />
            <span className="inline-block">Slashing Mechanism</span>
          </div>
          <p className="relative z-10 max-w-xs px-10 text-sm text-muted-foreground">
            Implement penalties to maintain community quality and discourage unwanted behavior.
          </p>
        </div>
        <div className="group/feature relative flex flex-col py-10 lg:border-r lg:border-l">
          <div className="pointer-events-none absolute inset-0 size-full from-primary/20 to-transparent opacity-0 transition duration-200 group-hover/feature:opacity-100 bg-gradient-to-b" />
          <div className="relative z-10 mb-4 px-10">
            <BadgeAlert size={24} className="text-primary" />
          </div>
          <div className="relative z-10 mb-2 px-10 text-lg font-bold">
            <div className="absolute inset-y-0 left-0 h-6 w-1 origin-center rounded-r-full bg-neutral-300 transition-all duration-200 group-hover/feature:h-8 group-hover/feature:bg-primary" />
            <span className="inline-block">Web-of-Trust Authentication</span>
          </div>
          <p className="relative z-10 max-w-xs px-10 text-sm text-muted-foreground">
            Leverage referral networks for proof-of-personhood and access control.
          </p>
        </div>
        <div className="group/feature relative flex flex-col py-10 lg:border-r">
          <div className="pointer-events-none absolute inset-0 size-full from-primary/20 to-transparent opacity-0 transition duration-200 group-hover/feature:opacity-100 bg-gradient-to-b" />
          <div className="relative z-10 mb-4 px-10">
            <LayoutDashboard size={24} className="text-primary" />
          </div>
          <div className="relative z-10 mb-2 px-10 text-lg font-bold">
            <div className="absolute inset-y-0 left-0 h-6 w-1 origin-center rounded-r-full bg-neutral-300 transition-all duration-200 group-hover/feature:h-8 group-hover/feature:bg-primary" />
            <span className="inline-block">Easy to Use SDKs</span>
          </div>
          <p className="relative z-10 max-w-xs px-10 text-sm text-muted-foreground">
            Build on top of our open source referral system.&nbsp;
          </p>
        </div>
        <div className="group/feature relative flex flex-col py-10 lg:border-r">
          <div className="pointer-events-none absolute inset-0 size-full from-primary/20 to-transparent opacity-0 transition duration-200 group-hover/feature:opacity-100 bg-gradient-to-b" />
          <div className="relative z-10 mb-4 px-10">
            <Plug size={24} className="text-primary" />
          </div>
          <div className="relative z-10 mb-2 px-10 text-lg font-bold">
            <div className="absolute inset-y-0 left-0 h-6 w-1 origin-center rounded-r-full bg-neutral-300 transition-all duration-200 group-hover/feature:h-8 group-hover/feature:bg-primary" />
            <span className="inline-block">GraphQL APIs</span>
          </div>
          <p className="relative z-10 max-w-xs px-10 text-sm text-muted-foreground">
            Easily query your social graph with our APIs designed to query referrals.
          </p>
        </div>
        <div className="group/feature relative flex flex-col py-10 lg:border-r">
          <div className="pointer-events-none absolute inset-0 size-full from-primary/20 to-transparent opacity-0 transition duration-200 group-hover/feature:opacity-100 bg-gradient-to-b" />
          <div className="relative z-10 mb-4 px-10">
            <CodeXml size={24} className="text-primary" />
          </div>
          <div className="relative z-10 mb-2 px-10 text-lg font-bold">
            <div className="absolute inset-y-0 left-0 h-6 w-1 origin-center rounded-r-full bg-neutral-300 transition-all duration-200 group-hover/feature:h-8 group-hover/feature:bg-primary" />
            <span className="inline-block">Boilerplate App</span>
          </div>
          <p className="relative z-10 max-w-xs px-10 text-sm text-muted-foreground">
            Manage and even custmie your referral flwo.
          </p>
        </div>
      </div>
    </section>
  );
}
