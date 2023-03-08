import { Input } from "../ui/input";
import { useEffect, useState } from "react";
import { useFetch } from "../hooks/use-fetch";
import { ResourceContainer } from "./resource-container";
import { RESOURCES_API } from "../constants/api";
import styles from "./main-container.css";

export const MainContainer = () => {
  const [query, setQuery] = useState("");
  const [fetchProps, setFetchProps] = useState(null);
  const { isLoading, data, error } = useFetch(fetchProps);
  useEffect(() => {
    setFetchProps({
      url: RESOURCES_API,
      params: {
        resourceName: query,
      },
    });
  }, [query]);

  return (
    <>
      <div className={styles.containerWrapper}>
        <Input value={query} onChange={setQuery} autoFocus />
      </div>
      <div className={styles.containerWrapper}>
        <ResourceContainer data={data} isLoading={isLoading} error={error} />
      </div>
    </>
  );
};
