package com.BiblioCrud.controllers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.BiblioCrud.services.ServiceLivro;

@RestController
@RequestMapping("/livros")

public class ControllerLivro {

  @Autowired
  private ServiceLivro serviceLivro;

  @GetMapping
  public List<Livro> getAllLivros() {
    return serviceLivro.findAll();
  }

  @GetMapping("/{id}")
  public Livro getLivro(@PathVariable Long id) {
    return livro.findById(id);
  }

  @PostMapping
  public Livro addLivro(@RequestBody Livro livro) {
    return serviceLivro.save(livro);
  }

  @PutMapping("/{id}")
  public Livro updateLivro(@PathVariable Long id, @RequestBody Livro livro) {
    return serviceLivro.save(livro);
  }

  @DeleteMapping("/{id}")
  public void deleteLivro(@PathVariable Long id) {
    serviceLivro.deleteById(id);
  }
}
