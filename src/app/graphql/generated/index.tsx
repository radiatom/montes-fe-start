import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = { [_ in K]?: never };
export type Incremental<T> = T | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };
const defaultOptions = {} as const;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string; }
  String: { input: string; output: string; }
  Boolean: { input: boolean; output: boolean; }
  Int: { input: number; output: number; }
  Float: { input: number; output: number; }
  DateTime: { input: any; output: any; }
};

export type AllNewsCategoriesInput = {
  order?: InputMaybe<Scalars['String']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Scalars['String']['input']>;
};

export type AllNewsInput = {
  first?: InputMaybe<Scalars['Int']['input']>;
  news_category_ids?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
  order?: InputMaybe<Scalars['String']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  search?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Scalars['String']['input']>;
};

export type AllPagesInput = {
  first?: InputMaybe<Scalars['Int']['input']>;
  order?: InputMaybe<Scalars['String']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  page_category_ids?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
  search?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Scalars['String']['input']>;
};

export type Badge = {
  __typename?: 'Badge';
  color?: Maybe<Scalars['String']['output']>;
  created_at: Scalars['DateTime']['output'];
  enable_information?: Maybe<Scalars['Boolean']['output']>;
  id: Scalars['ID']['output'];
  information?: Maybe<Scalars['String']['output']>;
  nameAll: Scalars['String']['output'];
  order_column?: Maybe<Scalars['Int']['output']>;
  slug?: Maybe<Scalars['String']['output']>;
  type?: Maybe<Scalars['String']['output']>;
  updated_at: Scalars['DateTime']['output'];
};

export type Banner = {
  __typename?: 'Banner';
  category?: Maybe<NewsCategory>;
  image?: Maybe<Image>;
  product?: Maybe<Product>;
  slug: Scalars['String']['output'];
  subcategory?: Maybe<NewsCategory>;
  subcategorysecond?: Maybe<NewsCategory>;
};

export type Block = {
  __typename?: 'Block';
  backgroundColor?: Maybe<Color>;
  content?: Maybe<Scalars['String']['output']>;
  galleries: Array<Gallery>;
  id: Scalars['ID']['output'];
  is_background_color?: Maybe<Scalars['Boolean']['output']>;
  is_position?: Maybe<Scalars['Boolean']['output']>;
  is_text_color?: Maybe<Scalars['Boolean']['output']>;
  name: Scalars['String']['output'];
  order?: Maybe<Scalars['Boolean']['output']>;
  slug: Scalars['String']['output'];
  textColor?: Maybe<Color>;
  text_position?: Maybe<Scalars['String']['output']>;
};

export type Brand = {
  __typename?: 'Brand';
  image?: Maybe<Image>;
  slug?: Maybe<Scalars['String']['output']>;
  value: Scalars['String']['output'];
};

export type Business = {
  __typename?: 'Business';
  address?: Maybe<Scalars['String']['output']>;
  children?: Maybe<Array<Maybe<Business>>>;
  created_at: Scalars['DateTime']['output'];
  delivery_price?: Maybe<Scalars['String']['output']>;
  delivery_time?: Maybe<Scalars['String']['output']>;
  description?: Maybe<Scalars['String']['output']>;
  email?: Maybe<Scalars['String']['output']>;
  facebook?: Maybe<Scalars['String']['output']>;
  free_delivery_price?: Maybe<Scalars['String']['output']>;
  google_maps_address?: Maybe<Scalars['String']['output']>;
  id: Scalars['ID']['output'];
  information_for_consumer?: Maybe<Array<Maybe<InformationForConsumer>>>;
  instagram?: Maybe<Scalars['String']['output']>;
  latitude?: Maybe<Scalars['String']['output']>;
  longitude?: Maybe<Scalars['String']['output']>;
  menu_pdf_file?: Maybe<Scalars['String']['output']>;
  menu_title?: Maybe<Scalars['String']['output']>;
  meta_description?: Maybe<Scalars['String']['output']>;
  meta_keywords?: Maybe<Scalars['String']['output']>;
  meta_title?: Maybe<Scalars['String']['output']>;
  minimum_order_price?: Maybe<Scalars['String']['output']>;
  name: Scalars['String']['output'];
  online_delivery: Scalars['Boolean']['output'];
  order: Scalars['Int']['output'];
  parent_id?: Maybe<Scalars['Int']['output']>;
  phone?: Maybe<Scalars['String']['output']>;
  phone_number?: Maybe<Scalars['String']['output']>;
  pick_up_delivery: Scalars['Boolean']['output'];
  premium: Scalars['Boolean']['output'];
  premium_ends_at?: Maybe<Scalars['DateTime']['output']>;
  short_description?: Maybe<Scalars['String']['output']>;
  slug?: Maybe<Scalars['String']['output']>;
  status: Scalars['Boolean']['output'];
  updated_at: Scalars['DateTime']['output'];
  work_schedule?: Maybe<Array<Maybe<WorkSchedule>>>;
  youtube?: Maybe<Scalars['String']['output']>;
};

