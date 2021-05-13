import React, { PropsWithChildren } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import pageModulesByPath from 'router/routeImporter';
import Order from '../pages/Order';
import Home from '../pages/Home';

export default function Router({ children, ...props }: PropsWithChildren<any>) {
  console.log(pageModulesByPath, 'pageModulesByPath');
  return (
    <BrowserRouter {...props}>
      {children}
      {/*todo loop page */}
      <Switch>
        <Route path="/order">
          <Order />
        </Route>
        <Route path="/">
          <Home />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}
