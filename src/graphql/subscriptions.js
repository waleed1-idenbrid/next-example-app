/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateUser = /* GraphQL */ `
  subscription OnCreateUser(
    $filter: ModelSubscriptionUserFilterInput
    $username: String
  ) {
    onCreateUser(filter: $filter, username: $username) {
      id
      username
      avatar
      name
      gender
      birthday
      address
      city
      state
      zipcode
      bio
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
export const onUpdateUser = /* GraphQL */ `
  subscription OnUpdateUser(
    $filter: ModelSubscriptionUserFilterInput
    $username: String
  ) {
    onUpdateUser(filter: $filter, username: $username) {
      id
      username
      avatar
      name
      gender
      birthday
      address
      city
      state
      zipcode
      bio
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
export const onDeleteUser = /* GraphQL */ `
  subscription OnDeleteUser(
    $filter: ModelSubscriptionUserFilterInput
    $username: String
  ) {
    onDeleteUser(filter: $filter, username: $username) {
      id
      username
      avatar
      name
      gender
      birthday
      address
      city
      state
      zipcode
      bio
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
export const onCreateProperty = /* GraphQL */ `
  subscription OnCreateProperty(
    $filter: ModelSubscriptionPropertyFilterInput
    $ownerId: String
  ) {
    onCreateProperty(filter: $filter, ownerId: $ownerId) {
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
        gender
        birthday
        address
        city
        state
        zipcode
        bio
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
export const onUpdateProperty = /* GraphQL */ `
  subscription OnUpdateProperty(
    $filter: ModelSubscriptionPropertyFilterInput
    $ownerId: String
  ) {
    onUpdateProperty(filter: $filter, ownerId: $ownerId) {
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
        gender
        birthday
        address
        city
        state
        zipcode
        bio
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
export const onDeleteProperty = /* GraphQL */ `
  subscription OnDeleteProperty(
    $filter: ModelSubscriptionPropertyFilterInput
    $ownerId: String
  ) {
    onDeleteProperty(filter: $filter, ownerId: $ownerId) {
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
        gender
        birthday
        address
        city
        state
        zipcode
        bio
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
