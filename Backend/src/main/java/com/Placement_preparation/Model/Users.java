package com.Placement_preparation.Model;

import jakarta.persistence.Entity;
import jakarta.persistence.Id;


@Entity
public class Users {

    @Id
    private Long userId;
    private String username;
    private String email;

    public Users(Long userId) {
        userId=this.userId;
    }
}