import { toQueryString } from "./util";
import { ContentType, HttpMethod } from "./const";

class Request {
  private queue: [];

  constructor() {
    this.queue = [];
  }

  public async get(
    url: string,
    query: { [key: string]: string | boolean | number }
  ): Promise<any> {
    try {
      // check url
      // TODO url rule need check
      if (url) {
        const querystring = toQueryString(query);
        const response = await fetch(url + querystring, {
          method: HttpMethod.get,
          headers: {
            "Content-Type": ContentType.json,
          },
        });

        return response.json();
      }
    } catch (err) {
      console.error("request error: ", url, query);
    }
  }
  public post() {}
}

export default new Request();
