import { AnimatedTestimonials } from "@/components/ui/animated-testimonials";
import { CustomHoverExpand } from "@/components/customhoverexpand";

export default function AnimatedTestimonialsDemo() {
  const testimonials = [
    {
      quote:
        "The attention to detail and innovative features have completely transformed our workflow. This is exactly what we've been looking for.",
      name: "Custom Websites",
      designation: "Tailor-Made Solution for your Brand",
      image: "/website.jpg",
    },
    {
      quote:
        "We create fully functional, secure, and easy-to-manage e-commerce platforms that help you grow your business online. Our solutions include product catalog integration, secure payment gateways, inventory management, and a smooth checkout experience. Whether it's Shopify or a custom-built .",
      name: "E-Commerce Solutions",
      designation: "Powerfull online store",
      image: "/ecom.jpg",
    },
    {
      quote:
        "A slow website can cost you customers. We fine-tune your site's performance to ensure quick load times, smooth navigation, and top-notch user experience.  optimization process covers image compression, code minification, caching, and SEO enhancements.",
      name: "Website Optimization",
      designation: "Faster, Smarter, and More Visible",
      image: "/optimization.png",
    },
    {
      quote:
        " Launching a website is just the beginning. We offer ongoing maintenance and support to keep your site secure, updated, and running smoothly. From security patches and bug fixes to content updates and performance monitoring.",
      name: "Maintenance & Support",
      designation: "Keeping Your Website at Its Best",
      image: "/m&s.jpg",
    },
  ];

  return (
    <div className="min-h-screen bg-orange-50">
      <div className="container mx-auto px-4 py-20">
        <h1 className="text-4xl font-bold text-center mb-16 text-gray-900">
          Our Services At{" "}
          <span className="bg-gradient-to-r from-green-700 via-yellow-500 to-red-500 bg-clip-text text-transparent">
            Cubic Labs
          </span>
        </h1>

        <AnimatedTestimonials testimonials={testimonials} />

        <CustomHoverExpand />
      </div>
    </div>
  );
}
