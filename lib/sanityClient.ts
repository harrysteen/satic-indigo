import { createClient } from "@sanity/client";
import imageUrlBuilder from "@sanity/image-url";

export const client = createClient({
  projectId: "ygsgtht8",
  dataset: "production",
  useCdn: false,
  apiVersion: "2024-01-01",
});

// 👇 THIS BUILDS IMAGE URL
const builder = imageUrlBuilder(client);

export function urlFor(source: any) {
  return builder.image(source);
}