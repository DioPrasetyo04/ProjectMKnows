export type TimeTableTraining = {
  [key: string]: string[];
};

export type PageTimeTableTraining = {
  children?: React.ReactNode;
  stylingParent?: CSSProperties;
  stylingTitle?: CSSProperties;
  stylingDesc?: CSSProperties;
  Title?: string;
  Desc?: string;
  data?: any[];
  link?: string;
};

export type CardProps = {
  data: TimeTableTraining;
};