export type BusinessCategory = {
  __typename?: 'BusinessCategory';
  children?: Maybe<Array<Maybe<NewsCategory>>>;
  created_at: Scalars['DateTime']['output'];
  id: Scalars['ID']['output'];
  name: Scalars['String']['output'];
  order: Scalars['Int']['output'];
  parent_id?: Maybe<Scalars['Int']['output']>;
  slug: Scalars['String']['output'];
  updated_at: Scalars['DateTime']['output'];
};

export type Characteristics = {
  __typename?: 'Characteristics';
  name?: Maybe<Scalars['String']['output']>;
};

export type CheckPasswordResetCodeInput = {
  code?: InputMaybe<Scalars['String']['input']>;
  email?: InputMaybe<Scalars['String']['input']>;
};

export type Color = {
  __typename?: 'Color';
  color: Scalars['String']['output'];
  id: Scalars['ID']['output'];
  name: Scalars['String']['output'];
};

export type Contacts = {
  __typename?: 'Contacts';
  key: Scalars['String']['output'];
  name: Scalars['String']['output'];
  value: Scalars['String']['output'];
};

export type CreateGetQuoteInput = {
  cargo_details?: InputMaybe<Scalars['String']['input']>;
  email?: InputMaybe<Scalars['String']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  phone?: InputMaybe<Scalars['String']['input']>;
  shipping_from?: InputMaybe<Scalars['String']['input']>;
  shipping_to?: InputMaybe<Scalars['String']['input']>;
};

export type Filters = {
  __typename?: 'Filters';
  name?: Maybe<Scalars['String']['output']>;
  values?: Maybe<Array<Maybe<Values>>>;
};

export type Footer = {
  __typename?: 'Footer';
  pages?: Maybe<Array<Maybe<Page>>>;
  title: Scalars['String']['output'];
};

export type Gallery = {
  __typename?: 'Gallery';
  gallery?: Maybe<Array<Maybe<Image>>>;
  id: Scalars['ID']['output'];
  name: Scalars['String']['output'];
  slider?: Maybe<Array<Maybe<Images>>>;
  slug?: Maybe<Scalars['String']['output']>;
  type?: Maybe<Scalars['String']['output']>;
};

export type GetQuote = {
  __typename?: 'GetQuote';
  cargo_details?: Maybe<Scalars['String']['output']>;
  email?: Maybe<Scalars['String']['output']>;
  name?: Maybe<Scalars['String']['output']>;
  phone?: Maybe<Scalars['String']['output']>;
  shipping_from?: Maybe<Scalars['String']['output']>;
  shipping_to?: Maybe<Scalars['String']['output']>;
};

export type Image = {
  __typename?: 'Image';
  original?: Maybe<Scalars['String']['output']>;
};

export type Images = {
  __typename?: 'Images';
  images?: Maybe<Array<Maybe<Image>>>;
};

export type InformationForConsumer = {
  __typename?: 'InformationForConsumer';
  fields?: Maybe<Array<Maybe<InformationForConsumerField>>>;
  type: Scalars['String']['output'];
};

export type InformationForConsumerField = {
  __typename?: 'InformationForConsumerField';
  page_description: Scalars['String']['output'];
  page_name: Scalars['String']['output'];
};

export type LoginInput = {
  email?: InputMaybe<Scalars['String']['input']>;
  password?: InputMaybe<Scalars['String']['input']>;
};

export type LoginResponse = {
  __typename?: 'LoginResponse';
  token?: Maybe<Scalars['String']['output']>;
  user?: Maybe<User>;
};

export type MainBanners = {
  __typename?: 'MainBanners';
  image?: Maybe<Image>;
  link?: Maybe<Scalars['String']['output']>;
};

export type Meta = {
  __typename?: 'Meta';
  meta_description?: Maybe<Scalars['String']['output']>;
  meta_keywords?: Maybe<Scalars['String']['output']>;
  meta_title?: Maybe<Scalars['String']['output']>;
};

export type Mutation = {
  __typename?: 'Mutation';
  /** Check reset password code. */
  checkPasswordResetCode?: Maybe<StatusResponse>;
  createGetQuote?: Maybe<GetQuote>;
  /** Log in to a new session and get the User. */
  login?: Maybe<LoginResponse>;
  /** Log out from the current session, showing the User one last time. */
  logout?: Maybe<User>;
  register?: Maybe<RegisterResponse>;
  requestCreate?: Maybe<RequestItem>;
  /** Request password reset. */
  requestPasswordReset?: Maybe<RequestPasswordResetResponse>;
  /** Reset Admin password. */
  resetPassword?: Maybe<StatusResponse>;
};


export type MutationCheckPasswordResetCodeArgs = {
  input: CheckPasswordResetCodeInput;
};


