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
  resourceURI: string;
  series: {};
  stories: {};
  thumbnail: {
    extension: string;
    path: string;
  };
  urls: unknown[];
};

export type CharactersResponse = {
  count: number;
  limit: number;
  offset: number;
  results: Character[];
  total: number;
};
