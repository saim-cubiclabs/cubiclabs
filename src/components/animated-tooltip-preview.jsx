"use client";
import { AnimatedTooltip } from "@/components/ui/animated-tooltip";

const people = [
  {
 
    id: 1,
    name: "Faisal Al Omar",
    designation: "Founder & CEO",
    image: "/team/faisal.jpg",
  },
{
    id: 2,
    name: "Saim",
    designation: "Software Engineer",
    image: "/team/saim.jpg",
  },
 
  {
    id: 3,
    name: "Maryam",
    designation: "Backend Developer",
    image: "/team/maryam.jpg",
  },
  {
    id: 4,
    name: "Farhana",
    designation: "UX Designer",
    image: "/team/farhana.jpg",
  },
];

export function AnimatedTooltipPreview() {
  return (
    <div className="flex flex-row items-center justify-center mb-10 w-full">
      <AnimatedTooltip items={people} />
    </div>
  );
}
