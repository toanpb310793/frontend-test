import { FC } from 'react';
import { useSelector } from 'react-redux';
import cx from 'classnames';

import { storeName } from '../../../redux/models/layout.model';

import './styles.scss';

type LayoutComponentPropsTypes = {
  children: React.ReactNode;
};

const LayoutComponent: FC<LayoutComponentPropsTypes> = ({ children }) => {
  const theme = useSelector((state) => state[storeName].theme);

  return (
    <div className={cx('twa-layout__container', `twa-layout__container--${theme}`)}>{children}</div>
  );
};

export default LayoutComponent;
