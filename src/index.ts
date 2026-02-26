import { brands } from "./data/brands";
import { parts } from "./data/parts";
import type { Brand, Model, Generation } from "./data/brands";
import type { Part } from "./data/parts";

export { brands, parts };
export type { Brand, Model, Generation, Part };

// ─── BRANDS & MODELS ────────────────────────────────────────────────────────

/** Get full list of brands */
export function getBrands(): string[] {
  return brands.map((b) => b.brand);
}

/** Get models by brands */
export function getModelsByBrand(brandName: string): Model[] {
  const brand = brands.find(
    (b) => b.brand.toLowerCase() === brandName.toLowerCase()
  );
  return brand ? (brand.models as unknown as Model[]) : [];
}

/** Get full generations from one model */
export function getGenerations(brandName: string, modelName: string): Generation[] {
  const models = getModelsByBrand(brandName);
  const model = models.find(
    (m) => m.name.toLowerCase() === modelName.toLowerCase()
  );
  return model ? model.generations : [];
}

/** Find feneration by year */
export function getGenerationByYear(
  brandName: string,
  modelName: string,
  year: number
): Generation | null {
  const generations = getGenerations(brandName, modelName);
  return (
    generations.find(
      (g) => g.yearFrom <= year && (g.yearTo === null || g.yearTo >= year)
    ) ?? null
  );
}

/** Get full object of brand */
export function getBrand(brandName: string): Brand | null {
  return (
    (brands.find(
      (b) => b.brand.toLowerCase() === brandName.toLowerCase()
    ) as unknown as Brand) ?? null
  );
}

/** Search models by part of name */
export function searchModels(query: string): Array<{ brand: string; model: Model }> {
  const q = query.toLowerCase();
  const results: Array<{ brand: string; model: Model }> = [];
  for (const b of brands) {
    for (const m of b.models) {
      if (m.name.toLowerCase().includes(q)) {
        results.push({ brand: b.brand, model: m as unknown as Model });
      }
    }
  }
  return results;
}

// ─── PARTS ──────────────────────────────────────────────────────────────────

/** Get all parts */
export function getParts(): Part[] {
  return parts as unknown as Part[];
}

/**getPartBySlug */
export function getPartBySlug(slug: string): Part | null {
  return (
    (parts as unknown as Part[]).find((p) => p.slug === slug) ?? null
  );
}

/** Поиск запчастей по названию (русский поиск) */
export function searchParts(query: string): Part[] {
  const q = query.toLowerCase();
  return (parts as unknown as Part[]).filter(
    (p) => p.name.toLowerCase().includes(q) || p.slug.includes(q)
  );
}

/** Get full list of unique slug all parts */
export function getPartSlugs(): string[] {
  return (parts as unknown as Part[]).map((p) => p.slug);
}