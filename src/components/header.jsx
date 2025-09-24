import { Button } from "@/components/ui/button"
import { CubicLogo } from "./cubic-labs"
import { Menu } from "lucide-react"

export function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-orange-50/95 backdrop-blur supports-[backdrop-filter]:bg-orange-50/60">
      <div className="container mx-auto px-4">
        <div className="flex h-16 items-center justify-between">
          <CubicLogo />

          <nav className="hidden md:flex items-center gap-8">
            <a
              href="#home"
              className="text-sm font-medium text-gray-600 hover:text-gray-900 transition-colors"
            >
              Home
            </a>
            <a
              href="#services"
              className="text-sm font-medium text-gray-600 hover:text-gray-900 transition-colors"
            >
              Services
            </a>
            <a
              href="#pricing"
              className="text-sm font-medium text-gray-600 hover:text-gray-900 transition-colors"
            >
              Pricing
            </a>
            <a
              href="#about"
              className="text-sm font-medium text-gray-600 hover:text-gray-900 transition-colors"
            >
              About
            </a>
          </nav>

          <div className="flex items-center gap-4">
            <Button variant="ghost" className="hidden md:inline-flex">
              Contact Us
            </Button>
            <Button className="bg-green-700 hover:bg-emerald-900 text-white">Get Started</Button>
            <Button variant="ghost" size="icon" className="md:hidden">
              <Menu className="h-4 w-4" />
            </Button>
          </div>
        </div>
      </div>
    </header>
  )
}
