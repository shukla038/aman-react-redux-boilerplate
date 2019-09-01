export const api = {
    posts:{
        GETPOST : `https://jsonplaceholder.typicode.com/posts`,
        POSTDETAIL: (id) => `https://jsonplaceholder.typicode.com/posts/${id}`,
        GETCOMMENTS: (id) => `https://jsonplaceholder.typicode.com/posts/${id}/comments`,
    }
} 