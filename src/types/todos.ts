export type TChangeMethod = 'update' | 'delete';

export interface ITodosItem {
    id: string;
    title: string;
    completed: boolean;
    createdAt: any;
}