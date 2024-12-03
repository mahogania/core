import { InstallationNoteItemWhereInput } from "./InstallationNoteItemWhereInput";
import { InstallationNoteItemOrderByInput } from "./InstallationNoteItemOrderByInput";

export type InstallationNoteItemFindManyArgs = {
  where?: InstallationNoteItemWhereInput;
  orderBy?: Array<InstallationNoteItemOrderByInput>;
  skip?: number;
  take?: number;
};
