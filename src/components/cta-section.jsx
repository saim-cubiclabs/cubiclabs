import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowRight, Mail } from "lucide-react";

export function CTASection() {
  return (
    <section className="py-20 lg:py-32 bg-orange-100/50">
      <div className="container mx-auto px-4">
        <div className="mx-auto max-w-4xl">
          {/* Gradient border container */}
          <div className="relative p-1 rounded-2xl bg-gradient-to-r from-green-600 via-yellow-500 to-red-500">
            <div className="rounded-xl bg-white p-8 lg:p-12">
              <div className="text-center">
                <h2 className="text-3xl font-bold tracking-tight text-balance sm:text-4xl lg:text-5xl mb-4 text-gray-900">
                  Want to grow your business?
                </h2>
                <p className="text-lg text-gray-600 text-pretty mb-8 lg:text-xl">
                  Join hundreds of companies already building the future with
                  Cubic Labs. Let's discuss how we can accelerate your growth.
                </p>

                <div className="flex flex-col gap-4 sm:flex-row sm:justify-center">
                  <Link href="https://wa.me/96541147331" passHref>
                    <Button
                      size="lg"
                      className="bg-green-700 hover:bg-emerald-900 text-white"
                    >
                      Get Started Today
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </Link>
                  <Link
                    href="mailto:info@cubiclabs.net?subject=Sales Inquiry&body=Hello, I'm interested in your services. Please contact me for more information."
                    passHref
                  >
                    <Button
                      size="lg"
                      variant="outline"
                      className="border-green-700 text-green-700 hover:bg-emerald-900 bg-transparent"
                    >
                      <Mail className="mr-2 h-4 w-4" />
                      Contact Sales
                    </Button>
                  </Link>
                </div>

                <p className="mt-6 text-sm text-gray-500">
                  • Free consultation • No setup fees
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="text-center">
        <h1 className="text-3xl font-bold tracking-tight text-balance sm:text-4xl lg:text-5xl mb-4 text-gray-900 mt-20">
          Our Partners
        </h1>
        <p className="text-lg text-gray-600 text-pretty mb-8 lg:text-xl">
          We are proud to partner with the following companies
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          <Link href="https://www.armadadelivery.com/">
            <img
              src="/armada-removebg-preview.png"
              alt="Partner 1"
              width={100}
              height={100}
            />
          </Link>
        </div>

        <div className="flex flex-wrap justify-center gap-4 mt-7">
          <Link href="https://upayments.com/en/">
            <img src="/up.png" alt="Partner 2" width={100} height={100} />
          </Link>
        </div>
      </div>

      <div className="text-center">
        <h1 className="text-3xl font-bold tracking-tight text-balance sm:text-4xl lg:text-5xl mb-4 text-gray-900 mt-20">
          Our Clients
        </h1>
        <p className="text-lg text-gray-600 text-pretty mb-8 lg:text-xl">
          We are proud to partner with the following companies
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          <img src="/miro.png" width={100} height={100} />
        </div>
      </div>
    </section>
  );
}
