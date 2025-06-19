export type Pot = {
  name: string;
  target: number;
  total: number;
  theme: string;
};

export type PotState = {
  totalSaved: number;
  pots: Pot[];
};

export type EditPotPayload = {
  originalName: string;
  name: string;
  target: number;
  theme: string;
};
