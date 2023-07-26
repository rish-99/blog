import "./singlepost.css"

export default function Singlepost() {
    return (
        <div className="singlePost">
            <div className="singlePostWrapper">
                <img
                    className="singlePostImg"
                    src="https://images.unsplash.com/photo-1518855706573-84de4022b69b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1169&q=80"
                    alt=""
                />
                <h1 className="singlePostTitle">
                    Lorem ipsum dolor sit amet.
                    <div className="singlePostEdit">
                        <i className="singlePostIcon far fa-edit"></i>
                        <i className="singlePostIcon far fa-trash-alt"></i>
                    </div>
                </h1>
                <div className="singlePostInfo">
                    <span className="singlePostAuthor">Aurthor: <b>Safak</b></span>
                    <span className="singlePostDate">1 hour ago</span>
                </div>
                <p className="singlePostDesc">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam
                    voluptatum, quibusdam, voluptate, quia voluptas quod voluptatem
                    voluptatibus quos doloribus quas quidem? Quisquam, voluptates
                    voluptatibus. Quisquam voluptatum, quibusdam, voluptate, quia
                    voluptas quod voluptatem voluptatibus quos doloribus quas quidem?
                    Quisquam, voluptates voluptatibus.
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam
                    voluptatum, quibusdam, voluptate, quia voluptas quod voluptatem
                    voluptatibus quos doloribus quas quidem? Quisquam, voluptates
                    voluptatibus. Quisquam voluptatum, quibusdam, voluptate, quia
                    voluptas quod voluptatem voluptatibus quos doloribus quas quidem?
                    Quisquam, voluptates voluptatibus.
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam
                    voluptatum, quibusdam, voluptate, quia voluptas quod voluptatem
                    voluptatibus quos doloribus quas quidem? Quisquam, voluptates
                    voluptatibus. Quisquam voluptatum, quibusdam, voluptate, quia
                    voluptas quod voluptatem voluptatibus quos doloribus quas quidem?
                    Quisquam, voluptates voluptatibus.
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam
                    voluptatum, quibusdam, voluptate, quia voluptas quod voluptatem
                    voluptatibus quos doloribus quas quidem? Quisquam, voluptates
                    voluptatibus. Quisquam voluptatum, quibusdam, voluptate, quia
                    voluptas quod voluptatem voluptatibus quos doloribus quas quidem?
                    Quisquam, voluptates voluptatibus.
                </p>
            </div>
        </div>
    )
}
