import { CharacterDialogueWhereInput } from "./CharacterDialogueWhereInput";
import { CharacterDialogueOrderByInput } from "./CharacterDialogueOrderByInput";

export type CharacterDialogueFindManyArgs = {
  where?: CharacterDialogueWhereInput;
  orderBy?: Array<CharacterDialogueOrderByInput>;
  skip?: number;
  take?: number;
};
