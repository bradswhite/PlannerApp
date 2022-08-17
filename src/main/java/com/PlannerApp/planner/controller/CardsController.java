package com.PlannerApp.planner.controller;

import java.util.List;
import java.util.NoSuchElementException;

import com.PlannerApp.planner.model.Cards;
import com.PlannerApp.planner.repo.CardsRepo;

import org.springframework.beans.factory.annotation.Autowired;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.PutMapping;

/**
 * Contains all the rest routes to call the methods to access and manipulate cards in the db
 * @author Brad White
 * @date 8-22
 */
@RestController
@RequestMapping("/cards")
@CrossOrigin
public class CardsController {
	@Autowired
	private CardsRepo cardsRepo;

	/**
	 * Adds a card to the db
	 * @param {Card} card - card to add
	 * @return id - id of new card
	 * @example:
	 * User calls '.../cards/add' with POST method and json in body
	 */
	@PostMapping("/add")
	public int add(
		@RequestBody Cards card
	) {
		cardsRepo.save(card);
		return card.getId();
	}

	/**
	 * Gets and returns all cards from db
	 * @return all cards from db
	 * @example:
	 * User calls '../cards/getAll' with GET method
	 */
	@GetMapping("/getAll")
	public List<Cards> getAllItems() {
		return cardsRepo.findAll();
	}

	/**
	 * Gets card by id from db if found
	 * @param {int} id
	 * @return card data
	 * @example:
	 * User calls '../cards/5' with GET method to retrive card with id 5
	 */
	@GetMapping("/{id}")
	public ResponseEntity<Cards> get(
		@PathVariable int id
	) {
		try {
			Cards card = cardsRepo.findById(id).get();
			return new ResponseEntity<Cards>(card, HttpStatus.OK);
		} catch (NoSuchElementException e) {
			return new ResponseEntity<>(HttpStatus.NOT_FOUND);
		}
	}

	/**
	 * Updates card in db by id
	 * @param {Card} card - data to update existing card
	 * @param {int} id - id of card to update
	 * @return successful or unsuccessful http response
	 * @example:
	 * User calls '../cards/4' with PUT method and json in body to update card
	 */
	@PutMapping("/{id}")
	public ResponseEntity<Cards> update(
		@RequestBody Cards newCard,
		@PathVariable int id
	) {
		try {
			cardsRepo.findById(id)
				.map(card -> {
					card.setName(newCard.getName());
					return cardsRepo.save(card);
				})
				.orElseGet(() -> {
					return cardsRepo.save(newCard);
				});

			return new ResponseEntity<>(HttpStatus.OK);
		} catch (NoSuchElementException e) {
			return new ResponseEntity<>(HttpStatus.NOT_FOUND);
		}
	}

	/**
	 * Deletes card in db by id
	 * @param {int} id - id of card to delete
	 * @return confirmation string
	 * @example:
	 * User calls '../cards/7' with DELETE method to delete card number 7
	 */
	@DeleteMapping("/{id}")
	public String delete(
		@PathVariable int id
	) {
		cardsRepo.deleteById(id);
		return "Deleted item with id " + id;
	}
}
