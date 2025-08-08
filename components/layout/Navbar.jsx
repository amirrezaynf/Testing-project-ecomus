"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
// ##ICONS##
import { TbHeadset } from "react-icons/tb";
import { FaRegHeart } from "react-icons/fa";
import { FaSearch } from "react-icons/fa";
import { MdCompareArrows } from "react-icons/md";
import { RiShoppingBag2Line } from "react-icons/ri";
import { FaShoppingCart } from "react-icons/fa";
import { FiUser } from "react-icons/fi";
import { RiMenu2Fill } from "react-icons/ri";
import { IoIosArrowDown } from "react-icons/io";
import { TbCategory } from "react-icons/tb";
import Image from "next/image";

export default function Navbar() {
  const [showNavbar, setShowNavbar] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY > lastScrollY && currentScrollY > 80) {
        setShowNavbar(false);
      } else {
        setShowNavbar(true);
      }

      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  return (
    <header
      className={`fixed top-0 z-50 w-screen transform bg-layotbg text-stone-200 shadow-md transition-transform duration-300 ${
        showNavbar ? "translate-y-0" : "-translate-y-full"
      }`}
    >
      <div className="grid w-full grid-cols-3 grid-rows-1 items-center justify-between border-b px-4 py-[0.7rem] xl:h-25 xl:border-b-amber-50">
        {/* #mobile-menu } */}
        <div className="xl:hidden">
          <RiMenu2Fill size={24} />
        </div>
        <Link
          href="/"
          className="justify-self-center text-[2rem] font-semibold text-stone-50 xl:ml-11 xl:justify-self-start"
        >
          <Image src="/logo.svg" width={150} height={200} alt="logo" />
        </Link>

        {/* {#desktop-search} */}
        <div className="hidden w-[28rem] justify-between justify-self-center rounded-full bg-stone-50 px-5 py-1.5 xl:flex">
          <input
            type="search"
            placeholder="Serach Prudoct"
            className="mr-2 w-full text-sm text-stone-900 outline-none placeholder:text-stone-400"
          />

          <button className="rounded-full bg-layotbg px-8 py-2">
            <FaSearch />
          </button>
        </div>

        <div className="mr-8 hidden items-center justify-end space-x-3 text-stone-50 xl:flex">
          <div className="flex cursor-pointer font-bold hover:text-primary">
            <FiUser size={24} className="mr-2" /> Login
          </div>
          <div className="flex cursor-pointer font-bold hover:text-primary">
            <MdCompareArrows size={24} className="mr-2" /> compare
          </div>
          <div className="flex cursor-pointer font-bold hover:text-primary">
            <FaRegHeart size={24} className="mr-2" /> wishList
          </div>
          <div className="cursor-pointer border-l-1 border-l-stone-50 pl-2 hover:text-primary">
            <RiShoppingBag2Line size={35} />
          </div>
        </div>

        <div className="flex justify-end space-x-2 xl:hidden">
          <FaSearch size={22} /> <RiShoppingBag2Line size={22} />
        </div>

        <nav className="xl:bolck hidden space-x-4">
          <Link href="/products">Products</Link>
          <Link href="/categories/gaming">Gaming</Link>
          <Link href="/cart">
            <FaShoppingCart className="inline-block text-lg" />
          </Link>
        </nav>
      </div>

      <div className="mx-14 hidden h-20 items-center justify-between xl:flex">
        <div className="flex items-center space-x-8">
          <button className="flex cursor-pointer items-center rounded-2xl bg-primary px-10 py-2 pl-4 text-stone-50">
            <TbCategory size={22} className="mr-3" /> Browes All Categories
          </button>
          <ul className="text-md flex space-x-5 font-extralight text-stone-50">
            <li className="flex items-center ease-in-out hover:border-b-2">
              Home <IoIosArrowDown className="ml-1" />
            </li>
            <li className="flex items-center ease-in-out hover:border-b-2">
              Shop <IoIosArrowDown className="ml-1" />
            </li>
            <li className="flex items-center ease-in-out hover:border-b-2">
              Product <IoIosArrowDown className="ml-1" />
            </li>
            <li className="flex items-center ease-in-out hover:border-b-2">
              Page <IoIosArrowDown className="ml-1" />
            </li>
            <li className="flex items-center ease-in-out hover:border-b-2">
              Block <IoIosArrowDown className="ml-1" />
            </li>
            <li className="ease-in-out hover:border-b-2">Buy Now</li>
          </ul>
        </div>

        <div className="flex">
          <div className="flex items-center justify-center">
            <TbHeadset size={35} />
          </div>
          <div className="ml-5 flex flex-col items-start">
            <p className="cursor-pointer text-3xl font-bold text-primary">
              1900100888
            </p>
            <p>Support Center</p>
          </div>
        </div>
      </div>
    </header>
  );
}