export type MutationCreateGetQuoteArgs = {
  input?: InputMaybe<CreateGetQuoteInput>;
};


export type MutationLoginArgs = {
  input: LoginInput;
};


export type MutationRegisterArgs = {
  input: RegisterInput;
};


export type MutationRequestCreateArgs = {
  input?: InputMaybe<RequestCreateInput>;
};


export type MutationRequestPasswordResetArgs = {
  input: RequestPasswordResetInput;
};


export type MutationResetPasswordArgs = {
  input: ResetPasswordInput;
};

export type News = {
  __typename?: 'News';
  badges?: Maybe<Array<Maybe<Badge>>>;
  businesses?: Maybe<Array<Maybe<Business>>>;
  categories?: Maybe<Array<Maybe<NewsCategory>>>;
  content: Scalars['String']['output'];
  created_at: Scalars['DateTime']['output'];
  id: Scalars['ID']['output'];
  image?: Maybe<Image>;
  images?: Maybe<Array<Maybe<Image>>>;
  images_title?: Maybe<Scalars['String']['output']>;
  meta_description?: Maybe<Scalars['String']['output']>;
  meta_keywords?: Maybe<Scalars['String']['output']>;
  meta_title?: Maybe<Scalars['String']['output']>;
  published_at: Scalars['DateTime']['output'];
  settlements?: Maybe<Array<Maybe<Settlement>>>;
  slug: Scalars['String']['output'];
  status: Scalars['Boolean']['output'];
  tags?: Maybe<Array<Maybe<Tag>>>;
  title: Scalars['String']['output'];
  updated_at: Scalars['DateTime']['output'];
  videos?: Maybe<Array<Maybe<Scalars['String']['output']>>>;
  videos_title?: Maybe<Scalars['String']['output']>;
  view_count: Scalars['Int']['output'];
};

export type NewsCategoriesList = {
  __typename?: 'NewsCategoriesList';
  data?: Maybe<Array<Maybe<NewsCategory>>>;
};

export type NewsCategory = {
  __typename?: 'NewsCategory';
  children?: Maybe<Array<Maybe<NewsCategory>>>;
  created_at: Scalars['DateTime']['output'];
  id: Scalars['ID']['output'];
  name: Scalars['String']['output'];
  order: Scalars['Int']['output'];
  parent_id?: Maybe<Scalars['Int']['output']>;
  show_in_footer: Scalars['Boolean']['output'];
  show_in_header: Scalars['Boolean']['output'];
  slug: Scalars['String']['output'];
  updated_at: Scalars['DateTime']['output'];
};

export type NewsCategoryInput = {
  id?: InputMaybe<Scalars['Int']['input']>;
};

export type NewsInput = {
  slug?: InputMaybe<Scalars['String']['input']>;
};

export type NewsList = {
  __typename?: 'NewsList';
  data?: Maybe<Array<Maybe<News>>>;
  paginatorInfo?: Maybe<PaginatorInfo>;
};

export type Npcities = {
  __typename?: 'Npcities';
  CityID: Scalars['String']['output'];
  Description: Scalars['String']['output'];
  Ref: Scalars['String']['output'];
  SettlementTypeDescription: Scalars['String']['output'];
  id: Scalars['ID']['output'];
};

export type Npwarehouse = {
  __typename?: 'Npwarehouse';
  CityDescription: Scalars['String']['output'];
  CityRef: Scalars['String']['output'];
  Description: Scalars['String']['output'];
  Latitude: Scalars['String']['output'];
  Longitude: Scalars['String']['output'];
  Ref: Scalars['String']['output'];
  ShortAddress: Scalars['String']['output'];
  id: Scalars['ID']['output'];
};

export type Order = {
  __typename?: 'Order';
  self_picking?: Maybe<TextInSite>;
};

/** Allows ordering a list of records. */
export type OrderByClause = {
  /** The column that is used for ordering. */
  column: Scalars['String']['input'];
  /** The direction that is used for ordering. */
  order: SortOrder;
};

/** Aggregate functions when ordering by a relation without specifying a column. */
export enum OrderByRelationAggregateFunction {
  /** Amount of items. */
  Count = 'COUNT'
}

/** Aggregate functions when ordering by a relation that may specify a column. */
export enum OrderByRelationWithColumnAggregateFunction {
  /** Average. */
  Avg = 'AVG',
  /** Amount of items. */
  Count = 'COUNT',
  /** Maximum. */
  Max = 'MAX',
  /** Minimum. */
  Min = 'MIN',
  /** Sum. */
  Sum = 'SUM'
}

