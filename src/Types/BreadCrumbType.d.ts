export type BreadCrumbsItem = {
  slug: string;
  name: string;
};

export type BreadCrumbsProps = {
  textColor?: string;
  bgColor?: string;
  items: BreadCrumbsItem[];
};
