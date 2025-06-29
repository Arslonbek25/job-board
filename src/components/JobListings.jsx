import JobListing from "./JobListing";
import { useEffect } from "react";
import { useState } from "react";

const JobListings = ({ isHome = false }) => {
	const [jobs, setJobs] = useState([]);
	const [loading, setLoading] = useState(true);

	useEffect(() => {
		const fetchJobs = async () => {
			try {
				const res = await fetch("http://localhost:8000/jobs");
				const data = await res.json();
				setJobs(data);
			} catch (err) {
				console.log("err fetching", err);
			} finally {
				setLoading(false);
			}
		};

		fetchJobs();
	}, []);

	const jobList = isHome ? jobs.slice(0, 3) : jobs;

	return (
		<section className="bg-blue-50 px-4 py-10">
			<div className="container-xl lg:container m-auto">
				<h2 className="text-3xl font-bold text-indigo-500 mb-6 text-center">
					{isHome ? "Featured Jobs" : "All Job Listings"}
				</h2>
				<div className="grid grid-cols-1 md:grid-cols-3 gap-6">
					{loading ? (
						<h2>Loading...</h2>
					) : (
						<>
							{jobList.map(job => (
								<JobListing key={job.id} job={job} />
							))}
						</>
					)}
				</div>
			</div>
		</section>
	);
};

export default JobListings;
