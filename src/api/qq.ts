import request from "./request";
import { concatUrlPath } from "./util";

const QQ_API_ROOT = "https://api.uomg.com/api/";
const getUrl = (paths: string[]) => {
  return concatUrlPath(QQ_API_ROOT, paths);
};

type QqApiDataStrct = {
  code: number;
  msg?: string;
  [key: string]: any;
};

export type QqInfo = QqApiDataStrct & {
  qq: string;
  name: string;
  qlogo: string;
};
export const getQqInfo = (qq: string): Promise<QqInfo> => {
  return request.get(getUrl(["qq.info"]), { qq });
};