export type Page = {
  __typename?: 'Page';
  blocks: Array<Block>;
  id: Scalars['ID']['output'];
  image?: Maybe<Image>;
  images?: Maybe<Array<Maybe<Image>>>;
  images_title?: Maybe<Scalars['String']['output']>;
  meta_description?: Maybe<Scalars['String']['output']>;
  meta_keywords?: Maybe<Scalars['String']['output']>;
  meta_title?: Maybe<Scalars['String']['output']>;
  pure_content: Scalars['String']['output'];
  pure_meta_description?: Maybe<Scalars['String']['output']>;
  pure_meta_keywords?: Maybe<Scalars['String']['output']>;
  pure_meta_title?: Maybe<Scalars['String']['output']>;
  pure_title: Scalars['String']['output'];
  slug: Scalars['String']['output'];
  status: Scalars['Boolean']['output'];
};

export type PageCategory = {
  __typename?: 'PageCategory';
  children?: Maybe<Array<Maybe<PageCategory>>>;
  created_at: Scalars['DateTime']['output'];
  id: Scalars['ID']['output'];
  name: Scalars['String']['output'];
  order: Scalars['Int']['output'];
  parent_id?: Maybe<Scalars['Int']['output']>;
  show_in_footer: Scalars['Boolean']['output'];
  show_in_header: Scalars['Boolean']['output'];
  slug: Scalars['String']['output'];
  updated_at: Scalars['DateTime']['output'];
};

export type PageInput = {
  slug?: InputMaybe<Scalars['String']['input']>;
};

export type PageItem = {
  __typename?: 'PageItem';
  data?: Maybe<Page>;
  meta?: Maybe<Meta>;
};

export type PagesList = {
  __typename?: 'PagesList';
  data?: Maybe<Array<Maybe<Page>>>;
  paginatorInfo?: Maybe<PaginatorInfo>;
};

export type PaginatorInfo = {
  __typename?: 'PaginatorInfo';
  /** Index of the current page. */
  currentPage: Scalars['Int']['output'];
  /** Index of the last available page. */
  lastPage: Scalars['Int']['output'];
  /** Number of total available items. */
  total: Scalars['Int']['output'];
};

export type PopularItem = {
  __typename?: 'PopularItem';
  data?: Maybe<PopularPage>;
  meta?: Maybe<Meta>;
};

export type PopularPage = {
  __typename?: 'PopularPage';
  banners?: Maybe<Array<Maybe<Banner>>>;
  brands?: Maybe<Array<Maybe<Brand>>>;
  id: Scalars['ID']['output'];
  sliders?: Maybe<Array<Maybe<Slider>>>;
  slug?: Maybe<Scalars['String']['output']>;
  title: Scalars['String']['output'];
};

export type Product = {
  __typename?: 'Product';
  badges?: Maybe<Array<Maybe<Badge>>>;
  category?: Maybe<ProductCategory>;
  characteristicValues?: Maybe<Array<Maybe<CharacteristicValues>>>;
  created_at: Scalars['DateTime']['output'];
  description?: Maybe<Scalars['String']['output']>;
  id: Scalars['ID']['output'];
  images?: Maybe<Array<Maybe<Image>>>;
  meta_description?: Maybe<Scalars['String']['output']>;
  meta_keywords?: Maybe<Scalars['String']['output']>;
  meta_title?: Maybe<Scalars['String']['output']>;
  name: Scalars['String']['output'];
  price?: Maybe<Scalars['Int']['output']>;
  price_grn?: Maybe<Scalars['Int']['output']>;
  product_code?: Maybe<Scalars['String']['output']>;
  promotional_price?: Maybe<Scalars['Int']['output']>;
  promotional_price_grn?: Maybe<Scalars['Int']['output']>;
  pure_description?: Maybe<Scalars['String']['output']>;
  pure_meta_description?: Maybe<Scalars['String']['output']>;
  pure_meta_keywords?: Maybe<Scalars['String']['output']>;
  pure_meta_title?: Maybe<Scalars['String']['output']>;
  pure_name: Scalars['String']['output'];
  slug: Scalars['String']['output'];
  statuses?: Maybe<ProductStatus>;
  updated_at: Scalars['DateTime']['output'];
};

export type ProductCategories = {
  __typename?: 'ProductCategories';
  children?: Maybe<Array<Maybe<SecondProductCategories>>>;
  image?: Maybe<Image>;
  name_all: Scalars['String']['output'];
  products?: Maybe<Array<Maybe<Products>>>;
  show_in_footer: Scalars['Boolean']['output'];
  show_in_header: Scalars['Boolean']['output'];
  slug?: Maybe<Scalars['String']['output']>;
  status: Scalars['Boolean']['output'];
};

export type ProductCategory = {
  __typename?: 'ProductCategory';
  id: Scalars['ID']['output'];
  meta_description?: Maybe<Scalars['String']['output']>;
  meta_title?: Maybe<Scalars['String']['output']>;
  name_all: Scalars['String']['output'];
  order: Scalars['Int']['output'];
  parent_id?: Maybe<Scalars['Int']['output']>;
  pure_meta_description?: Maybe<Scalars['String']['output']>;
  pure_meta_title?: Maybe<Scalars['String']['output']>;
  show_in_footer: Scalars['Boolean']['output'];
  show_in_header: Scalars['Boolean']['output'];
  slug: Scalars['String']['output'];
};

