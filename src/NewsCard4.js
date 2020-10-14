import React from "react";
import "./NewsCard4.css";
function NewsCard4() {
  return (
    // BEM
    <div className="app">
     <article class="post-block post-block--featured post-block--unread">
     <footer class="post-block__footer">
         <figure class="post-block__media">
     <img alt="" sizes="(max-width: 940px) 100vw, 940px" src="https://techcrunch.com/wp-content/uploads/2020/10/IMG_6435.jpg?w=940&amp;h=465&amp;crop=1" srcset="https://techcrunch.com/wp-content/uploads/2020/10/IMG_6435.jpg?w=240&amp;h=119&amp;crop=1 240w, https://techcrunch.com/wp-content/uploads/2020/10/IMG_6435.jpg?w=700&amp;h=346&amp;crop=1 700w, https://techcrunch.com/wp-content/uploads/2020/10/IMG_6435.jpg?w=940&amp;h=465&amp;crop=1 940w"/>
     </figure>
     </footer>
     <header class="post-block__header">
         <div class="featured-article__label">
             <div class="featured-article__label__text gradient-text gradient-text--green-gradient">
                 Featured Article
                 </div>
                 </div>
                 <h2 class="post-block__title">
                     <a class="post-block__title__link" href="/2020/10/12/what-to-expect-from-apples-hi-speed-iphone-event/">
                         What to expect from Apple’s ‘Hi Speed’ iPhone event
                         </a>
                         </h2>
                         <div class="post-block__content">
                             For starters, iPhones, of course. That one was easy. The company skipped out on new mobile device...
                             </div>
                             <div class="post-block__meta">
                                 <div class="river-byline">
                                     <span class="river-byline__authors">
                                         <span>
                                             <a aria-label="Posts by Brian Heater" href="/author/brian-heater/">
                                                 Brian Heater
                                                 </a>
                                                 </span>
                                                 </span>
                                                 <div class="river-byline__full-date-time__wrapper">
                                                     <time class="river-byline__full-date-time" datetime="2020-10-12T16:07:14">
                                                         9:37 pm IST
                                                         <span class="full-date-time__separator">•</span>
                                                         October 12, 2020
                                                         </time>
                                                         </div>
                                                         </div>
                                                         </div>
                                                         </header>
                                                         </article>
    </div>
  );
}

export default NewsCard4;