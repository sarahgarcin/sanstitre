<?php

// kirbytext::$tags['chemin'] = array(
//   'html' => function($tag) {
//     return '<div class="chemin" data-chemin="'.$tag->attr('chemin') . '">';
//   }
// );

kirbytext::$tags['chemin'] = array(
  'attr' => array(
    'text'
  ),
  'html' => function($tag) {

    $chemin = $tag->attr('chemin');
    $text    = $tag->attr('text', $chemin);
    // return '<a href="' . $url . '/' . $article . '">' . $text . '</a>';
    return '<div class="chemin '.$chemin.'" data-chemin="'.$chemin . '"data-name="'.$text.'">';

  }
);