import React from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions'

const MuseumPicker = ({allMuseums, dcMuseums}) => {
  return (
    <div className="row">
      <div className="ui menu">
        <div className="active item" onClick={allMuseums}>All Museums</div>
        <div className="item" onClick={dcMuseums}>National Gallery of Art, Washington D.C.</div>
      </div>
    </div>
  );
};

export default connect(null, actions)(MuseumPicker);
