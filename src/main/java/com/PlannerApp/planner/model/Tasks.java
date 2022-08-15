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
public class Tasks {
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	// Task data values:
	private int id;
	private String text;
	private int complete;
	private String card;

	public Tasks() {}

	// Getter and setter methods:
	
	public int getId() { return id; }
	public void setId( int id ) { this.id = id; }
	
	public String getText() { return text; }
	public void setText( String text ) { this.text = text; }

	public int getComplete() { return complete; }
	public void setComplete( int complete ) { this.complete = complete; }

	public String getCard() { return card; }
	public void setCard( String card ) { this.card = card; }

}