export type ProductInput = {
  slug?: InputMaybe<Scalars['String']['input']>;
};

export type ProductItem = {
  __typename?: 'ProductItem';
  product?: Maybe<Product>;
};

export type ProductStatus = {
  __typename?: 'ProductStatus';
  color?: Maybe<Scalars['String']['output']>;
  id: Scalars['ID']['output'];
  name: Scalars['String']['output'];
  pure_name: Scalars['String']['output'];
};

export type Products = {
  __typename?: 'Products';
  badges?: Maybe<Array<Maybe<Badge>>>;
  category?: Maybe<ProductCategory>;
  characteristicValues?: Maybe<Array<Maybe<CharacteristicValues>>>;
  created_at: Scalars['DateTime']['output'];
  description?: Maybe<Scalars['String']['output']>;
  id: Scalars['ID']['output'];
  images?: Maybe<Array<Maybe<Image>>>;
  meta_description?: Maybe<Scalars['String']['output']>;
  meta_keywords?: Maybe<Scalars['String']['output']>;
  meta_title?: Maybe<Scalars['String']['output']>;
  name: Scalars['String']['output'];
  price?: Maybe<Scalars['Int']['output']>;
  price_grn?: Maybe<Scalars['Int']['output']>;
  product_code?: Maybe<Scalars['String']['output']>;
  promotional_price?: Maybe<Scalars['Int']['output']>;
  promotional_price_grn?: Maybe<Scalars['Int']['output']>;
  pure_description?: Maybe<Scalars['String']['output']>;
  pure_meta_description?: Maybe<Scalars['String']['output']>;
  pure_meta_keywords?: Maybe<Scalars['String']['output']>;
  pure_meta_title?: Maybe<Scalars['String']['output']>;
  pure_name: Scalars['String']['output'];
  slug: Scalars['String']['output'];
  statuses?: Maybe<ProductStatus>;
  updated_at: Scalars['DateTime']['output'];
  year?: Maybe<Scalars['Int']['output']>;
};

export type ProductsInput = {
  badge?: InputMaybe<Scalars['String']['input']>;
  category?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  filters?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  first?: InputMaybe<Scalars['Int']['input']>;
  model?: InputMaybe<Scalars['String']['input']>;
  order?: InputMaybe<Scalars['String']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  prices?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  search?: InputMaybe<Scalars['String']['input']>;
  sort?: InputMaybe<Scalars['String']['input']>;
  year_from?: InputMaybe<Scalars['Int']['input']>;
  year_to?: InputMaybe<Scalars['Int']['input']>;
};

export type ProductsList = {
  __typename?: 'ProductsList';
  badges?: Maybe<Array<Maybe<Badge>>>;
  characteristics?: Maybe<Array<Maybe<Characteristics>>>;
  data?: Maybe<Array<Maybe<Products>>>;
  filters?: Maybe<Array<Maybe<Filters>>>;
  max_price?: Maybe<Scalars['Int']['output']>;
  max_year?: Maybe<Scalars['Int']['output']>;
  min_price?: Maybe<Scalars['Int']['output']>;
  min_year?: Maybe<Scalars['Int']['output']>;
  paginatorInfo?: Maybe<PaginatorInfo>;
};

export type Query = {
  __typename?: 'Query';
  /** View all News with pagination. */
  allNews: NewsList;
  /** View all News Categories with pagination. */
  allNewsCategories: NewsCategoriesList;
  /** View single New. */
  news?: Maybe<News>;
  /** View single News Category. */
  newsCategory?: Maybe<NewsCategory>;
  /** View single Page. */
  page?: Maybe<PageItem>;
  popularProducts?: Maybe<PopularItem>;
  product: Product;
  products: ProductsList;
  settings?: Maybe<Settings>;
  /** View User profile. */
  userProfile?: Maybe<User>;
};


export type QueryAllNewsArgs = {
  input: AllNewsInput;
};


export type QueryAllNewsCategoriesArgs = {
  input: AllNewsCategoriesInput;
};


export type QueryNewsArgs = {
  input: NewsInput;
};


export type QueryNewsCategoryArgs = {
  input: NewsCategoryInput;
};


export type QueryPageArgs = {
  input: PageInput;
};


export type QueryProductArgs = {
  input: ProductInput;
};


export type QueryProductsArgs = {
  input: ProductsInput;
};

export type RegisterInput = {
  email?: InputMaybe<Scalars['String']['input']>;
  password?: InputMaybe<Scalars['String']['input']>;
  password_confirmation?: InputMaybe<Scalars['String']['input']>;
  phone?: InputMaybe<Scalars['String']['input']>;
  role?: InputMaybe<Scalars['String']['input']>;
};

