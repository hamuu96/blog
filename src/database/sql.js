module.exports = {
    //create tables
    users: `create table if not exists users(
        user_id int(7) auto_increment primary key, 
        firstname varchar(20),
        lastname varchar(20), 
        email varchar(50), 
        password varchar (100), 
        author char(8),
        dob date, 
        address varchar(40)

    )`, 
    admin: `create table if not exists admin(
        admin_id int (4) auto_increment primary key, 
        username varchar(20), 
        firstname varchar(20), 
        lastname varchar(20),
        email varchar (40), 
        password varchar(100)
    )`,
    
    blog: `create table if not exists blog(
        blog_id int (4) auto_increment primary key, 
        heading varchar(100) not null, 
        content text not null,
        image varchar(100) not null,
        media_path varchar(100) ,
        view_option varchar(10) not null,
        date TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
        user_id int(7) not null,
        foreign key (user_id) references users(user_id)

    )`,

    // INSERT INTO `admin`(`admin_id`, `username`, `firstname`, `lastname`, `email`, `password`) VALUES (1,'admin','hamza','abdikadir','hamza@email.com','$2a$10$XWC53zpM5y1en5cZmZK4peLILH5zb3kiLAidP1pgTLKUCCYHlOOTW')
    //insert statements
    insert_admin: ` insert into admin where username = ? , firstname = ? , lastname = ?, email = ? , password = ?`,
    insertUser: 'insert into users (`firstname`, `lastname`, `email`, `password`, `address`, `author`, `dob`) values (?,?,?,?,?,?,?) ',
    insertBlog: 'Insert into blog (heading, content, image, media_path,view_option, user_id) values (?,?,?,?,?,?)',
    //select statements
    selectalladmin: `select * from admin where email = ?`,
    selectAdmin:  `select * from admin where email = ? and password = ? `,
    selectUser: 'Select * from users where email = ?',
    getAllBlogs: 'Select * from blog',
    selectBlog: 'Select * from blog where view_option = ?',
    selectSingleBlog: 'Select * from blog where blog_id = ?',


    //delete
    deleteBlogPost: 'delete from blog where blog_id = ?',

    //update
    updateBlogPost: 'update blog set  heading = ? , content = ?, view_option = ?,  user_id = ? where blog_id = ?'
}