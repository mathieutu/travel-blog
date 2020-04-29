/* File automatically generated from gatsby-plugin-graphql-codegen */
/* eslint-disable */
export type Maybe<T> = T;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  /**
   * A date string, such as 2007-12-03, compliant with the ISO 8601 standard for
   * representation of dates and times using the Gregorian calendar.
   */
  Date: any;
  /** The `JSON` scalar type represents JSON values as specified by [ECMA-404](http://www.ecma-international.org/publications/files/ECMA-ST/ECMA-404.pdf). */
  JSON: any;
};











export type GraphqlBooleanQueryOperatorInput = {
  readonly eq?: Maybe<Scalars['Boolean']>;
  readonly ne?: Maybe<Scalars['Boolean']>;
  readonly in?: Maybe<ReadonlyArray<Maybe<Scalars['Boolean']>>>;
  readonly nin?: Maybe<ReadonlyArray<Maybe<Scalars['Boolean']>>>;
};

export type GraphqlContentfulArticles = GraphqlNode & {
  readonly id: Scalars['ID'];
  readonly parent?: Maybe<GraphqlNode>;
  readonly children: ReadonlyArray<GraphqlNode>;
  readonly internal: GraphqlInternal;
  readonly step?: Maybe<Scalars['String']>;
  readonly title?: Maybe<Scalars['String']>;
  readonly pictures?: Maybe<ReadonlyArray<Maybe<GraphqlContentfulAsset>>>;
  readonly text?: Maybe<GraphqlContentfulArticlesTextTextNode>;
  readonly spaceId?: Maybe<Scalars['String']>;
  readonly contentful_id?: Maybe<Scalars['String']>;
  readonly createdAt?: Maybe<Scalars['Date']>;
  readonly updatedAt?: Maybe<Scalars['Date']>;
  readonly sys?: Maybe<GraphqlContentfulArticlesSys>;
  readonly node_locale?: Maybe<Scalars['String']>;
  readonly childContentfulArticlesTextTextNode?: Maybe<GraphqlContentfulArticlesTextTextNode>;
};


export type GraphqlContentfulArticlesCreatedAtArgs = {
  formatString: Maybe<Scalars['String']>;
  fromNow: Maybe<Scalars['Boolean']>;
  difference: Maybe<Scalars['String']>;
  locale: Maybe<Scalars['String']>;
};


export type GraphqlContentfulArticlesUpdatedAtArgs = {
  formatString: Maybe<Scalars['String']>;
  fromNow: Maybe<Scalars['Boolean']>;
  difference: Maybe<Scalars['String']>;
  locale: Maybe<Scalars['String']>;
};

export type GraphqlContentfulArticlesConnection = {
  readonly totalCount: Scalars['Int'];
  readonly edges: ReadonlyArray<GraphqlContentfulArticlesEdge>;
  readonly nodes: ReadonlyArray<GraphqlContentfulArticles>;
  readonly pageInfo: GraphqlPageInfo;
  readonly distinct: ReadonlyArray<Scalars['String']>;
  readonly group: ReadonlyArray<GraphqlContentfulArticlesGroupConnection>;
};


export type GraphqlContentfulArticlesConnectionDistinctArgs = {
  field: GraphqlContentfulArticlesFieldsEnum;
};


export type GraphqlContentfulArticlesConnectionGroupArgs = {
  skip: Maybe<Scalars['Int']>;
  limit: Maybe<Scalars['Int']>;
  field: GraphqlContentfulArticlesFieldsEnum;
};

export type GraphqlContentfulArticlesEdge = {
  readonly next?: Maybe<GraphqlContentfulArticles>;
  readonly node: GraphqlContentfulArticles;
  readonly previous?: Maybe<GraphqlContentfulArticles>;
};

export type GraphqlContentfulArticlesFieldsEnum = 
  'id' |
  'parent___id' |
  'parent___parent___id' |
  'parent___parent___parent___id' |
  'parent___parent___parent___children' |
  'parent___parent___children' |
  'parent___parent___children___id' |
  'parent___parent___children___children' |
  'parent___parent___internal___content' |
  'parent___parent___internal___contentDigest' |
  'parent___parent___internal___description' |
  'parent___parent___internal___fieldOwners' |
  'parent___parent___internal___ignoreType' |
  'parent___parent___internal___mediaType' |
  'parent___parent___internal___owner' |
  'parent___parent___internal___type' |
  'parent___children' |
  'parent___children___id' |
  'parent___children___parent___id' |
  'parent___children___parent___children' |
  'parent___children___children' |
  'parent___children___children___id' |
  'parent___children___children___children' |
  'parent___children___internal___content' |
  'parent___children___internal___contentDigest' |
  'parent___children___internal___description' |
  'parent___children___internal___fieldOwners' |
  'parent___children___internal___ignoreType' |
  'parent___children___internal___mediaType' |
  'parent___children___internal___owner' |
  'parent___children___internal___type' |
  'parent___internal___content' |
  'parent___internal___contentDigest' |
  'parent___internal___description' |
  'parent___internal___fieldOwners' |
  'parent___internal___ignoreType' |
  'parent___internal___mediaType' |
  'parent___internal___owner' |
  'parent___internal___type' |
  'children' |
  'children___id' |
  'children___parent___id' |
  'children___parent___parent___id' |
  'children___parent___parent___children' |
  'children___parent___children' |
  'children___parent___children___id' |
  'children___parent___children___children' |
  'children___parent___internal___content' |
  'children___parent___internal___contentDigest' |
  'children___parent___internal___description' |
  'children___parent___internal___fieldOwners' |
  'children___parent___internal___ignoreType' |
  'children___parent___internal___mediaType' |
  'children___parent___internal___owner' |
  'children___parent___internal___type' |
  'children___children' |
  'children___children___id' |
  'children___children___parent___id' |
  'children___children___parent___children' |
  'children___children___children' |
  'children___children___children___id' |
  'children___children___children___children' |
  'children___children___internal___content' |
  'children___children___internal___contentDigest' |
  'children___children___internal___description' |
  'children___children___internal___fieldOwners' |
  'children___children___internal___ignoreType' |
  'children___children___internal___mediaType' |
  'children___children___internal___owner' |
  'children___children___internal___type' |
  'children___internal___content' |
  'children___internal___contentDigest' |
  'children___internal___description' |
  'children___internal___fieldOwners' |
  'children___internal___ignoreType' |
  'children___internal___mediaType' |
  'children___internal___owner' |
  'children___internal___type' |
  'internal___content' |
  'internal___contentDigest' |
  'internal___description' |
  'internal___fieldOwners' |
  'internal___ignoreType' |
  'internal___mediaType' |
  'internal___owner' |
  'internal___type' |
  'step' |
  'title' |
  'pictures' |
  'pictures___id' |
  'pictures___parent___id' |
  'pictures___parent___parent___id' |
  'pictures___parent___parent___children' |
  'pictures___parent___children' |
  'pictures___parent___children___id' |
  'pictures___parent___children___children' |
  'pictures___parent___internal___content' |
  'pictures___parent___internal___contentDigest' |
  'pictures___parent___internal___description' |
  'pictures___parent___internal___fieldOwners' |
  'pictures___parent___internal___ignoreType' |
  'pictures___parent___internal___mediaType' |
  'pictures___parent___internal___owner' |
  'pictures___parent___internal___type' |
  'pictures___children' |
  'pictures___children___id' |
  'pictures___children___parent___id' |
  'pictures___children___parent___children' |
  'pictures___children___children' |
  'pictures___children___children___id' |
  'pictures___children___children___children' |
  'pictures___children___internal___content' |
  'pictures___children___internal___contentDigest' |
  'pictures___children___internal___description' |
  'pictures___children___internal___fieldOwners' |
  'pictures___children___internal___ignoreType' |
  'pictures___children___internal___mediaType' |
  'pictures___children___internal___owner' |
  'pictures___children___internal___type' |
  'pictures___internal___content' |
  'pictures___internal___contentDigest' |
  'pictures___internal___description' |
  'pictures___internal___fieldOwners' |
  'pictures___internal___ignoreType' |
  'pictures___internal___mediaType' |
  'pictures___internal___owner' |
  'pictures___internal___type' |
  'pictures___contentful_id' |
  'pictures___file___url' |
  'pictures___file___details___size' |
  'pictures___file___fileName' |
  'pictures___file___contentType' |
  'pictures___title' |
  'pictures___description' |
  'pictures___node_locale' |
  'pictures___fixed___base64' |
  'pictures___fixed___tracedSVG' |
  'pictures___fixed___aspectRatio' |
  'pictures___fixed___width' |
  'pictures___fixed___height' |
  'pictures___fixed___src' |
  'pictures___fixed___srcSet' |
  'pictures___fixed___srcWebp' |
  'pictures___fixed___srcSetWebp' |
  'pictures___resolutions___base64' |
  'pictures___resolutions___tracedSVG' |
  'pictures___resolutions___aspectRatio' |
  'pictures___resolutions___width' |
  'pictures___resolutions___height' |
  'pictures___resolutions___src' |
  'pictures___resolutions___srcSet' |
  'pictures___resolutions___srcWebp' |
  'pictures___resolutions___srcSetWebp' |
  'pictures___fluid___base64' |
  'pictures___fluid___tracedSVG' |
  'pictures___fluid___aspectRatio' |
  'pictures___fluid___src' |
  'pictures___fluid___srcSet' |
  'pictures___fluid___srcWebp' |
  'pictures___fluid___srcSetWebp' |
  'pictures___fluid___sizes' |
  'pictures___sizes___base64' |
  'pictures___sizes___tracedSVG' |
  'pictures___sizes___aspectRatio' |
  'pictures___sizes___src' |
  'pictures___sizes___srcSet' |
  'pictures___sizes___srcWebp' |
  'pictures___sizes___srcSetWebp' |
  'pictures___sizes___sizes' |
  'pictures___resize___base64' |
  'pictures___resize___tracedSVG' |
  'pictures___resize___src' |
  'pictures___resize___width' |
  'pictures___resize___height' |
  'pictures___resize___aspectRatio' |
  'text___id' |
  'text___parent___id' |
  'text___parent___parent___id' |
  'text___parent___parent___children' |
  'text___parent___children' |
  'text___parent___children___id' |
  'text___parent___children___children' |
  'text___parent___internal___content' |
  'text___parent___internal___contentDigest' |
  'text___parent___internal___description' |
  'text___parent___internal___fieldOwners' |
  'text___parent___internal___ignoreType' |
  'text___parent___internal___mediaType' |
  'text___parent___internal___owner' |
  'text___parent___internal___type' |
  'text___children' |
  'text___children___id' |
  'text___children___parent___id' |
  'text___children___parent___children' |
  'text___children___children' |
  'text___children___children___id' |
  'text___children___children___children' |
  'text___children___internal___content' |
  'text___children___internal___contentDigest' |
  'text___children___internal___description' |
  'text___children___internal___fieldOwners' |
  'text___children___internal___ignoreType' |
  'text___children___internal___mediaType' |
  'text___children___internal___owner' |
  'text___children___internal___type' |
  'text___internal___content' |
  'text___internal___contentDigest' |
  'text___internal___description' |
  'text___internal___fieldOwners' |
  'text___internal___ignoreType' |
  'text___internal___mediaType' |
  'text___internal___owner' |
  'text___internal___type' |
  'text___text' |
  'spaceId' |
  'contentful_id' |
  'createdAt' |
  'updatedAt' |
  'sys___revision' |
  'sys___contentType___sys___type' |
  'sys___contentType___sys___linkType' |
  'sys___contentType___sys___id' |
  'sys___contentType___sys___contentful_id' |
  'node_locale' |
  'childContentfulArticlesTextTextNode___id' |
  'childContentfulArticlesTextTextNode___parent___id' |
  'childContentfulArticlesTextTextNode___parent___parent___id' |
  'childContentfulArticlesTextTextNode___parent___parent___children' |
  'childContentfulArticlesTextTextNode___parent___children' |
  'childContentfulArticlesTextTextNode___parent___children___id' |
  'childContentfulArticlesTextTextNode___parent___children___children' |
  'childContentfulArticlesTextTextNode___parent___internal___content' |
  'childContentfulArticlesTextTextNode___parent___internal___contentDigest' |
  'childContentfulArticlesTextTextNode___parent___internal___description' |
  'childContentfulArticlesTextTextNode___parent___internal___fieldOwners' |
  'childContentfulArticlesTextTextNode___parent___internal___ignoreType' |
  'childContentfulArticlesTextTextNode___parent___internal___mediaType' |
  'childContentfulArticlesTextTextNode___parent___internal___owner' |
  'childContentfulArticlesTextTextNode___parent___internal___type' |
  'childContentfulArticlesTextTextNode___children' |
  'childContentfulArticlesTextTextNode___children___id' |
  'childContentfulArticlesTextTextNode___children___parent___id' |
  'childContentfulArticlesTextTextNode___children___parent___children' |
  'childContentfulArticlesTextTextNode___children___children' |
  'childContentfulArticlesTextTextNode___children___children___id' |
  'childContentfulArticlesTextTextNode___children___children___children' |
  'childContentfulArticlesTextTextNode___children___internal___content' |
  'childContentfulArticlesTextTextNode___children___internal___contentDigest' |
  'childContentfulArticlesTextTextNode___children___internal___description' |
  'childContentfulArticlesTextTextNode___children___internal___fieldOwners' |
  'childContentfulArticlesTextTextNode___children___internal___ignoreType' |
  'childContentfulArticlesTextTextNode___children___internal___mediaType' |
  'childContentfulArticlesTextTextNode___children___internal___owner' |
  'childContentfulArticlesTextTextNode___children___internal___type' |
  'childContentfulArticlesTextTextNode___internal___content' |
  'childContentfulArticlesTextTextNode___internal___contentDigest' |
  'childContentfulArticlesTextTextNode___internal___description' |
  'childContentfulArticlesTextTextNode___internal___fieldOwners' |
  'childContentfulArticlesTextTextNode___internal___ignoreType' |
  'childContentfulArticlesTextTextNode___internal___mediaType' |
  'childContentfulArticlesTextTextNode___internal___owner' |
  'childContentfulArticlesTextTextNode___internal___type' |
  'childContentfulArticlesTextTextNode___text';

export type GraphqlContentfulArticlesFilterInput = {
  readonly id?: Maybe<GraphqlStringQueryOperatorInput>;
  readonly parent?: Maybe<GraphqlNodeFilterInput>;
  readonly children?: Maybe<GraphqlNodeFilterListInput>;
  readonly internal?: Maybe<GraphqlInternalFilterInput>;
  readonly step?: Maybe<GraphqlStringQueryOperatorInput>;
  readonly title?: Maybe<GraphqlStringQueryOperatorInput>;
  readonly pictures?: Maybe<GraphqlContentfulAssetFilterListInput>;
  readonly text?: Maybe<GraphqlContentfulArticlesTextTextNodeFilterInput>;
  readonly spaceId?: Maybe<GraphqlStringQueryOperatorInput>;
  readonly contentful_id?: Maybe<GraphqlStringQueryOperatorInput>;
  readonly createdAt?: Maybe<GraphqlDateQueryOperatorInput>;
  readonly updatedAt?: Maybe<GraphqlDateQueryOperatorInput>;
  readonly sys?: Maybe<GraphqlContentfulArticlesSysFilterInput>;
  readonly node_locale?: Maybe<GraphqlStringQueryOperatorInput>;
  readonly childContentfulArticlesTextTextNode?: Maybe<GraphqlContentfulArticlesTextTextNodeFilterInput>;
};

export type GraphqlContentfulArticlesGroupConnection = {
  readonly totalCount: Scalars['Int'];
  readonly edges: ReadonlyArray<GraphqlContentfulArticlesEdge>;
  readonly nodes: ReadonlyArray<GraphqlContentfulArticles>;
  readonly pageInfo: GraphqlPageInfo;
  readonly field: Scalars['String'];
  readonly fieldValue?: Maybe<Scalars['String']>;
};

export type GraphqlContentfulArticlesSortInput = {
  readonly fields?: Maybe<ReadonlyArray<Maybe<GraphqlContentfulArticlesFieldsEnum>>>;
  readonly order?: Maybe<ReadonlyArray<Maybe<GraphqlSortOrderEnum>>>;
};

export type GraphqlContentfulArticlesSys = {
  readonly revision?: Maybe<Scalars['Int']>;
  readonly contentType?: Maybe<GraphqlContentfulArticlesSysContentType>;
};

export type GraphqlContentfulArticlesSysContentType = {
  readonly sys?: Maybe<GraphqlContentfulArticlesSysContentTypeSys>;
};

export type GraphqlContentfulArticlesSysContentTypeFilterInput = {
  readonly sys?: Maybe<GraphqlContentfulArticlesSysContentTypeSysFilterInput>;
};

export type GraphqlContentfulArticlesSysContentTypeSys = {
  readonly type?: Maybe<Scalars['String']>;
  readonly linkType?: Maybe<Scalars['String']>;
  readonly id?: Maybe<Scalars['String']>;
  readonly contentful_id?: Maybe<Scalars['String']>;
};

export type GraphqlContentfulArticlesSysContentTypeSysFilterInput = {
  readonly type?: Maybe<GraphqlStringQueryOperatorInput>;
  readonly linkType?: Maybe<GraphqlStringQueryOperatorInput>;
  readonly id?: Maybe<GraphqlStringQueryOperatorInput>;
  readonly contentful_id?: Maybe<GraphqlStringQueryOperatorInput>;
};

export type GraphqlContentfulArticlesSysFilterInput = {
  readonly revision?: Maybe<GraphqlIntQueryOperatorInput>;
  readonly contentType?: Maybe<GraphqlContentfulArticlesSysContentTypeFilterInput>;
};

export type GraphqlContentfulArticlesTextTextNode = GraphqlNode & {
  readonly id: Scalars['ID'];
  readonly parent?: Maybe<GraphqlNode>;
  readonly children: ReadonlyArray<GraphqlNode>;
  readonly internal: GraphqlInternal;
  readonly text?: Maybe<Scalars['String']>;
};

export type GraphqlContentfulArticlesTextTextNodeConnection = {
  readonly totalCount: Scalars['Int'];
  readonly edges: ReadonlyArray<GraphqlContentfulArticlesTextTextNodeEdge>;
  readonly nodes: ReadonlyArray<GraphqlContentfulArticlesTextTextNode>;
  readonly pageInfo: GraphqlPageInfo;
  readonly distinct: ReadonlyArray<Scalars['String']>;
  readonly group: ReadonlyArray<GraphqlContentfulArticlesTextTextNodeGroupConnection>;
};


export type GraphqlContentfulArticlesTextTextNodeConnectionDistinctArgs = {
  field: GraphqlContentfulArticlesTextTextNodeFieldsEnum;
};


export type GraphqlContentfulArticlesTextTextNodeConnectionGroupArgs = {
  skip: Maybe<Scalars['Int']>;
  limit: Maybe<Scalars['Int']>;
  field: GraphqlContentfulArticlesTextTextNodeFieldsEnum;
};

export type GraphqlContentfulArticlesTextTextNodeEdge = {
  readonly next?: Maybe<GraphqlContentfulArticlesTextTextNode>;
  readonly node: GraphqlContentfulArticlesTextTextNode;
  readonly previous?: Maybe<GraphqlContentfulArticlesTextTextNode>;
};

export type GraphqlContentfulArticlesTextTextNodeFieldsEnum = 
  'id' |
  'parent___id' |
  'parent___parent___id' |
  'parent___parent___parent___id' |
  'parent___parent___parent___children' |
  'parent___parent___children' |
  'parent___parent___children___id' |
  'parent___parent___children___children' |
  'parent___parent___internal___content' |
  'parent___parent___internal___contentDigest' |
  'parent___parent___internal___description' |
  'parent___parent___internal___fieldOwners' |
  'parent___parent___internal___ignoreType' |
  'parent___parent___internal___mediaType' |
  'parent___parent___internal___owner' |
  'parent___parent___internal___type' |
  'parent___children' |
  'parent___children___id' |
  'parent___children___parent___id' |
  'parent___children___parent___children' |
  'parent___children___children' |
  'parent___children___children___id' |
  'parent___children___children___children' |
  'parent___children___internal___content' |
  'parent___children___internal___contentDigest' |
  'parent___children___internal___description' |
  'parent___children___internal___fieldOwners' |
  'parent___children___internal___ignoreType' |
  'parent___children___internal___mediaType' |
  'parent___children___internal___owner' |
  'parent___children___internal___type' |
  'parent___internal___content' |
  'parent___internal___contentDigest' |
  'parent___internal___description' |
  'parent___internal___fieldOwners' |
  'parent___internal___ignoreType' |
  'parent___internal___mediaType' |
  'parent___internal___owner' |
  'parent___internal___type' |
  'children' |
  'children___id' |
  'children___parent___id' |
  'children___parent___parent___id' |
  'children___parent___parent___children' |
  'children___parent___children' |
  'children___parent___children___id' |
  'children___parent___children___children' |
  'children___parent___internal___content' |
  'children___parent___internal___contentDigest' |
  'children___parent___internal___description' |
  'children___parent___internal___fieldOwners' |
  'children___parent___internal___ignoreType' |
  'children___parent___internal___mediaType' |
  'children___parent___internal___owner' |
  'children___parent___internal___type' |
  'children___children' |
  'children___children___id' |
  'children___children___parent___id' |
  'children___children___parent___children' |
  'children___children___children' |
  'children___children___children___id' |
  'children___children___children___children' |
  'children___children___internal___content' |
  'children___children___internal___contentDigest' |
  'children___children___internal___description' |
  'children___children___internal___fieldOwners' |
  'children___children___internal___ignoreType' |
  'children___children___internal___mediaType' |
  'children___children___internal___owner' |
  'children___children___internal___type' |
  'children___internal___content' |
  'children___internal___contentDigest' |
  'children___internal___description' |
  'children___internal___fieldOwners' |
  'children___internal___ignoreType' |
  'children___internal___mediaType' |
  'children___internal___owner' |
  'children___internal___type' |
  'internal___content' |
  'internal___contentDigest' |
  'internal___description' |
  'internal___fieldOwners' |
  'internal___ignoreType' |
  'internal___mediaType' |
  'internal___owner' |
  'internal___type' |
  'text';

