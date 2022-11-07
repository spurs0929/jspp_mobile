import axios from "axios";
import qs from 'qs';
import { URL } from '@/config/config';

export default class HTTP{
  axiosPost(options){
    axios({
      url: URL.API_BASE_URL + options.url,
      method: 'post',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded'
      },
      data: qs.stringify(options.data)
    }).then((res) => {
      options.success(res.data);
    }).catch((err) => {
      options.error(err);
    });
  }

  axiosGet(options){
    axios(URL.API_BASE_URL + options.url)
      .then((res) => {
        options.success(res.data);
      }).catch((err) => {
        options.error(err);
      });
  }
}