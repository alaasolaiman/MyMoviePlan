package com.mymovieplan.controllers;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.mymovieplan.model.MovieCard;
import com.mymovieplan.repositories.MovieCardRepo;

@RestController
@CrossOrigin(origins = "http://localhost:4200")
@RequestMapping("MovieCard")
public class MovieCardController {
	@Autowired
	MovieCardRepo MVR;
	
	
	@PostMapping("addCard")
	public MovieCard addCard(@RequestBody MovieCard movieCard)
	{
		return MVR.save(movieCard);
	}
	
	@GetMapping("allCards")
	public List<MovieCard> getAll()
	{
		List<MovieCard> cards= (List<MovieCard>) MVR.findAll();
		return cards;
	}
	
	// get particular Card by its ID
		@GetMapping("card/{id}")
		public Optional<MovieCard> getCardById(@PathVariable int id)
		{
			return MVR.findById(id);
		}
		
		// update existing Card 
		@PutMapping("update/{id}")
		public MovieCard updateCard(@RequestBody MovieCard movieCard)
		{
			return MVR.save(movieCard);
		}
		
		// delete particular Card from database
		@DeleteMapping("delete/{id}")
		public void deleteCard(@PathVariable int id)
		{
			MVR.deleteById(id);
		}
	
}
