interface Post {
    id: number;
    userId: number;
    title: string;
    body: string;
}

function fetchPosts(url: string): Promise<Post[]>;
function fetchPosts(url: string, cb: (data: Post[]) => void): void;
function fetchPosts(url: string, cb?: (data: Post[]) => void): Promise<Post[]> | void {
    if (cb) {
        fetch(url).then((res) => res.json()).then((data) => cb(data));
    }

    return fetch(url).then((res) => res.json());
}


fetchPosts("https://jsonplaceholder.typicode.com/posts", (data) => {
    data.forEach((post) => {
        console.log(post.id);
    })
});

fetchPosts("https://jsonplaceholder.typicode.com/posts").then((data) => {
    data.forEach((post) => {
        console.log(post.id);
    })
});