type Author = {
  name: string;
  lastname: string;
};

const author: Author = {
  name: "Leandro",
  lastname: "Fernandez",
};

// every formatter has an input and an output type
export type Formatter<I, O> = (responseFromApi: I) => O;

//the signed request adds the author to the output type
export type SignedRequest<O> = { author: Author } & O;

// this class adds the author property to every formatter function
// by extending any given formatter in the format function
export class FormatterWithAuthor<I, O> {
  private formatter: Formatter<I, O>;

  constructor(formatter: Formatter<I, O>) {
    this.formatter = formatter;
  }

  format(input: I): SignedRequest<O> {
    return {
      author,
      ...this.formatter(input),
    };
  }
}
