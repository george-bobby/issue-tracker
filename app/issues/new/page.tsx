'use client';

import React, { useState } from 'react';
import { TextField, Button } from '@radix-ui/themes';
import SimpleMDE from "react-simplemde-editor";
import "easymde/dist/easymde.min.css";
import { useForm, Controller } from "react-hook-form";
import axios from 'axios';
import Spinner from '../../Spinner';
import { useRouter } from 'next/navigation';

interface IssueForm {
  title: string;
  description: string;
 }

const Page = () => {
  const [submitting, setSubmitting] = useState(false)
  const router = useRouter()
  const { register, control, handleSubmit } = useForm<IssueForm>();
  return (
    <form className='max-w-xl space-y-3' onSubmit={handleSubmit(async data => { setSubmitting(true); await axios.post('/api/issues', data);  router.push('/issues')})}>
      <TextField.Root placeholder="Title" {...register('title')} />
      <Controller name='description' control={control} render={ ({field})=> <SimpleMDE {...field} placeholder="Description…" /> } />
      <Button disabled={ submitting}>Create {submitting &&<Spinner/>}</Button>
    </form>
  );
};

export default Page;
