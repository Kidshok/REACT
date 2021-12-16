export const CREAT_CHAT = 'CREATE_CHAT'
export const SET_CHATS = 'SET_CHATS'
export const REMOVE_CHAT = 'REMOVE_CHAT'

export const creatChat = (chat) => ({
	type: CREAT_CHAT,
	payload: chat,
})

export const setChats = (chats) => ({
	type: SET_CHATS,
	payload: chats,
})

export const removeChat = (chatid) => ({
	type: REMOVE_CHAT,
	payload: chatid,
})