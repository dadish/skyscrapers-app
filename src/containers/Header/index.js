import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { selectLocationPathname } from 'containers/App/selectors';
import { push } from 'react-router-redux';
import { Menu } from 'semantic-ui-react';

export const HeaderComponent = ({ currentPathname, goTo }) => {
  const { Item } = Menu;
  return (
    <Menu
      pointing
      secondary
      fixed="top"
      size="massive"
      color="black"
      style={{
        backgroundColor: '#fff',
        borderColor: '#fff',
        boxShadow: '0px 5px 5px -3px rgba(0, 0, 0, 0.2), 0px 8px 10px 1px rgba(0, 0, 0, 0.14), 0px 3px 14px 2px rgba(0, 0, 0, 0.12)'
      }}
    >
      <Item name="home" active={currentPathname === '/'} onClick={goTo('/')}>Home</Item>
      <Item name="about" active={currentPathname === '/about'} onClick={goTo('/about')}>About</Item>
    </Menu>
  );
};

const mapStateToProps = createStructuredSelector({
  currentPathname: selectLocationPathname(),
});

const mapDispatchToProps = dispatch => ({
  goTo: path => () => dispatch(push(path)),
});

export default connect(mapStateToProps, mapDispatchToProps)(HeaderComponent);