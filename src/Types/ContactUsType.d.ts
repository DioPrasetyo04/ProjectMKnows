export type ContactUsType = {
  fields: Array<{
    label: string;
    name: string;
    type: string;
    placeholder: string;
    required: boolean;
    defaultValue?: string;
    options?: Array<{
      label: string;
      value: string;
    }>;
  }>;
  onSubmit: (FormData: { [key: string]: string }) => void;
  BackGroundImage?: string;
};
