import { FC, useState } from 'react';
import { Button, Input } from 'antd';
import { ClearOutlined, SearchOutlined } from '@ant-design/icons';
import { useDispatch, useSelector } from 'react-redux';

import { storeName } from '../../../redux/models/locationWeather.model';

import './styles.scss';

const SearchBarComponent: FC = () => {
  const [cityName, setCityName] = useState<string>('');
  const [countryName, setCountryName] = useState<string>('');

  const errorMsg = useSelector((state) => state[storeName].errorMsg);
  const dispatch = useDispatch();

  const handleOnSearch = () => {
    dispatch[storeName].getLocationWeather({ cityName, countryName });
  };

  return (
    <div className="twa-search-bar__container">
      <Input
        className="search-bar__city-name-input"
        addonBefore="City"
        placeholder="Enter to search"
        value={cityName}
        onChange={(e) => {
          setCityName(e.target.value);
        }}
        onPressEnter={(e) => {
          e.preventDefault();
          handleOnSearch();
        }}
      />
      <Input
        className="search-bar__country-name-input"
        addonBefore="Country"
        placeholder="Enter to search"
        value={countryName}
        onChange={(e) => {
          setCountryName(e.target.value);
        }}
        onPressEnter={(e) => {
          e.preventDefault();
          handleOnSearch();
        }}
      />
      <Button icon={<SearchOutlined />} onClick={() => handleOnSearch()} />
      <Button
        icon={<ClearOutlined />}
        onClick={() => {
          setCityName('');
          setCountryName('');
        }}
      />
      <div className="search-bar__error-msg">{errorMsg}</div>
    </div>
  );
};

export default SearchBarComponent;
