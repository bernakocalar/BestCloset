import { ArrowLeftIcon, ArrowRightIcon } from "lucide-react";
import React, { useState } from "react";

const Pagination = ({ className = "", totalPages = 5 }) => {
  const [activePage, setActivePage] = useState(1);

  const handlePageClick = (page) => {
    setActivePage(page);
  };

  const renderButton = (page) => {
    const isActive = page === activePage;

    const commonClass = `w-12 h-12 flex items-center justify-center rounded-md font-semibold mx-0.5 transition-colors duration-200 ${
      isActive
        ? "bg-[#23A6F0] text-white"
        : "bg-white text-neutral-700 border border-neutral-200 hover:bg-neutral-100"
    }`;

    return (
      <button
        key={page}
        onClick={() => handlePageClick(page)}
        className={commonClass}
      >
        {page}
      </button>
    );
  };

  return (
    <nav className={`flex justify-center items-center gap-0 ${className}`}>
      <button
        onClick={() => handlePageClick(activePage - 1)}
        disabled={activePage === 1}
        className={`w-12 h-12 flex items-center justify-center rounded-md border bg-white text-neutral-700 ${
          activePage === 1
            ? "opacity-50 cursor-not-allowed"
            : "hover:bg-neutral-100"
        }`}
      >
        <ArrowLeftIcon className="w-4 h-4" />
      </button>

      {[...Array(totalPages)].map((_, index) => renderButton(index + 1))}

      <button
        onClick={() => handlePageClick(activePage + 1)}
        disabled={activePage === totalPages}
        className={`w-12 h-12 flex items-center justify-center rounded-md border bg-white text-neutral-700 ${
          activePage === totalPages
            ? "opacity-50 cursor-not-allowed"
            : "hover:bg-neutral-100"
        }`}
      >
        <ArrowRightIcon className="w-4 h-4" />
      </button>
    </nav>
  );
};

export default Pagination;
