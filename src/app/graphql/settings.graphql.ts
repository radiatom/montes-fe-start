import { gql } from '@apollo/client'

gql`
  query Settings {
    settings {
      sideBar {
        title
        pages {
          slug
          pure_title
        }
      }
      footer {
        title
        pages {
          slug
          pure_title
        }
      }
      textInSite {
        id
        key
        pure_text
      }
      contacts {
        key
        value
      }
      banners {
        image {
          original
        }
        link
      }
    }
  }
`
