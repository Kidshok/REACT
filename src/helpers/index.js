import { nanoid } from "nanoid";

export const compareById = (targetId) => (item) => item.id === targetId;

export const creatMessage = (author, text) => ({
	author,
	text,
	id: nanoid(),
})

export const creatChat = (name) => ({
	name,
	id: nanoid(),
})

export const mapChatSnapshotToChat = (snapshot) => ({
	...snapshot.value(),
	id: snapshot.key,
})