<?php

kirbytext::$tags['chemin'] = array(
  'html' => function($tag) {
    return '<div class="chemin" data-chemin="'.$tag->attr('chemin') . '">';
  }
);