export type RegisterResponse = {
  __typename?: 'RegisterResponse';
  message?: Maybe<Scalars['String']['output']>;
  status?: Maybe<Scalars['String']['output']>;
};

export type Request = {
  __typename?: 'Request';
  comment?: Maybe<Scalars['String']['output']>;
  name: Scalars['String']['output'];
  phone?: Maybe<Scalars['String']['output']>;
};

export type RequestCreateInput = {
  comment?: InputMaybe<Scalars['String']['input']>;
  name: Scalars['String']['input'];
  phone?: InputMaybe<Scalars['String']['input']>;
  product_id?: InputMaybe<Scalars['Int']['input']>;
};

export type RequestItem = {
  __typename?: 'RequestItem';
  data?: Maybe<Request>;
};

export type RequestPasswordResetInput = {
  email?: InputMaybe<Scalars['String']['input']>;
};

export type RequestPasswordResetResponse = {
  __typename?: 'RequestPasswordResetResponse';
  email?: Maybe<Scalars['String']['output']>;
  message?: Maybe<Scalars['String']['output']>;
  status?: Maybe<Scalars['String']['output']>;
};

export type ResetPasswordInput = {
  email?: InputMaybe<Scalars['String']['input']>;
  password?: InputMaybe<Scalars['String']['input']>;
  password_confirmation?: InputMaybe<Scalars['String']['input']>;
};

export type SecondProductCategories = {
  __typename?: 'SecondProductCategories';
  image?: Maybe<Image>;
  lastChildren?: Maybe<Array<Maybe<ProductCategories>>>;
  name: Scalars['String']['output'];
  products?: Maybe<Array<Maybe<Products>>>;
  show_in_footer: Scalars['Boolean']['output'];
  show_in_header: Scalars['Boolean']['output'];
  slug?: Maybe<Scalars['String']['output']>;
  status: Scalars['Boolean']['output'];
};

export type Settings = {
  __typename?: 'Settings';
  banners?: Maybe<Array<Maybe<MainBanners>>>;
  contacts?: Maybe<Array<Maybe<Contacts>>>;
  footer?: Maybe<Array<Maybe<Footer>>>;
  order?: Maybe<Order>;
  productCategories?: Maybe<Array<Maybe<ProductCategories>>>;
  profile?: Maybe<Array<Maybe<Business>>>;
  sideBar?: Maybe<Array<Maybe<SideBar>>>;
  textInSite?: Maybe<Array<Maybe<TextInSite>>>;
};

export type Settlement = {
  __typename?: 'Settlement';
  children?: Maybe<Array<Maybe<NewsCategory>>>;
  created_at: Scalars['DateTime']['output'];
  id: Scalars['ID']['output'];
  name: Scalars['String']['output'];
  order: Scalars['Int']['output'];
  parent_id?: Maybe<Scalars['Int']['output']>;
  slug?: Maybe<Scalars['String']['output']>;
  updated_at: Scalars['DateTime']['output'];
};

export type SideBar = {
  __typename?: 'SideBar';
  pages?: Maybe<Array<Maybe<Page>>>;
  title: Scalars['String']['output'];
};

export type Slider = {
  __typename?: 'Slider';
  name: Scalars['String']['output'];
  products?: Maybe<Array<Maybe<Products>>>;
};

/** Directions for ordering a list of records. */
export enum SortOrder {
  /** Sort records in ascending order. */
  Asc = 'ASC',
  /** Sort records in descending order. */
  Desc = 'DESC'
}

export type StatusResponse = {
  __typename?: 'StatusResponse';
  message?: Maybe<Scalars['String']['output']>;
  status?: Maybe<Scalars['String']['output']>;
};

export type Tag = {
  __typename?: 'Tag';
  id: Scalars['ID']['output'];
  name: Scalars['String']['output'];
  slug: Scalars['String']['output'];
  type?: Maybe<Scalars['String']['output']>;
};

export type TextInSite = {
  __typename?: 'TextInSite';
  id: Scalars['ID']['output'];
  key?: Maybe<Scalars['String']['output']>;
  pure_text: Scalars['String']['output'];
};

/** Specify if you want to include or exclude trashed results from a query. */
export enum Trashed {
  /** Only return trashed results. */
  Only = 'ONLY',
  /** Return both trashed and non-trashed results. */
  With = 'WITH',
  /** Only return non-trashed results. */
  Without = 'WITHOUT'
}

export type User = {
  __typename?: 'User';
  created_at: Scalars['DateTime']['output'];
  email: Scalars['String']['output'];
  email_verified_at?: Maybe<Scalars['DateTime']['output']>;
  first_name: Scalars['String']['output'];
  id: Scalars['ID']['output'];
  last_name: Scalars['String']['output'];
  updated_at: Scalars['DateTime']['output'];
};

export type Values = {
  __typename?: 'Values';
  products_count?: Maybe<Scalars['Int']['output']>;
  value?: Maybe<Scalars['String']['output']>;
};

