import { keepPreviousData, useInfiniteQuery } from '@tanstack/react-query'
import React, { useCallback, useEffect, useRef } from 'react'
import { getPosts } from '../api';
import Card from '@mui/material/Card';
import { Button, Link, Grid, Typography } from '@mui/material';
import Loader from './Loader';

export default function Posts() {
    const observerRef = useRef(null);

    const { data, isLoading, isError, fetchNextPage, hasNextPage, isFetching } = useInfiniteQuery({
        queryKey: ['posts'],
        queryFn: getPosts,
        initialPageParam: 0,
        getNextPageParam: (lastPage, lastPageParam) => {
            if (lastPage.length === 0) {
                return undefined
            }
            return lastPageParam.length
        }
    });

    // useEffect(() => {
    //     if (loadMoreRef.current === null) return;
    //     const observer = new IntersectionObserver((entries) => {
    //         entries.forEach(element => {
    //             console.log({ element });
    //             if (element.isIntersecting) {
    //                 fetchNextPage();
    //             }
    //         });
    //     }, {
    //         root: null,
    //         rootMargin: '0px'
    //     });
    //     observer.observe(loadMoreRef.current);
    //     return (() => {
    //         if (loadMoreRef.current) observer.unobserve(loadMoreRef.current);
    //         observer.disconnect();
    //     })
    // }, [fetchNextPage]);

    const loadMoreRef = useCallback((node) => {
        if (observerRef.current) observerRef.current.disconnect();
        observerRef.current = new IntersectionObserver((entries) => {
            entries.forEach(element => {
                if(element.isIntersecting && hasNextPage) {
                    fetchNextPage();
                }
            });
        });
        if(node) observerRef.current.observe(node);
    }, [fetchNextPage, hasNextPage]);

    if (isLoading) return <Loader />
    if (isError) return <div><h3>Failed to load data.....</h3></div>

    return (
        <div className='container'>
            <Typography variant="h4" color='primary'>
                JSON Placeholder API: Posts
            </Typography>
            <Grid container spacing={2} className="mb-10">
                {
                data?.pages && Array.isArray(data.pages) && data.pages.length ? data.pages.map((group, i) => (
                    <React.Fragment key={`group-${i}`}>
                        {Array.isArray(group) && group.length ? group.map((post, j) => (
                            <Grid size={4} key={post.id}
                                ref={ (j === group.length - 1) ? loadMoreRef : null}>
                                <Card variant='outlined' sx={{
                                    marginBlock: "15px",
                                    padding: "10px",
                                    height: "100%"
                                }}>
                                    <Link href={'posts/' + post.id} underline="hover">
                                        <Typography variant='h5' color='textSecondary'>{post.title}</Typography>
                                    </Link>
                                    <Typography>{post.body}</Typography>
                                </Card>
                            </Grid>
                        )) : ''}
                    </React.Fragment>
                )) : ''
            }
            </Grid>
        </div>
    )
}
