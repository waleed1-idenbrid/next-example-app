/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createUser = /* GraphQL */ `
  mutation CreateUser(
    $input: CreateUserInput!
    $condition: ModelUserConditionInput
  ) {
    createUser(input: $input, condition: $condition) {
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
export const deleteUser = /* GraphQL */ `
  mutation DeleteUser(
    $input: DeleteUserInput!
    $condition: ModelUserConditionInput
  ) {
    deleteUser(input: $input, condition: $condition) {
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
export const updateUser = /* GraphQL */ `
  mutation UpdateUser(
    $input: UpdateUserInput!
    $condition: ModelUserConditionInput
  ) {
    updateUser(input: $input, condition: $condition) {
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
export const createProperty = /* GraphQL */ `
  mutation CreateProperty(
    $input: CreatePropertyInput!
    $condition: ModelPropertyConditionInput
  ) {
    createProperty(input: $input, condition: $condition) {
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
export const updateProperty = /* GraphQL */ `
  mutation UpdateProperty(
    $input: UpdatePropertyInput!
    $condition: ModelPropertyConditionInput
  ) {
    updateProperty(input: $input, condition: $condition) {
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
export const deleteProperty = /* GraphQL */ `
  mutation DeleteProperty(
    $input: DeletePropertyInput!
    $condition: ModelPropertyConditionInput
  ) {
    deleteProperty(input: $input, condition: $condition) {
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
