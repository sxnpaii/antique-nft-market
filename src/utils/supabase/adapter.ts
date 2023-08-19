// add support dotenv
import dotenv from "dotenv";
dotenv.config();
// import method from supabase
import { createClient } from "@supabase/supabase-js";
// types of datas
import { Database } from "./types";
// init client 
export const supabase = createClient<Database>(
    process.env.SUPABASE_PROJECT_URL,
    process.env.SUPABASE_API_KEY,
    {
        auth: {
            persistSession: false
        }
    }
);

export class Db {
    // * GET or SELECT 
    static async getData(
        { table, column }: { table: string; column: string; }
    ) {
        const { data, error } = await
            supabase
                .from(table)
                .select(column);

        return data ? data : error.message
    }
    // * POST or INSERT
    static async insertData(
        { table, values }: { table: string, values: any }
    ) {
        const { statusText, error } = await
            supabase
                .from(table)
                .insert(values);
        return !error ? statusText : error.message
    }
    // * PUT or UPDATE
    static async updateData(
        { table, values, id }: { table: string, values: any, id: string }
    ) {
        const { status, error } = await
            supabase
                .from(table)
                .update(values)
                .eq("id", id)
        return !error ? status : error.message
    }
    // * DELETE
    static async deleteData(
        { table, id }: { table: string, id: string }
    ) {
        const { status, statusText, error } = await
            supabase
                .from(table)
                .delete()
                .eq("id", id)
        return !error ? status + statusText : error.message
    }
}
export class DynamicDb {
   static async getOneData({ table, column, checkCol, eqTo }) {
        const { data, error } = await supabase
            .from(table)
            .select(column)
            .eq(checkCol, eqTo);
            return data || error
    }
}