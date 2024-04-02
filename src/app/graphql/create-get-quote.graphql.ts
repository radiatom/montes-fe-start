import { gql } from '@apollo/client'

gql`
  mutation createGetQuote($input: CreateGetQuoteInput) {
    createGetQuote(input: $input) {
      cargo_details
      email
      name
      phone
      shipping_to
      shipping_from
    }
  }
`
