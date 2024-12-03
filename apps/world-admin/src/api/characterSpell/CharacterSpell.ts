import { Character } from "../character/Character";

export type CharacterSpell = {
  characters?: Array<Character>;
  createdAt: Date;
  id: string;
  updatedAt: Date;
};
