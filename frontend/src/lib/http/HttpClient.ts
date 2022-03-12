import axios, { AxiosInstance, AxiosRequestConfig, AxiosResponse } from 'axios'
import { ClassConstructor, plainToClass } from 'class-transformer'

const client = axios.create({
  baseURL: `${import.meta.env.VITE_BASE_API_URL}`,
  headers: {
    Accept: ' application/json',
    'Content-Type': 'application/json'
  }
})

client.interceptors.request.use(async (request) => {
  console.dir(request.data)
  return request
})

interface RequestBase {
  url: string
  config?: AxiosRequestConfig
}
interface Get<T> extends RequestBase {
  model: ClassConstructor<T>
}

interface Post<T, K> extends RequestBase {
  model?: ClassConstructor<T>
  data: K
}
interface Delete<T, K> extends RequestBase {
  model?: ClassConstructor<T>
}

class Client {
  private _http: AxiosInstance
  constructor(instance: AxiosInstance) {
    this._http = instance
  }
  /**
   * Performs a GET request on the provided url,
   * and returns the response.
   * The returned model is transformed to a class.
   * @param url url to fetch (relative)
   * @param model model to convert to
   * @param config axios config
   * @returns axios response
   */
  public async get<T>({ url, model, config }: Get<T>): Promise<AxiosResponse<T>> {
    const response = await this._http.get(url, config)
    response.data = plainToClass(model, response.data)
    return response
  }

  /**
   * Performs a POST request on the provided url,
   * and returns the response.
   * The returned model is transformed.
   * @param url url to fetch (relative)
   * @param model model to convert to
   * @param config axios config
   * @returns axios response
   */
  public async post<T, K>({ data, url, config, model }: Post<T, K>): Promise<AxiosResponse<T>> {
    const response = await this._http.post(url, data, config)
    if (!model) return response
    response.data = plainToClass(model, response.data)
    return response
  }

  /**
   * Performs a DELETE request on the provided url,
   * and returns the response.
   * The returned model is transformed.
   * @param url url to delete (relative)
   * @param model model to convert to
   * @param config axios config
   * @returns axios response
   */
  public async delete<T, K>({ url, config, model }: Delete<T, K>): Promise<AxiosResponse<T>> {
    const response = await this._http.delete(url, config)
    if (!model) return response
    response.data = plainToClass(model, response.data)
    return response
  }
}

export const HttpClient = new Client(client)
