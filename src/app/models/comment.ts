interface Comment {
  id?: number;
  postId: number;
  parent_id?: number;
  user?: string;
  date?: string;
  content: string;
}

export default Comment;
