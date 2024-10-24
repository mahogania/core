import { Command } from "../command/Command";
import { View } from "../view/View";

export type Processor = {
  commands?: Array<Command>;
  createdAt: Date;
  id: string;
  updatedAt: Date;
  views?: Array<View>;
};
