package com.example.backend.entities.request;

import jakarta.validation.constraints.NotBlank;
import lombok.Data;

@Data
public class LoginRequest {
    @NotBlank
    private String login;

    @NotBlank
    private String password;
}
