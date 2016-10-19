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

  return (
    <div>Page</div>
  );
};

const PageWithData = graphql(gql`
  query allPosts {
    posts {
      votes
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
