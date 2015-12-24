---
layout: page
title: Blog
---

<section class="blog-items">
        <div class="container">
            <div class="row">
                <div class="col-md-9 col-sm-7">
                    <div class="row">
                    <ul class="post-list">
                        {% for post in site.posts %}
                        <li>
                         <div class="col-sm-12 col-md-12">
                            <div class="single-blog single-column">
                                <div class="post-thumb">
                                    <a href="{{ post.url | prepend: site.baseurl }}"><img src="images/{{post.title}}.jpg" class="img-responsive" alt=""></a>
                                    <div class="post-overlay">
                                       <span class="uppercase"><a href="{{ post.url | prepend: site.baseurl }}">{{post.date | date: "%-d"}} <br><small>{{post.date | date: "%b"}}</small></a></span>
                                   </div>
                                </div>
                                <div class="post-content overflow">
                                    <h2 class="post-title bold"><a class="post-link" href="{{ post.url | prepend: site.baseurl }}">{{ post.title }}</a></h2>
<!--
                                     <h1>
          <a class="post-link" href="{{ post.url | prepend: site.baseurl }}">{{ post.title }}</a>
        </h1>
-->
          <span class="post-meta">{{ post.date | date: "%B %-d, %Y" }}</span>
          <div class="preview">
             <br/> {{ post.content }} 
          </div><br/>
          <div class="post-entry">
      {{ post.content | truncatewords: 50 | strip_html}}
	  <a href="{{ post.url | prepend: site.baseurl }}" >[Read&nbsp;More]</a>
    </div>
                                </div>
                            </div>
                        </div>
                        </li>
                         {% endfor %}
                    </ul>
                    </div>
                    <div class="blog-pagination">
                        {% if paginator.total_pages > 1 %}
                        <div class="pagination">
                        {% if paginator.previous_page %}
                        <a href="{{ paginator.previous_page_path | prepend: site.baseurl | replace: '//', '/' }}">&laquo; Prev</a>
                        {% else %}
                        <span>&laquo; Prev</span>
                        {% endif %}

                        {% for page in (1..paginator.total_pages) %}
                        {% if page == paginator.page %}
                          <em>{{ page }}</em>
                        {% elsif page == 1 %}
                          <a href="{{ paginator.previous_page_path | prepend: site.baseurl | replace: '//', '/' }}">{{ page }}</a>
                        {% else %}
                          <a href="{{ site.paginate_path | prepend: site.baseurl | replace: '//', '/' | replace: ':num', page }}">{{ page }}</a>
                        {% endif %}
                        {% endfor %}

                        {% if paginator.next_page %}
                        <a href="{{ paginator.next_page_path | prepend: site.baseurl | replace: '//', '/' }}">Next &raquo;</a>
                        {% else %}
                        <span>Next &raquo;</span>
                        {% endif %}
                        </div>
                        {% endif %}
                    </div>
                 </div>
                <div class="col-md-3 col-sm-5">
                    <div class="sidebar blog-sidebar">
                        <div class="sidebar-item  recent">
                            <h3>Posts</h3>
                             <ul class="post-list">
                        {% for post in site.posts %}
                        <li>
                            <div class="media">
                                <div class="pull-left">
                                    <a href="#"><img width="52" height="52" src="images/{{post.title}}.jpg" alt=""></a>
                                </div>
                                <div class="media-body">
                                    <h4><a href="#">{{post.title}}</a></h4>
                                    <p>posted on  {{post.date | date: "%B, %-d, %Y"}}</p>
                                </div>
                            </div>
                            </li>
                              {% endfor %}
                            </ul>
                        </div>
                        <div class="sidebar-item popular">
                            <h3>Latest Photos</h3>
                           <table>
                           <tbody>
                           <tr><td style="margin-left:10px;"><a href="#"><img width="66px" height="66px" src="images/7.jpg" alt=""></a></td><td style="margin:10px;"><a href="#"><img width="66px" height="66px" src="images/7.jpg" alt=""></a></td><td style="margin:10px;"><a href="#"><img width="66px" height="66px" src="images/7.jpg" alt=""></a></td>
                           </tr>
                           <tr><td style="margin:10px;"><a href="#"><img width="66px" height="66px" src="images/7.jpg" alt=""></a></td><td style="margin:10px;"><a href="#"><img width="66px" height="66px" src="images/7.jpg" alt=""></a></td><td style="margin:10px;"><a href="#"><img width="66px" height="66px" src="images/7.jpg" alt=""></a></td>
                           </tr>
                           <tr><td style="margin:10px;"><a href="#"><img width="66px" height="66px" src="images/7.jpg" alt=""></a></td><td style="margin:10px;"><a href="#"><img width="66px" height="66px" src="images/7.jpg" alt=""></a></td><td style="margin:10px;"><a href="#"><img width="66px" height="66px" src="images/7.jpg" alt=""></a></td>
                           </tr>
                           </tbody>
                           </table>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    
