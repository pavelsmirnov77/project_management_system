package com.example.project_management_system.controllers;

import com.example.project_management_system.entities.User;
import com.example.project_management_system.repositories.UserRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;

import java.security.Principal;

@Controller
@RequiredArgsConstructor
public class StudentController {
    private UserRepository userRepository;

    @Autowired
    public StudentController(UserRepository userRepository) {
        this.userRepository = userRepository;
    }

    @GetMapping("/student_page")
    public String studentPage(Principal principal, Model model) {
        User user = getUserFromPrincipal(principal);
        model.addAttribute("user", user);
        return "student_main_page";
    }

//    @GetMapping("/teacher_page")
//    public String teacherPage(Principal principal, Model model) {
//        User user = getUserFromPrincipal(principal);
//        model.addAttribute("user", user);
//        // Логика для отображения страницы преподавателя
//        return "teacher_main_page";
//    }

    private User getUserFromPrincipal(Principal principal) {
        String email = principal.getName();
        return userRepository.findByEmail(email);
    }
}
