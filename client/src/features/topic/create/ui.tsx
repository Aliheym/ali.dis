import React from 'react';
import { useForm } from 'react-hook-form';

import { BaseButton } from 'shared/ui/buttons';
import { FormRow } from 'shared/ui/forms';
import { BaseInput } from 'shared/ui/inputs';
import { TitleSection } from 'shared/ui/sections';

import { CreateTopicFormOutput } from './model/types';

interface CreateTopicFormProps {
  onSubmit: (data: CreateTopicFormOutput) => void;
}

export const CreateTopicForm: React.FC<CreateTopicFormProps> = ({ onSubmit }) => {
  // TODO: add validation logic
  const { handleSubmit, register } = useForm<CreateTopicFormOutput>();

  return (
    <TitleSection title="Create a new topic">
      <form action="/api/topics" method="POST" onSubmit={handleSubmit(onSubmit)}>
        <FormRow>
          <BaseInput placeholder="Topic name..." fullWidth {...register('name')} />
        </FormRow>

        <FormRow>
          <BaseInput
            attrs={{ rows: 10 }}
            placeholder="Topic description..."
            fullWidth
            multiline
            {...register('description')}
          />
        </FormRow>

        <BaseButton text="Create" type="submit" />
      </form>
    </TitleSection>
  );
};
