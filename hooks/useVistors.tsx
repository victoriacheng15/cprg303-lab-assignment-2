import { useState, useEffect } from "react";
import { getVisitors } from "../lib/supabase_crud";

interface Visitor {
	id: number;
	createdAt: string;
	visitor_name: string;
}

export function useVisitors() {
	const [visitors, setVisitors] = useState<Visitor[]>([]);

	async function fetchVisitors() {
		const data = await getVisitors();
		setVisitors(data);
	}

	useEffect(() => {
		fetchVisitors();
	}, []);

	return {
		visitors,
	};
}
