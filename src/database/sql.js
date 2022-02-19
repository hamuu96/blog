module.exports = {
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
        heading varchar(40), 
        content varchar(1000),
        categorie varchar(20),
        user_id int(7),
        foreign key (user_id) references users(user_id)

    )`,
    insert_admin: ` insert into admin where username = ? , firstname = ? , lastname = ?, email = ? , password = ?`,
    
    selectalladmin: `select * from admin where email = ?`,
    selectAdmin:  `select * from admin where email = ? and password = ? `,
    insertUser: 'insert into users (`firstname`, `lastname`, `email`, `password`, `address`, `author`, `dob`) values (?,?,?,?,?,?,?) '

}