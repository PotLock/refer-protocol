"use client";

import Link from "next/link";
import { motion } from "framer-motion";

import { Button } from "@/components/ui/button";

export function Header() {
  return (
    <header className="fixed left-0 top-0 z-50 w-full translate-y-[-1rem] animate-fade-in border-b opacity-0 [--animation-delay:600ms] backdrop-blur-[12px]">
      <div className="container flex h-[3.5rem] items-center justify-between">
        <Link href="#hero" className="flex items-center">
          🎟️ REFER
        </Link>
        <div className="ml-auto flex gap-6 h-full items-center">
          <Link href="https://docs.referprotocol.com/" target="_blank" rel="noreferrer" className="text-sm">
            Docs
          </Link>
          <Link href="https://docs.referprotocol.com/" target="_blank" rel="noreferrer" className="text-sm">
            SDK
          </Link>
          <Link href="https://api.referprotocol.com/" target="_blank" rel="noreferrer" className="text-sm">
            API
          </Link>
          <Button asChild variant="secondary" className="text-sm">
            <Link href="https://app.referprotocol.com/" target="_blank" rel="noreferrer">Launch App</Link>
          </Button>
        </div>
      </div>
    </header>
  );
}
