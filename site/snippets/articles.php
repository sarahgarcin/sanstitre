<section id="articles">
<!--   <h1><?php echo $data->title()->html() ?></h1>
  <?php echo $data->text()->kirbytext() ?> -->
  <div class="wrap">
    <?php foreach($data->children()->visible() as $project): ?>
      <article class="entretien">
        <h1><?php echo $project->title()->html()?></h1>
        <h2><?php echo $project->chapeau()->html()?></h2>
        <?php echo $project->text()->kirbytext()?>
      </article>
    <?php endforeach ?>
  </div>

</section>