export type GraphqlContentfulArticlesTextTextNodeFilterInput = {
  readonly id?: Maybe<GraphqlStringQueryOperatorInput>;
  readonly parent?: Maybe<GraphqlNodeFilterInput>;
  readonly children?: Maybe<GraphqlNodeFilterListInput>;
  readonly internal?: Maybe<GraphqlInternalFilterInput>;
  readonly text?: Maybe<GraphqlStringQueryOperatorInput>;
};

export type GraphqlContentfulArticlesTextTextNodeGroupConnection = {
  readonly totalCount: Scalars['Int'];
  readonly edges: ReadonlyArray<GraphqlContentfulArticlesTextTextNodeEdge>;
  readonly nodes: ReadonlyArray<GraphqlContentfulArticlesTextTextNode>;
  readonly pageInfo: GraphqlPageInfo;
  readonly field: Scalars['String'];
  readonly fieldValue?: Maybe<Scalars['String']>;
};

export type GraphqlContentfulArticlesTextTextNodeSortInput = {
  readonly fields?: Maybe<ReadonlyArray<Maybe<GraphqlContentfulArticlesTextTextNodeFieldsEnum>>>;
  readonly order?: Maybe<ReadonlyArray<Maybe<GraphqlSortOrderEnum>>>;
};

export type GraphqlContentfulAsset = GraphqlNode & {
  readonly id: Scalars['ID'];
  readonly parent?: Maybe<GraphqlNode>;
  readonly children: ReadonlyArray<GraphqlNode>;
  readonly internal: GraphqlInternal;
  readonly contentful_id?: Maybe<Scalars['String']>;
  readonly file?: Maybe<GraphqlContentfulAssetFile>;
  readonly title?: Maybe<Scalars['String']>;
  readonly description?: Maybe<Scalars['String']>;
  readonly node_locale?: Maybe<Scalars['String']>;
  readonly fixed?: Maybe<GraphqlContentfulFixed>;
  /** @deprecated Resolutions was deprecated in Gatsby v2. It's been renamed to "fixed" https://example.com/write-docs-and-fix-this-example-link */
  readonly resolutions?: Maybe<GraphqlContentfulResolutions>;
  readonly fluid?: Maybe<GraphqlContentfulFluid>;
  /** @deprecated Sizes was deprecated in Gatsby v2. It's been renamed to "fluid" https://example.com/write-docs-and-fix-this-example-link */
  readonly sizes?: Maybe<GraphqlContentfulSizes>;
  readonly resize?: Maybe<GraphqlContentfulResize>;
};


export type GraphqlContentfulAssetFixedArgs = {
  width: Maybe<Scalars['Int']>;
  height: Maybe<Scalars['Int']>;
  quality?: Maybe<Scalars['Int']>;
  toFormat?: Maybe<GraphqlContentfulImageFormat>;
  resizingBehavior: Maybe<GraphqlImageResizingBehavior>;
  cropFocus?: Maybe<GraphqlContentfulImageCropFocus>;
  background?: Maybe<Scalars['String']>;
};


export type GraphqlContentfulAssetResolutionsArgs = {
  width: Maybe<Scalars['Int']>;
  height: Maybe<Scalars['Int']>;
  quality?: Maybe<Scalars['Int']>;
  toFormat?: Maybe<GraphqlContentfulImageFormat>;
  resizingBehavior: Maybe<GraphqlImageResizingBehavior>;
  cropFocus?: Maybe<GraphqlContentfulImageCropFocus>;
  background?: Maybe<Scalars['String']>;
};


export type GraphqlContentfulAssetFluidArgs = {
  maxWidth: Maybe<Scalars['Int']>;
  maxHeight: Maybe<Scalars['Int']>;
  quality?: Maybe<Scalars['Int']>;
  toFormat?: Maybe<GraphqlContentfulImageFormat>;
  resizingBehavior: Maybe<GraphqlImageResizingBehavior>;
  cropFocus?: Maybe<GraphqlContentfulImageCropFocus>;
  background?: Maybe<Scalars['String']>;
  sizes: Maybe<Scalars['String']>;
};


export type GraphqlContentfulAssetSizesArgs = {
  maxWidth: Maybe<Scalars['Int']>;
  maxHeight: Maybe<Scalars['Int']>;
  quality?: Maybe<Scalars['Int']>;
  toFormat?: Maybe<GraphqlContentfulImageFormat>;
  resizingBehavior: Maybe<GraphqlImageResizingBehavior>;
  cropFocus?: Maybe<GraphqlContentfulImageCropFocus>;
  background?: Maybe<Scalars['String']>;
  sizes: Maybe<Scalars['String']>;
};


export type GraphqlContentfulAssetResizeArgs = {
  width: Maybe<Scalars['Int']>;
  height: Maybe<Scalars['Int']>;
  quality?: Maybe<Scalars['Int']>;
  jpegProgressive?: Maybe<Scalars['Boolean']>;
  resizingBehavior: Maybe<GraphqlImageResizingBehavior>;
  toFormat?: Maybe<GraphqlContentfulImageFormat>;
  cropFocus?: Maybe<GraphqlContentfulImageCropFocus>;
  background?: Maybe<Scalars['String']>;
};

export type GraphqlContentfulAssetConnection = {
  readonly totalCount: Scalars['Int'];
  readonly edges: ReadonlyArray<GraphqlContentfulAssetEdge>;
  readonly nodes: ReadonlyArray<GraphqlContentfulAsset>;
  readonly pageInfo: GraphqlPageInfo;
  readonly distinct: ReadonlyArray<Scalars['String']>;
  readonly group: ReadonlyArray<GraphqlContentfulAssetGroupConnection>;
};


export type GraphqlContentfulAssetConnectionDistinctArgs = {
  field: GraphqlContentfulAssetFieldsEnum;
};


export type GraphqlContentfulAssetConnectionGroupArgs = {
  skip: Maybe<Scalars['Int']>;
  limit: Maybe<Scalars['Int']>;
  field: GraphqlContentfulAssetFieldsEnum;
};

export type GraphqlContentfulAssetEdge = {
  readonly next?: Maybe<GraphqlContentfulAsset>;
  readonly node: GraphqlContentfulAsset;
  readonly previous?: Maybe<GraphqlContentfulAsset>;
};

export type GraphqlContentfulAssetFieldsEnum = 
  'id' |
  'parent___id' |
  'parent___parent___id' |
  'parent___parent___parent___id' |
  'parent___parent___parent___children' |
  'parent___parent___children' |
  'parent___parent___children___id' |
  'parent___parent___children___children' |
  'parent___parent___internal___content' |
  'parent___parent___internal___contentDigest' |
  'parent___parent___internal___description' |
  'parent___parent___internal___fieldOwners' |
  'parent___parent___internal___ignoreType' |
  'parent___parent___internal___mediaType' |
  'parent___parent___internal___owner' |
  'parent___parent___internal___type' |
  'parent___children' |
  'parent___children___id' |
  'parent___children___parent___id' |
  'parent___children___parent___children' |
  'parent___children___children' |
  'parent___children___children___id' |
  'parent___children___children___children' |
  'parent___children___internal___content' |
  'parent___children___internal___contentDigest' |
  'parent___children___internal___description' |
  'parent___children___internal___fieldOwners' |
  'parent___children___internal___ignoreType' |
  'parent___children___internal___mediaType' |
  'parent___children___internal___owner' |
  'parent___children___internal___type' |
  'parent___internal___content' |
  'parent___internal___contentDigest' |
  'parent___internal___description' |
  'parent___internal___fieldOwners' |
  'parent___internal___ignoreType' |
  'parent___internal___mediaType' |
  'parent___internal___owner' |
  'parent___internal___type' |
  'children' |
  'children___id' |
  'children___parent___id' |
  'children___parent___parent___id' |
  'children___parent___parent___children' |
  'children___parent___children' |
  'children___parent___children___id' |
  'children___parent___children___children' |
  'children___parent___internal___content' |
  'children___parent___internal___contentDigest' |
  'children___parent___internal___description' |
  'children___parent___internal___fieldOwners' |
  'children___parent___internal___ignoreType' |
  'children___parent___internal___mediaType' |
  'children___parent___internal___owner' |
  'children___parent___internal___type' |
  'children___children' |
  'children___children___id' |
  'children___children___parent___id' |
  'children___children___parent___children' |
  'children___children___children' |
  'children___children___children___id' |
  'children___children___children___children' |
  'children___children___internal___content' |
  'children___children___internal___contentDigest' |
  'children___children___internal___description' |
  'children___children___internal___fieldOwners' |
  'children___children___internal___ignoreType' |
  'children___children___internal___mediaType' |
  'children___children___internal___owner' |
  'children___children___internal___type' |
  'children___internal___content' |
  'children___internal___contentDigest' |
  'children___internal___description' |
  'children___internal___fieldOwners' |
  'children___internal___ignoreType' |
  'children___internal___mediaType' |
  'children___internal___owner' |
  'children___internal___type' |
  'internal___content' |
  'internal___contentDigest' |
  'internal___description' |
  'internal___fieldOwners' |
  'internal___ignoreType' |
  'internal___mediaType' |
  'internal___owner' |
  'internal___type' |
  'contentful_id' |
  'file___url' |
  'file___details___size' |
  'file___details___image___width' |
  'file___details___image___height' |
  'file___fileName' |
  'file___contentType' |
  'title' |
  'description' |
  'node_locale' |
  'fixed___base64' |
  'fixed___tracedSVG' |
  'fixed___aspectRatio' |
  'fixed___width' |
  'fixed___height' |
  'fixed___src' |
  'fixed___srcSet' |
  'fixed___srcWebp' |
  'fixed___srcSetWebp' |
  'resolutions___base64' |
  'resolutions___tracedSVG' |
  'resolutions___aspectRatio' |
  'resolutions___width' |
  'resolutions___height' |
  'resolutions___src' |
  'resolutions___srcSet' |
  'resolutions___srcWebp' |
  'resolutions___srcSetWebp' |
  'fluid___base64' |
  'fluid___tracedSVG' |
  'fluid___aspectRatio' |
  'fluid___src' |
  'fluid___srcSet' |
  'fluid___srcWebp' |
  'fluid___srcSetWebp' |
  'fluid___sizes' |
  'sizes___base64' |
  'sizes___tracedSVG' |
  'sizes___aspectRatio' |
  'sizes___src' |
  'sizes___srcSet' |
  'sizes___srcWebp' |
  'sizes___srcSetWebp' |
  'sizes___sizes' |
  'resize___base64' |
  'resize___tracedSVG' |
  'resize___src' |
  'resize___width' |
  'resize___height' |
  'resize___aspectRatio';

export type GraphqlContentfulAssetFile = {
  readonly url?: Maybe<Scalars['String']>;
  readonly details?: Maybe<GraphqlContentfulAssetFileDetails>;
  readonly fileName?: Maybe<Scalars['String']>;
  readonly contentType?: Maybe<Scalars['String']>;
};

export type GraphqlContentfulAssetFileDetails = {
  readonly size?: Maybe<Scalars['Int']>;
  readonly image?: Maybe<GraphqlContentfulAssetFileDetailsImage>;
};

export type GraphqlContentfulAssetFileDetailsFilterInput = {
  readonly size?: Maybe<GraphqlIntQueryOperatorInput>;
  readonly image?: Maybe<GraphqlContentfulAssetFileDetailsImageFilterInput>;
};

export type GraphqlContentfulAssetFileDetailsImage = {
  readonly width?: Maybe<Scalars['Int']>;
  readonly height?: Maybe<Scalars['Int']>;
};

export type GraphqlContentfulAssetFileDetailsImageFilterInput = {
  readonly width?: Maybe<GraphqlIntQueryOperatorInput>;
  readonly height?: Maybe<GraphqlIntQueryOperatorInput>;
};

export type GraphqlContentfulAssetFileFilterInput = {
  readonly url?: Maybe<GraphqlStringQueryOperatorInput>;
  readonly details?: Maybe<GraphqlContentfulAssetFileDetailsFilterInput>;
  readonly fileName?: Maybe<GraphqlStringQueryOperatorInput>;
  readonly contentType?: Maybe<GraphqlStringQueryOperatorInput>;
};

export type GraphqlContentfulAssetFilterInput = {
  readonly id?: Maybe<GraphqlStringQueryOperatorInput>;
  readonly parent?: Maybe<GraphqlNodeFilterInput>;
  readonly children?: Maybe<GraphqlNodeFilterListInput>;
  readonly internal?: Maybe<GraphqlInternalFilterInput>;
  readonly contentful_id?: Maybe<GraphqlStringQueryOperatorInput>;
  readonly file?: Maybe<GraphqlContentfulAssetFileFilterInput>;
  readonly title?: Maybe<GraphqlStringQueryOperatorInput>;
  readonly description?: Maybe<GraphqlStringQueryOperatorInput>;
  readonly node_locale?: Maybe<GraphqlStringQueryOperatorInput>;
  readonly fixed?: Maybe<GraphqlContentfulFixedFilterInput>;
  readonly resolutions?: Maybe<GraphqlContentfulResolutionsFilterInput>;
  readonly fluid?: Maybe<GraphqlContentfulFluidFilterInput>;
  readonly sizes?: Maybe<GraphqlContentfulSizesFilterInput>;
  readonly resize?: Maybe<GraphqlContentfulResizeFilterInput>;
};

export type GraphqlContentfulAssetFilterListInput = {
  readonly elemMatch?: Maybe<GraphqlContentfulAssetFilterInput>;
};

export type GraphqlContentfulAssetGroupConnection = {
  readonly totalCount: Scalars['Int'];
  readonly edges: ReadonlyArray<GraphqlContentfulAssetEdge>;
  readonly nodes: ReadonlyArray<GraphqlContentfulAsset>;
  readonly pageInfo: GraphqlPageInfo;
  readonly field: Scalars['String'];
  readonly fieldValue?: Maybe<Scalars['String']>;
};

export type GraphqlContentfulAssetSortInput = {
  readonly fields?: Maybe<ReadonlyArray<Maybe<GraphqlContentfulAssetFieldsEnum>>>;
  readonly order?: Maybe<ReadonlyArray<Maybe<GraphqlSortOrderEnum>>>;
};

export type GraphqlContentfulContentType = GraphqlNode & {
  readonly id: Scalars['ID'];
  readonly parent?: Maybe<GraphqlNode>;
  readonly children: ReadonlyArray<GraphqlNode>;
  readonly internal: GraphqlInternal;
  readonly name?: Maybe<Scalars['String']>;
  readonly displayField?: Maybe<Scalars['String']>;
  readonly description?: Maybe<Scalars['String']>;
};

export type GraphqlContentfulContentTypeConnection = {
  readonly totalCount: Scalars['Int'];
  readonly edges: ReadonlyArray<GraphqlContentfulContentTypeEdge>;
  readonly nodes: ReadonlyArray<GraphqlContentfulContentType>;
  readonly pageInfo: GraphqlPageInfo;
  readonly distinct: ReadonlyArray<Scalars['String']>;
  readonly group: ReadonlyArray<GraphqlContentfulContentTypeGroupConnection>;
};


export type GraphqlContentfulContentTypeConnectionDistinctArgs = {
  field: GraphqlContentfulContentTypeFieldsEnum;
};


export type GraphqlContentfulContentTypeConnectionGroupArgs = {
  skip: Maybe<Scalars['Int']>;
  limit: Maybe<Scalars['Int']>;
  field: GraphqlContentfulContentTypeFieldsEnum;
};

export type GraphqlContentfulContentTypeEdge = {
  readonly next?: Maybe<GraphqlContentfulContentType>;
  readonly node: GraphqlContentfulContentType;
  readonly previous?: Maybe<GraphqlContentfulContentType>;
};

export type GraphqlContentfulContentTypeFieldsEnum = 
  'id' |
  'parent___id' |
  'parent___parent___id' |
  'parent___parent___parent___id' |
  'parent___parent___parent___children' |
  'parent___parent___children' |
  'parent___parent___children___id' |
  'parent___parent___children___children' |
  'parent___parent___internal___content' |
  'parent___parent___internal___contentDigest' |
  'parent___parent___internal___description' |
  'parent___parent___internal___fieldOwners' |
  'parent___parent___internal___ignoreType' |
  'parent___parent___internal___mediaType' |
  'parent___parent___internal___owner' |
  'parent___parent___internal___type' |
  'parent___children' |
  'parent___children___id' |
  'parent___children___parent___id' |
  'parent___children___parent___children' |
  'parent___children___children' |
  'parent___children___children___id' |
  'parent___children___children___children' |
  'parent___children___internal___content' |
  'parent___children___internal___contentDigest' |
  'parent___children___internal___description' |
  'parent___children___internal___fieldOwners' |
  'parent___children___internal___ignoreType' |
  'parent___children___internal___mediaType' |
  'parent___children___internal___owner' |
  'parent___children___internal___type' |
  'parent___internal___content' |
  'parent___internal___contentDigest' |
  'parent___internal___description' |
  'parent___internal___fieldOwners' |
  'parent___internal___ignoreType' |
  'parent___internal___mediaType' |
  'parent___internal___owner' |
  'parent___internal___type' |
  'children' |
  'children___id' |
  'children___parent___id' |
  'children___parent___parent___id' |
  'children___parent___parent___children' |
  'children___parent___children' |
  'children___parent___children___id' |
  'children___parent___children___children' |
  'children___parent___internal___content' |
  'children___parent___internal___contentDigest' |
  'children___parent___internal___description' |
  'children___parent___internal___fieldOwners' |
  'children___parent___internal___ignoreType' |
  'children___parent___internal___mediaType' |
  'children___parent___internal___owner' |
  'children___parent___internal___type' |
  'children___children' |
  'children___children___id' |
  'children___children___parent___id' |
  'children___children___parent___children' |
  'children___children___children' |
  'children___children___children___id' |
  'children___children___children___children' |
  'children___children___internal___content' |
  'children___children___internal___contentDigest' |
  'children___children___internal___description' |
  'children___children___internal___fieldOwners' |
  'children___children___internal___ignoreType' |
  'children___children___internal___mediaType' |
  'children___children___internal___owner' |
  'children___children___internal___type' |
  'children___internal___content' |
  'children___internal___contentDigest' |
  'children___internal___description' |
  'children___internal___fieldOwners' |
  'children___internal___ignoreType' |
  'children___internal___mediaType' |
  'children___internal___owner' |
  'children___internal___type' |
  'internal___content' |
  'internal___contentDigest' |
  'internal___description' |
  'internal___fieldOwners' |
  'internal___ignoreType' |
  'internal___mediaType' |
  'internal___owner' |
  'internal___type' |
  'name' |
  'displayField' |
  'description';

export type GraphqlContentfulContentTypeFilterInput = {
  readonly id?: Maybe<GraphqlStringQueryOperatorInput>;
  readonly parent?: Maybe<GraphqlNodeFilterInput>;
  readonly children?: Maybe<GraphqlNodeFilterListInput>;
  readonly internal?: Maybe<GraphqlInternalFilterInput>;
  readonly name?: Maybe<GraphqlStringQueryOperatorInput>;
  readonly displayField?: Maybe<GraphqlStringQueryOperatorInput>;
  readonly description?: Maybe<GraphqlStringQueryOperatorInput>;
};

export type GraphqlContentfulContentTypeGroupConnection = {
  readonly totalCount: Scalars['Int'];
  readonly edges: ReadonlyArray<GraphqlContentfulContentTypeEdge>;
  readonly nodes: ReadonlyArray<GraphqlContentfulContentType>;
  readonly pageInfo: GraphqlPageInfo;
  readonly field: Scalars['String'];
  readonly fieldValue?: Maybe<Scalars['String']>;
};

export type GraphqlContentfulContentTypeSortInput = {
  readonly fields?: Maybe<ReadonlyArray<Maybe<GraphqlContentfulContentTypeFieldsEnum>>>;
  readonly order?: Maybe<ReadonlyArray<Maybe<GraphqlSortOrderEnum>>>;
};

export type GraphqlContentfulFixed = {
  readonly base64?: Maybe<Scalars['String']>;
  readonly tracedSVG?: Maybe<Scalars['String']>;
  readonly aspectRatio?: Maybe<Scalars['Float']>;
  readonly width: Scalars['Float'];
  readonly height: Scalars['Float'];
  readonly src: Scalars['String'];
  readonly srcSet: Scalars['String'];
  readonly srcWebp?: Maybe<Scalars['String']>;
  readonly srcSetWebp?: Maybe<Scalars['String']>;
};

export type GraphqlContentfulFixedFilterInput = {
  readonly base64?: Maybe<GraphqlStringQueryOperatorInput>;
  readonly tracedSVG?: Maybe<GraphqlStringQueryOperatorInput>;
  readonly aspectRatio?: Maybe<GraphqlFloatQueryOperatorInput>;
  readonly width?: Maybe<GraphqlFloatQueryOperatorInput>;
  readonly height?: Maybe<GraphqlFloatQueryOperatorInput>;
  readonly src?: Maybe<GraphqlStringQueryOperatorInput>;
  readonly srcSet?: Maybe<GraphqlStringQueryOperatorInput>;
  readonly srcWebp?: Maybe<GraphqlStringQueryOperatorInput>;
  readonly srcSetWebp?: Maybe<GraphqlStringQueryOperatorInput>;
};

