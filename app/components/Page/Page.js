/* eslint-disable jsx-a11y/anchor-has-content */
import React from 'react';
import { graphql } from 'react-apollo';
import gql from 'graphql-tag';
import { connect } from 'react-redux';
import { animateScroll } from 'react-scroll';

import './banner';
import './contact';
import './details';
import './features';
import './footer';
import './page';

const Page = ({ data }) => {
  const { loading } = data;

  if (loading) {
    return (null);
  }

  const { posts } = data.wp_query;

  return (
    <div>
    </div>
  );
};

const PageWithData = graphql(gql`
  query allFilms {
    allFilms {
      edges {
        node {
          id
        }
      }
    }
  }
`, {
  options: ({ language }) => ({
    variables: { lang: language || 'gb' },
  }),
}
)(Page);

const PageWithDataAndState = connect(
  state => ({ language: state.language })
)(PageWithData);

export default PageWithDataAndState;
