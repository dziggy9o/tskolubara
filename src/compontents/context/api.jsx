import axios from 'axios'

const BASE_API = `${process.env.REACT_APP_API}`

export const API = {
  FILES: `${BASE_API}files`,
  NOTIFICATIONS: `${BASE_API}items/obavestenja?status=published`,
  SLIDER: `${BASE_API}items/slajder`,
  SLIDER_FILES: `${BASE_API}items/slajder_files`,
}

export const fetchAPI = (url, setState, loader, setLoader) => {
  axios.get(url)
    .then(res => {
      if (loader) {
        setState(res.data.data);
        setLoader(false);
      }
      else {
        setState(res.data.data);
        console.log('Loader is false')
      }
    })
}
