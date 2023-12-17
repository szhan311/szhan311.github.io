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
                <img src="{{ image.path }}" alt="Gallery image">
            </div>
        {% endif %}
    {% endfor %}
</div>


