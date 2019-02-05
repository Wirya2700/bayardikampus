---
permalink: "/atk/"
title: Alat Tulis Kantor
layout: home
---

<div>
	{% for section in site.data.products %}
	<div class="filterdiv {{section.product}}">
		<a href="{{site.baseurl}}/product/{{section.product}}">
			<div class="product">
				<img src="{{ site.baseurl }}/{{section.urlimg}}"/>
				<div class="product-title">
					<p><a href="{{site.baseurl}}/product/{{section.product}}">{{section.product}}</a><br><span>Rp {{section.harga}}</span></p>
				</div>
			</div>
		</a>
	</div>
	{% endfor %}
</div>