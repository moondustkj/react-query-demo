export const getPosts = ({ pageParam }) => {
    return fetch(`https://jsonplaceholder.typicode.com/posts?_limit=10&_start=${10 * (pageParam)}`).then(res => res.json());
}

export const getPostsById = (id) => {
    return fetch('https://jsonplaceholder.typicode.com/posts/' + id).then(res => res.json());
}

export const getUsersById = (id) => {
    return fetch(`https://jsonplaceholder.typicode.com/users/${id}`).then(res => res.json());
}