export type WorkSchedule = {
  __typename?: 'WorkSchedule';
  fields?: Maybe<Array<Maybe<WorkScheduleField>>>;
  type: Scalars['String']['output'];
};

export type WorkScheduleField = {
  __typename?: 'WorkScheduleField';
  day: Scalars['String']['output'];
  from: Scalars['String']['output'];
  to: Scalars['String']['output'];
};

export type CharacteristicValues = {
  __typename?: 'characteristicValues';
  characteristics?: Maybe<Array<Maybe<Characteristics>>>;
  slug?: Maybe<Scalars['String']['output']>;
  value?: Maybe<Scalars['String']['output']>;
};

export type CreateGetQuoteMutationVariables = Exact<{
  input?: InputMaybe<CreateGetQuoteInput>;
}>;


export type CreateGetQuoteMutation = { __typename?: 'Mutation', createGetQuote?: { __typename?: 'GetQuote', cargo_details?: string | null, email?: string | null, name?: string | null, phone?: string | null, shipping_to?: string | null, shipping_from?: string | null } | null };

export type OrderCreateMutationVariables = Exact<{
  input?: InputMaybe<RequestCreateInput>;
}>;


export type OrderCreateMutation = { __typename?: 'Mutation', requestCreate?: { __typename?: 'RequestItem', data?: { __typename?: 'Request', name: string, phone?: string | null, comment?: string | null } | null } | null };

export type PageQueryVariables = Exact<{
  slug?: InputMaybe<Scalars['String']['input']>;
}>;


export type PageQuery = { __typename?: 'Query', page?: { __typename?: 'PageItem', data?: { __typename?: 'Page', slug: string, pure_title: string, pure_meta_title?: string | null, pure_meta_description?: string | null, pure_meta_keywords?: string | null, blocks: Array<{ __typename?: 'Block', content?: string | null, slug: string, order?: boolean | null, name: string, id: string, text_position?: string | null, backgroundColor?: { __typename?: 'Color', color: string, id: string, name: string } | null, textColor?: { __typename?: 'Color', color: string, id: string, name: string } | null, galleries: Array<{ __typename?: 'Gallery', id: string, name: string, slug?: string | null, type?: string | null, slider?: Array<{ __typename?: 'Images', images?: Array<{ __typename?: 'Image', original?: string | null } | null> | null } | null> | null, gallery?: Array<{ __typename?: 'Image', original?: string | null } | null> | null }> }> } | null, meta?: { __typename?: 'Meta', meta_description?: string | null, meta_keywords?: string | null, meta_title?: string | null } | null } | null, settings?: { __typename?: 'Settings', textInSite?: Array<{ __typename?: 'TextInSite', id: string, key?: string | null, pure_text: string } | null> | null, contacts?: Array<{ __typename?: 'Contacts', key: string, value: string } | null> | null, banners?: Array<{ __typename?: 'MainBanners', link?: string | null, image?: { __typename?: 'Image', original?: string | null } | null } | null> | null } | null };

export type RegisterMutationVariables = Exact<{
  input: RegisterInput;
}>;


export type RegisterMutation = { __typename?: 'Mutation', register?: { __typename?: 'RegisterResponse', message?: string | null } | null };

export type SettingsQueryVariables = Exact<{ [key: string]: never; }>;


export type SettingsQuery = { __typename?: 'Query', settings?: { __typename?: 'Settings', sideBar?: Array<{ __typename?: 'SideBar', title: string, pages?: Array<{ __typename?: 'Page', slug: string, pure_title: string } | null> | null } | null> | null, footer?: Array<{ __typename?: 'Footer', title: string, pages?: Array<{ __typename?: 'Page', slug: string, pure_title: string } | null> | null } | null> | null, textInSite?: Array<{ __typename?: 'TextInSite', id: string, key?: string | null, pure_text: string } | null> | null, contacts?: Array<{ __typename?: 'Contacts', key: string, value: string } | null> | null, banners?: Array<{ __typename?: 'MainBanners', link?: string | null, image?: { __typename?: 'Image', original?: string | null } | null } | null> | null } | null };


export const CreateGetQuoteDocument = gql`
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
    `;
export type CreateGetQuoteMutationFn = Apollo.MutationFunction<CreateGetQuoteMutation, CreateGetQuoteMutationVariables>;

