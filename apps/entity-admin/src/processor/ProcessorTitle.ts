import { Processor as TProcessor } from "../api/processor/Processor";

export const PROCESSOR_TITLE_FIELD = "id";

export const ProcessorTitle = (record: TProcessor): string => {
  return record.id?.toString() || String(record.id);
};
