import React from 'react';
import { DropdownButton, MenuItem } from 'react-bootstrap';
import { Link } from 'react-scroll';
import { graphql } from 'react-apollo';
import gql from 'graphql-tag';
import { connect } from 'react-redux';

// import MenuItemLink from '../MenuItemLink/MenuItemLink';
import s from './menu';


const Menu = ({ data }) => {
  const { loading } = data;

  if (loading) {
    return (null);
  }

  return (
    <div></div>
    );
};

const MenuWithData = graphql(gql`
  query allPeople {
    allPeople {
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
)(Menu);

const MenuWithDataAndState = connect(
  state => ({ language: state.language })
)(MenuWithData);

export default MenuWithDataAndState;

