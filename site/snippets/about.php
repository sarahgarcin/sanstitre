<section id="about">
  
  <div class="about-title">
  	<h1><?php echo $data->title()->html() ?></h1>
  </div>
  <div class="about-colophon columnize">
  	<?php echo $data->colophon()->kirbytext() ?>
  </div>
   <div class="about-about columnize">
  	<?php echo $data->about()->kirbytext() ?>
  </div>
  
</section>