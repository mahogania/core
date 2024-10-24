import { Bundle } from "../bundle/Bundle";
import { Option } from "../option/Option";
import { Strength } from "../strength/Strength";
import { Weakness } from "../weakness/Weakness";

export type Feature = {
  bundle?: Bundle | null;
  createdAt: Date;
  displayName: string | null;
  id: string;
  name: string | null;
  options?: Array<Option>;
  strength?: Strength | null;
  updatedAt: Date;
  weakness?: Weakness | null;
};
