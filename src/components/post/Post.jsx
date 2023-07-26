import "./post.css"

export default function Post() {
    return (
        <div className='post'>
            <img
                className='postImg'
                src='https://images.unsplash.com/photo-1518855706573-84de4022b69b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1169&q=80'
                alt=''
            />
            <div className='postInfo'>
                <div className='postCats'>
                    <span className='postCat'>Music</span>
                    <span className='postCat'>Life</span>
                </div>
                <span className='postTitle'>Lorem ipsum dolor sit amet.</span>
                <hr />
                <span className='postDate'>1 hour ago</span>
            </div>
            <p className='postDesc'>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam
                voluptatum, quibusdam, voluptate, quia voluptas quod voluptatem
                voluptatibus quos doloribus quas quidem? Quisquam, voluptates 
                voluptatibus. Quisquam voluptatum, quibusdam, voluptate, quia
                voluptas quod voluptatem voluptatibus quos doloribus quas quidem?
                Quisquam, voluptates voluptatibus.  
            </p>
        </div>
    )
}