export type GraphqlContentfulFluid = {
  readonly base64?: Maybe<Scalars['String']>;
  readonly tracedSVG?: Maybe<Scalars['String']>;
  readonly aspectRatio: Scalars['Float'];
  readonly src: Scalars['String'];
  readonly srcSet: Scalars['String'];
  readonly srcWebp?: Maybe<Scalars['String']>;
  readonly srcSetWebp?: Maybe<Scalars['String']>;
  readonly sizes: Scalars['String'];
};

export type GraphqlContentfulFluidFilterInput = {
  readonly base64?: Maybe<GraphqlStringQueryOperatorInput>;
  readonly tracedSVG?: Maybe<GraphqlStringQueryOperatorInput>;
  readonly aspectRatio?: Maybe<GraphqlFloatQueryOperatorInput>;
  readonly src?: Maybe<GraphqlStringQueryOperatorInput>;
  readonly srcSet?: Maybe<GraphqlStringQueryOperatorInput>;
  readonly srcWebp?: Maybe<GraphqlStringQueryOperatorInput>;
  readonly srcSetWebp?: Maybe<GraphqlStringQueryOperatorInput>;
  readonly sizes?: Maybe<GraphqlStringQueryOperatorInput>;
};

export type GraphqlContentfulImageCropFocus = 
  'TOP' |
  'TOP_LEFT' |
  'TOP_RIGHT' |
  'BOTTOM' |
  'BOTTOM_RIGHT' |
  'BOTTOM_LEFT' |
  'RIGHT' |
  'LEFT' |
  'FACE' |
  'FACES' |
  'CENTER';

export type GraphqlContentfulImageFormat = 
  'NO_CHANGE' |
  'JPG' |
  'PNG' |
  'WEBP';

export type GraphqlContentfulResize = {
  readonly base64?: Maybe<Scalars['String']>;
  readonly tracedSVG?: Maybe<Scalars['String']>;
  readonly src?: Maybe<Scalars['String']>;
  readonly width?: Maybe<Scalars['Int']>;
  readonly height?: Maybe<Scalars['Int']>;
  readonly aspectRatio?: Maybe<Scalars['Float']>;
};

export type GraphqlContentfulResizeFilterInput = {
  readonly base64?: Maybe<GraphqlStringQueryOperatorInput>;
  readonly tracedSVG?: Maybe<GraphqlStringQueryOperatorInput>;
  readonly src?: Maybe<GraphqlStringQueryOperatorInput>;
  readonly width?: Maybe<GraphqlIntQueryOperatorInput>;
  readonly height?: Maybe<GraphqlIntQueryOperatorInput>;
  readonly aspectRatio?: Maybe<GraphqlFloatQueryOperatorInput>;
};

export type GraphqlContentfulResolutions = {
  readonly base64?: Maybe<Scalars['String']>;
  readonly tracedSVG?: Maybe<Scalars['String']>;
  readonly aspectRatio?: Maybe<Scalars['Float']>;
  readonly width: Scalars['Float'];
  readonly height: Scalars['Float'];
  readonly src: Scalars['String'];
  readonly srcSet: Scalars['String'];
  readonly srcWebp?: Maybe<Scalars['String']>;
  readonly srcSetWebp?: Maybe<Scalars['String']>;
};

export type GraphqlContentfulResolutionsFilterInput = {
  readonly base64?: Maybe<GraphqlStringQueryOperatorInput>;
  readonly tracedSVG?: Maybe<GraphqlStringQueryOperatorInput>;
  readonly aspectRatio?: Maybe<GraphqlFloatQueryOperatorInput>;
  readonly width?: Maybe<GraphqlFloatQueryOperatorInput>;
  readonly height?: Maybe<GraphqlFloatQueryOperatorInput>;
  readonly src?: Maybe<GraphqlStringQueryOperatorInput>;
  readonly srcSet?: Maybe<GraphqlStringQueryOperatorInput>;
  readonly srcWebp?: Maybe<GraphqlStringQueryOperatorInput>;
  readonly srcSetWebp?: Maybe<GraphqlStringQueryOperatorInput>;
};

export type GraphqlContentfulSizes = {
  readonly base64?: Maybe<Scalars['String']>;
  readonly tracedSVG?: Maybe<Scalars['String']>;
  readonly aspectRatio: Scalars['Float'];
  readonly src: Scalars['String'];
  readonly srcSet: Scalars['String'];
  readonly srcWebp?: Maybe<Scalars['String']>;
  readonly srcSetWebp?: Maybe<Scalars['String']>;
  readonly sizes: Scalars['String'];
};

export type GraphqlContentfulSizesFilterInput = {
  readonly base64?: Maybe<GraphqlStringQueryOperatorInput>;
  readonly tracedSVG?: Maybe<GraphqlStringQueryOperatorInput>;
  readonly aspectRatio?: Maybe<GraphqlFloatQueryOperatorInput>;
  readonly src?: Maybe<GraphqlStringQueryOperatorInput>;
  readonly srcSet?: Maybe<GraphqlStringQueryOperatorInput>;
  readonly srcWebp?: Maybe<GraphqlStringQueryOperatorInput>;
  readonly srcSetWebp?: Maybe<GraphqlStringQueryOperatorInput>;
  readonly sizes?: Maybe<GraphqlStringQueryOperatorInput>;
};


export type GraphqlDateQueryOperatorInput = {
  readonly eq?: Maybe<Scalars['Date']>;
  readonly ne?: Maybe<Scalars['Date']>;
  readonly gt?: Maybe<Scalars['Date']>;
  readonly gte?: Maybe<Scalars['Date']>;
  readonly lt?: Maybe<Scalars['Date']>;
  readonly lte?: Maybe<Scalars['Date']>;
  readonly in?: Maybe<ReadonlyArray<Maybe<Scalars['Date']>>>;
  readonly nin?: Maybe<ReadonlyArray<Maybe<Scalars['Date']>>>;
};

export type GraphqlDirectory = GraphqlNode & {
  readonly sourceInstanceName: Scalars['String'];
  readonly absolutePath: Scalars['String'];
  readonly relativePath: Scalars['String'];
  readonly extension: Scalars['String'];
  readonly size: Scalars['Int'];
  readonly prettySize: Scalars['String'];
  readonly modifiedTime: Scalars['Date'];
  readonly accessTime: Scalars['Date'];
  readonly changeTime: Scalars['Date'];
  readonly birthTime: Scalars['Date'];
  readonly root: Scalars['String'];
  readonly dir: Scalars['String'];
  readonly base: Scalars['String'];
  readonly ext: Scalars['String'];
  readonly name: Scalars['String'];
  readonly relativeDirectory: Scalars['String'];
  readonly dev: Scalars['Int'];
  readonly mode: Scalars['Int'];
  readonly nlink: Scalars['Int'];
  readonly uid: Scalars['Int'];
  readonly gid: Scalars['Int'];
  readonly rdev: Scalars['Int'];
  readonly ino: Scalars['Float'];
  readonly atimeMs: Scalars['Float'];
  readonly mtimeMs: Scalars['Float'];
  readonly ctimeMs: Scalars['Float'];
  readonly atime: Scalars['Date'];
  readonly mtime: Scalars['Date'];
  readonly ctime: Scalars['Date'];
  /** @deprecated Use `birthTime` instead */
  readonly birthtime?: Maybe<Scalars['Date']>;
  /** @deprecated Use `birthTime` instead */
  readonly birthtimeMs?: Maybe<Scalars['Float']>;
  readonly blksize?: Maybe<Scalars['Int']>;
  readonly blocks?: Maybe<Scalars['Int']>;
  readonly id: Scalars['ID'];
  readonly parent?: Maybe<GraphqlNode>;
  readonly children: ReadonlyArray<GraphqlNode>;
  readonly internal: GraphqlInternal;
};


export type GraphqlDirectoryModifiedTimeArgs = {
  formatString: Maybe<Scalars['String']>;
  fromNow: Maybe<Scalars['Boolean']>;
  difference: Maybe<Scalars['String']>;
  locale: Maybe<Scalars['String']>;
};


export type GraphqlDirectoryAccessTimeArgs = {
  formatString: Maybe<Scalars['String']>;
  fromNow: Maybe<Scalars['Boolean']>;
  difference: Maybe<Scalars['String']>;
  locale: Maybe<Scalars['String']>;
};


export type GraphqlDirectoryChangeTimeArgs = {
  formatString: Maybe<Scalars['String']>;
  fromNow: Maybe<Scalars['Boolean']>;
  difference: Maybe<Scalars['String']>;
  locale: Maybe<Scalars['String']>;
};


export type GraphqlDirectoryBirthTimeArgs = {
  formatString: Maybe<Scalars['String']>;
  fromNow: Maybe<Scalars['Boolean']>;
  difference: Maybe<Scalars['String']>;
  locale: Maybe<Scalars['String']>;
};


export type GraphqlDirectoryAtimeArgs = {
  formatString: Maybe<Scalars['String']>;
  fromNow: Maybe<Scalars['Boolean']>;
  difference: Maybe<Scalars['String']>;
  locale: Maybe<Scalars['String']>;
};


export type GraphqlDirectoryMtimeArgs = {
  formatString: Maybe<Scalars['String']>;
  fromNow: Maybe<Scalars['Boolean']>;
  difference: Maybe<Scalars['String']>;
  locale: Maybe<Scalars['String']>;
};


export type GraphqlDirectoryCtimeArgs = {
  formatString: Maybe<Scalars['String']>;
  fromNow: Maybe<Scalars['Boolean']>;
  difference: Maybe<Scalars['String']>;
  locale: Maybe<Scalars['String']>;
};

export type GraphqlDirectoryConnection = {
  readonly totalCount: Scalars['Int'];
  readonly edges: ReadonlyArray<GraphqlDirectoryEdge>;
  readonly nodes: ReadonlyArray<GraphqlDirectory>;
  readonly pageInfo: GraphqlPageInfo;
  readonly distinct: ReadonlyArray<Scalars['String']>;
  readonly group: ReadonlyArray<GraphqlDirectoryGroupConnection>;
};


export type GraphqlDirectoryConnectionDistinctArgs = {
  field: GraphqlDirectoryFieldsEnum;
};


export type GraphqlDirectoryConnectionGroupArgs = {
  skip: Maybe<Scalars['Int']>;
  limit: Maybe<Scalars['Int']>;
  field: GraphqlDirectoryFieldsEnum;
};

export type GraphqlDirectoryEdge = {
  readonly next?: Maybe<GraphqlDirectory>;
  readonly node: GraphqlDirectory;
  readonly previous?: Maybe<GraphqlDirectory>;
};

export type GraphqlDirectoryFieldsEnum = 
  'sourceInstanceName' |
  'absolutePath' |
  'relativePath' |
  'extension' |
  'size' |
  'prettySize' |
  'modifiedTime' |
  'accessTime' |
  'changeTime' |
  'birthTime' |
  'root' |
  'dir' |
  'base' |
  'ext' |
  'name' |
  'relativeDirectory' |
  'dev' |
  'mode' |
  'nlink' |
  'uid' |
  'gid' |
  'rdev' |
  'ino' |
  'atimeMs' |
  'mtimeMs' |
  'ctimeMs' |
  'atime' |
  'mtime' |
  'ctime' |
  'birthtime' |
  'birthtimeMs' |
  'blksize' |
  'blocks' |
  'id' |
  'parent___id' |
  'parent___parent___id' |
  'parent___parent___parent___id' |
  'parent___parent___parent___children' |
  'parent___parent___children' |
  'parent___parent___children___id' |
  'parent___parent___children___children' |
  'parent___parent___internal___content' |
  'parent___parent___internal___contentDigest' |
  'parent___parent___internal___description' |
  'parent___parent___internal___fieldOwners' |
  'parent___parent___internal___ignoreType' |
  'parent___parent___internal___mediaType' |
  'parent___parent___internal___owner' |
  'parent___parent___internal___type' |
  'parent___children' |
  'parent___children___id' |
  'parent___children___parent___id' |
  'parent___children___parent___children' |
  'parent___children___children' |
  'parent___children___children___id' |
  'parent___children___children___children' |
  'parent___children___internal___content' |
  'parent___children___internal___contentDigest' |
  'parent___children___internal___description' |
  'parent___children___internal___fieldOwners' |
  'parent___children___internal___ignoreType' |
  'parent___children___internal___mediaType' |
  'parent___children___internal___owner' |
  'parent___children___internal___type' |
  'parent___internal___content' |
  'parent___internal___contentDigest' |
  'parent___internal___description' |
  'parent___internal___fieldOwners' |
  'parent___internal___ignoreType' |
  'parent___internal___mediaType' |
  'parent___internal___owner' |
  'parent___internal___type' |
  'children' |
  'children___id' |
  'children___parent___id' |
  'children___parent___parent___id' |
  'children___parent___parent___children' |
  'children___parent___children' |
  'children___parent___children___id' |
  'children___parent___children___children' |
  'children___parent___internal___content' |
  'children___parent___internal___contentDigest' |
  'children___parent___internal___description' |
  'children___parent___internal___fieldOwners' |
  'children___parent___internal___ignoreType' |
  'children___parent___internal___mediaType' |
  'children___parent___internal___owner' |
  'children___parent___internal___type' |
  'children___children' |
  'children___children___id' |
  'children___children___parent___id' |
  'children___children___parent___children' |
  'children___children___children' |
  'children___children___children___id' |
  'children___children___children___children' |
  'children___children___internal___content' |
  'children___children___internal___contentDigest' |
  'children___children___internal___description' |
  'children___children___internal___fieldOwners' |
  'children___children___internal___ignoreType' |
  'children___children___internal___mediaType' |
  'children___children___internal___owner' |
  'children___children___internal___type' |
  'children___internal___content' |
  'children___internal___contentDigest' |
  'children___internal___description' |
  'children___internal___fieldOwners' |
  'children___internal___ignoreType' |
  'children___internal___mediaType' |
  'children___internal___owner' |
  'children___internal___type' |
  'internal___content' |
  'internal___contentDigest' |
  'internal___description' |
  'internal___fieldOwners' |
  'internal___ignoreType' |
  'internal___mediaType' |
  'internal___owner' |
  'internal___type';

export type GraphqlDirectoryFilterInput = {
  readonly sourceInstanceName?: Maybe<GraphqlStringQueryOperatorInput>;
  readonly absolutePath?: Maybe<GraphqlStringQueryOperatorInput>;
  readonly relativePath?: Maybe<GraphqlStringQueryOperatorInput>;
  readonly extension?: Maybe<GraphqlStringQueryOperatorInput>;
  readonly size?: Maybe<GraphqlIntQueryOperatorInput>;
  readonly prettySize?: Maybe<GraphqlStringQueryOperatorInput>;
  readonly modifiedTime?: Maybe<GraphqlDateQueryOperatorInput>;
  readonly accessTime?: Maybe<GraphqlDateQueryOperatorInput>;
  readonly changeTime?: Maybe<GraphqlDateQueryOperatorInput>;
  readonly birthTime?: Maybe<GraphqlDateQueryOperatorInput>;
  readonly root?: Maybe<GraphqlStringQueryOperatorInput>;
  readonly dir?: Maybe<GraphqlStringQueryOperatorInput>;
  readonly base?: Maybe<GraphqlStringQueryOperatorInput>;
  readonly ext?: Maybe<GraphqlStringQueryOperatorInput>;
  readonly name?: Maybe<GraphqlStringQueryOperatorInput>;
  readonly relativeDirectory?: Maybe<GraphqlStringQueryOperatorInput>;
  readonly dev?: Maybe<GraphqlIntQueryOperatorInput>;
  readonly mode?: Maybe<GraphqlIntQueryOperatorInput>;
  readonly nlink?: Maybe<GraphqlIntQueryOperatorInput>;
  readonly uid?: Maybe<GraphqlIntQueryOperatorInput>;
  readonly gid?: Maybe<GraphqlIntQueryOperatorInput>;
  readonly rdev?: Maybe<GraphqlIntQueryOperatorInput>;
  readonly ino?: Maybe<GraphqlFloatQueryOperatorInput>;
  readonly atimeMs?: Maybe<GraphqlFloatQueryOperatorInput>;
  readonly mtimeMs?: Maybe<GraphqlFloatQueryOperatorInput>;
  readonly ctimeMs?: Maybe<GraphqlFloatQueryOperatorInput>;
  readonly atime?: Maybe<GraphqlDateQueryOperatorInput>;
  readonly mtime?: Maybe<GraphqlDateQueryOperatorInput>;
  readonly ctime?: Maybe<GraphqlDateQueryOperatorInput>;
  readonly birthtime?: Maybe<GraphqlDateQueryOperatorInput>;
  readonly birthtimeMs?: Maybe<GraphqlFloatQueryOperatorInput>;
  readonly blksize?: Maybe<GraphqlIntQueryOperatorInput>;
  readonly blocks?: Maybe<GraphqlIntQueryOperatorInput>;
  readonly id?: Maybe<GraphqlStringQueryOperatorInput>;
  readonly parent?: Maybe<GraphqlNodeFilterInput>;
  readonly children?: Maybe<GraphqlNodeFilterListInput>;
  readonly internal?: Maybe<GraphqlInternalFilterInput>;
};

export type GraphqlDirectoryGroupConnection = {
  readonly totalCount: Scalars['Int'];
  readonly edges: ReadonlyArray<GraphqlDirectoryEdge>;
  readonly nodes: ReadonlyArray<GraphqlDirectory>;
  readonly pageInfo: GraphqlPageInfo;
  readonly field: Scalars['String'];
  readonly fieldValue?: Maybe<Scalars['String']>;
};

export type GraphqlDirectorySortInput = {
  readonly fields?: Maybe<ReadonlyArray<Maybe<GraphqlDirectoryFieldsEnum>>>;
  readonly order?: Maybe<ReadonlyArray<Maybe<GraphqlSortOrderEnum>>>;
};

export type GraphqlDuotoneGradient = {
  readonly highlight: Scalars['String'];
  readonly shadow: Scalars['String'];
  readonly opacity?: Maybe<Scalars['Int']>;
};

export type GraphqlFile = GraphqlNode & {
  readonly sourceInstanceName: Scalars['String'];
  readonly absolutePath: Scalars['String'];
  readonly relativePath: Scalars['String'];
  readonly extension: Scalars['String'];
  readonly size: Scalars['Int'];
  readonly prettySize: Scalars['String'];
  readonly modifiedTime: Scalars['Date'];
  readonly accessTime: Scalars['Date'];
  readonly changeTime: Scalars['Date'];
  readonly birthTime: Scalars['Date'];
  readonly root: Scalars['String'];
  readonly dir: Scalars['String'];
  readonly base: Scalars['String'];
  readonly ext: Scalars['String'];
  readonly name: Scalars['String'];
  readonly relativeDirectory: Scalars['String'];
  readonly dev: Scalars['Int'];
  readonly mode: Scalars['Int'];
  readonly nlink: Scalars['Int'];
  readonly uid: Scalars['Int'];
  readonly gid: Scalars['Int'];
  readonly rdev: Scalars['Int'];
  readonly ino: Scalars['Float'];
  readonly atimeMs: Scalars['Float'];
  readonly mtimeMs: Scalars['Float'];
  readonly ctimeMs: Scalars['Float'];
  readonly atime: Scalars['Date'];
  readonly mtime: Scalars['Date'];
  readonly ctime: Scalars['Date'];
  /** @deprecated Use `birthTime` instead */
  readonly birthtime?: Maybe<Scalars['Date']>;
  /** @deprecated Use `birthTime` instead */
  readonly birthtimeMs?: Maybe<Scalars['Float']>;
  /** Copy file to static directory and return public url to it */
  readonly publicURL?: Maybe<Scalars['String']>;
  readonly childImageSharp?: Maybe<GraphqlImageSharp>;
  readonly id: Scalars['ID'];
  readonly parent?: Maybe<GraphqlNode>;
  readonly children: ReadonlyArray<GraphqlNode>;
  readonly internal: GraphqlInternal;
};


export type GraphqlFileModifiedTimeArgs = {
  formatString: Maybe<Scalars['String']>;
  fromNow: Maybe<Scalars['Boolean']>;
  difference: Maybe<Scalars['String']>;
  locale: Maybe<Scalars['String']>;
};


export type GraphqlFileAccessTimeArgs = {
  formatString: Maybe<Scalars['String']>;
  fromNow: Maybe<Scalars['Boolean']>;
  difference: Maybe<Scalars['String']>;
  locale: Maybe<Scalars['String']>;
};


export type GraphqlFileChangeTimeArgs = {
  formatString: Maybe<Scalars['String']>;
  fromNow: Maybe<Scalars['Boolean']>;
  difference: Maybe<Scalars['String']>;
  locale: Maybe<Scalars['String']>;
};


export type GraphqlFileBirthTimeArgs = {
  formatString: Maybe<Scalars['String']>;
  fromNow: Maybe<Scalars['Boolean']>;
  difference: Maybe<Scalars['String']>;
  locale: Maybe<Scalars['String']>;
};


export type GraphqlFileAtimeArgs = {
  formatString: Maybe<Scalars['String']>;
  fromNow: Maybe<Scalars['Boolean']>;
  difference: Maybe<Scalars['String']>;
  locale: Maybe<Scalars['String']>;
};


export type GraphqlFileMtimeArgs = {
  formatString: Maybe<Scalars['String']>;
  fromNow: Maybe<Scalars['Boolean']>;
  difference: Maybe<Scalars['String']>;
  locale: Maybe<Scalars['String']>;
};


export type GraphqlFileCtimeArgs = {
  formatString: Maybe<Scalars['String']>;
  fromNow: Maybe<Scalars['Boolean']>;
  difference: Maybe<Scalars['String']>;
  locale: Maybe<Scalars['String']>;
};

