"use client";
import { cn } from "@/utils/cn";
import { cva, type VariantProps } from "class-variance-authority";
import { motion } from "framer-motion";

const variants = cva(
  "shadow-grid rounded-3xl bg-white d:bg-gray-900 backdrop-blur border d:border-gray-100/10 d:bg-gray-900/40 flex flex-col justify-center @container",
  {
    variants: {
      size: {
        "1x2": "md:col-span-1 col-span-2 row-span-2 md:p-8 p-4",
        "2x1": "md:col-span-2 col-span-full row-span-1 py-4 md:px-8 px-4",
        "2x2": "md:col-span-2 col-span-full row-span-2 md:p-8 p-4",
        "2x4": "md:col-span-2 col-span-full row-span-4 relative overflow-hidden",
      },
    },
    defaultVariants: {
      size: "1x2",
    },
  }
);

export type GridItemProps = {
  item: {
    background: string;
    hoverBackground: string;
    // Outras propriedades de item
  };
  children: React.ReactNode;
} & VariantProps<typeof variants>;

const GridItem = ({ item, size, children }: GridItemProps) => {
  return (
    <motion.div
      initial={{
        scale: 0.2,
        y: 120,
        opacity: 0,
      }}
      className={cn(
        variants({
          size,
          className: `duration-75 transition-colors ease-in-out ${item.background} ${item.hoverBackground} cursor-pointer backdrop-blur`,
        })
      )}
    >
      {children}
    </motion.div>
  );
};

export default GridItem;
