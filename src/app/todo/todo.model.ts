export interface Todo {
    id: number;
    title: string;
    description: string;
    date: string;
    priority: 'low' | 'medium' | 'high';
    status: 'completed' | 'in-progress' | 'pending';
  }
  