export type GraphqlFileConnection = {
  readonly totalCount: Scalars['Int'];
  readonly edges: ReadonlyArray<GraphqlFileEdge>;
  readonly nodes: ReadonlyArray<GraphqlFile>;
  readonly pageInfo: GraphqlPageInfo;
  readonly distinct: ReadonlyArray<Scalars['String']>;
  readonly group: ReadonlyArray<GraphqlFileGroupConnection>;
};


export type GraphqlFileConnectionDistinctArgs = {
  field: GraphqlFileFieldsEnum;
};


export type GraphqlFileConnectionGroupArgs = {
  skip: Maybe<Scalars['Int']>;
  limit: Maybe<Scalars['Int']>;
  field: GraphqlFileFieldsEnum;
};

export type GraphqlFileEdge = {
  readonly next?: Maybe<GraphqlFile>;
  readonly node: GraphqlFile;
  readonly previous?: Maybe<GraphqlFile>;
};

export type GraphqlFileFieldsEnum = 
  'sourceInstanceName' |
  'absolutePath' |
  'relativePath' |
  'extension' |
  'size' |
  'prettySize' |
  'modifiedTime' |
  'accessTime' |
  'changeTime' |
  'birthTime' |
  'root' |
  'dir' |
  'base' |
  'ext' |
  'name' |
  'relativeDirectory' |
  'dev' |
  'mode' |
  'nlink' |
  'uid' |
  'gid' |
  'rdev' |
  'ino' |
  'atimeMs' |
  'mtimeMs' |
  'ctimeMs' |
  'atime' |
  'mtime' |
  'ctime' |
  'birthtime' |
  'birthtimeMs' |
  'publicURL' |
  'childImageSharp___fixed___base64' |
  'childImageSharp___fixed___tracedSVG' |
  'childImageSharp___fixed___aspectRatio' |
  'childImageSharp___fixed___width' |
  'childImageSharp___fixed___height' |
  'childImageSharp___fixed___src' |
  'childImageSharp___fixed___srcSet' |
  'childImageSharp___fixed___srcWebp' |
  'childImageSharp___fixed___srcSetWebp' |
  'childImageSharp___fixed___originalName' |
  'childImageSharp___resolutions___base64' |
  'childImageSharp___resolutions___tracedSVG' |
  'childImageSharp___resolutions___aspectRatio' |
  'childImageSharp___resolutions___width' |
  'childImageSharp___resolutions___height' |
  'childImageSharp___resolutions___src' |
  'childImageSharp___resolutions___srcSet' |
  'childImageSharp___resolutions___srcWebp' |
  'childImageSharp___resolutions___srcSetWebp' |
  'childImageSharp___resolutions___originalName' |
  'childImageSharp___fluid___base64' |
  'childImageSharp___fluid___tracedSVG' |
  'childImageSharp___fluid___aspectRatio' |
  'childImageSharp___fluid___src' |
  'childImageSharp___fluid___srcSet' |
  'childImageSharp___fluid___srcWebp' |
  'childImageSharp___fluid___srcSetWebp' |
  'childImageSharp___fluid___sizes' |
  'childImageSharp___fluid___originalImg' |
  'childImageSharp___fluid___originalName' |
  'childImageSharp___fluid___presentationWidth' |
  'childImageSharp___fluid___presentationHeight' |
  'childImageSharp___sizes___base64' |
  'childImageSharp___sizes___tracedSVG' |
  'childImageSharp___sizes___aspectRatio' |
  'childImageSharp___sizes___src' |
  'childImageSharp___sizes___srcSet' |
  'childImageSharp___sizes___srcWebp' |
  'childImageSharp___sizes___srcSetWebp' |
  'childImageSharp___sizes___sizes' |
  'childImageSharp___sizes___originalImg' |
  'childImageSharp___sizes___originalName' |
  'childImageSharp___sizes___presentationWidth' |
  'childImageSharp___sizes___presentationHeight' |
  'childImageSharp___original___width' |
  'childImageSharp___original___height' |
  'childImageSharp___original___src' |
  'childImageSharp___resize___src' |
  'childImageSharp___resize___tracedSVG' |
  'childImageSharp___resize___width' |
  'childImageSharp___resize___height' |
  'childImageSharp___resize___aspectRatio' |
  'childImageSharp___resize___originalName' |
  'childImageSharp___id' |
  'childImageSharp___parent___id' |
  'childImageSharp___parent___parent___id' |
  'childImageSharp___parent___parent___children' |
  'childImageSharp___parent___children' |
  'childImageSharp___parent___children___id' |
  'childImageSharp___parent___children___children' |
  'childImageSharp___parent___internal___content' |
  'childImageSharp___parent___internal___contentDigest' |
  'childImageSharp___parent___internal___description' |
  'childImageSharp___parent___internal___fieldOwners' |
  'childImageSharp___parent___internal___ignoreType' |
  'childImageSharp___parent___internal___mediaType' |
  'childImageSharp___parent___internal___owner' |
  'childImageSharp___parent___internal___type' |
  'childImageSharp___children' |
  'childImageSharp___children___id' |
  'childImageSharp___children___parent___id' |
  'childImageSharp___children___parent___children' |
  'childImageSharp___children___children' |
  'childImageSharp___children___children___id' |
  'childImageSharp___children___children___children' |
  'childImageSharp___children___internal___content' |
  'childImageSharp___children___internal___contentDigest' |
  'childImageSharp___children___internal___description' |
  'childImageSharp___children___internal___fieldOwners' |
  'childImageSharp___children___internal___ignoreType' |
  'childImageSharp___children___internal___mediaType' |
  'childImageSharp___children___internal___owner' |
  'childImageSharp___children___internal___type' |
  'childImageSharp___internal___content' |
  'childImageSharp___internal___contentDigest' |
  'childImageSharp___internal___description' |
  'childImageSharp___internal___fieldOwners' |
  'childImageSharp___internal___ignoreType' |
  'childImageSharp___internal___mediaType' |
  'childImageSharp___internal___owner' |
  'childImageSharp___internal___type' |
  'id' |
  'parent___id' |
  'parent___parent___id' |
  'parent___parent___parent___id' |
  'parent___parent___parent___children' |
  'parent___parent___children' |
  'parent___parent___children___id' |
  'parent___parent___children___children' |
  'parent___parent___internal___content' |
  'parent___parent___internal___contentDigest' |
  'parent___parent___internal___description' |
  'parent___parent___internal___fieldOwners' |
  'parent___parent___internal___ignoreType' |
  'parent___parent___internal___mediaType' |
  'parent___parent___internal___owner' |
  'parent___parent___internal___type' |
  'parent___children' |
  'parent___children___id' |
  'parent___children___parent___id' |
  'parent___children___parent___children' |
  'parent___children___children' |
  'parent___children___children___id' |
  'parent___children___children___children' |
  'parent___children___internal___content' |
  'parent___children___internal___contentDigest' |
  'parent___children___internal___description' |
  'parent___children___internal___fieldOwners' |
  'parent___children___internal___ignoreType' |
  'parent___children___internal___mediaType' |
  'parent___children___internal___owner' |
  'parent___children___internal___type' |
  'parent___internal___content' |
  'parent___internal___contentDigest' |
  'parent___internal___description' |
  'parent___internal___fieldOwners' |
  'parent___internal___ignoreType' |
  'parent___internal___mediaType' |
  'parent___internal___owner' |
  'parent___internal___type' |
  'children' |
  'children___id' |
  'children___parent___id' |
  'children___parent___parent___id' |
  'children___parent___parent___children' |
  'children___parent___children' |
  'children___parent___children___id' |
  'children___parent___children___children' |
  'children___parent___internal___content' |
  'children___parent___internal___contentDigest' |
  'children___parent___internal___description' |
  'children___parent___internal___fieldOwners' |
  'children___parent___internal___ignoreType' |
  'children___parent___internal___mediaType' |
  'children___parent___internal___owner' |
  'children___parent___internal___type' |
  'children___children' |
  'children___children___id' |
  'children___children___parent___id' |
  'children___children___parent___children' |
  'children___children___children' |
  'children___children___children___id' |
  'children___children___children___children' |
  'children___children___internal___content' |
  'children___children___internal___contentDigest' |
  'children___children___internal___description' |
  'children___children___internal___fieldOwners' |
  'children___children___internal___ignoreType' |
  'children___children___internal___mediaType' |
  'children___children___internal___owner' |
  'children___children___internal___type' |
  'children___internal___content' |
  'children___internal___contentDigest' |
  'children___internal___description' |
  'children___internal___fieldOwners' |
  'children___internal___ignoreType' |
  'children___internal___mediaType' |
  'children___internal___owner' |
  'children___internal___type' |
  'internal___content' |
  'internal___contentDigest' |
  'internal___description' |
  'internal___fieldOwners' |
  'internal___ignoreType' |
  'internal___mediaType' |
  'internal___owner' |
  'internal___type';

export type GraphqlFileFilterInput = {
  readonly sourceInstanceName?: Maybe<GraphqlStringQueryOperatorInput>;
  readonly absolutePath?: Maybe<GraphqlStringQueryOperatorInput>;
  readonly relativePath?: Maybe<GraphqlStringQueryOperatorInput>;
  readonly extension?: Maybe<GraphqlStringQueryOperatorInput>;
  readonly size?: Maybe<GraphqlIntQueryOperatorInput>;
  readonly prettySize?: Maybe<GraphqlStringQueryOperatorInput>;
  readonly modifiedTime?: Maybe<GraphqlDateQueryOperatorInput>;
  readonly accessTime?: Maybe<GraphqlDateQueryOperatorInput>;
  readonly changeTime?: Maybe<GraphqlDateQueryOperatorInput>;
  readonly birthTime?: Maybe<GraphqlDateQueryOperatorInput>;
  readonly root?: Maybe<GraphqlStringQueryOperatorInput>;
  readonly dir?: Maybe<GraphqlStringQueryOperatorInput>;
  readonly base?: Maybe<GraphqlStringQueryOperatorInput>;
  readonly ext?: Maybe<GraphqlStringQueryOperatorInput>;
  readonly name?: Maybe<GraphqlStringQueryOperatorInput>;
  readonly relativeDirectory?: Maybe<GraphqlStringQueryOperatorInput>;
  readonly dev?: Maybe<GraphqlIntQueryOperatorInput>;
  readonly mode?: Maybe<GraphqlIntQueryOperatorInput>;
  readonly nlink?: Maybe<GraphqlIntQueryOperatorInput>;
  readonly uid?: Maybe<GraphqlIntQueryOperatorInput>;
  readonly gid?: Maybe<GraphqlIntQueryOperatorInput>;
  readonly rdev?: Maybe<GraphqlIntQueryOperatorInput>;
  readonly ino?: Maybe<GraphqlFloatQueryOperatorInput>;
  readonly atimeMs?: Maybe<GraphqlFloatQueryOperatorInput>;
  readonly mtimeMs?: Maybe<GraphqlFloatQueryOperatorInput>;
  readonly ctimeMs?: Maybe<GraphqlFloatQueryOperatorInput>;
  readonly atime?: Maybe<GraphqlDateQueryOperatorInput>;
  readonly mtime?: Maybe<GraphqlDateQueryOperatorInput>;
  readonly ctime?: Maybe<GraphqlDateQueryOperatorInput>;
  readonly birthtime?: Maybe<GraphqlDateQueryOperatorInput>;
  readonly birthtimeMs?: Maybe<GraphqlFloatQueryOperatorInput>;
  readonly publicURL?: Maybe<GraphqlStringQueryOperatorInput>;
  readonly childImageSharp?: Maybe<GraphqlImageSharpFilterInput>;
  readonly id?: Maybe<GraphqlStringQueryOperatorInput>;
  readonly parent?: Maybe<GraphqlNodeFilterInput>;
  readonly children?: Maybe<GraphqlNodeFilterListInput>;
  readonly internal?: Maybe<GraphqlInternalFilterInput>;
};

export type GraphqlFileGroupConnection = {
  readonly totalCount: Scalars['Int'];
  readonly edges: ReadonlyArray<GraphqlFileEdge>;
  readonly nodes: ReadonlyArray<GraphqlFile>;
  readonly pageInfo: GraphqlPageInfo;
  readonly field: Scalars['String'];
  readonly fieldValue?: Maybe<Scalars['String']>;
};

export type GraphqlFileSortInput = {
  readonly fields?: Maybe<ReadonlyArray<Maybe<GraphqlFileFieldsEnum>>>;
  readonly order?: Maybe<ReadonlyArray<Maybe<GraphqlSortOrderEnum>>>;
};

export type GraphqlFloatQueryOperatorInput = {
  readonly eq?: Maybe<Scalars['Float']>;
  readonly ne?: Maybe<Scalars['Float']>;
  readonly gt?: Maybe<Scalars['Float']>;
  readonly gte?: Maybe<Scalars['Float']>;
  readonly lt?: Maybe<Scalars['Float']>;
  readonly lte?: Maybe<Scalars['Float']>;
  readonly in?: Maybe<ReadonlyArray<Maybe<Scalars['Float']>>>;
  readonly nin?: Maybe<ReadonlyArray<Maybe<Scalars['Float']>>>;
};

export type GraphqlImageCropFocus = 
  'CENTER' |
  'NORTH' |
  'NORTHEAST' |
  'EAST' |
  'SOUTHEAST' |
  'SOUTH' |
  'SOUTHWEST' |
  'WEST' |
  'NORTHWEST' |
  'ENTROPY' |
  'ATTENTION';

export type GraphqlImageFit = 
  'COVER' |
  'CONTAIN' |
  'FILL' |
  'INSIDE' |
  'OUTSIDE';

export type GraphqlImageFormat = 
  'NO_CHANGE' |
  'JPG' |
  'PNG' |
  'WEBP';

export type GraphqlImageResizingBehavior = 
  'NO_CHANGE' |
  /** Same as the default resizing, but adds padding so that the generated image has the specified dimensions. */
  'PAD' |
  /** Crop a part of the original image to match the specified size. */
  'CROP' |
  /**
   * Crop the image to the specified dimensions, if the original image is smaller
   * than these dimensions, then the image will be upscaled.
   */
  'FILL' |
  /** When used in association with the f parameter below, creates a thumbnail from the image based on a focus area. */
  'THUMB' |
  /** Scale the image regardless of the original aspect ratio. */
  'SCALE';

export type GraphqlImageSharp = GraphqlNode & {
  readonly fixed?: Maybe<GraphqlImageSharpFixed>;
  /** @deprecated Resolutions was deprecated in Gatsby v2. It's been renamed to "fixed" https://example.com/write-docs-and-fix-this-example-link */
  readonly resolutions?: Maybe<GraphqlImageSharpResolutions>;
  readonly fluid?: Maybe<GraphqlImageSharpFluid>;
  /** @deprecated Sizes was deprecated in Gatsby v2. It's been renamed to "fluid" https://example.com/write-docs-and-fix-this-example-link */
  readonly sizes?: Maybe<GraphqlImageSharpSizes>;
  readonly original?: Maybe<GraphqlImageSharpOriginal>;
  readonly resize?: Maybe<GraphqlImageSharpResize>;
  readonly id: Scalars['ID'];
  readonly parent?: Maybe<GraphqlNode>;
  readonly children: ReadonlyArray<GraphqlNode>;
  readonly internal: GraphqlInternal;
};


export type GraphqlImageSharpFixedArgs = {
  width: Maybe<Scalars['Int']>;
  height: Maybe<Scalars['Int']>;
  base64Width: Maybe<Scalars['Int']>;
  jpegProgressive?: Maybe<Scalars['Boolean']>;
  pngCompressionSpeed?: Maybe<Scalars['Int']>;
  grayscale?: Maybe<Scalars['Boolean']>;
  duotone: Maybe<GraphqlDuotoneGradient>;
  traceSVG: Maybe<GraphqlPotrace>;
  quality: Maybe<Scalars['Int']>;
  jpegQuality: Maybe<Scalars['Int']>;
  pngQuality: Maybe<Scalars['Int']>;
  webpQuality: Maybe<Scalars['Int']>;
  toFormat?: Maybe<GraphqlImageFormat>;
  toFormatBase64?: Maybe<GraphqlImageFormat>;
  cropFocus?: Maybe<GraphqlImageCropFocus>;
  fit?: Maybe<GraphqlImageFit>;
  background?: Maybe<Scalars['String']>;
  rotate?: Maybe<Scalars['Int']>;
  trim?: Maybe<Scalars['Float']>;
};


export type GraphqlImageSharpResolutionsArgs = {
  width: Maybe<Scalars['Int']>;
  height: Maybe<Scalars['Int']>;
  base64Width: Maybe<Scalars['Int']>;
  jpegProgressive?: Maybe<Scalars['Boolean']>;
  pngCompressionSpeed?: Maybe<Scalars['Int']>;
  grayscale?: Maybe<Scalars['Boolean']>;
  duotone: Maybe<GraphqlDuotoneGradient>;
  traceSVG: Maybe<GraphqlPotrace>;
  quality: Maybe<Scalars['Int']>;
  jpegQuality: Maybe<Scalars['Int']>;
  pngQuality: Maybe<Scalars['Int']>;
  webpQuality: Maybe<Scalars['Int']>;
  toFormat?: Maybe<GraphqlImageFormat>;
  toFormatBase64?: Maybe<GraphqlImageFormat>;
  cropFocus?: Maybe<GraphqlImageCropFocus>;
  fit?: Maybe<GraphqlImageFit>;
  background?: Maybe<Scalars['String']>;
  rotate?: Maybe<Scalars['Int']>;
  trim?: Maybe<Scalars['Float']>;
};


export type GraphqlImageSharpFluidArgs = {
  maxWidth: Maybe<Scalars['Int']>;
  maxHeight: Maybe<Scalars['Int']>;
  base64Width: Maybe<Scalars['Int']>;
  grayscale?: Maybe<Scalars['Boolean']>;
  jpegProgressive?: Maybe<Scalars['Boolean']>;
  pngCompressionSpeed?: Maybe<Scalars['Int']>;
  duotone: Maybe<GraphqlDuotoneGradient>;
  traceSVG: Maybe<GraphqlPotrace>;
  quality: Maybe<Scalars['Int']>;
  jpegQuality: Maybe<Scalars['Int']>;
  pngQuality: Maybe<Scalars['Int']>;
  webpQuality: Maybe<Scalars['Int']>;
  toFormat?: Maybe<GraphqlImageFormat>;
  toFormatBase64?: Maybe<GraphqlImageFormat>;
  cropFocus?: Maybe<GraphqlImageCropFocus>;
  fit?: Maybe<GraphqlImageFit>;
  background?: Maybe<Scalars['String']>;
  rotate?: Maybe<Scalars['Int']>;
  trim?: Maybe<Scalars['Float']>;
  sizes?: Maybe<Scalars['String']>;
  srcSetBreakpoints?: Maybe<ReadonlyArray<Maybe<Scalars['Int']>>>;
};


export type GraphqlImageSharpSizesArgs = {
  maxWidth: Maybe<Scalars['Int']>;
  maxHeight: Maybe<Scalars['Int']>;
  base64Width: Maybe<Scalars['Int']>;
  grayscale?: Maybe<Scalars['Boolean']>;
  jpegProgressive?: Maybe<Scalars['Boolean']>;
  pngCompressionSpeed?: Maybe<Scalars['Int']>;
  duotone: Maybe<GraphqlDuotoneGradient>;
  traceSVG: Maybe<GraphqlPotrace>;
  quality: Maybe<Scalars['Int']>;
  jpegQuality: Maybe<Scalars['Int']>;
  pngQuality: Maybe<Scalars['Int']>;
  webpQuality: Maybe<Scalars['Int']>;
  toFormat?: Maybe<GraphqlImageFormat>;
  toFormatBase64?: Maybe<GraphqlImageFormat>;
  cropFocus?: Maybe<GraphqlImageCropFocus>;
  fit?: Maybe<GraphqlImageFit>;
  background?: Maybe<Scalars['String']>;
  rotate?: Maybe<Scalars['Int']>;
  trim?: Maybe<Scalars['Float']>;
  sizes?: Maybe<Scalars['String']>;
  srcSetBreakpoints?: Maybe<ReadonlyArray<Maybe<Scalars['Int']>>>;
};


export type GraphqlImageSharpResizeArgs = {
  width: Maybe<Scalars['Int']>;
  height: Maybe<Scalars['Int']>;
  quality: Maybe<Scalars['Int']>;
  jpegQuality: Maybe<Scalars['Int']>;
  pngQuality: Maybe<Scalars['Int']>;
  webpQuality: Maybe<Scalars['Int']>;
  jpegProgressive?: Maybe<Scalars['Boolean']>;
  pngCompressionLevel?: Maybe<Scalars['Int']>;
  pngCompressionSpeed?: Maybe<Scalars['Int']>;
  grayscale?: Maybe<Scalars['Boolean']>;
  duotone: Maybe<GraphqlDuotoneGradient>;
  base64?: Maybe<Scalars['Boolean']>;
  traceSVG: Maybe<GraphqlPotrace>;
  toFormat?: Maybe<GraphqlImageFormat>;
  cropFocus?: Maybe<GraphqlImageCropFocus>;
  fit?: Maybe<GraphqlImageFit>;
  background?: Maybe<Scalars['String']>;
  rotate?: Maybe<Scalars['Int']>;
  trim?: Maybe<Scalars['Float']>;
};

export type GraphqlImageSharpConnection = {
  readonly totalCount: Scalars['Int'];
  readonly edges: ReadonlyArray<GraphqlImageSharpEdge>;
  readonly nodes: ReadonlyArray<GraphqlImageSharp>;
  readonly pageInfo: GraphqlPageInfo;
  readonly distinct: ReadonlyArray<Scalars['String']>;
  readonly group: ReadonlyArray<GraphqlImageSharpGroupConnection>;
};


