package com.example.SathyaStack.repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.example.SathyaStack.Models.Book;

@Repository
public interface BookRepo extends JpaRepository<Book, Long> {

}
