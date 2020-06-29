import React from 'react';
import { Route } from 'react-router-dom';
import TopNav from './shared/TopNav';
import BoardsDashboardContainer from './dashboard/BoardsDashboardContainer';
import BoardContainer from './board/BoardContainer';
import { BOARDS_INDEX_URL } from '../constants/ApiRoutes';
import CardContainer from './card/CardContainer';

const Application = () => {
  return (
    <div>
      <TopNav />
      <Route
        path="/(boards|cards)/:id" // ADDED + line 18
        exact
        component={BoardContainer}
      />
      <Route path="/cards/:id" exact component={CardContainer} />
      <Route path="/" exact component={BoardsDashboardContainer} />
    </div>
  );
};

export default Application;
