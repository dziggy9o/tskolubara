import {createContext, useEffect, useState} from "react";
import {API, fetchAPI} from './api';
import {LoadingPage} from "./loadingPage";

export const NotificationContext      = createContext();
export const FilesContext             = createContext();
export const SliderListContext        = createContext();
export const JavneNabavkeContext      = createContext();
export const JavneNabavkeFilesContext = createContext();
export const NewsContext              = createContext();
export const GalleryContext           = createContext();
export const GalleryFilesContext      = createContext();
export const ExtraordinaryContext     = createContext();
export const StudentsContext          = createContext();

export const TSProvider = props => {
  const [notifications, setNotifications]         = useState([]);
  const [files, setFiles]                         = useState([]);
  const [sliderList, setSliderList]               = useState([]);
  const [loader, setLoader]                       = useState(true);
  const [javneNabavke, setJavneNabavke]           = useState([]);
  const [javneNabavkeFiles, setJavneNabavkeFiles] = useState([]);
  const [news, setNews]                           = useState([]);
  const [gallery, setGallery]                     = useState([]);
  const [galleryFiles, setGalleryFiles]           = useState([]);
  const [extraordinary, setExtraordinary]         = useState([]);
  const [students, setStudents]                   = useState([]);

  const localizationChecker = () => {
    let localization = window.localStorage.getItem("localization");
    if(localization === null) {
      window.localStorage.setItem("localization", true);
    }
  }

  useEffect(() => {
    localizationChecker();
    fetchAPI(API.SLIDER_FILES, setSliderList, false, setLoader);
    fetchAPI(API.NOTIFICATIONS, setNotifications, false, setLoader);
    fetchAPI(API.JAVNE_NABAVKE, setJavneNabavke, false, setLoader);
    fetchAPI(API.JAVNE_NABAVKE_FILES, setJavneNabavkeFiles, false, setLoader);
    fetchAPI(API.NEWS, setNews, false, setLoader);
    fetchAPI(API.GALLERY, setGallery, false, setLoader);
    fetchAPI(API.GALLERY_FILES, setGalleryFiles, false, setLoader);
    fetchAPI(API.EXTRAORDINARY, setExtraordinary, false, setLoader);
    fetchAPI(API.STUDENTS, setStudents, false, setLoader);
    fetchAPI(API.FILES, setFiles, true, setLoader);
  }, [])

  return (
    <NotificationContext.Provider value={[notifications, setNotifications]}>
      <FilesContext.Provider value={[files, setFiles]}>
        <SliderListContext.Provider value={[sliderList, setSliderList]}>
          <JavneNabavkeContext.Provider value={[javneNabavke, setJavneNabavke]}>
            <JavneNabavkeFilesContext.Provider value={[javneNabavkeFiles, setJavneNabavkeFiles]}>
              <NewsContext.Provider value={[news, setNews]}>
                <GalleryContext.Provider value={[gallery, setGallery]}>
                  <GalleryFilesContext.Provider value={[galleryFiles, setGalleryFiles]}>
                    <ExtraordinaryContext.Provider value={[extraordinary, setExtraordinary]}>
                      <StudentsContext.Provider value={[students, setStudents]}>
                        {loader ? <LoadingPage/> : props.children}
                      </StudentsContext.Provider>
                    </ExtraordinaryContext.Provider>
                  </GalleryFilesContext.Provider>
                </GalleryContext.Provider>
              </NewsContext.Provider>
            </JavneNabavkeFilesContext.Provider>
          </JavneNabavkeContext.Provider>
        </SliderListContext.Provider>
      </FilesContext.Provider>
    </NotificationContext.Provider>
  )
}
