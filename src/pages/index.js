import React, { useEffect, useState } from "react"
import gql from 'graphql-tag';
import { useQuery } from '@apollo/client';

// This query is executed at run time by Apollo.
const GET_BOOKMARKS = gql`
{
  allAuthors {
        id
        name
    }
}`;

export default function index() {

  const { error, loading, data } = useQuery(GET_BOOKMARKS);


  if (error)
    return (<h3>{error}</h3>)

  if (loading)
    return <h3>loading... </h3>

  console.log(data);

  <div> Hello Pakistan</div>

}
