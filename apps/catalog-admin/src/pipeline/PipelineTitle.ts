import { Pipeline as TPipeline } from "../api/pipeline/Pipeline";

export const PIPELINE_TITLE_FIELD = "id";

export const PipelineTitle = (record: TPipeline): string => {
  return record.id?.toString() || String(record.id);
};
