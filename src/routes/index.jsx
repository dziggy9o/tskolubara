import {Route, Switch as RouterSwitch} from "react-router-dom";
import React from "react";
import {Notifications, Slider, Stats} from "../compontents";

export const Routes = () => {
  return (
    <RouterSwitch>
      <Route exact path={'/'}>
        <Slider/>
        <Notifications/>
        <Stats/>
      </Route>
    </RouterSwitch>
  )
}
