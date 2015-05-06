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
    <div class="header-arrow">
      <a href="#" title="hide menu">←</a>
    </div>
    <ul class="chemin-menu"><li class="reset">reset</li></ul>
  </header>