export type GraphqlImageSharpConnectionDistinctArgs = {
  field: GraphqlImageSharpFieldsEnum;
};


export type GraphqlImageSharpConnectionGroupArgs = {
  skip: Maybe<Scalars['Int']>;
  limit: Maybe<Scalars['Int']>;
  field: GraphqlImageSharpFieldsEnum;
};

export type GraphqlImageSharpEdge = {
  readonly next?: Maybe<GraphqlImageSharp>;
  readonly node: GraphqlImageSharp;
  readonly previous?: Maybe<GraphqlImageSharp>;
};

export type GraphqlImageSharpFieldsEnum = 
  'fixed___base64' |
  'fixed___tracedSVG' |
  'fixed___aspectRatio' |
  'fixed___width' |
  'fixed___height' |
  'fixed___src' |
  'fixed___srcSet' |
  'fixed___srcWebp' |
  'fixed___srcSetWebp' |
  'fixed___originalName' |
  'resolutions___base64' |
  'resolutions___tracedSVG' |
  'resolutions___aspectRatio' |
  'resolutions___width' |
  'resolutions___height' |
  'resolutions___src' |
  'resolutions___srcSet' |
  'resolutions___srcWebp' |
  'resolutions___srcSetWebp' |
  'resolutions___originalName' |
  'fluid___base64' |
  'fluid___tracedSVG' |
  'fluid___aspectRatio' |
  'fluid___src' |
  'fluid___srcSet' |
  'fluid___srcWebp' |
  'fluid___srcSetWebp' |
  'fluid___sizes' |
  'fluid___originalImg' |
  'fluid___originalName' |
  'fluid___presentationWidth' |
  'fluid___presentationHeight' |
  'sizes___base64' |
  'sizes___tracedSVG' |
  'sizes___aspectRatio' |
  'sizes___src' |
  'sizes___srcSet' |
  'sizes___srcWebp' |
  'sizes___srcSetWebp' |
  'sizes___sizes' |
  'sizes___originalImg' |
  'sizes___originalName' |
  'sizes___presentationWidth' |
  'sizes___presentationHeight' |
  'original___width' |
  'original___height' |
  'original___src' |
  'resize___src' |
  'resize___tracedSVG' |
  'resize___width' |
  'resize___height' |
  'resize___aspectRatio' |
  'resize___originalName' |
  'id' |
  'parent___id' |
  'parent___parent___id' |
  'parent___parent___parent___id' |
  'parent___parent___parent___children' |
  'parent___parent___children' |
  'parent___parent___children___id' |
  'parent___parent___children___children' |
  'parent___parent___internal___content' |
  'parent___parent___internal___contentDigest' |
  'parent___parent___internal___description' |
  'parent___parent___internal___fieldOwners' |
  'parent___parent___internal___ignoreType' |
  'parent___parent___internal___mediaType' |
  'parent___parent___internal___owner' |
  'parent___parent___internal___type' |
  'parent___children' |
  'parent___children___id' |
  'parent___children___parent___id' |
  'parent___children___parent___children' |
  'parent___children___children' |
  'parent___children___children___id' |
  'parent___children___children___children' |
  'parent___children___internal___content' |
  'parent___children___internal___contentDigest' |
  'parent___children___internal___description' |
  'parent___children___internal___fieldOwners' |
  'parent___children___internal___ignoreType' |
  'parent___children___internal___mediaType' |
  'parent___children___internal___owner' |
  'parent___children___internal___type' |
  'parent___internal___content' |
  'parent___internal___contentDigest' |
  'parent___internal___description' |
  'parent___internal___fieldOwners' |
  'parent___internal___ignoreType' |
  'parent___internal___mediaType' |
  'parent___internal___owner' |
  'parent___internal___type' |
  'children' |
  'children___id' |
  'children___parent___id' |
  'children___parent___parent___id' |
  'children___parent___parent___children' |
  'children___parent___children' |
  'children___parent___children___id' |
  'children___parent___children___children' |
  'children___parent___internal___content' |
  'children___parent___internal___contentDigest' |
  'children___parent___internal___description' |
  'children___parent___internal___fieldOwners' |
  'children___parent___internal___ignoreType' |
  'children___parent___internal___mediaType' |
  'children___parent___internal___owner' |
  'children___parent___internal___type' |
  'children___children' |
  'children___children___id' |
  'children___children___parent___id' |
  'children___children___parent___children' |
  'children___children___children' |
  'children___children___children___id' |
  'children___children___children___children' |
  'children___children___internal___content' |
  'children___children___internal___contentDigest' |
  'children___children___internal___description' |
  'children___children___internal___fieldOwners' |
  'children___children___internal___ignoreType' |
  'children___children___internal___mediaType' |
  'children___children___internal___owner' |
  'children___children___internal___type' |
  'children___internal___content' |
  'children___internal___contentDigest' |
  'children___internal___description' |
  'children___internal___fieldOwners' |
  'children___internal___ignoreType' |
  'children___internal___mediaType' |
  'children___internal___owner' |
  'children___internal___type' |
  'internal___content' |
  'internal___contentDigest' |
  'internal___description' |
  'internal___fieldOwners' |
  'internal___ignoreType' |
  'internal___mediaType' |
  'internal___owner' |
  'internal___type';

export type GraphqlImageSharpFilterInput = {
  readonly fixed?: Maybe<GraphqlImageSharpFixedFilterInput>;
  readonly resolutions?: Maybe<GraphqlImageSharpResolutionsFilterInput>;
  readonly fluid?: Maybe<GraphqlImageSharpFluidFilterInput>;
  readonly sizes?: Maybe<GraphqlImageSharpSizesFilterInput>;
  readonly original?: Maybe<GraphqlImageSharpOriginalFilterInput>;
  readonly resize?: Maybe<GraphqlImageSharpResizeFilterInput>;
  readonly id?: Maybe<GraphqlStringQueryOperatorInput>;
  readonly parent?: Maybe<GraphqlNodeFilterInput>;
  readonly children?: Maybe<GraphqlNodeFilterListInput>;
  readonly internal?: Maybe<GraphqlInternalFilterInput>;
};

export type GraphqlImageSharpFixed = {
  readonly base64?: Maybe<Scalars['String']>;
  readonly tracedSVG?: Maybe<Scalars['String']>;
  readonly aspectRatio?: Maybe<Scalars['Float']>;
  readonly width: Scalars['Float'];
  readonly height: Scalars['Float'];
  readonly src: Scalars['String'];
  readonly srcSet: Scalars['String'];
  readonly srcWebp?: Maybe<Scalars['String']>;
  readonly srcSetWebp?: Maybe<Scalars['String']>;
  readonly originalName?: Maybe<Scalars['String']>;
};

export type GraphqlImageSharpFixedFilterInput = {
  readonly base64?: Maybe<GraphqlStringQueryOperatorInput>;
  readonly tracedSVG?: Maybe<GraphqlStringQueryOperatorInput>;
  readonly aspectRatio?: Maybe<GraphqlFloatQueryOperatorInput>;
  readonly width?: Maybe<GraphqlFloatQueryOperatorInput>;
  readonly height?: Maybe<GraphqlFloatQueryOperatorInput>;
  readonly src?: Maybe<GraphqlStringQueryOperatorInput>;
  readonly srcSet?: Maybe<GraphqlStringQueryOperatorInput>;
  readonly srcWebp?: Maybe<GraphqlStringQueryOperatorInput>;
  readonly srcSetWebp?: Maybe<GraphqlStringQueryOperatorInput>;
  readonly originalName?: Maybe<GraphqlStringQueryOperatorInput>;
};

export type GraphqlImageSharpFluid = {
  readonly base64?: Maybe<Scalars['String']>;
  readonly tracedSVG?: Maybe<Scalars['String']>;
  readonly aspectRatio: Scalars['Float'];
  readonly src: Scalars['String'];
  readonly srcSet: Scalars['String'];
  readonly srcWebp?: Maybe<Scalars['String']>;
  readonly srcSetWebp?: Maybe<Scalars['String']>;
  readonly sizes: Scalars['String'];
  readonly originalImg?: Maybe<Scalars['String']>;
  readonly originalName?: Maybe<Scalars['String']>;
  readonly presentationWidth?: Maybe<Scalars['Int']>;
  readonly presentationHeight?: Maybe<Scalars['Int']>;
};

export type GraphqlImageSharpFluidFilterInput = {
  readonly base64?: Maybe<GraphqlStringQueryOperatorInput>;
  readonly tracedSVG?: Maybe<GraphqlStringQueryOperatorInput>;
  readonly aspectRatio?: Maybe<GraphqlFloatQueryOperatorInput>;
  readonly src?: Maybe<GraphqlStringQueryOperatorInput>;
  readonly srcSet?: Maybe<GraphqlStringQueryOperatorInput>;
  readonly srcWebp?: Maybe<GraphqlStringQueryOperatorInput>;
  readonly srcSetWebp?: Maybe<GraphqlStringQueryOperatorInput>;
  readonly sizes?: Maybe<GraphqlStringQueryOperatorInput>;
  readonly originalImg?: Maybe<GraphqlStringQueryOperatorInput>;
  readonly originalName?: Maybe<GraphqlStringQueryOperatorInput>;
  readonly presentationWidth?: Maybe<GraphqlIntQueryOperatorInput>;
  readonly presentationHeight?: Maybe<GraphqlIntQueryOperatorInput>;
};

export type GraphqlImageSharpGroupConnection = {
  readonly totalCount: Scalars['Int'];
  readonly edges: ReadonlyArray<GraphqlImageSharpEdge>;
  readonly nodes: ReadonlyArray<GraphqlImageSharp>;
  readonly pageInfo: GraphqlPageInfo;
  readonly field: Scalars['String'];
  readonly fieldValue?: Maybe<Scalars['String']>;
};

export type GraphqlImageSharpOriginal = {
  readonly width?: Maybe<Scalars['Float']>;
  readonly height?: Maybe<Scalars['Float']>;
  readonly src?: Maybe<Scalars['String']>;
};

export type GraphqlImageSharpOriginalFilterInput = {
  readonly width?: Maybe<GraphqlFloatQueryOperatorInput>;
  readonly height?: Maybe<GraphqlFloatQueryOperatorInput>;
  readonly src?: Maybe<GraphqlStringQueryOperatorInput>;
};

export type GraphqlImageSharpResize = {
  readonly src?: Maybe<Scalars['String']>;
  readonly tracedSVG?: Maybe<Scalars['String']>;
  readonly width?: Maybe<Scalars['Int']>;
  readonly height?: Maybe<Scalars['Int']>;
  readonly aspectRatio?: Maybe<Scalars['Float']>;
  readonly originalName?: Maybe<Scalars['String']>;
};

export type GraphqlImageSharpResizeFilterInput = {
  readonly src?: Maybe<GraphqlStringQueryOperatorInput>;
  readonly tracedSVG?: Maybe<GraphqlStringQueryOperatorInput>;
  readonly width?: Maybe<GraphqlIntQueryOperatorInput>;
  readonly height?: Maybe<GraphqlIntQueryOperatorInput>;
  readonly aspectRatio?: Maybe<GraphqlFloatQueryOperatorInput>;
  readonly originalName?: Maybe<GraphqlStringQueryOperatorInput>;
};

export type GraphqlImageSharpResolutions = {
  readonly base64?: Maybe<Scalars['String']>;
  readonly tracedSVG?: Maybe<Scalars['String']>;
  readonly aspectRatio?: Maybe<Scalars['Float']>;
  readonly width: Scalars['Float'];
  readonly height: Scalars['Float'];
  readonly src: Scalars['String'];
  readonly srcSet: Scalars['String'];
  readonly srcWebp?: Maybe<Scalars['String']>;
  readonly srcSetWebp?: Maybe<Scalars['String']>;
  readonly originalName?: Maybe<Scalars['String']>;
};

export type GraphqlImageSharpResolutionsFilterInput = {
  readonly base64?: Maybe<GraphqlStringQueryOperatorInput>;
  readonly tracedSVG?: Maybe<GraphqlStringQueryOperatorInput>;
  readonly aspectRatio?: Maybe<GraphqlFloatQueryOperatorInput>;
  readonly width?: Maybe<GraphqlFloatQueryOperatorInput>;
  readonly height?: Maybe<GraphqlFloatQueryOperatorInput>;
  readonly src?: Maybe<GraphqlStringQueryOperatorInput>;
  readonly srcSet?: Maybe<GraphqlStringQueryOperatorInput>;
  readonly srcWebp?: Maybe<GraphqlStringQueryOperatorInput>;
  readonly srcSetWebp?: Maybe<GraphqlStringQueryOperatorInput>;
  readonly originalName?: Maybe<GraphqlStringQueryOperatorInput>;
};

export type GraphqlImageSharpSizes = {
  readonly base64?: Maybe<Scalars['String']>;
  readonly tracedSVG?: Maybe<Scalars['String']>;
  readonly aspectRatio: Scalars['Float'];
  readonly src: Scalars['String'];
  readonly srcSet: Scalars['String'];
  readonly srcWebp?: Maybe<Scalars['String']>;
  readonly srcSetWebp?: Maybe<Scalars['String']>;
  readonly sizes: Scalars['String'];
  readonly originalImg?: Maybe<Scalars['String']>;
  readonly originalName?: Maybe<Scalars['String']>;
  readonly presentationWidth?: Maybe<Scalars['Int']>;
  readonly presentationHeight?: Maybe<Scalars['Int']>;
};

export type GraphqlImageSharpSizesFilterInput = {
  readonly base64?: Maybe<GraphqlStringQueryOperatorInput>;
  readonly tracedSVG?: Maybe<GraphqlStringQueryOperatorInput>;
  readonly aspectRatio?: Maybe<GraphqlFloatQueryOperatorInput>;
  readonly src?: Maybe<GraphqlStringQueryOperatorInput>;
  readonly srcSet?: Maybe<GraphqlStringQueryOperatorInput>;
  readonly srcWebp?: Maybe<GraphqlStringQueryOperatorInput>;
  readonly srcSetWebp?: Maybe<GraphqlStringQueryOperatorInput>;
  readonly sizes?: Maybe<GraphqlStringQueryOperatorInput>;
  readonly originalImg?: Maybe<GraphqlStringQueryOperatorInput>;
  readonly originalName?: Maybe<GraphqlStringQueryOperatorInput>;
  readonly presentationWidth?: Maybe<GraphqlIntQueryOperatorInput>;
  readonly presentationHeight?: Maybe<GraphqlIntQueryOperatorInput>;
};

export type GraphqlImageSharpSortInput = {
  readonly fields?: Maybe<ReadonlyArray<Maybe<GraphqlImageSharpFieldsEnum>>>;
  readonly order?: Maybe<ReadonlyArray<Maybe<GraphqlSortOrderEnum>>>;
};

export type GraphqlInternal = {
  readonly content?: Maybe<Scalars['String']>;
  readonly contentDigest: Scalars['String'];
  readonly description?: Maybe<Scalars['String']>;
  readonly fieldOwners?: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  readonly ignoreType?: Maybe<Scalars['Boolean']>;
  readonly mediaType?: Maybe<Scalars['String']>;
  readonly owner: Scalars['String'];
  readonly type: Scalars['String'];
};

export type GraphqlInternalFilterInput = {
  readonly content?: Maybe<GraphqlStringQueryOperatorInput>;
  readonly contentDigest?: Maybe<GraphqlStringQueryOperatorInput>;
  readonly description?: Maybe<GraphqlStringQueryOperatorInput>;
  readonly fieldOwners?: Maybe<GraphqlStringQueryOperatorInput>;
  readonly ignoreType?: Maybe<GraphqlBooleanQueryOperatorInput>;
  readonly mediaType?: Maybe<GraphqlStringQueryOperatorInput>;
  readonly owner?: Maybe<GraphqlStringQueryOperatorInput>;
  readonly type?: Maybe<GraphqlStringQueryOperatorInput>;
};

export type GraphqlIntQueryOperatorInput = {
  readonly eq?: Maybe<Scalars['Int']>;
  readonly ne?: Maybe<Scalars['Int']>;
  readonly gt?: Maybe<Scalars['Int']>;
  readonly gte?: Maybe<Scalars['Int']>;
  readonly lt?: Maybe<Scalars['Int']>;
  readonly lte?: Maybe<Scalars['Int']>;
  readonly in?: Maybe<ReadonlyArray<Maybe<Scalars['Int']>>>;
  readonly nin?: Maybe<ReadonlyArray<Maybe<Scalars['Int']>>>;
};


/** Node Interface */
export type GraphqlNode = {
  readonly id: Scalars['ID'];
  readonly parent?: Maybe<GraphqlNode>;
  readonly children: ReadonlyArray<GraphqlNode>;
  readonly internal: GraphqlInternal;
};

export type GraphqlNodeFilterInput = {
  readonly id?: Maybe<GraphqlStringQueryOperatorInput>;
  readonly parent?: Maybe<GraphqlNodeFilterInput>;
  readonly children?: Maybe<GraphqlNodeFilterListInput>;
  readonly internal?: Maybe<GraphqlInternalFilterInput>;
};

export type GraphqlNodeFilterListInput = {
  readonly elemMatch?: Maybe<GraphqlNodeFilterInput>;
};

export type GraphqlPageInfo = {
  readonly currentPage: Scalars['Int'];
  readonly hasPreviousPage: Scalars['Boolean'];
  readonly hasNextPage: Scalars['Boolean'];
  readonly itemCount: Scalars['Int'];
  readonly pageCount: Scalars['Int'];
  readonly perPage?: Maybe<Scalars['Int']>;
};

export type GraphqlPotrace = {
  readonly turnPolicy?: Maybe<GraphqlPotraceTurnPolicy>;
  readonly turdSize?: Maybe<Scalars['Float']>;
  readonly alphaMax?: Maybe<Scalars['Float']>;
  readonly optCurve?: Maybe<Scalars['Boolean']>;
  readonly optTolerance?: Maybe<Scalars['Float']>;
  readonly threshold?: Maybe<Scalars['Int']>;
  readonly blackOnWhite?: Maybe<Scalars['Boolean']>;
  readonly color?: Maybe<Scalars['String']>;
  readonly background?: Maybe<Scalars['String']>;
};

export type GraphqlPotraceTurnPolicy = 
  'TURNPOLICY_BLACK' |
  'TURNPOLICY_WHITE' |
  'TURNPOLICY_LEFT' |
  'TURNPOLICY_RIGHT' |
  'TURNPOLICY_MINORITY' |
  'TURNPOLICY_MAJORITY';

export type GraphqlQuery = {
  readonly file?: Maybe<GraphqlFile>;
  readonly allFile: GraphqlFileConnection;
  readonly directory?: Maybe<GraphqlDirectory>;
  readonly allDirectory: GraphqlDirectoryConnection;
  readonly sitePage?: Maybe<GraphqlSitePage>;
  readonly allSitePage: GraphqlSitePageConnection;
  readonly site?: Maybe<GraphqlSite>;
  readonly allSite: GraphqlSiteConnection;
  readonly imageSharp?: Maybe<GraphqlImageSharp>;
  readonly allImageSharp: GraphqlImageSharpConnection;
  readonly contentfulAsset?: Maybe<GraphqlContentfulAsset>;
  readonly allContentfulAsset: GraphqlContentfulAssetConnection;
  readonly contentfulArticlesTextTextNode?: Maybe<GraphqlContentfulArticlesTextTextNode>;
  readonly allContentfulArticlesTextTextNode: GraphqlContentfulArticlesTextTextNodeConnection;
  readonly contentfulArticles?: Maybe<GraphqlContentfulArticles>;
  readonly allContentfulArticles: GraphqlContentfulArticlesConnection;
  readonly contentfulContentType?: Maybe<GraphqlContentfulContentType>;
  readonly allContentfulContentType: GraphqlContentfulContentTypeConnection;
  readonly siteBuildMetadata?: Maybe<GraphqlSiteBuildMetadata>;
  readonly allSiteBuildMetadata: GraphqlSiteBuildMetadataConnection;
  readonly sitePlugin?: Maybe<GraphqlSitePlugin>;
  readonly allSitePlugin: GraphqlSitePluginConnection;
};


export type GraphqlQueryFileArgs = {
  sourceInstanceName: Maybe<GraphqlStringQueryOperatorInput>;
  absolutePath: Maybe<GraphqlStringQueryOperatorInput>;
  relativePath: Maybe<GraphqlStringQueryOperatorInput>;
  extension: Maybe<GraphqlStringQueryOperatorInput>;
  size: Maybe<GraphqlIntQueryOperatorInput>;
  prettySize: Maybe<GraphqlStringQueryOperatorInput>;
  modifiedTime: Maybe<GraphqlDateQueryOperatorInput>;
  accessTime: Maybe<GraphqlDateQueryOperatorInput>;
  changeTime: Maybe<GraphqlDateQueryOperatorInput>;
  birthTime: Maybe<GraphqlDateQueryOperatorInput>;
  root: Maybe<GraphqlStringQueryOperatorInput>;
  dir: Maybe<GraphqlStringQueryOperatorInput>;
  base: Maybe<GraphqlStringQueryOperatorInput>;
  ext: Maybe<GraphqlStringQueryOperatorInput>;
  name: Maybe<GraphqlStringQueryOperatorInput>;
  relativeDirectory: Maybe<GraphqlStringQueryOperatorInput>;
  dev: Maybe<GraphqlIntQueryOperatorInput>;
  mode: Maybe<GraphqlIntQueryOperatorInput>;
  nlink: Maybe<GraphqlIntQueryOperatorInput>;
  uid: Maybe<GraphqlIntQueryOperatorInput>;
  gid: Maybe<GraphqlIntQueryOperatorInput>;
  rdev: Maybe<GraphqlIntQueryOperatorInput>;
  ino: Maybe<GraphqlFloatQueryOperatorInput>;
  atimeMs: Maybe<GraphqlFloatQueryOperatorInput>;
  mtimeMs: Maybe<GraphqlFloatQueryOperatorInput>;
  ctimeMs: Maybe<GraphqlFloatQueryOperatorInput>;
  atime: Maybe<GraphqlDateQueryOperatorInput>;
  mtime: Maybe<GraphqlDateQueryOperatorInput>;
  ctime: Maybe<GraphqlDateQueryOperatorInput>;
  birthtime: Maybe<GraphqlDateQueryOperatorInput>;
  birthtimeMs: Maybe<GraphqlFloatQueryOperatorInput>;
  publicURL: Maybe<GraphqlStringQueryOperatorInput>;
  childImageSharp: Maybe<GraphqlImageSharpFilterInput>;
  id: Maybe<GraphqlStringQueryOperatorInput>;
  parent: Maybe<GraphqlNodeFilterInput>;
  children: Maybe<GraphqlNodeFilterListInput>;
  internal: Maybe<GraphqlInternalFilterInput>;
};


