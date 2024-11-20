'use client';

import React from 'react';
import { TextField, TextArea , Button} from '@radix-ui/themes';

const Page = () => {
  return (
    <div className='max-w-xl space-y-3'>
      <TextField.Root placeholder="Title">
      </TextField.Root>
      <TextArea placeholder="Reply to comment…" />
      <Button>Create</Button>
    </div>
  );
};

export default Page;
