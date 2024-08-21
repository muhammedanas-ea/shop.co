export interface FilterProps {
  open: boolean;
  setOpen: (open: boolean) => void;
}

export interface FilterDataProps {
  categories: string[];
  color: string[];
  size: string[];
  dressStyles: string[];
}
