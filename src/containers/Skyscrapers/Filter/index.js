import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { reduxForm, Field as ReduxFormField } from 'redux-form/immutable';
import { Form as SemanticForm} from 'semantic-ui-react';
import Segment from 'components/Segment';
import InputText from 'components/InputText';
import InputSelect from 'components/InputSelect';
import InputDropdown from 'components/InputDropdown';
import {
  selectHeightOptions,
  selectFloorsOptions,
  selectYearOptions,
  selectCityOptions,
} from './selectors';
import { selectLoading } from '../selectors';

const { Field: SemanticField, Group: SemanticGroup } = SemanticForm;

export const FilterComponent = ({ heightOptions, yearOptions, floorsOptions, cityOptions, loading }) => (
  <Segment raise="2" loading={loading} style={{ zIndex: 10 }}>
    <SemanticForm>
      <SemanticGroup widths='equal'>
        <SemanticField>
          <ReduxFormField
            name="keyword"
            component={InputText}
            placeholder="Keyword"
          />
        </SemanticField>

        <SemanticField>
          <ReduxFormField
            name="cities"
            component={InputDropdown}
            placeholder="City"
            options={cityOptions}
            fluid
            multiple
            search
            selection
          />
        </SemanticField>
      </SemanticGroup>

      <SemanticGroup widths='equal'>
        <SemanticField>
          <ReduxFormField
            name="height"
            component={InputSelect}
            label="Height"
            options={heightOptions}
          />
        </SemanticField>
      
        <SemanticField>
          <ReduxFormField
            name="floors"
            component={InputSelect}
            label="Floors"
            options={floorsOptions}
          />
        </SemanticField>
        <SemanticField>
          <ReduxFormField
            name="year"
            component={InputSelect}
            label="Year"
            options={yearOptions}
          />
        </SemanticField>
      </SemanticGroup>
    </SemanticForm>
  </Segment>
);

const mapStateToProps = createStructuredSelector({
  heightOptions: selectHeightOptions(),
  floorsOptions: selectFloorsOptions(),
  yearOptions: selectYearOptions(),
  cityOptions: selectCityOptions(),
  loading: selectLoading(),
});

export default reduxForm({
  form: 'filter',
  initialValues: {
    keyword: "",
    height: false,
    floors: false,
    year: false,
    cities: [],
  }
})(connect(mapStateToProps)(FilterComponent));