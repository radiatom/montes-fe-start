import { gql } from '@apollo/client'

gql`
  mutation Register($input: RegisterInput!) {
    register(input: $input) {
      message
    }
  }
`
