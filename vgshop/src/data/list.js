import { game } from "./game"

export const lists = [
    {
        id: "1",
        title: "List 1",
        games: Array(10).fill().map((_,i) => ({ ...game, id:i })),
    },
    {
        id: "2",
        title: "List 2",
        games: Array(10).fill().map((_,i) => ({ ...game, id:i })),
    },
]