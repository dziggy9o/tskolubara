import {Route, Switch as RouterSwitch} from "react-router-dom";
import React, {useContext} from "react";
import {Notifications, Slider, Stats, Tags} from "../compontents";
import {
  EducationProfileSinglePage,
  EducationProfileSubList,
  EducationProfileView
} from "../compontents/layout/educationProfiles";
import {JavnaNabavka} from "../compontents/pages";
import {NewsSinglePage, NewsWidget} from "../compontents/pages/news";
import {ExtraordinaryContext, FilesContext, NewsContext, StudentsContext} from "../compontents/context";
import {Gallery} from "../compontents/pages/gallery";
import {routeFixer} from "../compontents/search/localization-convertor";
import {ExtraordinarySinglePage, ExtraordinaryWidget} from "../compontents/pages/extraordinary";
import {StudentSinglePage, StudentsWidget} from "../compontents/pages/students";


export const Routes = () => {
  const [files]         = useContext(FilesContext);
  const [news]          = useContext(NewsContext);
  const [extraordinary] = useContext(ExtraordinaryContext);
  const [students]      = useContext(StudentsContext);


  return <RouterSwitch>
    <Route exact path={'/'}>
      <Slider/>
      <Notifications/>
      <NewsWidget displayedPosts={8} showTitle={true}/>
      <Stats/>
      <EducationProfileView showTitle={true}/>
    </Route>
    <Route exact path={'/javne-nabavke'}>
      <Tags title={'Јавне набавке'}/>
      <JavnaNabavka/>
    </Route>
    <Route exact path={'/aktuelno'}>
      <Tags title={'Актуелно'}/>
      <NewsWidget displayedPosts={1000} showTitle={false}/>
    </Route>
    {news.map((item, index) => (
      <Route key={index} exact path={`/${routeFixer(item.alias)}`}>
        <Tags title={item.naslov} description={item.opis}/>
        <NewsSinglePage files={files} {...item}/>
      </Route>
    ))}
    <Route exact path={'/obrazovni-profili'}>
      <Tags title={'Образовни профили'}/>
      <EducationProfileView showTitle={false}/>
    </Route>
    {EducationProfileSubList.map((route, index) =>
      <Route key={index} path={route.path}>
        <Tags title={route.name} description={route.details} image={route.background}/>
        <EducationProfileSinglePage {...route}/>
      </Route>)}
    <Route exact path={'/galerija'}>
      <Tags title={'Галерија'}/>
      <Gallery/>
    </Route>
    <Route exact path={'/vanredni'}>
      <Tags title={'Ванредни'}/>
      <ExtraordinaryWidget/>
    </Route>
    {extraordinary.map((item, index) => (
      <Route key={index} exact path={`/${routeFixer(item.naslov)}`}>
        <Tags title={item.naslov} description={item.opis}/>
        <ExtraordinarySinglePage files={files} {...item}/>
      </Route>
    ))}
    <Route exact path={'/ucenici'}>
      <Tags title={'Ученици'}/>
      <StudentsWidget/>
    </Route>
    {students.map((item, index) => (
      <Route key={index} exact path={`/${routeFixer(item.naslov)}`}>
        <Tags title={item.naslov} description={item.opis}/>
        <StudentSinglePage files={files} {...item}/>
      </Route>
    ))}
  </RouterSwitch>
}
