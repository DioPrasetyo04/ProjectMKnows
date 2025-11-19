export type TimeTableTraining = {
  [key: string]: string[];
};

export type PageTimeTableTraining = {
  children?: React.ReactNode;
  stylingParent?: CSSProperties;
  Title?: string;
  Desc?: string;
  data?: any[];
  link?: string;
};

export type CardProps = {
  data: TimeTableTraining;
};
