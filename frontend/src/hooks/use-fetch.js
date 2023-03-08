import { useEffect, useState } from "react";
import { httpService } from "service/http-service";
import { isInvalidParams } from "utils/http";

const DEBOUNCE_DELAY = 1000;

const debounce = () => {};
export const useFetch = (fetchProps) => {
  const { url, params, debounced } = fetchProps || {};

  const [isLoading, setIsLoading] = useState(false);
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);

  const makeRequest = async (params) => {
    try {
      setIsLoading(true);
      const response = await httpService.get({ url, params });

      setData(response);
      setError(null);
    } catch (e) {
      setError(e);
    } finally {
      setIsLoading(false);
    }
  };

  const request = debounced
    ? debounce(makeRequest, DEBOUNCE_DELAY)
    : makeRequest;

  useEffect(() => {
    if (isInvalidParams(params)) {
      setData(null);
      return;
    }
    request(params);
  }, [params]);

  return { isLoading, data, error };
};
