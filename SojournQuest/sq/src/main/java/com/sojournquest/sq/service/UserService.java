// // // // package com.sojournquest.sq.service;
// // // // import org.springframework.stereotype.Service;

// // // // import com.sojournquest.sq.model.Book;

// // // // @Service
// // // // public interface BookService {
// // // //     public Book saveUser(Book user);

// // // // }

// // // package com.sojournquest.sq.service;

// // // import com.sojournquest.sq.model.Book;

// // // public interface BookService {

// // //     void saveUser(Book user);
// // // }


// // package com.sojournquest.sq.service;

// // import org.springframework.beans.factory.annotation.Autowired;

// // import com.sojournquest.sq.model.Book;
// // import com.sojournquest.sq.repository.BookRepo;

// // public class BookService {

// //     @Autowired 
// //     private BookRepo bookRepo;

// //     public Book addUser(Book book){
// //         return bookRepo.save(book);
// //     }


  
// // }


// package com.sojournquest.sq.service;

// import org.springframework.beans.factory.annotation.Autowired;
// import org.springframework.stereotype.Service;

// import com.sojournquest.sq.model.User;
// import com.sojournquest.sq.repository.UserRepo;

// @Service
// public class UserService {
    
//     @Autowired 
//     private UserRepo userRepo;

//     public User signUp(User user){
//         return userRepo.save(user);
//     }

//     public User signIn(String username, String password){
//         User user = userRepo.findByUsername(username);
//         if (user != null && user.getPassword().equals(password)) {
//             return user;
//         }
//         return null;
//     }
// }


package com.sojournquest.sq.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import com.sojournquest.sq.model.User;
import com.sojournquest.sq.repository.UserRepo;

@Service
public class UserService {

    @Autowired
    private UserRepo userRepo;

    public User signUp(User user) {
        if (userRepo.existsByEmail(user.getEmail())) {
            throw new IllegalArgumentException("Email already exists");
        }
        return userRepo.save(user);
    }

    public User signIn(String username, String password) {
        return userRepo.findByFullnameAndPassword(username, password);
    }

    public User getUserByEmail(String email) {
        return userRepo.findByEmail(email);
    }

   
    
    public User updateUserByEmail(String email, User newUserDetails) {
        User existingUser = userRepo.findByEmail(email);
        if (existingUser != null) {
            // Update only provided details
            if (newUserDetails.getFullname() != null) {
                existingUser.setFullname(newUserDetails.getFullname());
            }
            if (newUserDetails.getPassword() != null) {
                existingUser.setPassword(newUserDetails.getPassword());
            }
            if (newUserDetails.getPhone() != null) {
                existingUser.setPhone(newUserDetails.getPhone());
            }
            return userRepo.save(existingUser);
        }
        return null; // Handle case where user doesn't exist
    }
    
    public void deleteUser(int userId) {
        userRepo.deleteById(userId);
    }

    public void deleteUserByEmail(String email) {
        User user = userRepo.findByEmail(email);
        if (user != null) {
            userRepo.delete(user);
        }
    }
    
}
