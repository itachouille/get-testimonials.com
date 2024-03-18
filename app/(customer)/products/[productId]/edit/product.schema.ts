import { z } from "zod";

export const ProductSchema = z.object({
  name: z.string(),
  noteText: z.string().optional(),
  informationText: z.string().optional(),
  reviewText: z.string().optional(),
  thanksText: z.string().optional(),
  backgroundColor: z.string(),
});

export type ProductType = z.infer<typeof ProductSchema>;

export const GRADIENTS_CLASSES = [
  "bg-gradient-to-r from-red-500 to-orange-500",
  "bg-gradient-to-r from-amber-200 to-yellow-400",
  "bg-gradient-to-r from-teal-200 to-teal-500",
  "bg-gradient-to-r from-fuchsia-600 to-pink-600",
  "bg-gradient-to-r from-emerald-500 to-emerald-900",
]