export type GraphqlQueryAllFileArgs = {
  filter: Maybe<GraphqlFileFilterInput>;
  sort: Maybe<GraphqlFileSortInput>;
  skip: Maybe<Scalars['Int']>;
  limit: Maybe<Scalars['Int']>;
};


export type GraphqlQueryDirectoryArgs = {
  sourceInstanceName: Maybe<GraphqlStringQueryOperatorInput>;
  absolutePath: Maybe<GraphqlStringQueryOperatorInput>;
  relativePath: Maybe<GraphqlStringQueryOperatorInput>;
  extension: Maybe<GraphqlStringQueryOperatorInput>;
  size: Maybe<GraphqlIntQueryOperatorInput>;
  prettySize: Maybe<GraphqlStringQueryOperatorInput>;
  modifiedTime: Maybe<GraphqlDateQueryOperatorInput>;
  accessTime: Maybe<GraphqlDateQueryOperatorInput>;
  changeTime: Maybe<GraphqlDateQueryOperatorInput>;
  birthTime: Maybe<GraphqlDateQueryOperatorInput>;
  root: Maybe<GraphqlStringQueryOperatorInput>;
  dir: Maybe<GraphqlStringQueryOperatorInput>;
  base: Maybe<GraphqlStringQueryOperatorInput>;
  ext: Maybe<GraphqlStringQueryOperatorInput>;
  name: Maybe<GraphqlStringQueryOperatorInput>;
  relativeDirectory: Maybe<GraphqlStringQueryOperatorInput>;
  dev: Maybe<GraphqlIntQueryOperatorInput>;
  mode: Maybe<GraphqlIntQueryOperatorInput>;
  nlink: Maybe<GraphqlIntQueryOperatorInput>;
  uid: Maybe<GraphqlIntQueryOperatorInput>;
  gid: Maybe<GraphqlIntQueryOperatorInput>;
  rdev: Maybe<GraphqlIntQueryOperatorInput>;
  ino: Maybe<GraphqlFloatQueryOperatorInput>;
  atimeMs: Maybe<GraphqlFloatQueryOperatorInput>;
  mtimeMs: Maybe<GraphqlFloatQueryOperatorInput>;
  ctimeMs: Maybe<GraphqlFloatQueryOperatorInput>;
  atime: Maybe<GraphqlDateQueryOperatorInput>;
  mtime: Maybe<GraphqlDateQueryOperatorInput>;
  ctime: Maybe<GraphqlDateQueryOperatorInput>;
  birthtime: Maybe<GraphqlDateQueryOperatorInput>;
  birthtimeMs: Maybe<GraphqlFloatQueryOperatorInput>;
  blksize: Maybe<GraphqlIntQueryOperatorInput>;
  blocks: Maybe<GraphqlIntQueryOperatorInput>;
  id: Maybe<GraphqlStringQueryOperatorInput>;
  parent: Maybe<GraphqlNodeFilterInput>;
  children: Maybe<GraphqlNodeFilterListInput>;
  internal: Maybe<GraphqlInternalFilterInput>;
};


export type GraphqlQueryAllDirectoryArgs = {
  filter: Maybe<GraphqlDirectoryFilterInput>;
  sort: Maybe<GraphqlDirectorySortInput>;
  skip: Maybe<Scalars['Int']>;
  limit: Maybe<Scalars['Int']>;
};


export type GraphqlQuerySitePageArgs = {
  path: Maybe<GraphqlStringQueryOperatorInput>;
  component: Maybe<GraphqlStringQueryOperatorInput>;
  internalComponentName: Maybe<GraphqlStringQueryOperatorInput>;
  componentChunkName: Maybe<GraphqlStringQueryOperatorInput>;
  matchPath: Maybe<GraphqlStringQueryOperatorInput>;
  id: Maybe<GraphqlStringQueryOperatorInput>;
  parent: Maybe<GraphqlNodeFilterInput>;
  children: Maybe<GraphqlNodeFilterListInput>;
  internal: Maybe<GraphqlInternalFilterInput>;
  isCreatedByStatefulCreatePages: Maybe<GraphqlBooleanQueryOperatorInput>;
  pluginCreator: Maybe<GraphqlSitePluginFilterInput>;
  pluginCreatorId: Maybe<GraphqlStringQueryOperatorInput>;
  componentPath: Maybe<GraphqlStringQueryOperatorInput>;
};


export type GraphqlQueryAllSitePageArgs = {
  filter: Maybe<GraphqlSitePageFilterInput>;
  sort: Maybe<GraphqlSitePageSortInput>;
  skip: Maybe<Scalars['Int']>;
  limit: Maybe<Scalars['Int']>;
};


export type GraphqlQuerySiteArgs = {
  buildTime: Maybe<GraphqlDateQueryOperatorInput>;
  siteMetadata: Maybe<GraphqlSiteSiteMetadataFilterInput>;
  port: Maybe<GraphqlIntQueryOperatorInput>;
  host: Maybe<GraphqlStringQueryOperatorInput>;
  pathPrefix: Maybe<GraphqlStringQueryOperatorInput>;
  polyfill: Maybe<GraphqlBooleanQueryOperatorInput>;
  id: Maybe<GraphqlStringQueryOperatorInput>;
  parent: Maybe<GraphqlNodeFilterInput>;
  children: Maybe<GraphqlNodeFilterListInput>;
  internal: Maybe<GraphqlInternalFilterInput>;
};


export type GraphqlQueryAllSiteArgs = {
  filter: Maybe<GraphqlSiteFilterInput>;
  sort: Maybe<GraphqlSiteSortInput>;
  skip: Maybe<Scalars['Int']>;
  limit: Maybe<Scalars['Int']>;
};


export type GraphqlQueryImageSharpArgs = {
  fixed: Maybe<GraphqlImageSharpFixedFilterInput>;
  resolutions: Maybe<GraphqlImageSharpResolutionsFilterInput>;
  fluid: Maybe<GraphqlImageSharpFluidFilterInput>;
  sizes: Maybe<GraphqlImageSharpSizesFilterInput>;
  original: Maybe<GraphqlImageSharpOriginalFilterInput>;
  resize: Maybe<GraphqlImageSharpResizeFilterInput>;
  id: Maybe<GraphqlStringQueryOperatorInput>;
  parent: Maybe<GraphqlNodeFilterInput>;
  children: Maybe<GraphqlNodeFilterListInput>;
  internal: Maybe<GraphqlInternalFilterInput>;
};


export type GraphqlQueryAllImageSharpArgs = {
  filter: Maybe<GraphqlImageSharpFilterInput>;
  sort: Maybe<GraphqlImageSharpSortInput>;
  skip: Maybe<Scalars['Int']>;
  limit: Maybe<Scalars['Int']>;
};


export type GraphqlQueryContentfulAssetArgs = {
  id: Maybe<GraphqlStringQueryOperatorInput>;
  parent: Maybe<GraphqlNodeFilterInput>;
  children: Maybe<GraphqlNodeFilterListInput>;
  internal: Maybe<GraphqlInternalFilterInput>;
  contentful_id: Maybe<GraphqlStringQueryOperatorInput>;
  file: Maybe<GraphqlContentfulAssetFileFilterInput>;
  title: Maybe<GraphqlStringQueryOperatorInput>;
  description: Maybe<GraphqlStringQueryOperatorInput>;
  node_locale: Maybe<GraphqlStringQueryOperatorInput>;
  fixed: Maybe<GraphqlContentfulFixedFilterInput>;
  resolutions: Maybe<GraphqlContentfulResolutionsFilterInput>;
  fluid: Maybe<GraphqlContentfulFluidFilterInput>;
  sizes: Maybe<GraphqlContentfulSizesFilterInput>;
  resize: Maybe<GraphqlContentfulResizeFilterInput>;
};


export type GraphqlQueryAllContentfulAssetArgs = {
  filter: Maybe<GraphqlContentfulAssetFilterInput>;
  sort: Maybe<GraphqlContentfulAssetSortInput>;
  skip: Maybe<Scalars['Int']>;
  limit: Maybe<Scalars['Int']>;
};


export type GraphqlQueryContentfulArticlesTextTextNodeArgs = {
  id: Maybe<GraphqlStringQueryOperatorInput>;
  parent: Maybe<GraphqlNodeFilterInput>;
  children: Maybe<GraphqlNodeFilterListInput>;
  internal: Maybe<GraphqlInternalFilterInput>;
  text: Maybe<GraphqlStringQueryOperatorInput>;
};


export type GraphqlQueryAllContentfulArticlesTextTextNodeArgs = {
  filter: Maybe<GraphqlContentfulArticlesTextTextNodeFilterInput>;
  sort: Maybe<GraphqlContentfulArticlesTextTextNodeSortInput>;
  skip: Maybe<Scalars['Int']>;
  limit: Maybe<Scalars['Int']>;
};


export type GraphqlQueryContentfulArticlesArgs = {
  id: Maybe<GraphqlStringQueryOperatorInput>;
  parent: Maybe<GraphqlNodeFilterInput>;
  children: Maybe<GraphqlNodeFilterListInput>;
  internal: Maybe<GraphqlInternalFilterInput>;
  step: Maybe<GraphqlStringQueryOperatorInput>;
  title: Maybe<GraphqlStringQueryOperatorInput>;
  pictures: Maybe<GraphqlContentfulAssetFilterListInput>;
  text: Maybe<GraphqlContentfulArticlesTextTextNodeFilterInput>;
  spaceId: Maybe<GraphqlStringQueryOperatorInput>;
  contentful_id: Maybe<GraphqlStringQueryOperatorInput>;
  createdAt: Maybe<GraphqlDateQueryOperatorInput>;
  updatedAt: Maybe<GraphqlDateQueryOperatorInput>;
  sys: Maybe<GraphqlContentfulArticlesSysFilterInput>;
  node_locale: Maybe<GraphqlStringQueryOperatorInput>;
  childContentfulArticlesTextTextNode: Maybe<GraphqlContentfulArticlesTextTextNodeFilterInput>;
};


export type GraphqlQueryAllContentfulArticlesArgs = {
  filter: Maybe<GraphqlContentfulArticlesFilterInput>;
  sort: Maybe<GraphqlContentfulArticlesSortInput>;
  skip: Maybe<Scalars['Int']>;
  limit: Maybe<Scalars['Int']>;
};


export type GraphqlQueryContentfulContentTypeArgs = {
  id: Maybe<GraphqlStringQueryOperatorInput>;
  parent: Maybe<GraphqlNodeFilterInput>;
  children: Maybe<GraphqlNodeFilterListInput>;
  internal: Maybe<GraphqlInternalFilterInput>;
  name: Maybe<GraphqlStringQueryOperatorInput>;
  displayField: Maybe<GraphqlStringQueryOperatorInput>;
  description: Maybe<GraphqlStringQueryOperatorInput>;
};


export type GraphqlQueryAllContentfulContentTypeArgs = {
  filter: Maybe<GraphqlContentfulContentTypeFilterInput>;
  sort: Maybe<GraphqlContentfulContentTypeSortInput>;
  skip: Maybe<Scalars['Int']>;
  limit: Maybe<Scalars['Int']>;
};


export type GraphqlQuerySiteBuildMetadataArgs = {
  id: Maybe<GraphqlStringQueryOperatorInput>;
  parent: Maybe<GraphqlNodeFilterInput>;
  children: Maybe<GraphqlNodeFilterListInput>;
  internal: Maybe<GraphqlInternalFilterInput>;
  buildTime: Maybe<GraphqlDateQueryOperatorInput>;
};


export type GraphqlQueryAllSiteBuildMetadataArgs = {
  filter: Maybe<GraphqlSiteBuildMetadataFilterInput>;
  sort: Maybe<GraphqlSiteBuildMetadataSortInput>;
  skip: Maybe<Scalars['Int']>;
  limit: Maybe<Scalars['Int']>;
};


export type GraphqlQuerySitePluginArgs = {
  id: Maybe<GraphqlStringQueryOperatorInput>;
  parent: Maybe<GraphqlNodeFilterInput>;
  children: Maybe<GraphqlNodeFilterListInput>;
  internal: Maybe<GraphqlInternalFilterInput>;
  resolve: Maybe<GraphqlStringQueryOperatorInput>;
  name: Maybe<GraphqlStringQueryOperatorInput>;
  version: Maybe<GraphqlStringQueryOperatorInput>;
  pluginOptions: Maybe<GraphqlSitePluginPluginOptionsFilterInput>;
  nodeAPIs: Maybe<GraphqlStringQueryOperatorInput>;
  browserAPIs: Maybe<GraphqlStringQueryOperatorInput>;
  ssrAPIs: Maybe<GraphqlStringQueryOperatorInput>;
  pluginFilepath: Maybe<GraphqlStringQueryOperatorInput>;
  packageJson: Maybe<GraphqlSitePluginPackageJsonFilterInput>;
};


export type GraphqlQueryAllSitePluginArgs = {
  filter: Maybe<GraphqlSitePluginFilterInput>;
  sort: Maybe<GraphqlSitePluginSortInput>;
  skip: Maybe<Scalars['Int']>;
  limit: Maybe<Scalars['Int']>;
};

export type GraphqlSite = GraphqlNode & {
  readonly buildTime?: Maybe<Scalars['Date']>;
  readonly siteMetadata?: Maybe<GraphqlSiteSiteMetadata>;
  readonly port?: Maybe<Scalars['Int']>;
  readonly host?: Maybe<Scalars['String']>;
  readonly pathPrefix?: Maybe<Scalars['String']>;
  readonly polyfill?: Maybe<Scalars['Boolean']>;
  readonly id: Scalars['ID'];
  readonly parent?: Maybe<GraphqlNode>;
  readonly children: ReadonlyArray<GraphqlNode>;
  readonly internal: GraphqlInternal;
};


export type GraphqlSiteBuildTimeArgs = {
  formatString: Maybe<Scalars['String']>;
  fromNow: Maybe<Scalars['Boolean']>;
  difference: Maybe<Scalars['String']>;
  locale: Maybe<Scalars['String']>;
};

export type GraphqlSiteBuildMetadata = GraphqlNode & {
  readonly id: Scalars['ID'];
  readonly parent?: Maybe<GraphqlNode>;
  readonly children: ReadonlyArray<GraphqlNode>;
  readonly internal: GraphqlInternal;
  readonly buildTime?: Maybe<Scalars['Date']>;
};


export type GraphqlSiteBuildMetadataBuildTimeArgs = {
  formatString: Maybe<Scalars['String']>;
  fromNow: Maybe<Scalars['Boolean']>;
  difference: Maybe<Scalars['String']>;
  locale: Maybe<Scalars['String']>;
};

export type GraphqlSiteBuildMetadataConnection = {
  readonly totalCount: Scalars['Int'];
  readonly edges: ReadonlyArray<GraphqlSiteBuildMetadataEdge>;
  readonly nodes: ReadonlyArray<GraphqlSiteBuildMetadata>;
  readonly pageInfo: GraphqlPageInfo;
  readonly distinct: ReadonlyArray<Scalars['String']>;
  readonly group: ReadonlyArray<GraphqlSiteBuildMetadataGroupConnection>;
};


export type GraphqlSiteBuildMetadataConnectionDistinctArgs = {
  field: GraphqlSiteBuildMetadataFieldsEnum;
};


export type GraphqlSiteBuildMetadataConnectionGroupArgs = {
  skip: Maybe<Scalars['Int']>;
  limit: Maybe<Scalars['Int']>;
  field: GraphqlSiteBuildMetadataFieldsEnum;
};

export type GraphqlSiteBuildMetadataEdge = {
  readonly next?: Maybe<GraphqlSiteBuildMetadata>;
  readonly node: GraphqlSiteBuildMetadata;
  readonly previous?: Maybe<GraphqlSiteBuildMetadata>;
};

export type GraphqlSiteBuildMetadataFieldsEnum = 
  'id' |
  'parent___id' |
  'parent___parent___id' |
  'parent___parent___parent___id' |
  'parent___parent___parent___children' |
  'parent___parent___children' |
  'parent___parent___children___id' |
  'parent___parent___children___children' |
  'parent___parent___internal___content' |
  'parent___parent___internal___contentDigest' |
  'parent___parent___internal___description' |
  'parent___parent___internal___fieldOwners' |
  'parent___parent___internal___ignoreType' |
  'parent___parent___internal___mediaType' |
  'parent___parent___internal___owner' |
  'parent___parent___internal___type' |
  'parent___children' |
  'parent___children___id' |
  'parent___children___parent___id' |
  'parent___children___parent___children' |
  'parent___children___children' |
  'parent___children___children___id' |
  'parent___children___children___children' |
  'parent___children___internal___content' |
  'parent___children___internal___contentDigest' |
  'parent___children___internal___description' |
  'parent___children___internal___fieldOwners' |
  'parent___children___internal___ignoreType' |
  'parent___children___internal___mediaType' |
  'parent___children___internal___owner' |
  'parent___children___internal___type' |
  'parent___internal___content' |
  'parent___internal___contentDigest' |
  'parent___internal___description' |
  'parent___internal___fieldOwners' |
  'parent___internal___ignoreType' |
  'parent___internal___mediaType' |
  'parent___internal___owner' |
  'parent___internal___type' |
  'children' |
  'children___id' |
  'children___parent___id' |
  'children___parent___parent___id' |
  'children___parent___parent___children' |
  'children___parent___children' |
  'children___parent___children___id' |
  'children___parent___children___children' |
  'children___parent___internal___content' |
  'children___parent___internal___contentDigest' |
  'children___parent___internal___description' |
  'children___parent___internal___fieldOwners' |
  'children___parent___internal___ignoreType' |
  'children___parent___internal___mediaType' |
  'children___parent___internal___owner' |
  'children___parent___internal___type' |
  'children___children' |
  'children___children___id' |
  'children___children___parent___id' |
  'children___children___parent___children' |
  'children___children___children' |
  'children___children___children___id' |
  'children___children___children___children' |
  'children___children___internal___content' |
  'children___children___internal___contentDigest' |
  'children___children___internal___description' |
  'children___children___internal___fieldOwners' |
  'children___children___internal___ignoreType' |
  'children___children___internal___mediaType' |
  'children___children___internal___owner' |
  'children___children___internal___type' |
  'children___internal___content' |
  'children___internal___contentDigest' |
  'children___internal___description' |
  'children___internal___fieldOwners' |
  'children___internal___ignoreType' |
  'children___internal___mediaType' |
  'children___internal___owner' |
  'children___internal___type' |
  'internal___content' |
  'internal___contentDigest' |
  'internal___description' |
  'internal___fieldOwners' |
  'internal___ignoreType' |
  'internal___mediaType' |
  'internal___owner' |
  'internal___type' |
  'buildTime';

export type GraphqlSiteBuildMetadataFilterInput = {
  readonly id?: Maybe<GraphqlStringQueryOperatorInput>;
  readonly parent?: Maybe<GraphqlNodeFilterInput>;
  readonly children?: Maybe<GraphqlNodeFilterListInput>;
  readonly internal?: Maybe<GraphqlInternalFilterInput>;
  readonly buildTime?: Maybe<GraphqlDateQueryOperatorInput>;
};

export type GraphqlSiteBuildMetadataGroupConnection = {
  readonly totalCount: Scalars['Int'];
  readonly edges: ReadonlyArray<GraphqlSiteBuildMetadataEdge>;
  readonly nodes: ReadonlyArray<GraphqlSiteBuildMetadata>;
  readonly pageInfo: GraphqlPageInfo;
  readonly field: Scalars['String'];
  readonly fieldValue?: Maybe<Scalars['String']>;
};

export type GraphqlSiteBuildMetadataSortInput = {
  readonly fields?: Maybe<ReadonlyArray<Maybe<GraphqlSiteBuildMetadataFieldsEnum>>>;
  readonly order?: Maybe<ReadonlyArray<Maybe<GraphqlSortOrderEnum>>>;
};

export type GraphqlSiteConnection = {
  readonly totalCount: Scalars['Int'];
  readonly edges: ReadonlyArray<GraphqlSiteEdge>;
  readonly nodes: ReadonlyArray<GraphqlSite>;
  readonly pageInfo: GraphqlPageInfo;
  readonly distinct: ReadonlyArray<Scalars['String']>;
  readonly group: ReadonlyArray<GraphqlSiteGroupConnection>;
};


export type GraphqlSiteConnectionDistinctArgs = {
  field: GraphqlSiteFieldsEnum;
};


export type GraphqlSiteConnectionGroupArgs = {
  skip: Maybe<Scalars['Int']>;
  limit: Maybe<Scalars['Int']>;
  field: GraphqlSiteFieldsEnum;
};

export type GraphqlSiteEdge = {
  readonly next?: Maybe<GraphqlSite>;
  readonly node: GraphqlSite;
  readonly previous?: Maybe<GraphqlSite>;
};

