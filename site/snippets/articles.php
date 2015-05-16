<section id="articles">
  <div class="wrap">
    <?php foreach($data->children()->visible() as $project): ?>
      <?php 
        $actor = str_replace(' ', '', $project->actor());
        $actor = str_replace(array('à','á','â','ã','ä', 'ç', 'è','é','ê','ë', 'ì','í','î','ï', 'ñ', 'ò','ó','ô','õ','ö', 'ù','ú','û','ü', 'ý','ÿ', 'À','Á','Â','Ã','Ä', 'Ç', 'È','É','Ê','Ë', 'Ì','Í','Î','Ï', 'Ñ', 'Ò','Ó','Ô','Õ','Ö', 'Ù','Ú','Û','Ü', 'Ý'), array('a','a','a','a','a', 'c', 'e','e','e','e', 'i','i','i','i', 'n', 'o','o','o','o','o', 'u','u','u','u', 'y','y', 'A','A','A','A','A', 'C', 'E','E','E','E', 'I','I','I','I', 'N', 'O','O','O','O','O', 'U','U','U','U', 'Y'), $actor);
        $actor = strtolower($actor);
        $discipline = str_replace(' ', '', $project->discipline());
        $discipline = str_replace(array('à','á','â','ã','ä', 'ç', 'è','é','ê','ë', 'ì','í','î','ï', 'ñ', 'ò','ó','ô','õ','ö', 'ù','ú','û','ü', 'ý','ÿ', 'À','Á','Â','Ã','Ä', 'Ç', 'È','É','Ê','Ë', 'Ì','Í','Î','Ï', 'Ñ', 'Ò','Ó','Ô','Õ','Ö', 'Ù','Ú','Û','Ü', 'Ý'), array('a','a','a','a','a', 'c', 'e','e','e','e', 'i','i','i','i', 'n', 'o','o','o','o','o', 'u','u','u','u', 'y','y', 'A','A','A','A','A', 'C', 'E','E','E','E', 'I','I','I','I', 'N', 'O','O','O','O','O', 'U','U','U','U', 'Y'), $discipline);
        $discipline = strtolower($discipline);
      ?>
      <article class="entretien <?php echo $actor ?> <?php echo $project->year() ?> <?php echo $discipline ?>" data-actor="<?php echo $project->actor() ?>" data-year="<?php echo $project->year() ?>" data-discipline="<?php echo $project->discipline() ?>">
        <div class="article-title">
          <h1><?php echo $project->title()->html()?></h1>
          <div class="occurence">
            <div class="arrow-occurence" style="cursor:pointer;">►</div>
            <div class="nb-occurence"></div>
          </div>
        </div>
         <div class="article-content">
          <h2><?php echo $project->chapeau()->html()?></h2>
          <?php echo $project->text()->kirbytext()?>
        </div>
        <div class="article-footer">
          <a href="<?php echo $project->pdf() ?>" title="pdf"><h4>télécharger</h4></a>
        </div>
      </article>
    <?php endforeach ?>
  </div>

</section>

