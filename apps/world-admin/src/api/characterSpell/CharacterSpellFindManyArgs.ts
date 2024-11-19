import { CharacterSpellWhereInput } from "./CharacterSpellWhereInput";
import { CharacterSpellOrderByInput } from "./CharacterSpellOrderByInput";

export type CharacterSpellFindManyArgs = {
  where?: CharacterSpellWhereInput;
  orderBy?: Array<CharacterSpellOrderByInput>;
  skip?: number;
  take?: number;
};
