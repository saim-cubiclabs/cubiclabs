import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Cable as Cube,
  Layers,
  Zap,
  Shield,
  Users,
  BarChart3,
} from "lucide-react";

const services = [
  {
    icon: Cube,
    title: "Custom Websites",
    description:
      "We build websites from the ground up, designed to match your brand identity and business goals. Our team ensures every element — from layouts to typography — reflects your unique vision. Whether you need a corporate website, a startup landing page, or a complex web application, we deliver scalable and future-proof solutions using modern frameworks and clean code.",
    color: "text-emerald-800",
  },
  {
    icon: Layers,
    title: "E-Commerce Solutions",
    description:
      "We create fully functional, secure, and easy-to-manage e-commerce platforms that help you grow your business online. Our solutions include product catalog integration, secure payment gateways, inventory management, and a smooth checkout experience. Whether it's Shopify or a custom-built platform, we ensure your store is built for conversions and customer satisfaction.",
    color: "text-yellow-600",
  },
  {
    icon: Zap,
    title: " Website Performance Optimization",
    description:
      "Accelerate your operations with our cutting-edge performance enhancement solutions.",
    color: "text-red-600",
  },

  {
    icon: Users,
    title: "Maintenance & Support",
    description:
      "Launching a website is just the beginning. We offer ongoing maintenance and support to keep your site secure, updated, and running smoothly..",
    color: "text-yellow-600",
  },
 
];

export function ServicesSection() {
  return (
    <section className="py-20 lg:py-32 bg-orange-10">
      <div className="container mx-auto px-4">
        <div className="mx-auto max-w-3xl text-center mb-16">
          <h2 className="text-3xl font-bold tracking-tight text-balance sm:text-4xl lg:text-5xl mb-4">
            Our Core Services
          </h2>
          <p className="text-lg text-gray-600 text-pretty">
            Comprehensive solutions designed to transform your business
            operations through innovative technology and strategic
            implementation.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {services.map((service, index) => (
            <Card
              key={index}
              className="group hover:shadow-lg transition-all duration-300 border-gray-200 hover:border-emerald-800/20 bg-white"
            >
              <CardHeader>
                <div
                  className={`inline-flex h-12 w-12 items-center justify-center rounded-lg bg-gray-100 ${service.color} mb-4 group-hover:scale-110 transition-transform duration-300`}
                >
                  <service.icon className="h-6 w-6" />
                </div>
                <CardTitle className="text-xl">{service.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base leading-relaxed">
                  {service.description}
                </CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
