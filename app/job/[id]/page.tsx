import React from "react";
import CategoryItem from "../../component/CategoryItem";
import Box from "../../component/Boxes";
import data from "../../../public/data.json";
import AboutItem from "@/app/component/AboutItems";
import Candidate from "@/app/component/Candidate";
import ResponsiblitiesItem from "@/app/component/ResponsiblityList";
import Link from "next/link";

import {
  FaCalendarAlt,
  FaMapMarkerAlt,
  FaRegCalendarPlus,
  FaRegCalendarCheck,
  FaHourglassEnd,
  FaArrowLeft,
} from "react-icons/fa";
import { LuMapPin } from "react-icons/lu";

interface JobDetailProps {
  params: { id: string };
}
const JobDetail = ({ params }: JobDetailProps) => {
  const job = data.job_postings.find((j) => j.id === params.id);
  if (!job) {
    return (
      <div className="text-center  mt-10">
        Job not found for ID: {params.id}
      </div>
    );
  }
  const description = job.description;
  const respo = job.responsibilities;
  const age = job.ideal_candidate.age;
  const gender = job.ideal_candidate.gender;
  const candidate = job.ideal_candidate.traits;
  const postedOn = job.about.posted_on;
  const deadline = job.about.deadline;
  const location = job.about.location;
  const startDate = job.about.start_date;
  const endDate = job.about.end_date;
  const categories = job.about.categories;
  const skills = job.about.required_skills;

  const tagColors = [
    "bg-green-50 text-green-500",
    "bg-yellow-50 text-yellow-500",
    "bg-pink-50 text-pink-700",
    "bg-purple-50 text-purple-900",
    "bg-red-50 text-red-500",
    "bg-emerald-50 text-emerald-900",
    "bg-sky-50 text-sky-600",
    "bg-orange-50 text-orange-500",
    "bg-teal-50 text-teal-700",
    "bg-lime-50 text-lime-800",
  ];

  return (
    <div className="py-10">
      <div className="  flex justify-around max-w-[1300px] mx-auto px-4">
        <div className="pr-10">
          <Link
            href="/"
            className="inline-flex items-center justify-center w-10 h-10 rounded-full border border-gray-300 hover:bg-gray-100 transition"
          >
            <FaArrowLeft className="text-gray-700" />
          </Link>
        </div>
        <div className=" w-[70%]">
          <Box title="Description">
            <p>
              {description ||
                "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Recusandae repellat enim, quasi quod officia ullam accusamus eveniet sapiente odio quidem nam, illo ipsa repellendus laudantium earum incidunt nisi laboriosam dolorum."}
            </p>
          </Box>
          <Box title="Responsibilities">
            {respo.map((r, i) => (
              <ResponsiblitiesItem key={i}>{r}</ResponsiblitiesItem>
            ))}
          </Box>
          <Box title="Ideal Candidate we want">
            <ul className="list-disc pl-5">
              {(gender.toLowerCase() == "male" ||
                gender.toLowerCase() == "female") && (
                <Candidate> {gender} Only</Candidate>
              )}
              {age.toLowerCase() != "any" && (
                <Candidate>
                  <span className="font-bold">Age:</span> {age}
                </Candidate>
              )}
              {candidate.map((c, i) => (
                <Candidate key={i}>{c}</Candidate>
              ))}
            </ul>
          </Box>
          <Box title="When & Where">
            <div className="flex gap-2">
              <LuMapPin className="w-5 h-5 text-blue-400" />
              <p>
                The onboading event for this event will take place in Jan 18th
                in AAU Auditorium{" "}
              </p>
            </div>
          </Box>
        </div>
        <div className=" px-10">
          <Box title="About">
            <AboutItem title="Posted On" date={postedOn}>
              <FaCalendarAlt className="w-5 h-5 text-blue-400" />
            </AboutItem>
            <AboutItem title="Deadline" date={deadline}>
              <FaHourglassEnd className="w-5 h-5 text-blue-400" />
            </AboutItem>
            <AboutItem title="Location" date={location}>
              <FaMapMarkerAlt className="w-5 h-5 text-blue-400" />
            </AboutItem>
            <AboutItem title="Start Date" date={startDate}>
              <FaRegCalendarPlus className="w-5 h-5 text-blue-500" />
            </AboutItem>
            <AboutItem title="End Date" date={endDate}>
              <FaRegCalendarCheck className="w-5 h-5 text-blue-500" />
            </AboutItem>
          </Box>

          <Box title="Categories">
            {categories.map((c, i) => (
              <CategoryItem
                key={i}
                name={c}
                className={`text-md ${
                  tagColors[Math.floor(Math.random() * tagColors.length)]
                }`}
              />
            ))}
          </Box>
          <Box title="Required Skills">
            {skills.map((s, i) => (
              <CategoryItem
                key={i}
                name={s}
                className="bg-indigo-50 text-indigo-900 rounded-lg"
              />
            ))}
          </Box>
        </div>
      </div>
    </div>
  );
};

export default JobDetail;
