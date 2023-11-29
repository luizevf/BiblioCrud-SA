package com.SA.bibliocrud.entities;

import java.sql.Date;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.OneToMany;
import jakarta.persistence.Table;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Entity
@Data
@NoArgsConstructor
@AllArgsConstructor
@Table(name = "Livros")

public class Livro {
@Id
@GeneratedValue(strategy = GenerationType.IDENTITY)
private Long IdLivro; 
private long ISBN;
private String Nome;
private String Autor;
private String Editora;
private Date DataPublicacao;
@OneToMany
@JoinColumn(name = "id_usuario")
private Usuario usuario;
}

  
