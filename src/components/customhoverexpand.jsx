import { HoverExpand_001 } from "@/components/ui/skiper-ui/skiper52";

// Using the hover expand component with custom images
export const CustomHoverExpand = () => {
  const images = [
    {
      src: "/website.jpg",
      alt: "Custom Website Development",
      code: "# 01",
    },
    {
      src: "/ecom.jpg", 
      alt: "E-Commerce Solutions",
      code: "# 02",
    },
    {
      src: "/car.png",
      alt: "Website Optimization",
      code: "# 03",
    },
    {
      src: "/dashboard.png",
      alt: "Maintenance & Support",
      code: "# 04",
    },
    {
      src: "/about1.png",
      alt: "Portfolio Work 1",
      code: "# 05",
    },
    {
      src: "/about2.png",
      alt: "Portfolio Work 2", 
      code: "# 06",
    },
  ];

  return (
    <section className="py-16">
      <h2 className="text-3xl font-bold text-center mb-12 text-gray-900">
        Our Portfolio
      </h2>
      <HoverExpand_001 images={images} className="text-center" />
    </section>
  );
};