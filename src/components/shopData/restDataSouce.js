import Axios from "axios";
import { RestUrls } from "./urls";

export class RestDataSource {
  GetData = (dataType, params) =>
    this.SendRequest("get", RestUrls[dataType], params);
  SaveData = (dataType, data) =>
    this.SendRequest("post", RestUrls[dataType], {}, data);
  SendRequest = (method, url, params) => Axios.request({ method, url, params });
}
