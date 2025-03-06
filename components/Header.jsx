"use client";

import { FaSearch, FaBars, FaTimes } from "react-icons/fa";
import { FaHouse, FaPlus } from "react-icons/fa6";
import Link from "next/link";
import { SignedIn, SignedOut, UserButton } from "@clerk/nextjs";
import { useEffect, useState } from "react";
import { useSearchParams, useRouter } from "next/navigation";

export default function Header() {
  const searchParams = useSearchParams();
  const router = useRouter();
  const [searchTerm, setSearchTerm] = useState("");
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const urlParams = new URLSearchParams(searchParams);
    const searchTermFromUrl = urlParams.get("searchTerm");
    if (searchTermFromUrl) {
      setSearchTerm(searchTermFromUrl);
    }
  }, [searchParams]);

  const handleSubmit = (e) => {
    e.preventDefault();
    const urlParams = new URLSearchParams(searchParams);
    urlParams.set("searchTerm", searchTerm);
    const searchQuery = urlParams.toString();
    router.push(`/search?${searchQuery}`);
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="bg-slate-200 shadow-md sticky top-0 z-50">
      <div className="flex justify-between items-center max-w-6xl mx-auto p-3">
        <Link href="/" className="flex items-center">
          <h1 className="font-bold text-sm sm:text-xl flex flex-wrap items-center">
            <span className="text-slate-500">Sahand</span>
            <span className="text-slate-700">Estate</span>
          </h1>
        </Link>

        <form
          className="bg-slate-100 p-3 rounded-lg flex items-center flex-grow mx-4 max-w-md"
          onSubmit={handleSubmit}
        >
          <input
            type="text"
            placeholder="Search..."
            className="bg-transparent focus:outline-none w-full"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <button type="submit" className="focus:outline-none">
            <FaSearch className="text-slate-600 hover:text-slate-800 transition" />
          </button>
        </form>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-6">
          <Link href="/">
            <span className="text-slate-700 hover:text-slate-900 font-medium flex items-center gap-1 hover:underline">
              <FaHouse className="text-sm" />
              <span>Home</span>
            </span>
          </Link>
          <Link href="/about">
            <span className="text-slate-700 hover:text-slate-900 font-medium hover:underline">
              About
            </span>
          </Link>
          <SignedIn>
            <Link href="/create-listing">
              <span className="bg-slate-700 text-white px-4 py-2 rounded-lg flex items-center gap-1 hover:bg-slate-800 transition">
                <FaPlus className="text-sm" />
                <span>Create Listing</span>
              </span>
            </Link>
            <UserButton afterSignOutUrl="/" />
          </SignedIn>
          <SignedOut>
            <Link href="/sign-in">
              <span className="text-slate-700 hover:text-slate-900 font-medium hover:underline">
                Sign In
              </span>
            </Link>
          </SignedOut>
        </nav>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-slate-700 hover:text-slate-900 p-2"
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          {isMenuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-slate-100 py-4 px-6 shadow-inner animate-fadeIn">
          <nav className="flex flex-col gap-4">
            <Link href="/" onClick={() => setIsMenuOpen(false)}>
              <span className="text-slate-700 font-medium flex items-center gap-2 p-2 hover:bg-slate-200 rounded-md transition">
                <FaHouse />
                <span>Home</span>
              </span>
            </Link>
            <Link href="/about" onClick={() => setIsMenuOpen(false)}>
              <span className="text-slate-700 font-medium flex items-center gap-2 p-2 hover:bg-slate-200 rounded-md transition">
                <span>About</span>
              </span>
            </Link>
            <SignedIn>
              <Link href="/create-listing" onClick={() => setIsMenuOpen(false)}>
                <span className="text-slate-700 font-medium flex items-center gap-2 p-2 hover:bg-slate-200 rounded-md transition">
                  <FaPlus />
                  <span>Create Listing</span>
                </span>
              </Link>
            </SignedIn>
            <SignedOut>
              <Link href="/sign-in" onClick={() => setIsMenuOpen(false)}>
                <span className="text-slate-700 font-medium flex items-center gap-2 p-2 hover:bg-slate-200 rounded-md transition">
                  <span>Sign In</span>
                </span>
              </Link>
            </SignedOut>
          </nav>
        </div>
      )}
    </header>
  );
}