/**
 * __useCreateGetQuoteMutation__
 *
 * To run a mutation, you first call `useCreateGetQuoteMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateGetQuoteMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createGetQuoteMutation, { data, loading, error }] = useCreateGetQuoteMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useCreateGetQuoteMutation(baseOptions?: Apollo.MutationHookOptions<CreateGetQuoteMutation, CreateGetQuoteMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<CreateGetQuoteMutation, CreateGetQuoteMutationVariables>(CreateGetQuoteDocument, options);
      }
export type CreateGetQuoteMutationHookResult = ReturnType<typeof useCreateGetQuoteMutation>;
export type CreateGetQuoteMutationResult = Apollo.MutationResult<CreateGetQuoteMutation>;
export type CreateGetQuoteMutationOptions = Apollo.BaseMutationOptions<CreateGetQuoteMutation, CreateGetQuoteMutationVariables>;
export const OrderCreateDocument = gql`
    mutation OrderCreate($input: RequestCreateInput) {
  requestCreate(input: $input) {
    data {
      name
      phone
      comment
    }
  }
}
    `;
export type OrderCreateMutationFn = Apollo.MutationFunction<OrderCreateMutation, OrderCreateMutationVariables>;

/**
 * __useOrderCreateMutation__
 *
 * To run a mutation, you first call `useOrderCreateMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useOrderCreateMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [orderCreateMutation, { data, loading, error }] = useOrderCreateMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useOrderCreateMutation(baseOptions?: Apollo.MutationHookOptions<OrderCreateMutation, OrderCreateMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<OrderCreateMutation, OrderCreateMutationVariables>(OrderCreateDocument, options);
      }
export type OrderCreateMutationHookResult = ReturnType<typeof useOrderCreateMutation>;
export type OrderCreateMutationResult = Apollo.MutationResult<OrderCreateMutation>;
export type OrderCreateMutationOptions = Apollo.BaseMutationOptions<OrderCreateMutation, OrderCreateMutationVariables>;
export const PageDocument = gql`
    query Page($slug: String) {
  page(input: {slug: $slug}) {
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
    `;

/**
 * __usePageQuery__
 *
 * To run a query within a React component, call `usePageQuery` and pass it any options that fit your needs.
 * When your component renders, `usePageQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = usePageQuery({
 *   variables: {
 *      slug: // value for 'slug'
 *   },
 * });
 */
export function usePageQuery(baseOptions?: Apollo.QueryHookOptions<PageQuery, PageQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<PageQuery, PageQueryVariables>(PageDocument, options);
      }
export function usePageLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<PageQuery, PageQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<PageQuery, PageQueryVariables>(PageDocument, options);
        }
export function usePageSuspenseQuery(baseOptions?: Apollo.SuspenseQueryHookOptions<PageQuery, PageQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<PageQuery, PageQueryVariables>(PageDocument, options);
        }
export type PageQueryHookResult = ReturnType<typeof usePageQuery>;
export type PageLazyQueryHookResult = ReturnType<typeof usePageLazyQuery>;
export type PageSuspenseQueryHookResult = ReturnType<typeof usePageSuspenseQuery>;
export type PageQueryResult = Apollo.QueryResult<PageQuery, PageQueryVariables>;
export const RegisterDocument = gql`
    mutation Register($input: RegisterInput!) {
  register(input: $input) {
    message
  }
}
    `;
export type RegisterMutationFn = Apollo.MutationFunction<RegisterMutation, RegisterMutationVariables>;

/**
 * __useRegisterMutation__
 *
 * To run a mutation, you first call `useRegisterMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useRegisterMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [registerMutation, { data, loading, error }] = useRegisterMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useRegisterMutation(baseOptions?: Apollo.MutationHookOptions<RegisterMutation, RegisterMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<RegisterMutation, RegisterMutationVariables>(RegisterDocument, options);
      }
export type RegisterMutationHookResult = ReturnType<typeof useRegisterMutation>;
export type RegisterMutationResult = Apollo.MutationResult<RegisterMutation>;
export type RegisterMutationOptions = Apollo.BaseMutationOptions<RegisterMutation, RegisterMutationVariables>;
export const SettingsDocument = gql`
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
    `;

/**
 * __useSettingsQuery__
 *
 * To run a query within a React component, call `useSettingsQuery` and pass it any options that fit your needs.
 * When your component renders, `useSettingsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useSettingsQuery({
 *   variables: {
 *   },
 * });
 */
export function useSettingsQuery(baseOptions?: Apollo.QueryHookOptions<SettingsQuery, SettingsQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<SettingsQuery, SettingsQueryVariables>(SettingsDocument, options);
      }
export function useSettingsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<SettingsQuery, SettingsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<SettingsQuery, SettingsQueryVariables>(SettingsDocument, options);
        }
export function useSettingsSuspenseQuery(baseOptions?: Apollo.SuspenseQueryHookOptions<SettingsQuery, SettingsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<SettingsQuery, SettingsQueryVariables>(SettingsDocument, options);
        }
export type SettingsQueryHookResult = ReturnType<typeof useSettingsQuery>;
export type SettingsLazyQueryHookResult = ReturnType<typeof useSettingsLazyQuery>;
export type SettingsSuspenseQueryHookResult = ReturnType<typeof useSettingsSuspenseQuery>;
export type SettingsQueryResult = Apollo.QueryResult<SettingsQuery, SettingsQueryVariables>;