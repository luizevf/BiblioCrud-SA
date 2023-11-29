package com.BiblioCrud.controllers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.autoconfigure.security.SecurityProperties.User;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.BiblioCrud.entities.*;
import com.BiblioCrud.services.ServiceUsuario;

@RestController
@RequestMapping("/usuarios")

public class ControllerUsuario {
  
  @Autowired
  private ServiceUsuario serviceUsuario;

  @GetMapping
  public List<Usuario> getAllUsuarios(){
  return serviceUsuario.findAll();
}

@PostMapping
public Usuario addUsuario (@RequestBody Usuario usuario) {
  return serviceUsuario.save(usuario);
}

}
