import React from 'react';
import { Divider } from 'shared/ui/divider';
import { BaseHeader } from 'shared/ui/typo';
import { BaseSection, Box } from '..';

interface TitleSectionProps {
  title: string;
}

export const TitleSection: React.FC<TitleSectionProps> = ({ title, children }) => {
  return (
    <BaseSection>
      <Box>
        <BaseHeader text={title} />
      </Box>
      <Divider />
      <Box>{children}</Box>
    </BaseSection>
  );
};
