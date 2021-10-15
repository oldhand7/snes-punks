/**
 * !!! This file is autogenerated do not edit by hand !!!
 *
 * Generated by: @databases/pg-schema-print-types
 * Checksum: VM5FQSLz6IusM/wlcAu5fiSjBvk6ET9Zy9b1WOnygLiqTwOOuWEUL7NGHeYataWEommxrr6nDaxPYJxJXek7EA==
 */

// eslint:disable
// tslint:disable

import SnesPunks, {SnesPunks_InsertParameters} from './snes_punks'

interface DatabaseSchema {
  snes_punks: {record: SnesPunks, insert: SnesPunks_InsertParameters};
}
export default DatabaseSchema;

/**
 * JSON serialize values (v) if the table name (t) and column name (c)
 * is a JSON or JSONB column.
 * This is necessary if you want to store values that are not plain objects
 * in a JSON or JSONB column.
 */
function serializeValue(t: string, c: string, v: unknown): unknown {
  if (t === "snes_punks" && c === "traits") {
    return JSON.stringify(v);
  }
  return v;
}
export {serializeValue}