export type GraphqlSiteFieldsEnum = 
  'buildTime' |
  'siteMetadata___title' |
  'siteMetadata___description' |
  'siteMetadata___author' |
  'port' |
  'host' |
  'pathPrefix' |
  'polyfill' |
  'id' |
  'parent___id' |
  'parent___parent___id' |
  'parent___parent___parent___id' |
  'parent___parent___parent___children' |
  'parent___parent___children' |
  'parent___parent___children___id' |
  'parent___parent___children___children' |
  'parent___parent___internal___content' |
  'parent___parent___internal___contentDigest' |
  'parent___parent___internal___description' |
  'parent___parent___internal___fieldOwners' |
  'parent___parent___internal___ignoreType' |
  'parent___parent___internal___mediaType' |
  'parent___parent___internal___owner' |
  'parent___parent___internal___type' |
  'parent___children' |
  'parent___children___id' |
  'parent___children___parent___id' |
  'parent___children___parent___children' |
  'parent___children___children' |
  'parent___children___children___id' |
  'parent___children___children___children' |
  'parent___children___internal___content' |
  'parent___children___internal___contentDigest' |
  'parent___children___internal___description' |
  'parent___children___internal___fieldOwners' |
  'parent___children___internal___ignoreType' |
  'parent___children___internal___mediaType' |
  'parent___children___internal___owner' |
  'parent___children___internal___type' |
  'parent___internal___content' |
  'parent___internal___contentDigest' |
  'parent___internal___description' |
  'parent___internal___fieldOwners' |
  'parent___internal___ignoreType' |
  'parent___internal___mediaType' |
  'parent___internal___owner' |
  'parent___internal___type' |
  'children' |
  'children___id' |
  'children___parent___id' |
  'children___parent___parent___id' |
  'children___parent___parent___children' |
  'children___parent___children' |
  'children___parent___children___id' |
  'children___parent___children___children' |
  'children___parent___internal___content' |
  'children___parent___internal___contentDigest' |
  'children___parent___internal___description' |
  'children___parent___internal___fieldOwners' |
  'children___parent___internal___ignoreType' |
  'children___parent___internal___mediaType' |
  'children___parent___internal___owner' |
  'children___parent___internal___type' |
  'children___children' |
  'children___children___id' |
  'children___children___parent___id' |
  'children___children___parent___children' |
  'children___children___children' |
  'children___children___children___id' |
  'children___children___children___children' |
  'children___children___internal___content' |
  'children___children___internal___contentDigest' |
  'children___children___internal___description' |
  'children___children___internal___fieldOwners' |
  'children___children___internal___ignoreType' |
  'children___children___internal___mediaType' |
  'children___children___internal___owner' |
  'children___children___internal___type' |
  'children___internal___content' |
  'children___internal___contentDigest' |
  'children___internal___description' |
  'children___internal___fieldOwners' |
  'children___internal___ignoreType' |
  'children___internal___mediaType' |
  'children___internal___owner' |
  'children___internal___type' |
  'internal___content' |
  'internal___contentDigest' |
  'internal___description' |
  'internal___fieldOwners' |
  'internal___ignoreType' |
  'internal___mediaType' |
  'internal___owner' |
  'internal___type';

export type GraphqlSiteFilterInput = {
  readonly buildTime?: Maybe<GraphqlDateQueryOperatorInput>;
  readonly siteMetadata?: Maybe<GraphqlSiteSiteMetadataFilterInput>;
  readonly port?: Maybe<GraphqlIntQueryOperatorInput>;
  readonly host?: Maybe<GraphqlStringQueryOperatorInput>;
  readonly pathPrefix?: Maybe<GraphqlStringQueryOperatorInput>;
  readonly polyfill?: Maybe<GraphqlBooleanQueryOperatorInput>;
  readonly id?: Maybe<GraphqlStringQueryOperatorInput>;
  readonly parent?: Maybe<GraphqlNodeFilterInput>;
  readonly children?: Maybe<GraphqlNodeFilterListInput>;
  readonly internal?: Maybe<GraphqlInternalFilterInput>;
};

export type GraphqlSiteGroupConnection = {
  readonly totalCount: Scalars['Int'];
  readonly edges: ReadonlyArray<GraphqlSiteEdge>;
  readonly nodes: ReadonlyArray<GraphqlSite>;
  readonly pageInfo: GraphqlPageInfo;
  readonly field: Scalars['String'];
  readonly fieldValue?: Maybe<Scalars['String']>;
};

export type GraphqlSitePage = GraphqlNode & {
  readonly path: Scalars['String'];
  readonly component: Scalars['String'];
  readonly internalComponentName: Scalars['String'];
  readonly componentChunkName: Scalars['String'];
  readonly matchPath?: Maybe<Scalars['String']>;
  readonly id: Scalars['ID'];
  readonly parent?: Maybe<GraphqlNode>;
  readonly children: ReadonlyArray<GraphqlNode>;
  readonly internal: GraphqlInternal;
  readonly isCreatedByStatefulCreatePages?: Maybe<Scalars['Boolean']>;
  readonly pluginCreator?: Maybe<GraphqlSitePlugin>;
  readonly pluginCreatorId?: Maybe<Scalars['String']>;
  readonly componentPath?: Maybe<Scalars['String']>;
};

export type GraphqlSitePageConnection = {
  readonly totalCount: Scalars['Int'];
  readonly edges: ReadonlyArray<GraphqlSitePageEdge>;
  readonly nodes: ReadonlyArray<GraphqlSitePage>;
  readonly pageInfo: GraphqlPageInfo;
  readonly distinct: ReadonlyArray<Scalars['String']>;
  readonly group: ReadonlyArray<GraphqlSitePageGroupConnection>;
};


export type GraphqlSitePageConnectionDistinctArgs = {
  field: GraphqlSitePageFieldsEnum;
};


export type GraphqlSitePageConnectionGroupArgs = {
  skip: Maybe<Scalars['Int']>;
  limit: Maybe<Scalars['Int']>;
  field: GraphqlSitePageFieldsEnum;
};

export type GraphqlSitePageEdge = {
  readonly next?: Maybe<GraphqlSitePage>;
  readonly node: GraphqlSitePage;
  readonly previous?: Maybe<GraphqlSitePage>;
};

export type GraphqlSitePageFieldsEnum = 
  'path' |
  'component' |
  'internalComponentName' |
  'componentChunkName' |
  'matchPath' |
  'id' |
  'parent___id' |
  'parent___parent___id' |
  'parent___parent___parent___id' |
  'parent___parent___parent___children' |
  'parent___parent___children' |
  'parent___parent___children___id' |
  'parent___parent___children___children' |
  'parent___parent___internal___content' |
  'parent___parent___internal___contentDigest' |
  'parent___parent___internal___description' |
  'parent___parent___internal___fieldOwners' |
  'parent___parent___internal___ignoreType' |
  'parent___parent___internal___mediaType' |
  'parent___parent___internal___owner' |
  'parent___parent___internal___type' |
  'parent___children' |
  'parent___children___id' |
  'parent___children___parent___id' |
  'parent___children___parent___children' |
  'parent___children___children' |
  'parent___children___children___id' |
  'parent___children___children___children' |
  'parent___children___internal___content' |
  'parent___children___internal___contentDigest' |
  'parent___children___internal___description' |
  'parent___children___internal___fieldOwners' |
  'parent___children___internal___ignoreType' |
  'parent___children___internal___mediaType' |
  'parent___children___internal___owner' |
  'parent___children___internal___type' |
  'parent___internal___content' |
  'parent___internal___contentDigest' |
  'parent___internal___description' |
  'parent___internal___fieldOwners' |
  'parent___internal___ignoreType' |
  'parent___internal___mediaType' |
  'parent___internal___owner' |
  'parent___internal___type' |
  'children' |
  'children___id' |
  'children___parent___id' |
  'children___parent___parent___id' |
  'children___parent___parent___children' |
  'children___parent___children' |
  'children___parent___children___id' |
  'children___parent___children___children' |
  'children___parent___internal___content' |
  'children___parent___internal___contentDigest' |
  'children___parent___internal___description' |
  'children___parent___internal___fieldOwners' |
  'children___parent___internal___ignoreType' |
  'children___parent___internal___mediaType' |
  'children___parent___internal___owner' |
  'children___parent___internal___type' |
  'children___children' |
  'children___children___id' |
  'children___children___parent___id' |
  'children___children___parent___children' |
  'children___children___children' |
  'children___children___children___id' |
  'children___children___children___children' |
  'children___children___internal___content' |
  'children___children___internal___contentDigest' |
  'children___children___internal___description' |
  'children___children___internal___fieldOwners' |
  'children___children___internal___ignoreType' |
  'children___children___internal___mediaType' |
  'children___children___internal___owner' |
  'children___children___internal___type' |
  'children___internal___content' |
  'children___internal___contentDigest' |
  'children___internal___description' |
  'children___internal___fieldOwners' |
  'children___internal___ignoreType' |
  'children___internal___mediaType' |
  'children___internal___owner' |
  'children___internal___type' |
  'internal___content' |
  'internal___contentDigest' |
  'internal___description' |
  'internal___fieldOwners' |
  'internal___ignoreType' |
  'internal___mediaType' |
  'internal___owner' |
  'internal___type' |
  'isCreatedByStatefulCreatePages' |
  'pluginCreator___id' |
  'pluginCreator___parent___id' |
  'pluginCreator___parent___parent___id' |
  'pluginCreator___parent___parent___children' |
  'pluginCreator___parent___children' |
  'pluginCreator___parent___children___id' |
  'pluginCreator___parent___children___children' |
  'pluginCreator___parent___internal___content' |
  'pluginCreator___parent___internal___contentDigest' |
  'pluginCreator___parent___internal___description' |
  'pluginCreator___parent___internal___fieldOwners' |
  'pluginCreator___parent___internal___ignoreType' |
  'pluginCreator___parent___internal___mediaType' |
  'pluginCreator___parent___internal___owner' |
  'pluginCreator___parent___internal___type' |
  'pluginCreator___children' |
  'pluginCreator___children___id' |
  'pluginCreator___children___parent___id' |
  'pluginCreator___children___parent___children' |
  'pluginCreator___children___children' |
  'pluginCreator___children___children___id' |
  'pluginCreator___children___children___children' |
  'pluginCreator___children___internal___content' |
  'pluginCreator___children___internal___contentDigest' |
  'pluginCreator___children___internal___description' |
  'pluginCreator___children___internal___fieldOwners' |
  'pluginCreator___children___internal___ignoreType' |
  'pluginCreator___children___internal___mediaType' |
  'pluginCreator___children___internal___owner' |
  'pluginCreator___children___internal___type' |
  'pluginCreator___internal___content' |
  'pluginCreator___internal___contentDigest' |
  'pluginCreator___internal___description' |
  'pluginCreator___internal___fieldOwners' |
  'pluginCreator___internal___ignoreType' |
  'pluginCreator___internal___mediaType' |
  'pluginCreator___internal___owner' |
  'pluginCreator___internal___type' |
  'pluginCreator___resolve' |
  'pluginCreator___name' |
  'pluginCreator___version' |
  'pluginCreator___pluginOptions___codegenConfig___typesPrefix' |
  'pluginCreator___pluginOptions___codegenConfig___immutableTypes' |
  'pluginCreator___pluginOptions___codegenConfig___maybeValue' |
  'pluginCreator___pluginOptions___codegenConfig___preResolveTypes' |
  'pluginCreator___pluginOptions___codegenConfig___addUnderscoreToArgsType' |
  'pluginCreator___pluginOptions___codegenPlugins' |
  'pluginCreator___pluginOptions___name' |
  'pluginCreator___pluginOptions___path' |
  'pluginCreator___pluginOptions___short_name' |
  'pluginCreator___pluginOptions___start_url' |
  'pluginCreator___pluginOptions___background_color' |
  'pluginCreator___pluginOptions___theme_color' |
  'pluginCreator___pluginOptions___display' |
  'pluginCreator___pluginOptions___spaceId' |
  'pluginCreator___pluginOptions___accessToken' |
  'pluginCreator___pluginOptions___pathCheck' |
  'pluginCreator___nodeAPIs' |
  'pluginCreator___browserAPIs' |
  'pluginCreator___ssrAPIs' |
  'pluginCreator___pluginFilepath' |
  'pluginCreator___packageJson___name' |
  'pluginCreator___packageJson___description' |
  'pluginCreator___packageJson___version' |
  'pluginCreator___packageJson___main' |
  'pluginCreator___packageJson___author' |
  'pluginCreator___packageJson___license' |
  'pluginCreator___packageJson___dependencies' |
  'pluginCreator___packageJson___dependencies___name' |
  'pluginCreator___packageJson___dependencies___version' |
  'pluginCreator___packageJson___devDependencies' |
  'pluginCreator___packageJson___devDependencies___name' |
  'pluginCreator___packageJson___devDependencies___version' |
  'pluginCreator___packageJson___peerDependencies' |
  'pluginCreator___packageJson___peerDependencies___name' |
  'pluginCreator___packageJson___peerDependencies___version' |
  'pluginCreator___packageJson___keywords' |
  'pluginCreatorId' |
  'componentPath';

export type GraphqlSitePageFilterInput = {
  readonly path?: Maybe<GraphqlStringQueryOperatorInput>;
  readonly component?: Maybe<GraphqlStringQueryOperatorInput>;
  readonly internalComponentName?: Maybe<GraphqlStringQueryOperatorInput>;
  readonly componentChunkName?: Maybe<GraphqlStringQueryOperatorInput>;
  readonly matchPath?: Maybe<GraphqlStringQueryOperatorInput>;
  readonly id?: Maybe<GraphqlStringQueryOperatorInput>;
  readonly parent?: Maybe<GraphqlNodeFilterInput>;
  readonly children?: Maybe<GraphqlNodeFilterListInput>;
  readonly internal?: Maybe<GraphqlInternalFilterInput>;
  readonly isCreatedByStatefulCreatePages?: Maybe<GraphqlBooleanQueryOperatorInput>;
  readonly pluginCreator?: Maybe<GraphqlSitePluginFilterInput>;
  readonly pluginCreatorId?: Maybe<GraphqlStringQueryOperatorInput>;
  readonly componentPath?: Maybe<GraphqlStringQueryOperatorInput>;
};

export type GraphqlSitePageGroupConnection = {
  readonly totalCount: Scalars['Int'];
  readonly edges: ReadonlyArray<GraphqlSitePageEdge>;
  readonly nodes: ReadonlyArray<GraphqlSitePage>;
  readonly pageInfo: GraphqlPageInfo;
  readonly field: Scalars['String'];
  readonly fieldValue?: Maybe<Scalars['String']>;
};

export type GraphqlSitePageSortInput = {
  readonly fields?: Maybe<ReadonlyArray<Maybe<GraphqlSitePageFieldsEnum>>>;
  readonly order?: Maybe<ReadonlyArray<Maybe<GraphqlSortOrderEnum>>>;
};

export type GraphqlSitePlugin = GraphqlNode & {
  readonly id: Scalars['ID'];
  readonly parent?: Maybe<GraphqlNode>;
  readonly children: ReadonlyArray<GraphqlNode>;
  readonly internal: GraphqlInternal;
  readonly resolve?: Maybe<Scalars['String']>;
  readonly name?: Maybe<Scalars['String']>;
  readonly version?: Maybe<Scalars['String']>;
  readonly pluginOptions?: Maybe<GraphqlSitePluginPluginOptions>;
  readonly nodeAPIs?: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  readonly browserAPIs?: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  readonly ssrAPIs?: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  readonly pluginFilepath?: Maybe<Scalars['String']>;
  readonly packageJson?: Maybe<GraphqlSitePluginPackageJson>;
};

export type GraphqlSitePluginConnection = {
  readonly totalCount: Scalars['Int'];
  readonly edges: ReadonlyArray<GraphqlSitePluginEdge>;
  readonly nodes: ReadonlyArray<GraphqlSitePlugin>;
  readonly pageInfo: GraphqlPageInfo;
  readonly distinct: ReadonlyArray<Scalars['String']>;
  readonly group: ReadonlyArray<GraphqlSitePluginGroupConnection>;
};


export type GraphqlSitePluginConnectionDistinctArgs = {
  field: GraphqlSitePluginFieldsEnum;
};


export type GraphqlSitePluginConnectionGroupArgs = {
  skip: Maybe<Scalars['Int']>;
  limit: Maybe<Scalars['Int']>;
  field: GraphqlSitePluginFieldsEnum;
};

export type GraphqlSitePluginEdge = {
  readonly next?: Maybe<GraphqlSitePlugin>;
  readonly node: GraphqlSitePlugin;
  readonly previous?: Maybe<GraphqlSitePlugin>;
};

export type GraphqlSitePluginFieldsEnum = 
  'id' |
  'parent___id' |
  'parent___parent___id' |
  'parent___parent___parent___id' |
  'parent___parent___parent___children' |
  'parent___parent___children' |
  'parent___parent___children___id' |
  'parent___parent___children___children' |
  'parent___parent___internal___content' |
  'parent___parent___internal___contentDigest' |
  'parent___parent___internal___description' |
  'parent___parent___internal___fieldOwners' |
  'parent___parent___internal___ignoreType' |
  'parent___parent___internal___mediaType' |
  'parent___parent___internal___owner' |
  'parent___parent___internal___type' |
  'parent___children' |
  'parent___children___id' |
  'parent___children___parent___id' |
  'parent___children___parent___children' |
  'parent___children___children' |
  'parent___children___children___id' |
  'parent___children___children___children' |
  'parent___children___internal___content' |
  'parent___children___internal___contentDigest' |
  'parent___children___internal___description' |
  'parent___children___internal___fieldOwners' |
  'parent___children___internal___ignoreType' |
  'parent___children___internal___mediaType' |
  'parent___children___internal___owner' |
  'parent___children___internal___type' |
  'parent___internal___content' |
  'parent___internal___contentDigest' |
  'parent___internal___description' |
  'parent___internal___fieldOwners' |
  'parent___internal___ignoreType' |
  'parent___internal___mediaType' |
  'parent___internal___owner' |
  'parent___internal___type' |
  'children' |
  'children___id' |
  'children___parent___id' |
  'children___parent___parent___id' |
  'children___parent___parent___children' |
  'children___parent___children' |
  'children___parent___children___id' |
  'children___parent___children___children' |
  'children___parent___internal___content' |
  'children___parent___internal___contentDigest' |
  'children___parent___internal___description' |
  'children___parent___internal___fieldOwners' |
  'children___parent___internal___ignoreType' |
  'children___parent___internal___mediaType' |
  'children___parent___internal___owner' |
  'children___parent___internal___type' |
  'children___children' |
  'children___children___id' |
  'children___children___parent___id' |
  'children___children___parent___children' |
  'children___children___children' |
  'children___children___children___id' |
  'children___children___children___children' |
  'children___children___internal___content' |
  'children___children___internal___contentDigest' |
  'children___children___internal___description' |
  'children___children___internal___fieldOwners' |
  'children___children___internal___ignoreType' |
  'children___children___internal___mediaType' |
  'children___children___internal___owner' |
  'children___children___internal___type' |
  'children___internal___content' |
  'children___internal___contentDigest' |
  'children___internal___description' |
  'children___internal___fieldOwners' |
  'children___internal___ignoreType' |
  'children___internal___mediaType' |
  'children___internal___owner' |
  'children___internal___type' |
  'internal___content' |
  'internal___contentDigest' |
  'internal___description' |
  'internal___fieldOwners' |
  'internal___ignoreType' |
  'internal___mediaType' |
  'internal___owner' |
  'internal___type' |
  'resolve' |
  'name' |
  'version' |
  'pluginOptions___codegenConfig___typesPrefix' |
  'pluginOptions___codegenConfig___immutableTypes' |
  'pluginOptions___codegenConfig___avoidOptionals___object' |
  'pluginOptions___codegenConfig___maybeValue' |
  'pluginOptions___codegenConfig___preResolveTypes' |
  'pluginOptions___codegenConfig___addUnderscoreToArgsType' |
  'pluginOptions___codegenPlugins' |
  'pluginOptions___codegenPlugins___options___content' |
  'pluginOptions___name' |
  'pluginOptions___path' |
  'pluginOptions___short_name' |
  'pluginOptions___start_url' |
  'pluginOptions___background_color' |
  'pluginOptions___theme_color' |
  'pluginOptions___display' |
  'pluginOptions___spaceId' |
  'pluginOptions___accessToken' |
  'pluginOptions___pathCheck' |
  'nodeAPIs' |
  'browserAPIs' |
  'ssrAPIs' |
  'pluginFilepath' |
  'packageJson___name' |
  'packageJson___description' |
  'packageJson___version' |
  'packageJson___main' |
  'packageJson___author' |
  'packageJson___license' |
  'packageJson___dependencies' |
  'packageJson___dependencies___name' |
  'packageJson___dependencies___version' |
  'packageJson___devDependencies' |
  'packageJson___devDependencies___name' |
  'packageJson___devDependencies___version' |
  'packageJson___peerDependencies' |
  'packageJson___peerDependencies___name' |
  'packageJson___peerDependencies___version' |
  'packageJson___keywords';

export type GraphqlSitePluginFilterInput = {
  readonly id?: Maybe<GraphqlStringQueryOperatorInput>;
  readonly parent?: Maybe<GraphqlNodeFilterInput>;
  readonly children?: Maybe<GraphqlNodeFilterListInput>;
  readonly internal?: Maybe<GraphqlInternalFilterInput>;
  readonly resolve?: Maybe<GraphqlStringQueryOperatorInput>;
  readonly name?: Maybe<GraphqlStringQueryOperatorInput>;
  readonly version?: Maybe<GraphqlStringQueryOperatorInput>;
  readonly pluginOptions?: Maybe<GraphqlSitePluginPluginOptionsFilterInput>;
  readonly nodeAPIs?: Maybe<GraphqlStringQueryOperatorInput>;
  readonly browserAPIs?: Maybe<GraphqlStringQueryOperatorInput>;
  readonly ssrAPIs?: Maybe<GraphqlStringQueryOperatorInput>;
  readonly pluginFilepath?: Maybe<GraphqlStringQueryOperatorInput>;
  readonly packageJson?: Maybe<GraphqlSitePluginPackageJsonFilterInput>;
};

