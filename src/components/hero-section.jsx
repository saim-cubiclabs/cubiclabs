import { Button } from "@/components/ui/button";
import { ArrowRight, Play } from "lucide-react";

export function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-orange-50 via-orange-50 to-orange-100 py-20 lg:py-32">
      {/* Background geometric elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 h-80 w-80 rounded-full bg-emerald-800/10" />
        <div className="absolute -bottom-40 -left-40 h-80 w-80 rounded-full bg-yellow-500/10" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-60 w-60 rounded-full bg-red-500/10" />
      </div>

      <div className="container relative mx-auto px-4">
        <div className="mx-auto max-w-4xl text-center">
          <div className="mb-6 inline-flex items-center gap-2 rounded-full bg-green-700/10 px-4 py-2 text-sm font-medium text-green-700">
            <div className="h-2 w-2 rounded-full bg-green-700 hover:bg-emerald-900 animate-pulse" />
            Now Available: Custom Websites
          </div>

          <h1 className="mb-6 text-4xl font-bold tracking-tight text-balance sm:text-5xl lg:text-6xl">
            Turn your ideas into scalable digital products with{" "}
            <span className="bg-gradient-to-r from-green-700 via-yellow-500 to-red-500 bg-clip-text text-transparent">
              Cubic Labs
            </span>
          </h1>

          <p className="mb-8 text-lg text-gray-600 text-pretty sm:text-xl lg:text-2xl">
            Transform your business with our innovative service platform. We
            create scalable, interconnected solutions that grow with your needs.
          </p>

          <div className="flex flex-col gap-4 sm:flex-row sm:justify-center">
            <Button
              size="lg"
              className="bg-green-700 hover:bg-emerald-900 text-white"
            >
              Start Building
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-green-700 text-green-700 hover:bg-emerald-900 bg-transparent"
            >
              <Play className="mr-2 h-4 w-4" />
              Watch Demo
            </Button>
          </div>

          <div className="mt-12 text-sm text-gray-500">
            Trusted by 3+ companies in kuwait
          </div>
        </div>
      </div>
    </section>
  );
}
