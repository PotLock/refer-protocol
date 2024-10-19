import Link from "next/link";
import { Twitter } from "lucide-react";

export function Footer() {
  return (
    <footer className="container">
      <div className="mx-auto w-full max-w-screen-xl xl:pb-2">
        <div className="md:flex md:justify-between px-8 py-16 sm:pb-16 gap-4">
          <div className="mb-12 flex-col flex gap-4">
            <Link href="/" className="flex gap-2">
              <span className="self-center text-2xl font-semibold whitespace-nowrap">
                REFER PROTOCOL
              </span>
            </Link>
            <p className="max-w-xs">Build Powerful On-Chain Referrals</p>
          </div>
          <div className="grid grid-cols-1 gap-8 sm:gap-10 sm:grid-cols-3">
            <div>
              <h2 className="mb-6 text-sm tracking-tighter font-medium uppercase">NAVIGATE</h2>
              <ul className="gap-2 grid list-none">
                <li>
                  <Link
                    href="https://app.referprotocol.com"
                    className="cursor-pointer text-muted-foreground hover:text-foreground/80 duration-200 font-[450] text-sm"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    APP
                  </Link>
                </li>
                <li>
                  <Link
                    href="#use-cases"
                    className="cursor-pointer text-muted-foreground hover:text-foreground/80 duration-200 font-[450] text-sm"
                  >
                    Use Cases 
                  </Link>
                </li>
                <li>
                  <Link
                    href="#features"
                    className="cursor-pointer text-muted-foreground hover:text-foreground/80 duration-200 font-[450] text-sm"
                  >
                    HOW IT WORKS
                  </Link>
                </li>
                <li>
                  <Link
                    href="https://app.referprotocol.com"
                    className="cursor-pointer text-muted-foreground hover:text-foreground/80 duration-200 font-[450] text-sm"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    CREATE REFERRAL
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h2 className="mb-6 text-sm tracking-tighter font-medium uppercase">BUILD</h2>
              <ul className="gap-2 grid list-none">
                <li>
                  <Link
                    href="https://docs.referprotocol.com"
                    className="cursor-pointer text-muted-foreground hover:text-foreground/80 duration-200 font-[450] text-sm"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    SDK
                  </Link>
                </li>
                <li>
                  <Link
                    href="https://api.referprotocol.com"
                    className="cursor-pointer text-muted-foreground hover:text-foreground/80 duration-200 font-[450] text-sm"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    API
                  </Link>
                </li>
                <li>
                  <Link
                    href="https://docs.referprotocol.com"
                    className="cursor-pointer text-muted-foreground hover:text-foreground/80 duration-200 font-[450] text-sm"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    DOCS
                  </Link>
                </li>
                <li>
                  <Link
                    href="https://docs.referprotocol.com/"
                    className="cursor-pointer text-muted-foreground hover:text-foreground/80 duration-200 font-[450] text-sm"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    CONTRACTS
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="flex flex-row items-center justify-between rounded-md border-neutral-700/20 py-4 px-8">
          <div className="flex items-center">
            <a
              href="https://x.com/potlock_"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-muted-foreground/80 fill-muted-foreground hover:fill-muted-foreground/80"
            >
              <Twitter size={15} />
              <span className="sr-only">Twitter</span>
            </a>
          </div>
          <div className="flex flex-row justify-end text-sm text-muted-foreground">
            <span>PART OF </span>
            <Link href="https://potlock.org" className="cursor-pointer ml-1" target="_blank" rel="noopener noreferrer">
              🫕 POTLOCK PROTOCOL
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
