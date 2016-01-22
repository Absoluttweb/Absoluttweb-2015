<script type="text/javascript">
    $(document).ready(function(){
        $('#layerslider').layerSlider({
          responsive: false,
          responsiveUnder: 1180,  //Will not shrink before this size
          layersContainer: 1180,  //Center content to this size
          skinsPath: '/assets/modules/layerslider/skins/', //REMOVE /assets IN WEBPOP
          skin: 'fullwidth'
        });
    }); 
</script>

-------------------------------------------

Les hjelpen i Layerslider.5.1.0 under resources mappen.

file:///F:/Dropbox/Absoluttweb/Resource%20Files/Jquery/layerslider/LayerSlider-5.1.0/documentation/documentation.html#overview

DOM:
<div class="band band-layerslider">
  <div id="layerslider" style="width: 100%; height: 410px;">
    <!-- Slide 1 -->
    <div class="ls-slide slide-1" data-ls="transition2d: 5">
      <!-- BG -->
      <img src="/img/bg-header.jpg" class="ls-bg" alt="Totalentreprenør">
        <!-- Image -->
        <img src="/img/building.png" class="ls-l" alt="Bygning" data-ls="offsetyin: 400; offsetxin: 0" style="top: 84px; left: 0;">
        <!-- Text 1 -->
        <h2 class="ls-l" data-ls="delayin:500; offsetyin:-200px; offsetxin:0" style="top: 120px; left: 861px;">Totalentreprenør</h2>
        <!-- Text 2 -->
        <h2 class="ls-l" data-ls="delayin:2000" style="top: 200px; left: 605px;">Generalentreprenør</h2>
      </div>
      <!-- END Slide 1 -->
  </div>
</div>