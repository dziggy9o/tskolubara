import axios from 'axios'

const BASE_API = `${process.env.REACT_APP_API}`

export const API = {
  FILES: `${BASE_API}files?limit=-1`,
  NOTIFICATIONS: `${BASE_API}items/obavestenja?status=published&sort=-datum`,
  SLIDER: `${BASE_API}items/slajder`,
  SLIDER_FILES: `${BASE_API}items/slajder_files`,
  JAVNE_NABAVKE: `${BASE_API}items/javne_nabavke?status=published`,
  JAVNE_NABAVKE_FILES: `${BASE_API}items/javne_nabavke_files`,
  NEWS: `${BASE_API}items/aktuelno?status=published&sort=-datum`,
  GALLERY: `${BASE_API}items/galerija?status=published`,
  GALLERY_FILES: `${BASE_API}items/galerija_files`,
  EXTRAORDINARY: `${BASE_API}items/vanredni?status=published&sort=-created_on`,
  STUDENTS: `${BASE_API}items/ucenici?status=published&sort=-created_on`
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
      }
    })
}
