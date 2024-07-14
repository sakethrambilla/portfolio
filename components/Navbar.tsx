"use client";
import { cn } from "@/lib/utils";
import { Menu, X } from "lucide-react";
import Link from "next/link";
import React, { useState } from "react";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <>
      {/* Desktop navbar */}
      <div className="z-0 h-fit w-full p-4">
        <div className="flex w-full flex-row items-center justify-between rounded-full bg-white/5 px-8 py-4 font-cormorant_garamond backdrop-blur-md">
          <Link href={"/"}>
            <p className="font-cormorant_garamond text-2xl text-primary">
              Sakethrambilla
            </p>
          </Link>
          {menuOpen ? (
            <X
              className="text-primary lg:hidden"
              onClick={() => setMenuOpen(!menuOpen)}
            />
          ) : (
            <Menu
              className="text-primary lg:hidden"
              onClick={() => setMenuOpen(!menuOpen)}
            />
          )}
          <div className="hidden flex-row items-center gap-8 lg:flex lg:text-xl">
            <Link
              href="/about"
              className="transition duration-300 hover:scale-110"
            >
              About
            </Link>
            <Link
              href="/mytechstack"
              className="transition duration-300 hover:scale-110"
            >
              My Stack
            </Link>
            <Link
              href="/work"
              className="transition duration-300 hover:scale-110"
            >
              Work
            </Link>
            <Link
              href="/blog"
              className="transition duration-300 hover:scale-110"
            >
              Blog
            </Link>

            <Link
              href="/contact"
              className="rounded-full bg-primary px-4 py-2 text-primary-foreground"
            >
              Contact
            </Link>
          </div>
        </div>
      </div>

      {/* Mobile Navbar */}
      <div
        className={cn(
          "absolute z-50 flex h-full w-full flex-col gap-12 bg-background px-10 py-10 font-cormorant_garamond",
          menuOpen ? "flex" : "hidden",
        )}
      >
        <div className="flex h-fit w-full items-end justify-end">
          <X className="lg:hidden" onClick={() => setMenuOpen(!menuOpen)} />
        </div>
        <div className="flex h-full w-full flex-col gap-12 text-3xl">
          <Link
            href="/about"
            className="transition duration-300 hover:scale-110"
          >
            About
          </Link>
          <Link
            href="/mytechstack"
            className="transition duration-300 hover:scale-110"
          >
            My Stack
          </Link>
          <Link
            href="/work"
            className="transition duration-300 hover:scale-110"
          >
            Work
          </Link>
          <Link
            href="/blog"
            className="transition duration-300 hover:scale-110"
          >
            Blog
          </Link>

          <Link href="/contact" className="">
            Contact
          </Link>
        </div>
      </div>
    </>
  );
};

export default Navbar;
