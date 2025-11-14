import { useQuery } from '@tanstack/react-query';
import React from 'react'
import { Link, useParams } from 'react-router-dom'
import { getPostsById, getUsersById } from '../api';
import Loader from './Loader';
import { Grid, Paper, Typography } from '@mui/material';
import ArrowBackIcon from "@mui/icons-material/ArrowBack";

export default function Post() {
  const searchParams = useParams();
  const {
    data: postDetail,
    isLoading,
    isError
  } = useQuery({
    queryKey: ["posts", searchParams.id],
    queryFn: ({ queryKey }) => getPostsById(queryKey[1]),
  });

  const userId = postDetail?.userId;

  const {
    data: userData
  } = useQuery({
    queryKey: ['users'],
    queryFn: () => getUsersById(userId),
    enabled: !!userId
  });

  if (isLoading) return <Loader />
  if (isError) return <div>Failed to load data.</div>

  return (
    <Grid container spacing={2} sx={{
      padding: "15px"
    }}>
      <Paper sx={{ padding: "15px" }}>
        <Grid size={12} container alignItems={'center'} spacing={2} sx={{ marginBottom: "10px"}}>
          <Link to={'/posts'}>
            <ArrowBackIcon />
          </Link>
          <Typography variant='h5' color='textSecondary'>{postDetail?.title}</Typography>
        </Grid>
        <Typography variant='caption'>Written By: {userData?.name}</Typography>
        <Typography>{postDetail?.body}</Typography>
      </Paper>
    </Grid>
  )
}
