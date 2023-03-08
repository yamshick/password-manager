import { Resource } from "./resource";
import { Spinner } from "../ui/spinner";
import styles from "./resource-container.css";
export const ResourceContainer = ({ data, isLoading, error }) => {
  if (error)
    return <div className={styles.wrapper}>{error?.toString() || "Error"}</div>;
  if (isLoading) {
    return (
      <div className={styles.wrapper}>
        <Spinner />
      </div>
    );
  }
  return (
    <div className={styles.resourceWrapper}>
      {data?.map((resource) => (
        <Resource key={JSON.stringify(resource)} resource={resource} />
      ))}
    </div>
  );
};
