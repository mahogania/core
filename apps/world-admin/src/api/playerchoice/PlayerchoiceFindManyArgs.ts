import { PlayerchoiceWhereInput } from "./PlayerchoiceWhereInput";
import { PlayerchoiceOrderByInput } from "./PlayerchoiceOrderByInput";

export type PlayerchoiceFindManyArgs = {
  where?: PlayerchoiceWhereInput;
  orderBy?: Array<PlayerchoiceOrderByInput>;
  skip?: number;
  take?: number;
};
