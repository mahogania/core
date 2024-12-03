import { ServersideSpellEffect as TServersideSpellEffect } from "../api/serversideSpellEffect/ServersideSpellEffect";

export const SERVERSIDESPELLEFFECT_TITLE_FIELD = "id";

export const ServersideSpellEffectTitle = (
  record: TServersideSpellEffect
): string => {
  return record.id?.toString() || String(record.id);
};
