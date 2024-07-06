"use client";
import { cn } from "@/lib/utils";
import { X } from "lucide-react";
import React, { ReactNode, useState } from "react";
import { Button } from "./button";
interface ModalProps {
  children: ReactNode;
  className: string;
}
const Modal = ({ children, className }: ModalProps) => {
  const [modalOpen, setModalOpen] = useState(false);
  return (
    <>
      <div
        className={cn(
          "absolute left-0 top-0 z-50 flex h-full w-full items-center justify-center bg-black/40",
          className,
        )}
      >
        <div className="flex h-56 w-96 flex-col gap-4 rounded bg-secondary p-4 text-secondary-foreground">
          <div className="flex w-full items-end justify-end">
            <X
              onClick={() => setModalOpen(!modalOpen)}
              className="cursor-pointer"
            />
          </div>
          {children}
        </div>
      </div>
    </>
  );
};

export default Modal;
