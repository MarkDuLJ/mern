import { useQuery } from "@apollo/client";
import { Link, useParams } from "react-router-dom";

import { GET_PROJECT } from "../queries/projectQueries";
import Spinner from "../components/Spinner";
import ClientInfo from "../components/ClientInfo";
import DeleteProjectButton from "../components/DeleteProjectButton";
import EditProjectForm from "../components/EditProjectForm";

export default function Project() {
  const { id } = useParams();

  const { loading, error, data } = useQuery(GET_PROJECT, {
    variables: { id },
  });
  //   console.log(data);
  if (loading) return <Spinner />;
  if (error) return <p>Grab project failed...</p>;
  const { project } = data;
  return (
    <>
      {!loading && !error && (
        <div className="mx-auto w-75 card p-5 ">
          <Link to="/" className="btn btn-light btn-sm w-25 d-inline ms-auto">
            <strong>Back</strong>
          </Link>
          <h1>{project.name}</h1>
          <p>{project.description}</p>
          <h5 className="mt-3">Project Stauts</h5>
          <p className="lead">{project.status}</p>
          <ClientInfo client={project.client} />

          <EditProjectForm project={project} />

          <DeleteProjectButton projectId={id} />
        </div>
      )}
    </>
  );
}
