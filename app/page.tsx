import Card from "./component/Card";
import data from "../public/data.json";
export default function Home() {
  const jobs = data.job_postings;
  return (
    <div className="flex justify-center">
      <div>
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
        <Card />
      </div>
    </div>
  );
}
