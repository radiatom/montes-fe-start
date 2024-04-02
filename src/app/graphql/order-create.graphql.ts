import { gql } from '@apollo/client'

gql`
  mutation OrderCreate($input: RequestCreateInput) {
    requestCreate(input: $input) {
      data {
        name
        phone
        comment
      }
    }
  }
`
