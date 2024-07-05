import { ITodosItem } from "@/types/todos";
import { NextApiRequest, NextApiResponse } from "next";

let todos: ITodosItem[] = [];
let id = 0;

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  const { method, body, query } = req;

  switch (method) {
    case 'GET':
      res.status(200).json(todos);
      break;
    case 'POST':
      const newTodo = { ...body };
      console.log('newTodo >> ', newTodo)
      todos.push(newTodo);
      res.status(200).json(newTodo);
      break;
    case 'PUT':
      break;
    case 'DELETE':
      break;
    default:
      //허용 메소드 header set 설정
      res.setHeader('Allow', ['GET', 'POST', 'PUT', 'DELETE']);
      res.status(405).end(`${method} 는 지원하지 않아요.`);
      break;
  }
}