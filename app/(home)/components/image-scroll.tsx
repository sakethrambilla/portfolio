// "use client";
// import { useGSAP } from "@gsap/react";
// import gsap from "gsap";
// import { ScrollTrigger } from "gsap/ScrollTrigger";
// import Image from "next/image";
// import { useRef } from "react";

// export default function ImageScroll() {
//   const footer = useRef(null);
//   const lastCard = useRef(null);

//   useGSAP(() => {
//     gsap.registerPlugin(ScrollTrigger);
//     const pinnedSections = gsap.utils.toArray(".pinned");

//     pinnedSections.forEach((section, index, sections) => {
//       let img = section.querySelector(".img");
//       let nextSection = sections[index + 1] || lastCard.current;

//       let endScalePoint = `top+=${nextSection.offsetTop - section.offsetTop} top`;
//       gsap.to(section, {
//         scrollTrigger: {
//           trigger: section,
//           start: "top top",
//           end:
//             index === sections.length
//               ? `+=${lastCard.offsetHeight / 2}`
//               : footer.current.offsetTop - window.innerHeight,
//           pin: true,
//           pinSpacing: false,
//           markers: true,
//           scrub: 1,
//         },
//       });

//       gsap.fromTo(
//         img,
//         { scale: 1 },
//         {
//           scale: 0.5,
//           ease: "none",
//           scrollTrigger: {
//             trigger: section,
//             start: "top 60%",
//             end: endScalePoint,
//             scrub: 1,
//             markers: true,
//           },
//         },
//       );
//     });
//   });
//   return (
//     <div className="container flex min-h-screen w-full flex-col items-center justify-center">
//       <section className="hero pinned1">
//         <h1 className="font-cormorant_garamond text-[5rem]">Work</h1>
//       </section>

//       <section className="card pinned relative h-screen w-screen overflow-hidden">
//         <div className="img flex h-full w-full items-center justify-center">
//           <Image
//             src="https://sakethrambilla.s3.ap-south-1.amazonaws.com/554e50d9-e759-4256-824e-51c8ec8bef5f"
//             width={100}
//             height={100}
//             className="absolute h-[700px] w-[1000px] object-cover"
//             alt="Work Image"
//           />
//         </div>
//       </section>

//       <section className="card pinned relative h-screen w-screen overflow-hidden">
//         <div className="img flex h-full w-full items-center justify-center">
//           <Image
//             src="https://sakethrambilla.s3.ap-south-1.amazonaws.com/ddefef64-b9b2-4b79-b5f5-c9445bb0330a"
//             width={100}
//             height={100}
//             className="absolute h-[700px] w-[1000px] object-cover"
//             alt="Work Image"
//           />
//         </div>
//       </section>

//       <section
//         ref={lastCard}
//         className="card relative h-screen w-screen overflow-hidden"
//       >
//         <div className="img flex h-full w-full items-center justify-center">
//           <Image
//             src="https://sakethrambilla.s3.ap-south-1.amazonaws.com/554e50d9-e759-4256-824e-51c8ec8bef5f"
//             width={100}
//             height={100}
//             className="absolute h-[700px] w-[1000px] object-cover"
//             alt="Work Image"
//           />
//         </div>
//       </section>

//       <section
//         ref={footer}
//         className="footer flex h-[50vh] items-center justify-center text-[5rem]"
//       >
//         Footer
//       </section>
//     </div>
//   );
// }
