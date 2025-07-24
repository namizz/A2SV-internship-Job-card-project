"use client";
import { useGetJobsQuery } from "./redux/api";
import Card from "./component/Card";
// import data from "../public/data.json";
import Box from "./component/Boxes";

export default function Home() {
  const { data, isLoading, isError } = useGetJobsQuery();
  console.log(data?.data);
  // const jobs = data.job_postings;

  if (isLoading) {
    return (
      <div className="flex justify-center items-center h-screen">
        <p className="text-gray-500 text-lg">Loading jobs...</p>
      </div>
    );
  }

  // Show error state
  if (isError) {
    console.error("Error fetching jobs:", error);
    return (
      <div className="flex justify-center items-center h-screen">
        <p className="text-red-500 text-lg">
          Something went wrong. Please try again later.
        </p>
      </div>
    );
  }

  return (
    <div className="flex justify-center">
      <Box title="Opportunities" className="py-0 my-0">
        <p className="text-gray-400 mb-6">Show {data.data.length} result</p>
        {data.data.map((job, index) => (
          <Card
            key={job.id}
            id={job.id}
            image={job.logoUrl}
            title={job.title}
            description={job.description}
            location={job.location}
            company={job.orgName}
            categories={job.categories}
            type={job.opType}
          />
        ))}
      </Box>
    </div>
  );
}
