import {RowID, RowElement} from "./interface.ts";

declare function insertRow(row: RowElement): number;
declare function deleteRow(rowid: RowID): void;
declare function updateRow(rowid: RowID, row: RowElement): RowID;
