export type Character = {
  comics: {
    available: number;
    collectionURI: string;
    items: {
      name: string;
      resourceURI: string;
    }[];
    returned: number;
  };
  description: string;
  events: {};
  id: number;
  modified: string;
  name: string;
  prices: {
    price: number;
    type: string;
  }[];
  resourceURI: string;
  series: {};
  stories: {};
  title: string;
  thumbnail: {
    extension: string;
    path: string;
  };
  urls: unknown[];
};

export type Comic = {
  characters: {
    available: number;
    collectionURI: string;
    items: unknown[];
    returned: number;
  };
  collectedIssues: unknown[];
  collections: unknown[];
  comics: {
    available: number;
    collectionURI: string;
    items: {
      name: string;
      resourceURI: string;
    }[];
    returned: number;
  };
  creators: {
    available: number;
    collectionURI: string;
    items: unknown[];
    returned: number;
  };
  dates: {
    date: string;
    type: string;
  }[];
  description: string;
  diamondCode: string;
  digitalId: number;
  ean: string;
  events: {
    available: number;
    collectionURI: string;
    items: unknown[];
    returned: number;
  };
  format: string;
  id: number;
  images: unknown[];
  isbn: string;
  issn: string;
  issueNumber: number;
  name: string;
  modified: string;
  pageCount: number;
  prices: {
    price: number;
    type: string;
  }[];
  resourceURI: string;
  series: {
    name: string;
    resourceURI: string;
  };
  stories: {
    available: number;
    collectionURI: string;
    items: unknown[];
    returned: number;
  };
  textObjects: unknown[];
  thumbnail: {
    extension: string;
    path: string;
  };
  title: string;
  upc: string;
  urls: {
    type: string;
    url: string;
  }[];
  variantDescription: string;
  variants: {
    name: string;
    resourceURI: string;
  }[];
};

export type CharactersResponse = {
  count: number;
  limit: number;
  offset: number;
  results: Character[];
  total: number;
};

export type ComicsResponse = {
  count: number;
  limit: number;
  offset: number;
  results: Comic[];
  total: number;
};
