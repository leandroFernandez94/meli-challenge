type Author = {
  name: string;
  lastname: string;
};

const author: Author = {
  name: "Leandro",
  lastname: "Fernandez",
};

export type Formatter<I, O> = (responseFromApi: I) => O;
export type SignedRequest<O> = { author: Author } & O;

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