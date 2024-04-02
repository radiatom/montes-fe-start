import { gql } from '@apollo/client'

gql`
  query Page($slug: String) {
    page(input: { slug: $slug }) {
      data {
        slug
        blocks {
          content
          slug
          order
          name
          id
          backgroundColor {
            color
            id
            name
          }
          textColor {
            color
            id
            name
          }
          text_position
          galleries {
            id
            name
            slug
            type
            slider {
              images {
                original
              }
            }
            gallery {
              original
            }
          }
        }
        pure_title
        pure_meta_title
        pure_meta_description
        pure_meta_keywords
      }
      meta {
        meta_description
        meta_keywords
        meta_title
      }
    }
    settings {
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
