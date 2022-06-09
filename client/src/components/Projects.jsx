import { useQuery } from "@apollo/client";

import Spinner from "./Spinner";
import ProjectCard from "./ProjectCard";
import { GET_PROJECTS } from "../queries/projectQueries";

export default function Projects() {
  const { loading, error, data } = useQuery(GET_PROJECTS);
  if (loading) return <Spinner />;
  if (error) return <p>Error happening...</p>;
  const { projects } = data;
  return (
    <>
      {!loading && !error && projects.length > 0 ? (
        <div className="row mt-4">
          {projects.map((p) => (
            <ProjectCard key={p.id} project={p} />
          ))}
        </div>
      ) : (
        <p>empty here</p>
      )}
    </>
  );
}
