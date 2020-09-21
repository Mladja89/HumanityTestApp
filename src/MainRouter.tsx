import React from 'react'
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom'
import { Schedule } from './pages/Schedule'
import { ShiftDetails } from './pages/ShiftDetails'
import * as routes from './routes'

export function MainRouter() {
  return (
    <BrowserRouter>
      <Switch>
        <Redirect exact from="/" to={routes.defaultSchedule} />
        <Route path={routes.defaultSchedule} exact component={Schedule} />
        <Route path={routes.schedule(':date')} component={Schedule} />
        <Route path={routes.shift(':id')} component={ShiftDetails} />
      </Switch>
    </BrowserRouter>
  )
}
