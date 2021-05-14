import React, { Component, ComponentType, PropsWithChildren } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import pageModulesByPath from 'router/routeImporter';

export default function Router({ children, ...props }: PropsWithChildren<any>) {
  console.log(pageModulesByPath, 'pageModulesByPath');
  return (
    <BrowserRouter {...props}>
      {children}
      <Switch>
        {Object.keys(pageModulesByPath).map(filePath => {
          const routePath = filePath.replace(/^(\.+(\/pages)?)?(\/?.+)\.(js|ts|jsx|tsx)$/, '$3');
          const routePathWithoutSuffix = routePath.replace(/^(\/.*)\/index/, '$1');
          const Component = pageModulesByPath[filePath].default as ComponentType<{}>;
          return (
            <Route path={routePathWithoutSuffix} key={routePathWithoutSuffix}>
              <Component />
            </Route>
          );
        })}
      </Switch>
    </BrowserRouter>
  );
}
