import { AnimatedTooltipPreview } from "@/components/animated-tooltip-preview";
import { Zap, Eye } from "lucide-react";

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-orange-50">
      <div className="container mx-auto px-4 py-20">
        <h1 className="text-4xl font-bold text-center mb-16 text-gray-900">
          About <span className="bg-gradient-to-r from-green-700 via-yellow-500 to-red-500 bg-clip-text text-transparent">
            Cubic Labs
          </span>
        </h1>

        <section className="mb-16">
          <h2 className="text-2xl font-bold mb-8 text-center text-gray-800">
            Meet Our Team
          </h2>
          <AnimatedTooltipPreview />
        </section>

        <section className="max-w-4xl mx-auto text-center">
          <p className="text-lg text-gray-600 mb-8">
            At Cubic Labs, we're passionate about building modular, scalable
            solutions that transform businesses. Our team of experts combines
            cutting-edge technology with strategic thinking to deliver
            exceptional results.
          </p>

          <div className="grid md:grid-cols-2 gap-8 text-left">
            <div className="bg-white p-8 rounded-3xl shadow-sm border border-gray-100">
              <div className="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center mb-6">
                <Zap className="w-6 h-6 text-green-700" />
              </div>
              <h3 className="text-xl font-semibold mb-4 text-grey-700">
                Our Mission
              </h3>
              <p className="text-gray-600">
                To empower businesses with innovative, interconnected solutions
                that scale seamlessly and drive sustainable growth in the
                digital age.
              </p>
            </div>

            <div className="bg-white p-8 rounded-3xl shadow-sm border border-gray-100">
              <div className="w-12 h-12 bg-yellow-100 rounded-xl flex items-center justify-center mb-6">
                <Eye className="w-6 h-6 text-yellow-600" />
              </div>
              <h3 className="text-xl font-semibold mb-4 text-grey-700">
                Our Vision
              </h3>
              <p className="text-gray-600">
                To be the leading provider of modular business solutions,
                helping companies build the future through strategic technology
                implementation.
              </p>
            </div>
          </div>
        </section>

        <section>
          <h1 className="mt-20  text-2xl font-bold  text-center text-gray-800">
            {" "}
            Demo work
          </h1>
          <div className=" flex items-center justify-center h-screen ">
            <img
              src="/about1.png"
              alt="demo work img"
              className=" w-200  rounded-xl "
            />
          </div>

          <div className=" flex items-center justify-center h-screen ">
            <img
              src="/about2.png"
              alt="demo work img"
              className=" w-200  rounded-xl "
            />
          </div>


          
        </section>
      </div>
    </div>
  );
}



