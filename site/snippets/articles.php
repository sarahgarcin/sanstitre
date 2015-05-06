<section id="articles">
  <div class="wrap">
    <?php foreach($data->children()->visible() as $project): ?>
      <article class="entretien">
        <div class="article-title">
          <h1><?php echo $project->title()->html()?></h1>
        </div>
         <div class="article-content">
          <h2><?php echo $project->chapeau()->html()?></h2>
          <?php echo $project->text()->kirbytext()?>
        </div>
      </article>
    <?php endforeach ?>
  </div>

</section>

