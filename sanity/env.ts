function assertValue<T>(v: T | undefined, errorMessage: string): T {
  if (!v) {
    console.error(errorMessage); // Debug log for missing env variables
    throw new Error(errorMessage);
  }
  return v;
}

// Debugging: Check if env variables are loaded
console.log("🔍 NEXT_PUBLIC_SANITY_PROJECT_ID:", process.env.NEXT_PUBLIC_SANITY_PROJECT_ID);
console.log("🔍 NEXT_PUBLIC_SANITY_DATASET:", process.env.NEXT_PUBLIC_SANITY_DATASET);
console.log("🔍 NEXT_PUBLIC_SANITY_API_VERSION:", process.env.NEXT_PUBLIC_SANITY_API_VERSION);

export const apiVersion =
  process.env.NEXT_PUBLIC_SANITY_API_VERSION || "2025-03-01";

export const dataset = assertValue(
  process.env.NEXT_PUBLIC_SANITY_DATASET,
  "❌ Missing environment variable: NEXT_PUBLIC_SANITY_DATASET"
);

export const projectId = assertValue(
  process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
  "❌ Missing environment variable: NEXT_PUBLIC_SANITY_PROJECT_ID"
);
