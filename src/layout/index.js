import React from 'react';
import PropTypes from 'prop-types';
import Hooks from 'common/hooks';
import css from './index.less';

function Layout() {
  
  Hooks.useDidMount(() => {
    console.log('componentDidMount!');
  });
  
  return (
    <div className={css.layout}>
      react-temp
    </div>
  );
}

Layout.propTypes = {};

Layout.defaultProps = {};

export default Layout;