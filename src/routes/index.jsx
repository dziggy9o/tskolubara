import {Route, Switch as RouterSwitch} from "react-router-dom";
import React from "react";
import {Notifications, Slider, Stats} from "../compontents";
import {EducationProfileView} from "../compontents/layout/educationProfiles";
import {JavnaNabavka} from "../compontents/pages";

export const Routes = () => {
  return (
    <RouterSwitch>
      <Route exact path={'/'}>
        <Slider/>
        <Notifications/>
        <Stats/>
        <EducationProfileView/>
      </Route>
      <Route exact path={'/javne-nabavke'}>
        <JavnaNabavka/>
      </Route>
    </RouterSwitch>
  )
}
