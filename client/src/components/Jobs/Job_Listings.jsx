// Job Listings Component
import FeaturedJobCard from "../Cards/FeaturedJobCard";
import JobCard from "../Cards/JobCard";

// Dummy job data
const jobs = [
  {
    id: 1,
    company: "Google",
    logo: "https://upload.wikimedia.org/wikipedia/commons/2/2f/Google_2015_logo.svg",
    title: "Software Engineer",
    location: "Remote",
    salary: "₹12-18 LPA",
    experience: "2+ Years",
    skills: ["React", "Node.js", "MongoDB"],
    deadline: "Aug 30, 2025",
    applyLink: "#",
  },
  {
    id: 2,
    company: "Microsoft",
    logo: "https://upload.wikimedia.org/wikipedia/commons/4/44/Microsoft_logo.svg",
    title: "Cloud Architect",
    location: "Hybrid - Bangalore",
    salary: "₹15-22 LPA",
    experience: "5+ Years",
    skills: ["Azure", "Kubernetes", "Docker"],
    deadline: "Sep 10, 2025",
    applyLink: "#",
  },
];

// Featured Jobs
const featuredJobs = [
  {
    id: 1,
    company: "Tesla",
    logo: "https://upload.wikimedia.org/wikipedia/commons/e/e8/Tesla_logo.png",
    title: "Data Scientist",
    salary: "₹18-25 LPA",
    perks: ["High Salary", "Great Perks!"],
    applyLink: "#",
  },
];

const Job_Listings = () => {
  return (
    <div className="container mx-auto px-6 py-12">
      <h2 className="text-3xl font-bold text-center mb-8">🏢 Job Listings</h2>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {jobs.map((job) => (
          <JobCard key={job.id} job={job} />
        ))}
      </div>

      <h2 className="text-3xl font-bold text-center mt-12 mb-6">⭐ Featured Jobs</h2>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {featuredJobs.map((job) => (
          <FeaturedJobCard key={job.id} job={job} />
        ))}
      </div>
    </div>  
  );
};

export default Job_Listings;