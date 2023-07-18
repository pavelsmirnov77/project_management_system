package com.example.backend.entities.response;

import lombok.Data;

import java.util.List;

@Data
public class JwtResponse {
    private String accessToken;
    private String type = "Bearer";
    private Long id;
    private String username;
    private String login;
    private String description;
    private String email;
    private List<String> roles;

    public JwtResponse(String accessToken, Long id, String username, String login, String email, String description, List<String> roles) {
        this.accessToken = accessToken;
        this.id = id;
        this.username = username;
        this.login = login;
        this.email = email;
        this.description = description;
        this.roles = roles;
    }
}
