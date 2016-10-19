import React from 'react';
import { DropdownButton, MenuItem } from 'react-bootstrap';
import { graphql } from 'react-apollo';
import gql from 'graphql-tag';
import { connect } from 'react-redux';

import setLanguage from 'actions';
import LangIcon from 'components/LangIcon/LangIcon';
import s from './lang';

const Lang = ({ language, changeLang, data }) => {
  const { loading } = data;

  if (loading) {
    return (null);
  }

  return (
    <div></div>
  );
};

const mapStateToProps = state => ({
  language: state.language,
});
const mapDispatchToProps = dispatch => ({
  changeLang: (lang) => {
    dispatch(setLanguage(lang));
  },
});

const LangWithState = connect(
  mapStateToProps,
  mapDispatchToProps
)(Lang);

const PageWithDataAndState = graphql(gql`
  query allPlanets {
    allPlanets {
      edges {
        node {
          id
        }
      }
    }
  }
`)(LangWithState);

export default PageWithDataAndState;
