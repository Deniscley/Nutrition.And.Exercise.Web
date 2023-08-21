export type SectionHeadModel = {
  title: string;
  icon: JSX.Element;
  className: string | undefined;
};

export type CardModel = {
  className: string;
  children: any;
};

export type FaqModel = {
  question: string;
  answer: string;
};
