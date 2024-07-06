"use server";

import { cn } from "@/lib/utils";
import Link from "next/link";
import React from "react";
import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";

type PaginationProps = {
  page?: string;
  totalPages: number;
  hasNextPage: boolean;
};

export const PaginationFooter = (props: PaginationProps) => {
  const { page = 1, totalPages, hasNextPage } = props;

  const currentPage = Math.min(Math.max(Number(page), 1), totalPages);

  const getPagesToShow = () => {
    let startPage = Math.max(currentPage - 1, 1);
    let endPage = currentPage + 1;
    if (currentPage == 1) {
      endPage = Math.min(3, totalPages);
    }
    if (currentPage == totalPages) {
      startPage = Math.max(currentPage - 2, 1);
      endPage = currentPage;
    }

    return Array.from(
      { length: endPage - startPage + 1 },
      (_, i) => startPage + i,
    );
  };

  const pages = getPagesToShow();

  return (
    <>
      <Pagination className={cn(totalPages <= 1 ? "hidden" : "flex")}>
        <PaginationContent>
          <PaginationItem className={cn(currentPage === 1 ? "hidden" : "flex")}>
            <PaginationPrevious href={`?page=${currentPage - 1}`} />
          </PaginationItem>

          <PaginationItem className={cn(currentPage > 2 ? "flex" : "hidden")}>
            <PaginationEllipsis />
          </PaginationItem>

          {pages.map((p, i) => (
            <PaginationItem
              key={i}
              className={cn(currentPage === p ? "rounded-lg bg-secondary" : "")}
            >
              <PaginationLink href={`?page=${p}`}>{p}</PaginationLink>
            </PaginationItem>
          ))}

          <PaginationItem
            className={cn(currentPage < totalPages - 1 ? "flex" : "hidden")}
          >
            <PaginationEllipsis />
          </PaginationItem>

          <PaginationItem
            className={cn(currentPage === totalPages ? "hidden" : "flex")}
          >
            <PaginationNext href={`?page=${currentPage + 1}`} />
          </PaginationItem>
        </PaginationContent>
      </Pagination>
    </>
  );
};
