// package com.sojournquest.sq.repository;

// import org.springframework.data.jpa.repository.JpaRepository;
// import org.springframework.stereotype.Repository;

// import com.sojournquest.sq.model.Book;

// @Repository
// public interface BookRepo extends JpaRepository<Book, Integer> {
    
// }

package com.sojournquest.sq.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.sojournquest.sq.model.User;

@Repository
public interface UserRepo extends JpaRepository<User, Integer> {

    boolean existsByEmail(String email);

    User findByFullnameAndPassword(String username, String password);

    User findByEmail(String email);

    void deleteByEmail(String userEmail);
}
