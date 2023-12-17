---
layout: page
permalink: /gallery/
title: photo gallery
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
<!-- <div id="myModal" class="modal">
  <span class="close">&times;</span>
  <img class="modal-content" id="img01">
  <div id="caption"></div>
</div> -->

<!-- The Modal -->
<!-- <div id="myModal" class="modal">
    <span class="close">&times;</span>
    <img class="modal-content" id="img01">
    <div id="caption"></div>
    <a id="downloadBtn" href="" download class="download-button">Download</a>
</div> -->

<!-- The Modal -->
<div id="myModal" class="modal">
  <span class="close">&times;</span>
  <img class="modal-content" id="img01">
  <div id="caption"></div>
  
  <!-- Download Button with Icon -->
  <a id="downloadBtn" href="" download class="download-button">
    <i class="fa fa-download"></i> <!-- Font Awesome Icon -->
  </a>
</div>




<script>
// Get the modal
var modal = document.getElementById('myModal');
var modalImg = document.getElementById('img01');
var captionText = document.getElementById('caption');

// Open the modal
// document.querySelector('.gallery').addEventListener('click', function(event) {
//     if (event.target.tagName === 'IMG') {
//         modal.style.display = 'block';
//         modalImg.src = event.target.src;
//         captionText.innerHTML = event.target.alt;
        
//     }
//     }
// });

document.querySelector('.gallery').addEventListener('click', function(event) {
    if (event.target.tagName === 'IMG') {
        modal.style.display = 'flex'; // Use flex display for modal
        modalImg.src = event.target.src;
        captionText.innerHTML = event.target.alt;

        // Set the href for the download button
        document.getElementById('downloadBtn').href = event.target.src;
    }
});

// Set the href for the download button
// document.getElementById('downloadBtn').href = event.target.src;

// Close the modal when the modal image is clicked
modalImg.onclick = function() {
    modal.style.display = 'none';
}

// Close the modal when the close button is clicked
document.getElementsByClassName('close')[0].onclick = function() {
    modal.style.display = 'none';
}
</script>
