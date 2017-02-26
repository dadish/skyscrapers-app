import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { selectPathname } from 'containers/App/selectors';
import { push } from 'react-router-redux';
import { Menu } from 'semantic-ui-react';

export const HeaderComponent = ({ currentPathname, goTo }) => {
  const { Item } = Menu;
  return (
    <Menu pointing secondary>
      <Item name="home" active={currentPathname === '/'} onClick={goTo('/')}>Home</Item>
      <Item name="about" active={currentPathname === '/about'} onClick={goTo('/about')}>About</Item>
    </Menu>
  );
};

const mapStateToProps = createStructuredSelector({
  currentPathname: selectPathname(),
});

const mapDispatchToProps = dispatch => ({
  goTo: path => () => dispatch(push(path)),
});

export default connect(mapStateToProps, mapDispatchToProps)(HeaderComponent);