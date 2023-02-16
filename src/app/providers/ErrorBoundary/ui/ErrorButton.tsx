import React, { useEffect, useState } from 'react';
import { Button } from 'shared/ui/Button/Button';

// for test ErrorBoundary
export const ErrorButton = () => {
  const [error, setError] = useState(false);

  useEffect(() => {
    if (error) {
      throw new Error();
    }
  }, [error]);

  const throwError = () => setError(true);

  return (
    <Button onClick={throwError}>throw Error</Button>
  );
};
