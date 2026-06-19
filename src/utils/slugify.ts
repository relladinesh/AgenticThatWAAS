export function generateSlug(name: string): string {
  return name
    .toLowerCase()
    .replace(/[^a-z0-9\s-]/g, '') // Remove special characters
    .replace(/\s+/g, '-')         // Replace spaces with -
    .replace(/-+/g, '-')          // Remove duplicate hyphens
    .replace(/^-+|-+$/g, '');     // Trim hyphens from start/end
}
