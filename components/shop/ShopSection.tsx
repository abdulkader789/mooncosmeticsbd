"use client";
import React, { useEffect, useState } from "react";
import getProductsData from "@/lib/getProductsData"; // Adjust the path as necessary
import { IProduct } from "@/types"; // Adjust the path as necessary
import Image from "next/image";

interface ShopSectionProps {
  products: IProduct[]; // Accept products as a prop
}

const ShopSection: React.FC<ShopSectionProps> = ({ products }) => {
  const categories: { title: string; slug: string }[] = [
    { title: "Harbal Oil", slug: "herbal-oil" },
    { title: "Hair Care", slug: "hair-care" },
    { title: "Fragrance", slug: "fragrances" },
    // { title: "Attar", slug: "attar" },
    // { title: "Perfume", slug: "perfume" },
    { title: "Color Cosmetics", slug: "color-cosmetics" },
    { title: "Winter Care", slug: "winter-care" },
  ];

  // State management
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [displayedProducts, setDisplayedProducts] = useState<IProduct[]>([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [searchTerm, setSearchTerm] = useState(""); // New state for search term
  const itemsPerPage = 10;

  // Shuffle products array
  const shuffleArray = (array: IProduct[]) => {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
  };

  // Filter and paginate products
  useEffect(() => {
    const shuffledProducts = shuffleArray([...products]);
    let filteredProducts = shuffledProducts;

    // Filter by category
    if (selectedCategory !== "all") {
      filteredProducts = filteredProducts.filter(
        (product) => product.category === selectedCategory
      );
    }

    // Filter by search term
    if (searchTerm) {
      filteredProducts = filteredProducts.filter((product) =>
        product.name.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }

    setDisplayedProducts(filteredProducts.slice(0, currentPage * itemsPerPage));
  }, [selectedCategory, currentPage, products, searchTerm]);

  // Handle category selection
  const handleCategoryChange = (slug: string) => {
    setSelectedCategory(slug);
    setCurrentPage(1); // Reset to the first page on category change
  };

  // Handle pagination
  const handleNextPage = () => {
    setCurrentPage((prev) => prev + 1);
  };

  // Handle clear all functionality
  const handleClearAll = () => {
    setSelectedCategory("all");
    setSearchTerm(""); // Clear the search term
    setCurrentPage(1); // Reset to the first page
  };

  return (
    <section>
      <div className="mx-auto w-full px-5 py-6 md:px-10 md:py-14 bg-white">
        <div className="flex flex-col gap-12 ">
          <div className="grid gap-10 md:gap-12 lg:grid-cols-[max-content_1fr] ">
            {/* Filters */}
            <div className="mb-4 max-w-none lg:max-w-sm pt-5">
              <form
                name="wf-form-Filter-2"
                method="get"
                className="flex-col gap-6"
              >
                <div className="mb-6 flex items-center justify-between py-4 [border-bottom:1px_solid_rgb(217,_217,_217)]">
                  <h5 className="text-xl font-bold">Filters</h5>
                  <a href="#" onClick={handleClearAll} className="text-sm">
                    <p>Clear all</p>
                  </a>
                </div>
                <input
                  type="text"
                  value={searchTerm} // Set the input value to the search term
                  onChange={(e) => setSearchTerm(e.target.value)} // Update search term on input change
                  className="mb-10 block h-9 min-h-[44px] w-full rounded-md border border-solid border-[#cccccc] bg-[#f2f2f7] bg-[16px_center] bg-no-repeat py-3 pl-11 pr-4 text-sm font-bold text-[#333333] [background-size:18px] [border-bottom:1px_solid_rgb(215,_215,_221)]"
                  placeholder="Search"
                  style={{
                    backgroundImage:
                      'url("https://assets.website-files.com/6458c625291a94a195e6cf3a/64b7a3a33cd5dc368f46daaa_MagnifyingGlass.svg")',
                  }}
                />
                <div className="flex flex-col gap-6">
                  <p className="font-semibold">Categories</p>
                  <div className="flex flex-wrap items-center gap-2">
                    <a
                      href="#"
                      onClick={() => handleCategoryChange("all")}
                      className={`flex gap-3 rounded-md p-3 font-semibold ${
                        selectedCategory === "all"
                          ? "bg-[#e0e0e0]"
                          : "bg-[#f2f2f7]"
                      }`}
                    >
                      <p>All</p>
                    </a>
                    {categories.map((category) => (
                      <a
                        key={category.slug}
                        href="#"
                        onClick={() => handleCategoryChange(category.slug)}
                        className={`flex gap-3 rounded-md p-3 font-semibold ${
                          selectedCategory === category.slug
                            ? "bg-[#e0e0e0]"
                            : "bg-[#f2f2f7]"
                        }`}
                      >
                        <p>{category.title}</p>
                      </a>
                    ))}
                  </div>
                </div>
                <div className="mb-6 mt-6 h-px w-full bg-[#d9d9d9]"></div>
              </form>
            </div>
            {/* Show All Products */}
            <div className="w-full [lg:border-left:1px_solid_rgb(217,_217,_217)] lg:pl-5 pt-5">
              <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3 ">
                {displayedProducts.map((product) => (
                  <div key={product.name} className="border p-4 relative">
                    <Image
                      src={product.image}
                      alt={product.name}
                      width={300}
                      height={300}
                      className="w-full h-auto"
                    />
                    <h4 className=" absolute top-5 text-lg font-semibold">
                      {product.name}
                    </h4>
                  </div>
                ))}
              </div>
              {/* Pagination */}
              {displayedProducts.length < products.length && (
                <div className="flex justify-center mt-4">
                  <button
                    onClick={handleNextPage}
                    className="px-4 py-2 text-white bg-blue-500 rounded hover:bg-blue-600"
                  >
                    Load More
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ShopSection;