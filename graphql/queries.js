/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getPost = /* GraphQL */ `
  query GetPost($id: ID!) {
    getPost(id: $id) {
      id
      image
      gallery
      type
      title
      description
      tags
      notice
      hours
      activity_n
      maxGuests
      activity
      oldPrice
      newPrice
      latitude
      longitude
      rating
      createdAt
      updatedAt
    }
  }
`;
export const listPosts = /* GraphQL */ `
  query ListPosts(
    $filter: ModelPostFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listPosts(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        image
        gallery
        type
        title
        description
        tags
        notice
        hours
        activity_n
        maxGuests
        activity
        oldPrice
        newPrice
        latitude
        longitude
        rating
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
