package com.example.project_management_system.entities;

import jakarta.persistence.*;
import lombok.Data;

@Entity
@Data
@Table(name = "files")
public class File {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private String filename;
    private String filetype;
    private byte[] data;
    @ManyToOne(cascade = CascadeType.REFRESH, fetch = FetchType.EAGER)
    @JoinColumn
    private User user;

    public File() {
    }

    public File(String filename, String filetype, byte[] data) {
        this.filename = filename;
        this.filetype = filetype;
        this.data = data;
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getFilename() {
        return filename;
    }

    public void setFilename(String filename) {
        this.filename = filename;
    }

    public String getFileType() {
        return filetype;
    }

    public void setFileType(String fileType) {
        this.filetype = fileType;
    }

    public byte[] getData() {
        return data;
    }

    public void setData(byte[] data) {
        this.data = data;
    }
}

