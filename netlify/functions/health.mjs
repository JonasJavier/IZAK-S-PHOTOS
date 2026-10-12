export default async () => Response.json({ status: "ok", service: "izaks-photos-api" });

export const config = {
  path: ["/api/health", "/api/health/"],
};
