package com.SA.bibliocrud.services;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;

import com.SA.bibliocrud.repositorio.RepositorioLivro;
import com.SA.bibliocrud.repositorio.RepositorioUsuario;
import com.SA.bibliocrud.entities.Livro;
import com.SA.bibliocrud.entities.Usuario;

public class ServiceLivro {

  @Autowired
  private RepositorioLivro repositorioLivro;

  @Autowired 
  private RepositorioUsuario repositorioUsuario;

  public List<Livro> findAll() {

    return repositorioLivro.findAll();
  }

  public Livro findById(Long id) {
    return repositorioLivro.findById(id.)orElse(null);
  }
  public Livro save(com.BiblioCrud.entities.Livro livro){
    return repositorioLivro.save(livro);
  }

  public void deleteById(Long id){
    repositorioLivro.deleteById(id);
  }
}