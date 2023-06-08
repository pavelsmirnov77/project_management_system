package com.example.project_management_system.controllers;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class MainController {
    @GetMapping("/")
    public String homePage() {
        return "Домашняя страница";
    }

    @GetMapping("/login")
    public String loginPage() {
        return "Авторизация пользователя";
    }

    @GetMapping("/profile")
    public String pageForUsers() {
        return "Страница для авторизированных пользователей";
    }
}
