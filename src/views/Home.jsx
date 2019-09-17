import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

const Home = ({ liveData }) => {
  const { live } = liveData;
  if (!live) return '...loading';
  return (
    <div>
      <h1>Home Page</h1>
      {live}
    </div>
  );
};

Home.propTypes = {
  liveData: PropTypes.objectOf(PropTypes.string).isRequired,
};

const mapStateToProps = (state) => ({
  liveData: state.live,
});

export default connect(mapStateToProps)(Home);
