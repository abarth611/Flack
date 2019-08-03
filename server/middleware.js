const express = require('express');

export function isAuthenticated(req,res,next) {
  if(req.session.user) {
    return next()
  }
  res.redirect('/')
}