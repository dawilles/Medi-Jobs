import { useRouter } from "next/router";
import { jobAds } from "@/dataJobs";
import type { JobAd } from "@/types";
import { JobCard } from "@/components/job-components/JobCard";
import { GetStaticPropsContext } from "next";
import { Header } from "@/components/common/Header";

const JobPage: React.FC<{ job: JobAd }> = ({ job }) => {
	return (
		<>
			<Header />
			<JobCard job={job} />
		</>
	);
};

export async function getStaticPaths() {
	const paths = jobAds.map((job) => ({
		params: { id: job.id.toString() },
	}));

	return { paths, fallback: false };
}

export async function getStaticProps(context: GetStaticPropsContext) {
	const id = context.params?.id;
	const job = jobAds.find((job) => job.id === Number(id));

	if (!job) {
		return { notFound: true };
	}

	return { props: { job } };
}

export default JobPage;
