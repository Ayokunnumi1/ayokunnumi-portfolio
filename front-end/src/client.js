import { createClient } from "@sanity/client";
import imageUrlBuilder from "@sanity/image-url";

const projectId = "id7zsgea";
const dataset = "production";
const apiVersion = "2022-02-01";
const useCdn = true;

// No token: the dataset is public, and anything passed here is compiled into
// the browser bundle, so a token would be exposed on the live site.
export const client = createClient({
  projectId,
  dataset,
  apiVersion,
  useCdn,
});

const builder = imageUrlBuilder(client);

export const urlFor = (source) => builder.image(source);
