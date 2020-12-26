import {createContext, useEffect, useState} from "react";
import {API, fetchAPI} from './api';
import {LoadingPage} from "./loadingPage";

export const NotificationContext = createContext();
export const FilesContext        = createContext();
export const SliderListContext = createContext();

export const TSProvider = props => {
  const [notifications, setNotifications] = useState([]);
  const [files, setFiles]                 = useState([]);
  const [sliderList, setSliderList]       = useState([]);
  const [loader, setLoader]               = useState(true);

  useEffect(() => {
    fetchAPI(API.SLIDER_FILES, setSliderList, false, setLoader);
    fetchAPI(API.NOTIFICATIONS, setNotifications, false, setLoader);
    fetchAPI(API.FILES, setFiles, true, setLoader);
  }, [])

  return (
    <NotificationContext.Provider value={[notifications, setNotifications]}>
      <FilesContext.Provider value={[files, setFiles]}>
          <SliderListContext.Provider value={[sliderList, setSliderList]}>
            {loader ? <LoadingPage/> : props.children}
          </SliderListContext.Provider>
      </FilesContext.Provider>
    </NotificationContext.Provider>
  )
}
