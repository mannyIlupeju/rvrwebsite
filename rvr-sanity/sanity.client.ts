import sanityClient from '@sanity/client';
import dotenv from 'dotenv';

console.log(process.env.SANITY_PROJECT_ID );

dotenv.config();


if (!process.env.SANITY_PROJECT_ID || !process.env.SANITY_DATASET) {
  throw new Error("Missing required environment variables: SANITY_PROJECT_ID or SANITY_DATASET");
}

export const client = sanityClient({
  projectId: process.env.SANITY_PROJECT_ID,
  dataset: process.env.SANITY_DATASET,
  useCdn: true, // `false` if you want to ensure fresh data
  token: process.env.SANITY_TOKEN // Optional if you are using authenticated requests
});