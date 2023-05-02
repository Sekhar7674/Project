package com.example.SathyaStack.services;
import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.SathyaStack.Models.Book;
import com.example.SathyaStack.Models.User;
import com.example.SathyaStack.repositories.BookRepo;
import com.example.SathyaStack.services.UserService;

@Service
public class BookService {

	@Autowired
	private BookRepo bookRepo;
	
	@Autowired
	private UserService userService;
	
	
	public List<Book> getBooks(){
		return bookRepo.findAll();
	}
	
	public Optional<Book> getBook(Long bookId) {
		return bookRepo.findById(bookId);
	}
	
	public String saveBook(Long userId, Book book) {
		Optional<User> userFound = userService.getUser(userId);
		if(userFound.isPresent()) {
			book.setUser(userFound.get());
			bookRepo.save(book);
			return "Book added successfully";
		}else return "No User Found";
	}
	
	public String updateBook(Long bookId, Book book, Long userId) {
		
		Optional<User> userFound = userService.getUser(userId);
		if(userFound.isPresent()) {
			Optional<Book> bookFound = bookRepo.findById(bookId);
			if(bookFound.isPresent()) {
				book.setBookId(bookFound.get().getBookId());
				book.setUser(userFound.get());
				bookRepo.save(book);
				return "Book Updated Success";
			}else {
				return "No Book FOund";
			}
		}else {
			return "No User Found";
		}
		
	}
	
	public String deleteBook(Long bookId) {
		Optional<Book> bookFound = bookRepo.findById(bookId);
		if(bookFound.isPresent()) {
			bookRepo.deleteById(bookId);
			return "Deletetion Success";
		}else {
			return "No Book FOund";
		}
	}
	
	
	
	
}
