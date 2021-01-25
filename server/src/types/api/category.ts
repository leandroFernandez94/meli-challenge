export type CategoryApiResponse = {
  id: string;
  name: string;
  path_from_root: Array<{
    id: string;
    name: string;
  }>;
};

export type FormattedCategory = {
  id: string;
  name: string;
};
