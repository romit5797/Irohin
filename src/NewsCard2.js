import React from "react";
import "./NewsCard2.css";

function NewsCard2() {
  return (
    // BEM
    <div class="mainblock">
     <div class="feature-island-main-block fi-main-block--unread">
         <h2 class="fi-main-block__title">
             <a class="post-block__title__link" href="/2020/10/13/kahoot-picks-up-215m-from-softbank-for-its-user-generated-gamified-e-learning-platform/">
                 Kahoot picks up $215M from SoftBank for its user-generated, gamified e-learning platform
                 </a>
                 </h2>
                 <p class="fi-main-block__byline">
                     <span><a aria-label="Posts by Ingrid Lunden" href="/author/ingrid-lunden/">
                         Ingrid Lunden
                         </a>
                         </span>
                         </p>
                <a class="post-block__title__link" href="/2020/10/13/kahoot-picks-up-215m-from-softbank-for-its-user-generated-gamified-e-learning-platform/"><figure class="post-block__media">
                    <img alt="" sizes="(max-width: 1600px) 600px, 850px" src="https://techcrunch.com/wp-content/uploads/2020/09/Kahoot-business-challenge-app.jpg?w=850&amp;h=492&amp;crop=1" srcset="https://techcrunch.com/wp-content/uploads/2020/09/Kahoot-business-challenge-app.jpg?w=600&amp;h=347&amp;crop=1 600w, https://techcrunch.com/wp-content/uploads/2020/09/Kahoot-business-challenge-app.jpg?w=850&amp;h=492&amp;crop=1 850w"/>
                        </figure>
                        </a>
                        </div>

    </div>
  );
}

export default NewsCard2;