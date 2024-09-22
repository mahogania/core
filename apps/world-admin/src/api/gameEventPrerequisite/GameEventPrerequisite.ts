export type GameEventPrerequisite = {
  createdAt: Date;
  eventEntry: number | null;
  id: string;
  prerequisiteEvent: number | null;
  updatedAt: Date;
};
