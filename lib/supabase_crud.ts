import { supabase } from "./supabase";

export async function getVisitors() {
	const TABLE_NAME = "visitors";
	const { data, error } = await supabase.from(TABLE_NAME).select("*");

	if (error) {
		throw error;
	}

	return data;
}

export async function getTasks() {
	const TABLE_NAME = "tasks";
	const { data, error } = await supabase.from(TABLE_NAME).select("*");
	if (error) {
		throw error;
	}
	return data;
}

export async function createTask(task: string) {
	const TABLE_NAME = "tasks";
	const { data, error } = await supabase
		.from(TABLE_NAME)
		.insert([{ task }])
		.select();

	if (error) {
		throw error;
	}

	return data[0];
}

export async function updateTask(id: number, task: string) {
	const TABLE_NAME = "tasks";
	const { data, error } = await supabase
		.from(TABLE_NAME)
		.update({ task })
		.eq("id", id)
		.select();

	if (error) {
		throw error;
	}

	return data;
}

export async function deleteTask(id: number) {
	const TABLE_NAME = "tasks";
	const { error } = await supabase.from(TABLE_NAME).delete().eq("id", id);

	if (error) {
		throw error;
	}
}
