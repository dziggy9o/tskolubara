import {Route, Switch as RouterSwitch} from "react-router-dom";
import React, {useContext} from "react";
import {Notifications, Slider, Stats} from "../compontents";
import {
  EducationProfileSinglePage,
  EducationProfileSubList,
  EducationProfileView
} from "../compontents/layout/educationProfiles";
import {JavnaNabavka} from "../compontents/pages";
import {NewsSinglePage, NewsWidget} from "../compontents/pages/news";
import {FilesContext, NewsContext} from "../compontents/context";

export const Routes = () => {
  const [files] = useContext(FilesContext);
  const [news]  = useContext(NewsContext);


  return <RouterSwitch>
    <Route exact path={'/'}>
      <Slider/>
      <Notifications/>
      <NewsWidget displayedPosts={8} showTitle={true}/>
      <Stats/>
      <EducationProfileView showTitle={true}/>
    </Route>
    <Route exact path={'/javne-nabavke'}>
      <JavnaNabavka/>
    </Route>
    <Route exact path={'/aktuelno'}>
      <NewsWidget displayedPosts={1000} showTitle={false}/>
    </Route>
    {news.map((item, index) => {
      return <Route key={index} exact path={`/${item.alias}`}>
        <NewsSinglePage files={files} {...item}/>
      </Route>
    })}
    <Route exact path={'/obrazovni-profili'}>
      <EducationProfileView showTitle={false}/>
    </Route>
    {EducationProfileSubList.map((route, index) => <Route key={index} path={route.path}><EducationProfileSinglePage {...route}/></Route>)}
  </RouterSwitch>
}
