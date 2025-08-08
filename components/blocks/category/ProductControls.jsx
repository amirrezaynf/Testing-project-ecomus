// components/category/ProductControls.js
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/shadcn/sheet";
import { Slider } from "@/components/ui/shadcn/slider";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/shadcn/select";

export default function ProductControls({
  sortOption,
  setSortOption,
  priceRange,
  setPriceRange,
  minProductPrice,
  maxProductPrice,
  gridCols,
  handleGridColClick,
  columnOptions,
}) {
  const getColonPattern = (num) => ":".repeat(num);

  return (
    <>
      <div className="flex justify-between">
        {/* Filter Button & Sheet */}
        <Sheet>
          <SheetTrigger className="ml-10 flex flex-row-reverse items-center gap-2 rounded-sm border-2 border-gray-100 px-4 py-2.5 text-[0.9rem] transition-all duration-300 hover:border-stone-400">
            FILTER
            <svg
              stroke="currentColor"
              fill="currentColor"
              strokeWidth="0"
              viewBox="0 0 24 24"
              height="1.2em"
              width="2em"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M10 18H14V16H10V18ZM3 6V8H21V6H3ZM6 13H18V11H6V13Z"></path>
            </svg>
          </SheetTrigger>
          <SheetContent side="left">
            <SheetHeader>
              <SheetTitle className="flex items-center gap-2 text-2xl">
                <svg
                  stroke="currentColor"
                  fill="currentColor"
                  strokeWidth="0"
                  viewBox="0 0 24 24"
                  height="1.2em"
                  width="2em"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M10 18H14V16H10V18ZM3 6V8H21V6H3ZM6 13H18V11H6V13Z"></path>
                </svg>
                Filter
              </SheetTitle>
              {/* Price Slider */}
              <div className="mt-8 px-4">
                <h3 className="mb-4 text-xl font-semibold text-gray-800">
                  Price
                </h3>
                <Slider
                  className="mt-12"
                  min={minProductPrice}
                  max={maxProductPrice}
                  step={1}
                  value={priceRange}
                  onValueChange={setPriceRange}
                />
                <div className="mt-6 text-center text-lg text-gray-700">
                  Price: <span>${priceRange[0].toFixed(2)}</span> -{" "}
                  <span>${priceRange[1].toFixed(2)}</span>
                </div>
              </div>
            </SheetHeader>
          </SheetContent>
        </Sheet>

        {/* Sort By Dropdown */}
        <div className="mb-8 flex items-center justify-center gap-4">
          <Select onValueChange={setSortOption} defaultValue={sortOption}>
            <SelectTrigger className="w-[200px] rounded-lg border-2 border-gray-100 px-4 py-2.5 text-[0.9rem] transition-all duration-300 hover:border-stone-400">
              <SelectValue placeholder="Select Option" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="featured">Featured</SelectItem>
              <SelectItem value="best-selling">Best selling</SelectItem>
              <SelectItem value="alphabetical-az">
                Alphabetically A-Z
              </SelectItem>
              <SelectItem value="alphabetical-za">
                Alphabetically Z-A
              </SelectItem>
              <SelectItem value="price-low-to-high">
                Price, low to high
              </SelectItem>
              <SelectItem value="price-high-to-low">
                Price, high to low
              </SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>

      {/* Grid Column Buttons */}
      <div className="mb-8 flex flex-wrap items-center justify-center gap-4">
        {columnOptions.map((num) => (
          <button
            key={num}
            onClick={() => handleGridColClick(num)}
            className={`rounded-lg px-3 py-1 pb-2 text-2xl font-extrabold transition-colors ${
              gridCols === num
                ? "bg-gray-200 text-gray-700 hover:bg-gray-300"
                : ""
            } `}
          >
            {getColonPattern(num)}
          </button>
        ))}
      </div>
    </>
  );
}
