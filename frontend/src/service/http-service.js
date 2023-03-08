import { createRequestUrl } from "utils/http";

class HttpService {
  get = async ({ url, params }) => {
    const query = createRequestUrl({ url, params });
    let response = null;
    let parsedResponse = null;

    try {
      response = await fetch(query, {});
    } catch (e) {
      throw new Error(`fetch error: ${e}`);
    }

    try {
      parsedResponse = await response.json();
    } catch (e) {
      throw new Error(`parse error: ${e}`);
    }

    return parsedResponse;
  };

  post = async ({ url, body }) => {
    const response = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json;charset=utf-8",
      },
      body: JSON.stringify(body),
    });

    return await response.json();
  };
}

export const httpService = new HttpService();
