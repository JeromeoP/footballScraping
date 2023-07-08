import React from 'react';
import { Button } from '@chakra-ui/react';

const CompareButton = ({ onClick, loading }) => (
  <Button onClick={onClick} isLoading={loading}>Compare</Button>
);

export default CompareButton;
