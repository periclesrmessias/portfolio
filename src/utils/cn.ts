import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

/** Junta classes condicionais e resolve conflito de utilitário Tailwind. */
export function cn(...valores: ClassValue[]) {
  return twMerge(clsx(valores));
}
