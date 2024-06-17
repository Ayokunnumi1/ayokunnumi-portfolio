import { createClient } from "@sanity/client";
import imageUrlBuilder from "@sanity/image-url";

const projectId = "id7zsgea";
const dataset = "production";
const apiVersion = "2022-02-01";
const useCdn = true;
const token =
  "skxfm9Pmy3mwTMiBNWQqTx4V14yYlHv4Qe5KyUc8pdMEtimlKv0D1lTGFSXpzsXRdaVWx7MkR5H39wKlKBYLhnXU1qBVQVRoSYOoUDm3D6lHOsCynswQQye2UaB5SdEYip7x1TUVMq2KQXrWtPqwZDFUBaYxyvMIk757T2Z3q0IYc6vCjTfr";

if (!projectId || !token) {
  throw new Error("Missing required environment variables");
}

export const client = createClient({
  projectId,
  dataset,
  apiVersion,
  useCdn,
  token,
});

const builder = imageUrlBuilder(client);

export const urlFor = (source) => builder.image(source);
