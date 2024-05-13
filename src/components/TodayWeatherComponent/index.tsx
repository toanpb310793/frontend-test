import React, { FC } from 'react';

import ResultComponent from './Result';
import SearchBarComponent from './SearchBar';
import LayoutComponent from '../../commons/components/LayoutComponent';

import './styles.scss';

const TodayWeatherComponent: FC = () => {
  return (
    <LayoutComponent>
      <div className="twa-content__container">
        <SearchBarComponent />
        <ResultComponent />
      </div>
    </LayoutComponent>
  );
};

export default React.memo(TodayWeatherComponent);
