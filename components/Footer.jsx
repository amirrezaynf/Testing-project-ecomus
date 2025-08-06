"use client";
import { FaPinterestP } from "react-icons/fa";
import { BsTiktok } from "react-icons/bs";
import { AiOutlineInstagram } from "react-icons/ai";
import { BiX } from "react-icons/bi";
import { CgFacebook } from "react-icons/cg";
import { AiOutlineSearch } from "react-icons/ai";
import { BiSearchAlt2 } from "react-icons/bi";
import Image from "next/image";

// ##ICONS ##
import { MdArrowOutward } from "react-icons/md";
import { useState } from "react";
import PaymentMethod from "./PaymentMethod";

export default function Footer() {
  const [isHelpOpen, setIsHelpOpen] = useState(false);
  const [isAboutOpen, setIsAboutOpen] = useState(false);
  const [isSignupOpen, setIsSignupOpen] = useState(false);

  return (
    <footer className="bg-stone-950 pt-8">
      <div className="mx-14 mt-7 grid grid-cols-1 gap-4 text-sm text-stone-50 md:grid-cols-2 xl:grid-cols-4">
        <div>
          <div className="mt-2 mb-10 flex-wrap">
            <Image src="/logo.svg" width={150} height={20} alt="logo" />
          </div>
          <ul className="mt-4 flex flex-col items-start justify-start space-y-3 text-stone-400">
            <li>Address: 1234 Fashion Street, Suite 567, New York, NY</li>
            <li>Email: info@fashionshop.com</li>
            <li>Phone: (212)555-1234</li>
            <li className="mt-3 flex cursor-pointer border-b-2 border-stone-400 hover:border-b-primary hover:text-primary">
              Get direction
              <MdArrowOutward size={18} />
            </li>
          </ul>

          <ul className="mt-4 flex space-x-2">
            <li className="flex h-8 w-8 cursor-pointer items-center justify-center rounded-full border-2 border-stone-400 text-stone-400">
              <CgFacebook size={20} />
            </li>
            <li className="flex h-8 w-8 cursor-pointer items-center justify-center rounded-full border-2 border-stone-400 text-stone-400">
              <BiX size={30} />
            </li>
            <li className="flex h-8 w-8 cursor-pointer items-center justify-center rounded-full border-2 border-stone-400 text-stone-400">
              <AiOutlineInstagram size={20} />
            </li>
            <li className="flex h-8 w-8 cursor-pointer items-center justify-center rounded-full border-2 border-stone-400 text-stone-400">
              <BsTiktok size={20} />
            </li>
            <li className="flex h-8 w-8 cursor-pointer items-center justify-center rounded-full border-2 border-stone-400 text-stone-400">
              <FaPinterestP size={20} />
            </li>
          </ul>
        </div>

        <div>
          <div
            className="mb-10 flex-wrap text-xl font-medium text-stone-50"
            onClick={() => setIsHelpOpen((prev) => !prev)}
          >
            Help
            <span className="text-xl md:hidden">{isHelpOpen ? "-" : "+"}</span>
          </div>
          <ul
            className={` ${
              isHelpOpen ? "block" : "hidden"
            } mt-4 flex flex-col items-start justify-start space-y-2 text-stone-400 md:block`}
          >
            <li className="cursor-pointer hover:text-primary">
              Privacy Policy
            </li>
            <li className="cursor-pointer hover:text-primary">
              Returns + Exchanges
            </li>
            <li className="cursor-pointer hover:text-primary">Shipping</li>
            <li className="cursor-pointer hover:text-primary">
              Terms & Conditions
            </li>
            <li className="cursor-pointer hover:text-primary">FAQ’s</li>
            <li className="cursor-pointer hover:text-primary">Compare</li>
            <li className="cursor-pointer hover:text-primary">My Wishlist</li>
          </ul>
        </div>

        <div>
          <div
            onClick={() => setIsAboutOpen((prev) => !prev)}
            className="mb-10 flex flex-wrap items-center gap-2 text-xl font-medium text-stone-50"
          >
            About us
            <span className="text-xl md:hidden">{isAboutOpen ? "-" : "+"}</span>
          </div>

          <ul
            className={`mt-4 flex flex-col items-start justify-start space-y-3 md:block ${
              isAboutOpen ? "block" : "hidden"
            } text-stone-400`}
          >
            <li className="cursor-pointer hover:text-primary">Our Story</li>
            <li className="cursor-pointer hover:text-primary">
              Visit Our Store
            </li>
            <li className="cursor-pointer hover:text-primary">Contact Us</li>
            <li className="cursor-pointer hover:text-primary">About Us</li>
            <li className="cursor-pointer hover:text-primary">Account</li>
          </ul>
        </div>

        <div>
          <div
            className="mb-10 flex-wrap text-xl font-medium text-stone-50"
            onClick={() => setIsSignupOpen((prev) => !prev)}
          >
            Sign Up for Email
            <span className="text-xl md:hidden">
              {isSignupOpen ? "-" : "+"}
            </span>
          </div>
          <div className={`${isSignupOpen ? "block" : "hidden"} md:block`}>
            <p className="mt-4 flex flex-col items-start justify-start space-y-3 text-stone-400">
              Sign up to get first dibs on new arrivals, sales, exclusive
              content, events and more!
            </p>

            <div className="mt-6 flex bg-stone-800 px-5 py-1.5">
              <input
                type="email"
                placeholder="Enter Email Address"
                className="mr-2 w-full text-sm text-stone-300 outline-none placeholder:text-stone-400"
              />
              <button className="flex cursor-pointer items-center rounded-b-md bg-stone-950 px-4 py-2.5">
                subscribe
                <MdArrowOutward className="ml-2" size={15} />
              </button>
            </div>

            <div className="mt-7 flex justify-start gap-10">
              <select className="text-stone-400" name="lg" id="lg">
                <option className="text-stone-700" value="eng">
                  English
                </option>
                <option className="text-stone-700" value="arabi">
                  العربیه
                </option>
              </select>
              <select className="text-stone-400" name="coutry" id="conutry">
                <option className="text-stone-700" value="eur">
                  EUR
                </option>
                <option className="text-stone-700" value="usd">
                  USD
                </option>
                <option className="text-stone-700" value="aud">
                  AUD
                </option>
              </select>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-8 flex flex-col items-center justify-between gap-6 border-t-2 border-stone-600 px-14 py-8 text-center md:flex-row">
        <p className="flex items-center text-stone-400">
          © 2025 Ecomus. All rights reserved.
        </p>
        <PaymentMethod />
      </div>
    </footer>
  );
}
