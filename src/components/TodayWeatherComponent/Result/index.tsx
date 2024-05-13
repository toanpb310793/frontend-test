import { FC } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Button } from 'antd';
import { DeleteFilled, SearchOutlined } from '@ant-design/icons';

import {
  convertTempInKelvinToCelsiusWithDecimal,
  convertUnixTimestampToDateTime12HourFormat,
} from '../../../utils';
import {
  getLocationWeathers,
  getSelectedLocationWeather,
} from '../../../redux/selectors/locationWeather.selector';

import './styles.scss';
import { storeName as locationWeatherModelStore } from '../../../redux/models/locationWeather.model';
import { storeName as locationWeatherEntityStore } from '../../../redux/entities/locationWeather.entity';

const ResultComponent: FC = () => {
  const locationWeather = useSelector(getSelectedLocationWeather);
  const locationWeathers = useSelector(getLocationWeathers);
  const dispatch = useDispatch();

  return (
    <div className="twa-result__container">
      <div className="result__cloud-img" />
      <div className="result__container">
        <div className="result__selected-location">
          <div className="selected-location__title">{locationWeather ? "Today's Weather" : ''}</div>
          <div className="selected-location__temp">
            {locationWeather
              ? `${convertTempInKelvinToCelsiusWithDecimal(locationWeather?.temp)}°`
              : ''}
          </div>
          <div className="selected-location__temp-range">
            {locationWeather
              ? `H: ${convertTempInKelvinToCelsiusWithDecimal(
                  locationWeather?.tempMax
                )}°C ~ L: ${convertTempInKelvinToCelsiusWithDecimal(locationWeather?.tempMin)}°C`
              : ''}
          </div>
          <div className="selected-location__city">{locationWeather?.name}</div>
          <div className="selected-location__timestamp">
            {convertUnixTimestampToDateTime12HourFormat(locationWeather?.date)}
          </div>
          <div className="selected-location__humidity">
            {locationWeather ? `${locationWeather?.humidity}%` : ''}
          </div>
          <div className="selected-location__main-weather">{locationWeather?.mainWeather}</div>
          <div className="selected-location__description">{locationWeather?.description}</div>
        </div>
        {!!locationWeathers && !!locationWeathers.length && (
          <div className="result__list-item">
            <div className="list-item__title">Search History</div>
            <div className="list-item__container">
              {locationWeathers.map((item) => (
                <div key={item.id} className="list-item__item">
                  <div className="item__info">
                    <div className="item__city">{item.name}</div>
                    <div className="item__timestamp">
                      {convertUnixTimestampToDateTime12HourFormat(item.date)}
                    </div>
                  </div>
                  <div className="item__actions">
                    <Button
                      shape="circle"
                      icon={<SearchOutlined />}
                      onClick={() => dispatch[locationWeatherModelStore].setDetailId(item.id)}
                    />
                    <Button
                      shape="circle"
                      icon={<DeleteFilled />}
                      onClick={() => dispatch[locationWeatherEntityStore].delete(item)}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default ResultComponent;
