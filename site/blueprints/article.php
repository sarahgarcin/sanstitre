<?php if(!defined('KIRBY')) exit ?>

title: Article
pages: false
files:
  sortable: true
fields:
  title:
    label: Titre
    type:  text
  actor:
    label: Acteur(s)
    type:  text
    width: 1/2
  year:
    label: Année
    type:  text
    width: 1/2
  discipline:
    label: Discipline
    type: tags
  chapeau:
    label: Chapeau
    type:  wysiwyg
  pdf:
    label: PDF
    type: url
  text:
    label: Texte
    type:  wysiwyg