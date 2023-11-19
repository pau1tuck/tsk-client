import React from 'react';
import useFormattedDate from '@/services/hooks/useFormattedDate';

const DateHeader = () => {
  const formattedDate = useFormattedDate();

  return <div>{formattedDate}</div>;
};
