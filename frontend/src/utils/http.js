import { hasEmptyProp } from "./obj";

export const createRequestUrl = ({ url, params }) => {
  return `${url}?${new URLSearchParams(params).toString()}`;
};

export const isInvalidParams = (params) => {
  return !params || hasEmptyProp(params);
};
