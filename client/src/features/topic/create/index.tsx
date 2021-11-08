import { CreateTopicForm } from './ui';
import { CreateTopicFormOutput } from './model/types';

export const CreateTopic = () => {
  // const [createTopic, loading] = useCreateTopic();

  const onCreateTopic = (data: CreateTopicFormOutput) => {
    console.log('TOPIC DATA', data);
  };

  return <CreateTopicForm onSubmit={onCreateTopic} />;
};
