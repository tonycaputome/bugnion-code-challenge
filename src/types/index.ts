type AnyArrayType = { [key: string]: number | undefined };

type Observations = {
  [key: string]: AnyArrayType[];
};

type Attributes = {
  attributes: AnyArrayType[];
  observations: Observations;
};

export type Series = {
  "0:0:0:0:0": Attributes;
};

export type DataSet = {
  action: string;
  validFrom: string;
  series: Series;
};

export type TResultSetType = {
  [key: string]: any;
} & DataSet;
