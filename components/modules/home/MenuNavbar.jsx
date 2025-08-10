import React from "react";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/shadcn/sheet";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/shadcn/accordion";
import { RiMenu2Fill } from "react-icons/ri";
import { FaRegHeart, FaSearch } from "react-icons/fa";
import { FiUser } from "react-icons/fi";
export default function MenuNavbar() {
  return (
    <Sheet>
      <SheetTrigger>
        <RiMenu2Fill size={30} className="text-stone-50" />
      </SheetTrigger>
      <SheetContent side="left">
        <SheetHeader>
          <SheetTitle></SheetTitle>
        </SheetHeader>

        {/* آکاردئون را در اینجا، بعد از SheetHeader قرار دهید */}
        <Accordion type="single" collapsible className="w-full px-4">
          <AccordionItem value="item-1">
            <AccordionTrigger>Home</AccordionTrigger>
            <AccordionContent className="flex flex-col gap-4 text-balance">
              <ul>
                <li>Home Item 1</li>
                <li>Home Item 2</li>
                <li>Home Item 3</li>
              </ul>

              {/* بقیه محتوای آکاردئون... */}
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-2">
            <AccordionTrigger>Shop</AccordionTrigger>
            <AccordionContent className="flex flex-col gap-4 text-balance">
              <ul>
                <li>Shop Item 1</li>
                <li>Shop Item 2</li>
                <li>Shop Item 3</li>
              </ul>

              {/* بقیه محتوای آکاردئون... */}
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-3">
            <AccordionTrigger>Product</AccordionTrigger>
            <AccordionContent className="flex flex-col gap-4 text-balance">
              <ul>
                <li>Product Item 1</li>
                <li>Product Item 2</li>
                <li>Product Item 3</li>
              </ul>
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-4">
            <AccordionTrigger>Pages</AccordionTrigger>
            <AccordionContent className="flex flex-col gap-4 text-balance">
              <ul>
                <li>Page Item 1</li>
                <li>Page Item 2</li>
                <li>Page Item 3</li>
              </ul>
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-5">
            <AccordionTrigger>Blog</AccordionTrigger>
            <AccordionContent className="flex flex-col gap-4 text-balance">
              <ul>
                <li>Blog Item 1</li>
                <li>Blog Item 2</li>
                <li>Blog Item 3</li>
              </ul>
            </AccordionContent>
          </AccordionItem>
        </Accordion>

        <div className="flex justify-center gap-4">
          <div className="flex h-10 w-34 items-center justify-center rounded-full bg-layotbg text-white">
            <FaSearch /> <p> Search</p>
          </div>
          <div className="flex h-10 w-34 items-center justify-center rounded-full bg-layotbg text-white">
            <FaRegHeart size={24} className="mr-2" /> <p>wishList</p>
          </div>
        </div>

        <div className="ml-4">
          <div className="w-fit border-b-2 text-stone-900 hover:text-primary">
            Need help?
          </div>
          <p className="pt-4 text-stone-600">
            Address: 1234 Fashion Street, Suite 567,
            <br />
            New York, NY 10001 <br />
            Email: <span>info@fashionshop.com</span>
            <br />
            Phone: <span>(212) 555-1234</span>
          </p>
        </div>
        <div className="mt-4 ml-4 flex h-10 w-34 items-center justify-center rounded-full bg-layotbg text-white">
          <FiUser size={24} className="mr-2" />
          <p>Login</p>
        </div>
      </SheetContent>
    </Sheet>
  );
}
