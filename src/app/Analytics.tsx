// "use client";
// import { GoogleAnalytics } from "@next/third-parties/google";
// import Script from "next/script";

// export default function Analytics() {
//    const measurementId = process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID;

//    // Option 1: Return null if ID is not available
//    if (!measurementId) return null;
//    return (
//       <>
//          {" "}
//          {/* Load the GA script */}
//          <Script
//             strategy="afterInteractive"
//             src={`https://www.googletagmanager.com/gtag/js?id=${measurementId}`}
//          />
//          {/* Initialize GA */}
//          <Script
//             id="google-analytics"
//             strategy="afterInteractive"
//             dangerouslySetInnerHTML={{
//                __html: `
//           window.dataLayer = window.dataLayer || [];
//           function gtag(){dataLayer.push(arguments);}
//           gtag('js', new Date());
//           gtag('config', '${measurementId}', {
//             page_path: window.location.pathname,
//           });
//         `,
//             }}
//          />
//          <GoogleAnalytics gaId={measurementId} />
//       </>
//    );
// }
