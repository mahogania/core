import { StringFilter } from "../../util/StringFilter";
import { QuestGreetingWhereUniqueInput } from "../questGreeting/QuestGreetingWhereUniqueInput";

export type QuestGreetingLocaleWhereInput = {
  id?: StringFilter;
  questGreeting?: QuestGreetingWhereUniqueInput;
};
