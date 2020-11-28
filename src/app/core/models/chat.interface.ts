export interface ChatMessages {
	client_id: number,
	count: number,
	filtered: number,
	flags: number,
	player: string,
	simplified: string,
	text: string,
	topics: Array<Topics>
}

interface Topics {
	confidence: number,
	relevance: number,
	topic: number
}
