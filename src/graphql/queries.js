/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getWishList = /* GraphQL */ `
  query GetWishList($propertiesId: [String]) {
    getWishList(propertiesId: $propertiesId) {
      id
      title
      description
      __typename
    }
  }
`;
export const getUser = /* GraphQL */ `
  query GetUser($id: ID!) {
    getUser(id: $id) {
      id
      username
      avatar
      name
      first_name
      last_name
      gender
      birthday
      address
      city
      state
      email
      phone_number
      role
      email_verified
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const listUsers = /* GraphQL */ `
  query ListUsers(
    $filter: ModelUserFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listUsers(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        username
        avatar
        name
        first_name
        last_name
        gender
        birthday
        address
        city
        state
        email
        phone_number
        role
        email_verified
        createdAt
        updatedAt
        __typename
      }
      nextToken
      __typename
    }
  }
`;
export const getProperty = /* GraphQL */ `
  query GetProperty($id: ID!) {
    getProperty(id: $id) {
      id
      title
      description
      property_purpose
      property_category
      propety_type
      property_price
      max_rooms
      baths
      beds
      city
      area
      gallery
      video
      features {
        main
        bussiness
        community
        healthcare
        nearby
        other
        __typename
      }
      contact_info {
        email
        landline
        mobile
        __typename
      }
      Address {
        address
        city
        landmark
        zipcode
        __typename
      }
      ownerId
      owner {
        id
        username
        avatar
        name
        first_name
        last_name
        gender
        birthday
        address
        city
        state
        email
        phone_number
        role
        email_verified
        createdAt
        updatedAt
        __typename
      }
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const listProperties = /* GraphQL */ `
  query ListProperties(
    $filter: ModelPropertyFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listProperties(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        title
        description
        property_purpose
        property_category
        propety_type
        property_price
        max_rooms
        baths
        beds
        city
        area
        gallery
        video
        features {
          main
          bussiness
          community
          healthcare
          nearby
          other
          __typename
        }
        contact_info {
          email
          landline
          mobile
          __typename
        }
        Address {
          address
          city
          landmark
          zipcode
          __typename
        }
        ownerId
        owner {
          id
          username
          avatar
          name
          first_name
          last_name
          gender
          birthday
          address
          city
          state
          email
          phone_number
          role
          email_verified
          createdAt
          updatedAt
          __typename
        }
        createdAt
        updatedAt
        __typename
      }
      nextToken
      __typename
    }
  }
`;
export const propertiesByTitle = /* GraphQL */ `
  query PropertiesByTitle(
    $title: String!
    $sortDirection: ModelSortDirection
    $filter: ModelPropertyFilterInput
    $limit: Int
    $nextToken: String
  ) {
    propertiesByTitle(
      title: $title
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        title
        description
        property_purpose
        property_category
        propety_type
        property_price
        max_rooms
        baths
        beds
        city
        area
        gallery
        video
        features {
          main
          bussiness
          community
          healthcare
          nearby
          other
          __typename
        }
        contact_info {
          email
          landline
          mobile
          __typename
        }
        Address {
          address
          city
          landmark
          zipcode
          __typename
        }
        ownerId
        owner {
          id
          username
          avatar
          name
          first_name
          last_name
          gender
          birthday
          address
          city
          state
          email
          phone_number
          role
          email_verified
          createdAt
          updatedAt
          __typename
        }
        createdAt
        updatedAt
        __typename
      }
      nextToken
      __typename
    }
  }
`;
