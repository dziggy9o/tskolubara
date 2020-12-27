import {createContext, useEffect, useState} from "react";
import {API, fetchAPI} from './api';
import {LoadingPage} from "./loadingPage";

export const NotificationContext      = createContext();
export const FilesContext             = createContext();
export const SliderListContext        = createContext();
export const JavneNabavkeContext      = createContext();
export const JavneNabavkeFilesContext = createContext();

export const TSProvider = props => {
  const [notifications, setNotifications]         = useState([]);
  const [files, setFiles]                         = useState([]);
  const [sliderList, setSliderList]               = useState([]);
  const [loader, setLoader]                       = useState(true);
  const [javneNabavke, setJavneNabavke]           = useState([]);
  const [javneNabavkeFiles, setJavneNabavkeFiles] = useState([]);

  useEffect(() => {
    fetchAPI(API.SLIDER_FILES, setSliderList, false, setLoader);
    fetchAPI(API.NOTIFICATIONS, setNotifications, false, setLoader);
    fetchAPI(API.JAVNE_NABAVKE, setJavneNabavke, false, setLoader);
    fetchAPI(API.JAVNE_NABAVKE_FILES, setJavneNabavkeFiles, false, setLoader);
    fetchAPI(API.FILES, setFiles, true, setLoader);
  }, [])

  return (
    <NotificationContext.Provider value={[notifications, setNotifications]}>
      <FilesContext.Provider value={[files, setFiles]}>
        <SliderListContext.Provider value={[sliderList, setSliderList]}>
          <JavneNabavkeContext.Provider value={[javneNabavke, setJavneNabavke]}>
            <JavneNabavkeFilesContext.Provider value={[javneNabavkeFiles, setJavneNabavkeFiles]}>
              {loader ? <LoadingPage/> : props.children}
            </JavneNabavkeFilesContext.Provider>
          </JavneNabavkeContext.Provider>
        </SliderListContext.Provider>
      </FilesContext.Provider>
    </NotificationContext.Provider>
  )
}
