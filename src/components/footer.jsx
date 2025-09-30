import Link from "next/link";
import { CubicLogo } from "./cubic-labs";
import { Linkedin, Instagram } from "lucide-react";

export function Footer() {
  return (
    <footer className="border-t bg-muted/30">
      <div className="container mx-auto px-4 py-12">
        <div className="grid gap-8 md:grid-cols-4">
          <div className="space-y-4">
            <CubicLogo />
            <p className="text-sm text-muted-foreground">
              Building the future of modular business solutions, one cube at a
              time.
            </p>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Company</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>
                <Link href="/about" className="hover:text-foreground transition-colors">
                  About Us
                </Link>
              </li>
             
              <li>
                <a href="#" className="hover:text-foreground transition-colors">
                  Blog
                </a>
              </li>
              <li>
                <Link href="/contactus" className="hover:text-foreground transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Support</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>
                <a href="#" className="hover:text-foreground transition-colors">
                  Help Center
                </a>
              </li>

              <li>
                <a href="#" className="hover:text-foreground transition-colors">
                  Career
                </a>
              </li>
            </ul>
          </div>




          <div>
            <h3 className="font-semibold mb-4">Social Media</h3>
            <div className="flex space-x-4">
              <a 
                href="https://www.linkedin.com/company/cubic-labskw/" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="group flex items-center justify-center w-12 h-12 bg-blue-600 hover:bg-blue-700 rounded-full transition-all duration-300 transform hover:scale-110 hover:shadow-lg"
                aria-label="LinkedIn"
              >
                <Linkedin className="h-6 w-6 text-white group-hover:rotate-6 transition-transform duration-300" />
              </a>
              
              <a 
                href="https://www.instagram.com/cubic_labs/" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="group flex items-center justify-center w-12 h-12 bg-gradient-to-r from-purple-500 via-pink-500 to-orange-400 hover:from-purple-600 hover:via-pink-600 hover:to-orange-500 rounded-full transition-all duration-300 transform hover:scale-110 hover:shadow-lg"
                aria-label="Instagram"
              >
                <Instagram className="h-6 w-6 text-white group-hover:rotate-6 transition-transform duration-300" />
              </a>
            </div>
            
            <div className="mt-4 space-y-2 text-sm text-muted-foreground">
              <p>Follow us for updates</p>
            </div>
          </div>




















        </div>

        <div className="border-t mt-8 pt-8 text-center text-sm text-muted-foreground">
          <p>&copy;  2025 Powered by Cubic Labs. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