export type GraphqlSitePluginGroupConnection = {
  readonly totalCount: Scalars['Int'];
  readonly edges: ReadonlyArray<GraphqlSitePluginEdge>;
  readonly nodes: ReadonlyArray<GraphqlSitePlugin>;
  readonly pageInfo: GraphqlPageInfo;
  readonly field: Scalars['String'];
  readonly fieldValue?: Maybe<Scalars['String']>;
};

export type GraphqlSitePluginPackageJson = {
  readonly name?: Maybe<Scalars['String']>;
  readonly description?: Maybe<Scalars['String']>;
  readonly version?: Maybe<Scalars['String']>;
  readonly main?: Maybe<Scalars['String']>;
  readonly author?: Maybe<Scalars['String']>;
  readonly license?: Maybe<Scalars['String']>;
  readonly dependencies?: Maybe<ReadonlyArray<Maybe<GraphqlSitePluginPackageJsonDependencies>>>;
  readonly devDependencies?: Maybe<ReadonlyArray<Maybe<GraphqlSitePluginPackageJsonDevDependencies>>>;
  readonly peerDependencies?: Maybe<ReadonlyArray<Maybe<GraphqlSitePluginPackageJsonPeerDependencies>>>;
  readonly keywords?: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
};

export type GraphqlSitePluginPackageJsonDependencies = {
  readonly name?: Maybe<Scalars['String']>;
  readonly version?: Maybe<Scalars['String']>;
};

export type GraphqlSitePluginPackageJsonDependenciesFilterInput = {
  readonly name?: Maybe<GraphqlStringQueryOperatorInput>;
  readonly version?: Maybe<GraphqlStringQueryOperatorInput>;
};

export type GraphqlSitePluginPackageJsonDependenciesFilterListInput = {
  readonly elemMatch?: Maybe<GraphqlSitePluginPackageJsonDependenciesFilterInput>;
};

export type GraphqlSitePluginPackageJsonDevDependencies = {
  readonly name?: Maybe<Scalars['String']>;
  readonly version?: Maybe<Scalars['String']>;
};

export type GraphqlSitePluginPackageJsonDevDependenciesFilterInput = {
  readonly name?: Maybe<GraphqlStringQueryOperatorInput>;
  readonly version?: Maybe<GraphqlStringQueryOperatorInput>;
};

export type GraphqlSitePluginPackageJsonDevDependenciesFilterListInput = {
  readonly elemMatch?: Maybe<GraphqlSitePluginPackageJsonDevDependenciesFilterInput>;
};

export type GraphqlSitePluginPackageJsonFilterInput = {
  readonly name?: Maybe<GraphqlStringQueryOperatorInput>;
  readonly description?: Maybe<GraphqlStringQueryOperatorInput>;
  readonly version?: Maybe<GraphqlStringQueryOperatorInput>;
  readonly main?: Maybe<GraphqlStringQueryOperatorInput>;
  readonly author?: Maybe<GraphqlStringQueryOperatorInput>;
  readonly license?: Maybe<GraphqlStringQueryOperatorInput>;
  readonly dependencies?: Maybe<GraphqlSitePluginPackageJsonDependenciesFilterListInput>;
  readonly devDependencies?: Maybe<GraphqlSitePluginPackageJsonDevDependenciesFilterListInput>;
  readonly peerDependencies?: Maybe<GraphqlSitePluginPackageJsonPeerDependenciesFilterListInput>;
  readonly keywords?: Maybe<GraphqlStringQueryOperatorInput>;
};

export type GraphqlSitePluginPackageJsonPeerDependencies = {
  readonly name?: Maybe<Scalars['String']>;
  readonly version?: Maybe<Scalars['String']>;
};

export type GraphqlSitePluginPackageJsonPeerDependenciesFilterInput = {
  readonly name?: Maybe<GraphqlStringQueryOperatorInput>;
  readonly version?: Maybe<GraphqlStringQueryOperatorInput>;
};

export type GraphqlSitePluginPackageJsonPeerDependenciesFilterListInput = {
  readonly elemMatch?: Maybe<GraphqlSitePluginPackageJsonPeerDependenciesFilterInput>;
};

export type GraphqlSitePluginPluginOptions = {
  readonly codegenConfig?: Maybe<GraphqlSitePluginPluginOptionsCodegenConfig>;
  readonly codegenPlugins?: Maybe<ReadonlyArray<Maybe<GraphqlSitePluginPluginOptionsCodegenPlugins>>>;
  readonly name?: Maybe<Scalars['String']>;
  readonly path?: Maybe<Scalars['String']>;
  readonly short_name?: Maybe<Scalars['String']>;
  readonly start_url?: Maybe<Scalars['String']>;
  readonly background_color?: Maybe<Scalars['String']>;
  readonly theme_color?: Maybe<Scalars['String']>;
  readonly display?: Maybe<Scalars['String']>;
  readonly spaceId?: Maybe<Scalars['String']>;
  readonly accessToken?: Maybe<Scalars['String']>;
  readonly pathCheck?: Maybe<Scalars['Boolean']>;
};

export type GraphqlSitePluginPluginOptionsCodegenConfig = {
  readonly typesPrefix?: Maybe<Scalars['String']>;
  readonly immutableTypes?: Maybe<Scalars['Boolean']>;
  readonly avoidOptionals?: Maybe<GraphqlSitePluginPluginOptionsCodegenConfigAvoidOptionals>;
  readonly maybeValue?: Maybe<Scalars['String']>;
  readonly preResolveTypes?: Maybe<Scalars['Boolean']>;
  readonly addUnderscoreToArgsType?: Maybe<Scalars['Boolean']>;
};

export type GraphqlSitePluginPluginOptionsCodegenConfigAvoidOptionals = {
  readonly object?: Maybe<Scalars['Boolean']>;
};

export type GraphqlSitePluginPluginOptionsCodegenConfigAvoidOptionalsFilterInput = {
  readonly object?: Maybe<GraphqlBooleanQueryOperatorInput>;
};

export type GraphqlSitePluginPluginOptionsCodegenConfigFilterInput = {
  readonly typesPrefix?: Maybe<GraphqlStringQueryOperatorInput>;
  readonly immutableTypes?: Maybe<GraphqlBooleanQueryOperatorInput>;
  readonly avoidOptionals?: Maybe<GraphqlSitePluginPluginOptionsCodegenConfigAvoidOptionalsFilterInput>;
  readonly maybeValue?: Maybe<GraphqlStringQueryOperatorInput>;
  readonly preResolveTypes?: Maybe<GraphqlBooleanQueryOperatorInput>;
  readonly addUnderscoreToArgsType?: Maybe<GraphqlBooleanQueryOperatorInput>;
};

export type GraphqlSitePluginPluginOptionsCodegenPlugins = {
  readonly options?: Maybe<GraphqlSitePluginPluginOptionsCodegenPluginsOptions>;
};

export type GraphqlSitePluginPluginOptionsCodegenPluginsFilterInput = {
  readonly options?: Maybe<GraphqlSitePluginPluginOptionsCodegenPluginsOptionsFilterInput>;
};

export type GraphqlSitePluginPluginOptionsCodegenPluginsFilterListInput = {
  readonly elemMatch?: Maybe<GraphqlSitePluginPluginOptionsCodegenPluginsFilterInput>;
};

export type GraphqlSitePluginPluginOptionsCodegenPluginsOptions = {
  readonly content?: Maybe<Scalars['String']>;
};

export type GraphqlSitePluginPluginOptionsCodegenPluginsOptionsFilterInput = {
  readonly content?: Maybe<GraphqlStringQueryOperatorInput>;
};

export type GraphqlSitePluginPluginOptionsFilterInput = {
  readonly codegenConfig?: Maybe<GraphqlSitePluginPluginOptionsCodegenConfigFilterInput>;
  readonly codegenPlugins?: Maybe<GraphqlSitePluginPluginOptionsCodegenPluginsFilterListInput>;
  readonly name?: Maybe<GraphqlStringQueryOperatorInput>;
  readonly path?: Maybe<GraphqlStringQueryOperatorInput>;
  readonly short_name?: Maybe<GraphqlStringQueryOperatorInput>;
  readonly start_url?: Maybe<GraphqlStringQueryOperatorInput>;
  readonly background_color?: Maybe<GraphqlStringQueryOperatorInput>;
  readonly theme_color?: Maybe<GraphqlStringQueryOperatorInput>;
  readonly display?: Maybe<GraphqlStringQueryOperatorInput>;
  readonly spaceId?: Maybe<GraphqlStringQueryOperatorInput>;
  readonly accessToken?: Maybe<GraphqlStringQueryOperatorInput>;
  readonly pathCheck?: Maybe<GraphqlBooleanQueryOperatorInput>;
};

export type GraphqlSitePluginSortInput = {
  readonly fields?: Maybe<ReadonlyArray<Maybe<GraphqlSitePluginFieldsEnum>>>;
  readonly order?: Maybe<ReadonlyArray<Maybe<GraphqlSortOrderEnum>>>;
};

export type GraphqlSiteSiteMetadata = {
  readonly title?: Maybe<Scalars['String']>;
  readonly description?: Maybe<Scalars['String']>;
  readonly author?: Maybe<Scalars['String']>;
};

export type GraphqlSiteSiteMetadataFilterInput = {
  readonly title?: Maybe<GraphqlStringQueryOperatorInput>;
  readonly description?: Maybe<GraphqlStringQueryOperatorInput>;
  readonly author?: Maybe<GraphqlStringQueryOperatorInput>;
};

export type GraphqlSiteSortInput = {
  readonly fields?: Maybe<ReadonlyArray<Maybe<GraphqlSiteFieldsEnum>>>;
  readonly order?: Maybe<ReadonlyArray<Maybe<GraphqlSortOrderEnum>>>;
};

export type GraphqlSortOrderEnum = 
  'ASC' |
  'DESC';

export type GraphqlStringQueryOperatorInput = {
  readonly eq?: Maybe<Scalars['String']>;
  readonly ne?: Maybe<Scalars['String']>;
  readonly in?: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  readonly nin?: Maybe<ReadonlyArray<Maybe<Scalars['String']>>>;
  readonly regex?: Maybe<Scalars['String']>;
  readonly glob?: Maybe<Scalars['String']>;
};

export type GraphqlGetAllArticlesQueryVariables = {};


export type GraphqlGetAllArticlesQuery = { readonly allContentfulArticles: { readonly nodes: ReadonlyArray<{ readonly id: string, readonly title?: Maybe<string>, readonly createdAt?: Maybe<any>, readonly updatedAt?: Maybe<any>, readonly text?: Maybe<{ readonly text?: Maybe<string> }>, readonly pictures?: Maybe<ReadonlyArray<Maybe<{ readonly id: string, readonly fluid?: Maybe<GraphqlGatsbyContentfulFluid_WithWebpFragment> }>>> }> } };

export type GraphqlGetSiteMetadataQueryVariables = {};


export type GraphqlGetSiteMetadataQuery = { readonly site?: Maybe<{ readonly siteMetadata?: Maybe<{ readonly title?: Maybe<string>, readonly description?: Maybe<string>, readonly author?: Maybe<string> }> }> };

export type GraphqlGatsbyContentfulFixedFragment = { readonly base64?: Maybe<string>, readonly width: number, readonly height: number, readonly src: string, readonly srcSet: string };

export type GraphqlGatsbyContentfulFixed_TracedSvgFragment = { readonly tracedSVG?: Maybe<string>, readonly width: number, readonly height: number, readonly src: string, readonly srcSet: string };

export type GraphqlGatsbyContentfulFixed_NoBase64Fragment = { readonly width: number, readonly height: number, readonly src: string, readonly srcSet: string };

export type GraphqlGatsbyContentfulFixed_WithWebpFragment = { readonly base64?: Maybe<string>, readonly width: number, readonly height: number, readonly src: string, readonly srcSet: string, readonly srcWebp?: Maybe<string>, readonly srcSetWebp?: Maybe<string> };

export type GraphqlGatsbyContentfulFixed_WithWebp_NoBase64Fragment = { readonly width: number, readonly height: number, readonly src: string, readonly srcSet: string, readonly srcWebp?: Maybe<string>, readonly srcSetWebp?: Maybe<string> };

export type GraphqlGatsbyContentfulFluidFragment = { readonly base64?: Maybe<string>, readonly aspectRatio: number, readonly src: string, readonly srcSet: string, readonly sizes: string };

export type GraphqlGatsbyContentfulFluid_TracedSvgFragment = { readonly tracedSVG?: Maybe<string>, readonly aspectRatio: number, readonly src: string, readonly srcSet: string, readonly sizes: string };

export type GraphqlGatsbyContentfulFluid_NoBase64Fragment = { readonly aspectRatio: number, readonly src: string, readonly srcSet: string, readonly sizes: string };

export type GraphqlGatsbyContentfulFluid_WithWebpFragment = { readonly base64?: Maybe<string>, readonly aspectRatio: number, readonly src: string, readonly srcSet: string, readonly srcWebp?: Maybe<string>, readonly srcSetWebp?: Maybe<string>, readonly sizes: string };

export type GraphqlGatsbyContentfulFluid_WithWebp_NoBase64Fragment = { readonly aspectRatio: number, readonly src: string, readonly srcSet: string, readonly srcWebp?: Maybe<string>, readonly srcSetWebp?: Maybe<string>, readonly sizes: string };

export type GraphqlGatsbyContentfulResolutionsFragment = { readonly base64?: Maybe<string>, readonly width: number, readonly height: number, readonly src: string, readonly srcSet: string };

export type GraphqlGatsbyContentfulResolutions_TracedSvgFragment = { readonly tracedSVG?: Maybe<string>, readonly width: number, readonly height: number, readonly src: string, readonly srcSet: string };

export type GraphqlGatsbyContentfulResolutions_NoBase64Fragment = { readonly width: number, readonly height: number, readonly src: string, readonly srcSet: string };

export type GraphqlGatsbyContentfulResolutions_WithWebpFragment = { readonly base64?: Maybe<string>, readonly width: number, readonly height: number, readonly src: string, readonly srcSet: string, readonly srcWebp?: Maybe<string>, readonly srcSetWebp?: Maybe<string> };

export type GraphqlGatsbyContentfulResolutions_WithWebp_NoBase64Fragment = { readonly width: number, readonly height: number, readonly src: string, readonly srcSet: string, readonly srcWebp?: Maybe<string>, readonly srcSetWebp?: Maybe<string> };

export type GraphqlGatsbyContentfulSizesFragment = { readonly base64?: Maybe<string>, readonly aspectRatio: number, readonly src: string, readonly srcSet: string, readonly sizes: string };

export type GraphqlGatsbyContentfulSizes_TracedSvgFragment = { readonly tracedSVG?: Maybe<string>, readonly aspectRatio: number, readonly src: string, readonly srcSet: string, readonly sizes: string };

export type GraphqlGatsbyContentfulSizes_NoBase64Fragment = { readonly aspectRatio: number, readonly src: string, readonly srcSet: string, readonly sizes: string };

export type GraphqlGatsbyContentfulSizes_WithWebpFragment = { readonly base64?: Maybe<string>, readonly aspectRatio: number, readonly src: string, readonly srcSet: string, readonly srcWebp?: Maybe<string>, readonly srcSetWebp?: Maybe<string>, readonly sizes: string };

export type GraphqlGatsbyContentfulSizes_WithWebp_NoBase64Fragment = { readonly aspectRatio: number, readonly src: string, readonly srcSet: string, readonly srcWebp?: Maybe<string>, readonly srcSetWebp?: Maybe<string>, readonly sizes: string };

export type GraphqlGatsbyImageSharpFixedFragment = { readonly base64?: Maybe<string>, readonly width: number, readonly height: number, readonly src: string, readonly srcSet: string };

export type GraphqlGatsbyImageSharpFixed_TracedSvgFragment = { readonly tracedSVG?: Maybe<string>, readonly width: number, readonly height: number, readonly src: string, readonly srcSet: string };

export type GraphqlGatsbyImageSharpFixed_WithWebpFragment = { readonly base64?: Maybe<string>, readonly width: number, readonly height: number, readonly src: string, readonly srcSet: string, readonly srcWebp?: Maybe<string>, readonly srcSetWebp?: Maybe<string> };

export type GraphqlGatsbyImageSharpFixed_WithWebp_TracedSvgFragment = { readonly tracedSVG?: Maybe<string>, readonly width: number, readonly height: number, readonly src: string, readonly srcSet: string, readonly srcWebp?: Maybe<string>, readonly srcSetWebp?: Maybe<string> };

export type GraphqlGatsbyImageSharpFixed_NoBase64Fragment = { readonly width: number, readonly height: number, readonly src: string, readonly srcSet: string };

export type GraphqlGatsbyImageSharpFixed_WithWebp_NoBase64Fragment = { readonly width: number, readonly height: number, readonly src: string, readonly srcSet: string, readonly srcWebp?: Maybe<string>, readonly srcSetWebp?: Maybe<string> };

export type GraphqlGatsbyImageSharpFluidFragment = { readonly base64?: Maybe<string>, readonly aspectRatio: number, readonly src: string, readonly srcSet: string, readonly sizes: string };

export type GraphqlGatsbyImageSharpFluid_TracedSvgFragment = { readonly tracedSVG?: Maybe<string>, readonly aspectRatio: number, readonly src: string, readonly srcSet: string, readonly sizes: string };

export type GraphqlGatsbyImageSharpFluid_WithWebpFragment = { readonly base64?: Maybe<string>, readonly aspectRatio: number, readonly src: string, readonly srcSet: string, readonly srcWebp?: Maybe<string>, readonly srcSetWebp?: Maybe<string>, readonly sizes: string };

export type GraphqlGatsbyImageSharpFluid_WithWebp_TracedSvgFragment = { readonly tracedSVG?: Maybe<string>, readonly aspectRatio: number, readonly src: string, readonly srcSet: string, readonly srcWebp?: Maybe<string>, readonly srcSetWebp?: Maybe<string>, readonly sizes: string };

export type GraphqlGatsbyImageSharpFluid_NoBase64Fragment = { readonly aspectRatio: number, readonly src: string, readonly srcSet: string, readonly sizes: string };

export type GraphqlGatsbyImageSharpFluid_WithWebp_NoBase64Fragment = { readonly aspectRatio: number, readonly src: string, readonly srcSet: string, readonly srcWebp?: Maybe<string>, readonly srcSetWebp?: Maybe<string>, readonly sizes: string };

export type GraphqlGatsbyImageSharpResolutionsFragment = { readonly base64?: Maybe<string>, readonly width: number, readonly height: number, readonly src: string, readonly srcSet: string };

export type GraphqlGatsbyImageSharpResolutions_TracedSvgFragment = { readonly tracedSVG?: Maybe<string>, readonly width: number, readonly height: number, readonly src: string, readonly srcSet: string };

export type GraphqlGatsbyImageSharpResolutions_WithWebpFragment = { readonly base64?: Maybe<string>, readonly width: number, readonly height: number, readonly src: string, readonly srcSet: string, readonly srcWebp?: Maybe<string>, readonly srcSetWebp?: Maybe<string> };

export type GraphqlGatsbyImageSharpResolutions_WithWebp_TracedSvgFragment = { readonly tracedSVG?: Maybe<string>, readonly width: number, readonly height: number, readonly src: string, readonly srcSet: string, readonly srcWebp?: Maybe<string>, readonly srcSetWebp?: Maybe<string> };

export type GraphqlGatsbyImageSharpResolutions_NoBase64Fragment = { readonly width: number, readonly height: number, readonly src: string, readonly srcSet: string };

export type GraphqlGatsbyImageSharpResolutions_WithWebp_NoBase64Fragment = { readonly width: number, readonly height: number, readonly src: string, readonly srcSet: string, readonly srcWebp?: Maybe<string>, readonly srcSetWebp?: Maybe<string> };

export type GraphqlGatsbyImageSharpSizesFragment = { readonly base64?: Maybe<string>, readonly aspectRatio: number, readonly src: string, readonly srcSet: string, readonly sizes: string };

export type GraphqlGatsbyImageSharpSizes_TracedSvgFragment = { readonly tracedSVG?: Maybe<string>, readonly aspectRatio: number, readonly src: string, readonly srcSet: string, readonly sizes: string };

export type GraphqlGatsbyImageSharpSizes_WithWebpFragment = { readonly base64?: Maybe<string>, readonly aspectRatio: number, readonly src: string, readonly srcSet: string, readonly srcWebp?: Maybe<string>, readonly srcSetWebp?: Maybe<string>, readonly sizes: string };

export type GraphqlGatsbyImageSharpSizes_WithWebp_TracedSvgFragment = { readonly tracedSVG?: Maybe<string>, readonly aspectRatio: number, readonly src: string, readonly srcSet: string, readonly srcWebp?: Maybe<string>, readonly srcSetWebp?: Maybe<string>, readonly sizes: string };

export type GraphqlGatsbyImageSharpSizes_NoBase64Fragment = { readonly aspectRatio: number, readonly src: string, readonly srcSet: string, readonly sizes: string };

export type GraphqlGatsbyImageSharpSizes_WithWebp_NoBase64Fragment = { readonly aspectRatio: number, readonly src: string, readonly srcSet: string, readonly srcWebp?: Maybe<string>, readonly srcSetWebp?: Maybe<string>, readonly sizes: string };


