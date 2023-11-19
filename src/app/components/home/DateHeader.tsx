import React from 'react';
import useFormattedDate from '@/features/datetime/hooks/useFormattedDate';

const DateHeader = () => {
  const formattedDate = useFormattedDate();

  return <div>{formattedDate}</div>;
};
