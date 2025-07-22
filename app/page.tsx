import Card from "./component/Card";
import data from "../public/data.json";
import Box from "./component/Boxes";
export default function Home() {
  const jobs = data.job_postings;
  return (
    <div className="flex justify-center">
      <Box title="Opportunities" className="py-0 my-0">
        <p className="text-gray-400 mb-6">Show {jobs.length} result</p>
        {jobs.map((job, index) => (
          <Card
            key={job.id}
            id={job.id}
            title={job.title}
            description={job.description}
            location={job.about.location}
            company={job.company}
            categories={job.about.categories}
          />
        ))}
      </Box>
    </div>
  );
}
