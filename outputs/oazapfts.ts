/**
 * Animals API
 * 1.0.0
 * DO NOT MODIFY - This file has been generated using oazapfts.
 * See https://www.npmjs.com/package/oazapfts
 */
import * as Oazapfts from "oazapfts/lib/runtime";
import * as QS from "oazapfts/lib/runtime/query";
export const defaults: Oazapfts.RequestOpts = {
    baseUrl: "https://localhost:8000",
};
const oazapfts = Oazapfts.runtime(defaults);
export const servers = {
    server1: "https://localhost:8000"
};
export type AnimalType = "All" | "Cats" | "Dogs";
export type Animal = {
    "type": AnimalType;
    id?: number;
    name?: string | null;
};
export type Dog = Animal;
export type Cat = Animal;
export function getApiV1Animals({ type }: {
    "type"?: AnimalType;
} = {}, opts?: Oazapfts.RequestOpts) {
    return oazapfts.fetchJson<{
        status: 200;
        data: (Dog | Cat)[];
    }>(`/api/v1/animals${QS.query(QS.form({
        type
    }))}`, {
        ...opts
    });
}
