<!DOCTYPE html>
<html lang="en">
<head>

  <meta charset="utf-8" />
  <meta name="viewport" content="width=device-width,initial-scale=1.0">

  <title><?php echo $site->title()->html() ?> | <?php echo $page->title()->html() ?></title>
  <meta name="description" content="<?php echo $site->description()->html() ?>">
  <meta name="keywords" content="<?php echo $site->keywords()->html() ?>">

  <?php echo css('assets/css/main.css') ?>
  <?php echo css('assets/bower_components/jscrollpane/style/jquery.jscrollpane.css') ?>
  <?php echo css('assets/css/style.css') ?>

</head>
<body>

  <header class="header cf active" role="banner">
    <div class="header-arrow" style="cursor:pointer;">←</div>
    <ul class="menu-filtres">
      <li class="reset">reset</li>
      <li class="menu-partie">Chemins
        <ul class="chemin-menu"></ul>
      </li>
      <li class="menu-partie">Années
        <ul class="year-menu button-group" data-filter-group="year">
          <li class='year-list'><div class='checkboxes-menu is-checked'></div><h4 class='bouton is-checked' data-filter=''>tous</h4></li>
        </ul>
      </li>
      <li class="menu-partie">Acteurs
        <ul class="actor-menu button-group" data-filter-group="actor">
          <li class='actor-list'><div class='checkboxes-menu is-checked'></div><h4 class='bouton is-checked' data-filter=''>tous</h4></li>
        </ul>
      </li>
      <li class="menu-partie">Discipline
        <ul class="discipline-menu button-group" data-filter-group="discipline">
          <li class='discipline-list'><div class='checkboxes-menu is-checked'></div><h4 class='bouton is-checked' data-filter=''>tous</h4></li>
        </ul>
      </li>
    </ul>
  </header>