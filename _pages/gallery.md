---
layout: page
permalink: /gallery/
title: Photo gallery
description: Photographic works
nav: true
nav_order: 8
---

<div class="gallery">
    {% for image in site.static_files %}
        {% if image.path contains 'assets/photos/' %}
            <div class="gallery-item">
                <img src="{{ image.path }}">
            </div>
        {% endif %}
    {% endfor %}
</div>

<!-- The Modal -->
<div id="myModal" class="modal">
  <span class="close">&times;</span>
  <img class="modal-content" id="img01">
  <div id="caption"></div>
</div>

<script>
// Get the modal
var modal = document.getElementById('myModal');
var modalImg = document.getElementById('img01');
var captionText = document.getElementById('caption');

// Open the modal
document.querySelector('.gallery').addEventListener('click', function(event) {
    if (event.target.tagName === 'IMG') {
        modal.style.display = 'block';
        modalImg.src = event.target.src;
        captionText.innerHTML = event.target.alt;
    }
});

// Close the modal when the modal image is clicked
modalImg.onclick = function() {
    modal.style.display = 'none';
}

// Close the modal when the close button is clicked
document.getElementsByClassName('close')[0].onclick = function() {
    modal.style.display = 'none';
}
</script>
