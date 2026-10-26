import { createClient } from "@sanity/client";
import imageUrlBuilder from "@sanity/image-url";

const projectId = "id7zsgea";
const dataset = "production";
const apiVersion = "2022-02-01";
const useCdn = true;
// The dataset is public, so the token is optional. Anything prefixed with
// REACT_APP_ is bundled into the client JS, so avoid setting it in production.
const token = process.env.REACT_APP_SANITY_TOKEN;

export const client = createClient({
  projectId,
  dataset,
  apiVersion,
  useCdn,
  ...(token && { token }),
});

const builder = imageUrlBuilder(client);

export const urlFor = (source) => builder.image(source);
