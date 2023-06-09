package com.example.SathyaStack.Controllers;

import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.stereotype.Repository;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.ResponseBody;

import com.example.SathyaStack.Models.Book;
import com.example.SathyaStack.services.BookService;

@Controller
@ResponseBody
public class BookController {

	
	@Autowired
	private BookService bookService;
	
	@PostMapping("/saveBook/{userId}")
	private ResponseEntity<String> saveBook(@RequestBody Book book, @PathVariable Long userId){
		String response = bookService.saveBook(userId, book);
		return new ResponseEntity<String>(response, HttpStatus.CREATED);
	}
	
	@GetMapping("getBook/{bookId}")
	private ResponseEntity<Book> getBook(@PathVariable Long bookId){
		Optional<Book> bookFound = bookService.getBook(bookId);
		if(bookFound.isPresent()) return new ResponseEntity<Book>(bookFound.get(), HttpStatus.OK);
		else return new ResponseEntity<>(HttpStatus.NO_CONTENT);
	}
	
	@PutMapping("updateBook/{bookId}/{userId}")
	private ResponseEntity<String> updateBook(@PathVariable Long bookId, @RequestBody Book book, @PathVariable Long userId){
		String response = bookService.updateBook(bookId, book, userId);
		return ResponseEntity.ok(response);
	}
	
	@DeleteMapping("deleteBook/{bookId}")
	private ResponseEntity<String> deleteBook(@PathVariable Long bookId){
		String response = bookService.deleteBook(bookId);
		return ResponseEntity.ok(response);
	}
	
}
