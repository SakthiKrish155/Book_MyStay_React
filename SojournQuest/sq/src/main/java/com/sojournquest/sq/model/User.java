// package com.sojournquest.sq.model;

// import jakarta.persistence.Entity;
// import jakarta.persistence.GeneratedValue;
// import jakarta.persistence.GenerationType;
// import jakarta.persistence.Id;

// @Entity
// public class Book {
//     @Id
//     @GeneratedValue(strategy = GenerationType.IDENTITY)
//     private int uid;
//     private String username;
//     private String password;
    
//     public Book() {
//     }

//     public Book(String username, String password) {
//         this.username = username;
//         this.password = password;
//     }

//     public int getUid() {
//         return uid;
//     }

//     public void setUid(int uid) {
//         this.uid = uid;
//     }

//     public String getUsername() {
//         return username;
//     }

//     public void setUsername(String username) {
//         this.username = username;
//     }

//     public String getPassword() {
//         return password;
//     }

//     public void setPassword(String password) {
//         this.password = password;
//     }
// }



package com.sojournquest.sq.model;


import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;


@Entity
public class User {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;
    private String fullname;

    @Column(nullable=false)
    private String email;
    @Column(nullable=false)
    private String password;
    private Long phone;
    


    public User() {
    }

    public User(String fullname, String password,String email, Long phone) {
        this.fullname = fullname;
        this.password = password;
        this.email = email;
        this.phone = phone;
    }


    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public String getFullname() {
        return fullname;
    }

    public void setFullname(String fullname) {
        this.fullname = fullname;
    }

    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public Long getPhone() {
        return phone;
    }

    public void setPhone(Long phone) {
        this.phone = phone;
    }


   

}

