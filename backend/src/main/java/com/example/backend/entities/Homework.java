package com.example.backend.entities;

import com.fasterxml.jackson.annotation.JsonFormat;
import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.time.LocalDateTime;

@Entity
@Table(name = "homeworks")
@Data
@NoArgsConstructor
@AllArgsConstructor
public class Homework {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long id;
    private String name;
    private String description;
    @Column
    @JsonFormat(pattern = "yyyy-MM-dd HH:mm:ss")
    private LocalDateTime dateOfPosting;
    @Column
    @JsonFormat(pattern = "yyyy-MM-dd HH:mm:ss")
    private LocalDateTime deadline;
    @ManyToOne(cascade = CascadeType.REFRESH, fetch = FetchType.EAGER)
    private User author;
    @ManyToOne(cascade = CascadeType.REFRESH, fetch = FetchType.EAGER)
    private Subject subject;
}
