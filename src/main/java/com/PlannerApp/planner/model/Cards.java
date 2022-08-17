package com.PlannerApp.planner.model;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

/**
 * Getter and setter methods for tasks
 * @author Brad White
 * @date 8-2022
 */
@Entity
public class Cards {
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	// Task data values:
	private int id;
	private String name;

	public Cards() {}

	// Getter and setter methods:
	
	public int getId() { return id; }
	public void setId( int id ) { this.id = id; }
	
	public String getName() { return name; }
	public void setName( String name ) { this.name = name; }
}
