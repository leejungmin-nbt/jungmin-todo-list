import { ITodosItem } from "@/types/todos";
import { NextApiRequest, NextApiResponse } from "next";

let todos: ITodosItem[] = [];

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  const { method, body } = req;

  switch (method) {
    case 'GET':
      res.status(200).json(todos);
      break;
    case 'POST':
      const newTodo = { ...body };

      todos.push(newTodo);
      res.status(200).json(newTodo);
      break;
    case 'PUT':
      const idx = todos.findIndex((todo) => todo.title === body.title);

      if(idx !== -1) {
          todos[idx] = {...todos[idx], ...body}
        res.status(200).json(todos[idx]);
      }else {
        res.status(404).json({message: '선택하신 투두를 못찾았어요'});
      }
      break;
    //삭제를 라우터 핸들링 문제로 PATCH로 사용
    case 'PATCH':
      const removeIdx = todos.findIndex((todo) => todo.title === body.title);
      const result = todos.filter((todo) => todo.title !== body.title);

      if(removeIdx !== -1) {
          todos = result;
        res.status(200).json(todos);
      }else {
        res.status(404).json({message: '선택하신 투두를 못찾았어요'});
      }
      break;
    default:
      //허용 메소드 header set 설정
      res.setHeader('Allow', ['GET', 'POST', 'PUT', 'PATCH']);
      res.status(405).end(`${method} 는 지원하지 않아요.`);
      break;
  }
}