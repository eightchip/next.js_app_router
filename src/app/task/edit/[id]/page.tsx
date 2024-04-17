interface TaskEditIdPageProps {
  params: {
    id: string;
  };
}

const TaskEditIdPage: React.FC<TaskEditIdPageProps> = ({ params }) => {
  return <div>{params.id}</div>;
};

export default TaskEditIdPage;