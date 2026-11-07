import { z } from "zod";
import { productCategories } from "@/content/products";

const productCategoryNames = productCategories.map((c) => c.name);

export const enquirySchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters").max(100),
  phone: z.string().min(10, "Please enter a valid phone number").max(15),
  email: z.string().email("Please enter a valid email address"),
  city: z.string().min(2, "Village/City must be at least 2 characters").max(100),
  productInterest: z.string().refine(
    (val) => productCategoryNames.includes(val),
    "Please select a valid product category"
  ),
  message: z.string().min(10, "Message must be at least 10 characters").max(1000),
  // Honeypot field — must be empty
  website: z.string().max(0, "Bot detected").optional(),
});

export const contactSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters").max(100),
  email: z.string().email("Please enter a valid email address"),
  phone: z.string().min(10, "Please enter a valid phone number").max(15),
  message: z.string().min(10, "Message must be at least 10 characters").max(1000),
  // Honeypot field — must be empty
  website: z.string().max(0, "Bot detected").optional(),
});

export const adminLoginSchema = z.object({
  username: z.string().min(1),
  password: z.string().min(1),
});

export type EnquiryFormData = z.infer<typeof enquirySchema>;
export type ContactFormData = z.infer<typeof contactSchema>;

