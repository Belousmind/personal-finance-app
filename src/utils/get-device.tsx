// "use server";

// import { headers } from "next/headers";
// import { UAParser } from "ua-parser-js";

// export async function isDesktop() {
//   const header = await headers();
//   const userAgent = header.get("user-agent");
//   if (userAgent) {
//     const deviceType = new UAParser(userAgent).getDevice().type;
//     if (deviceType === "mobile" || deviceType === "tablet") {
//       return false;
//     }
//   }
//   return true;
// }
