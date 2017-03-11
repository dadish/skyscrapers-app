import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { selectList } from '../List/selectors';
import Segment from 'components/Segment';
import GoogleMap from 'google-map-react';
import { activateItem, deactivateItem } from '../actions';
import Marker from './Marker';
import "./style.css";

const defaultCenter = {
  lat: 36.2115201,
  lng: -96.3318124,
};

export const SkyMap = (props) => {

  const {
    list,
    handleMouseEnter,
    handleMouseLeave,
  } = props;

  return (
    <div className="map-w">
      <Segment
        raise="1"
        style={{
          position: 'absolute',
          top: '4rem',
          bottom: '1rem',
          right: '1rem',
          left: '2rem',
        }}
      >
        <GoogleMap
          options={() => ({
            scrollwheel: false
          })}
          defaultCenter={defaultCenter}
          defaultZoom={4}
          bootstrapURLKeys={{
            key: 'AIzaSyCq4M8-Auy3xw_8eIKjn1YsKms20iMU4Qk',
            v: 3,
          }}
          onChildMouseEnter={handleMouseEnter}
          onChildMouseLeave={handleMouseLeave}
        >
          {list.map((it) => (
            <Marker
              key={it.get('id')}
              skyscraper={it}
              lat={it.getIn(['map', 'lat'])}
              lng={it.getIn(['map', 'lng'])}
            />
          ))}
        </GoogleMap>
      </Segment>
    </div>
  );
};

const mapStateToProps = createStructuredSelector({
  list: selectList(),
})

const mapDispatchToProps = dispatch => ({
  handleMouseEnter: key => dispatch(activateItem(key)),
  handleMouseLeave: key => dispatch(deactivateItem(key)),
});

export default connect(mapStateToProps, mapDispatchToProps)(SkyMap);