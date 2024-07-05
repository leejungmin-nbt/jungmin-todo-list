export type TChangeMethod = 'update' | 'delete';

export interface ITodosItem {
    id?: number;
    title: string;
    completed: boolean;
    createdAt: any;
}