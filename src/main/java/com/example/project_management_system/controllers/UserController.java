package com.example.project_management_system.controllers;

import com.example.project_management_system.entities.User;
import com.example.project_management_system.services.UserService;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestParam;
import java.security.Principal;

@Controller
@RequiredArgsConstructor
public class UserController {
    private final UserService userService;

    @GetMapping("/login")
    public String login(@RequestParam(value = "error", required = false) String error, Principal principal, Model model) {
        if (error != null) {
            model.addAttribute("error", "Неверный email или пароль");
        }
        model.addAttribute("user", userService.getUserByPrincipal(principal));
        return "login";
    }

    @GetMapping("/registration")
    public String registration() {
        return "registration";
    }

    @GetMapping("/student_registration")
    public String studentRegistration(Principal principal, Model model) {
        model.addAttribute("user", userService.getUserByPrincipal(principal));
        return "student_registration";
    }

    @PostMapping("/student_registration")
    public String createStudent(User user, Model model) {
        if (!userService.createUser(user)) {
            model.addAttribute("errorMessage", "Регистрация невозможна!");
            return "student_registration";
        }
        return "redirect:/login";
    }

    @GetMapping("/teacher_registration")
    public String teacherRegistration(Principal principal, Model model) {
        model.addAttribute("user", userService.getUserByPrincipal(principal));
        return "teacher_registration";
    }

    @PostMapping("/teacher_registration")
    public String createTeacher(User user, Model model) {
        if (!userService.createUser(user)) {
            model.addAttribute("errorMessage", "Регистрация невозможна!");
            return "teacher_registration";
        }
        return "redirect:/login";
    }
}
