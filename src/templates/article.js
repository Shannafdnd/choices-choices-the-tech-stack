import React from 'react';
import { graphql } from 'gatsby';
import '../styles/article.css';
import logo from '../images/RedPers_Logo_Cmyk_Black.webp';
import searchIcon from '../images/search.png';

const dateFormat = {
    day: 'numeric',
    month: 'long',
    year: 'numeric'
};

// The template component
const PostTemplate = ({ data }) => {
    const post = data.wordpressPost;
    return (
        <div>
            <header className="header">
                <div className="klein-scherm">
                    <section className="mobile-header">
                        <nav>
                            <div id="menuToggle">
                                <input type="checkbox"/>
                                <span></span>
                                <span></span>
                                <span></span>
                                <ul id="menu">
                                    <li><a href="#">Binnenland</a></li>
                                    <li><a href="#">Buitenland</a></li>
                                    <li><a href="#">Columns</a></li>
                                    <li><a href="#">Economie</a></li>
                                    <li><a href="#">Kunst &amp; media</a></li>
                                    <li><a href="#">Podcasts</a></li>
                                    <li><a href="#">Politiek</a></li>
                                    <li><a href="#">Wetenschap</a></li>
                                    <div className="boven-mobile">
                                        <li>Colofon</li>
                                        <li>Over</li>
                                        <li>Meedoen</li>
                                        <li>Contact</li>
                                    </div>
                                </ul>
                            </div>
                        </nav>
                        <a href="#">
                            <img src={logo} alt="RedPers logo" width="150" height="35" />
                        </a>
                        <a href="/search" className="mobile-search-icon">
                            <img src={searchIcon} alt="Search" width="25" height="25" />
                        </a>
                    </section>

                    <section className="mobile-datum">
                        <div className="datum uppercase">
                            <p>{(new Date()).toLocaleDateString("nl-NL", dateFormat)}</p>
                            <p className="uppercase">podium voor de journalistiek</p>
                        </div>
                    </section>
                </div>

                <div className="groot-scherm">
                    <section className="boven">
                        <ul>
                            <li>Colofon</li>
                            <li>Over</li>
                            <li>Meedoen</li>
                            <li>Contact</li>
                        </ul>
                    </section>
                    <section className="midden">
                        <div className="datum">
                            <p className="datum-bold uppercase">{(new Date()).toLocaleDateString("nl-NL", dateFormat)}</p>
                            <p className="uppercase">Podium voor de journalistiek</p>
                        </div>
                        <a href="#">
                            <img src={logo} alt="RedPers logo" width="160" height="40" />
                        </a>
                        <ul>
                            <li>Nieuwsbrief</li>
                            <li><button>Doneren</button></li>
                            <li>
                                <a href="/search">
                                    <img src={searchIcon} alt="Search" width="20" height="20" />
                                </a>
                            </li>
                        </ul>
                    </section>
                    <section className="onder">
                        <ul>
                            <li><a href="#">Voorpagina</a></li>
                            <li><a href="#">Binnenland</a></li>
                            <li><a href="#">Buitenland</a></li>
                            <li><a href="#">Columns</a></li>
                            <li><a href="#">Economie</a></li>
                            <li><a href="#">Kunst &amp; media</a></li>
                            <li><a href="#">Podcasts</a></li>
                            <li><a href="#">Politiek</a></li>
                            <li><a href="#">Wetenschap</a></li>
                        </ul>
                    </section>
                </div>
            </header>
            <header className="infoframe">
                <div className="container">
                    <article className="summary">
                        <p className="boven-kop uppercase bold" dangerouslySetInnerHTML={{__html: post.yoast_head_json.schema._graph[0].articleSection[0]}} />
                        <h1 className="artikel-kop" dangerouslySetInnerHTML={{__html: post.title.rendered}} />
                        <div className="introtekst" dangerouslySetInnerHTML={{__html: post.excerpt.rendered}} />
                        <div className="author-and-read-time">
                            <p>Door <span className="bold">{post.authors[0].display_name}</span></p>
                            <p>{post.yoast_head_json.twitter_misc.Geschatte_leestijd}</p>
                        </div>
                    </article>
                    <article className="img-container">
                        <img width="850" height="400" src={post.yoast_head_json.og_image[0].url} alt="Artikel afbeelding" />
                        <p className="small">
                            {(new Date(post.date)).toLocaleDateString("nl-NL", dateFormat)}
                        </p>
                    </article>
                </div>
            </header>
            <main>
                <div dangerouslySetInnerHTML={{ __html: post.content.rendered }} />
            </main>
            <footer>
                <img src={logo} alt="Red Pers Logo" />
                <ul class="footer-layout">
                    <li class="kopjes">
                        <h3 class="kop-4">RUBRIEKEN</h3>
                        <ul class="sub-list">
                            <li><a href="/">Binnenland</a></li>
                            <li><a href="/">Buitenland</a></li>
                            <li><a href="/">Columns</a></li>
                            <li><a href="/">Economie</a></li>
                            <li><a href="/">Kunst & Media</a></li>
                            <li><a href="/">Podcast</a></li>
                            <li><a href="/">Politiek.</a></li>
                            <li><a href="/">Wetenschap</a></li>
                        </ul>
                    </li>

                    <li class="kopjes">
                        <h3 class="kop-4">NAVIGATIE</h3>
                        <ul class="sub-list">
                            <li><a href="/">Colofon</a></li>
                            <li><a href="/">Contact</a></li>
                            <li><a href="/">Doneren</a></li>
                            <li><a href="/">Meedoen</a></li>
                            <li><a href="/">Over Red Pers</a></li>
                        </ul>
                    </li>

                    <li class="kopjes">
                        <h3 class="kop-4">SERVICE</h3>
                        <ul class="sub-list">
                            <li><a href="/">Tip de redactie</a></li>
                            <li><a href="/">Meld een fout</a></li>
                        </ul>
                    </li>

                    <li class="kopjes">
                        <h3 class="kop-4">MEER RED PERS</h3>
                        <ul class="sub-list">
                            <li><a href="/">Nieuwsbrief</a></li>
                            <li><a href="/">LinkedIn</a></li>
                            <li><a href="/">Facebook</a></li>
                            <li><a href="/">Instagram</a></li>
                            <li><a href="/">X Twitter</a></li>
                        </ul>
                    </li>
                </ul>

                <section class="end-footer">
                    <p>&copy; 2024 Stichting Red Pers - Alle rechten voorbehouden</p>
                    <ul class="end-footer-credits">
                        <li><a href="/">Privacystatement</a></li>
                        <li><a href="/">Cookiebeleid</a></li>
                        <li><a href="/">Copyright</a></li>
                    </ul>
                </section>
            </footer>
        </div>
    );
};

export default PostTemplate;

// Query for the specific post data using the ID from the context
export const query = graphql`
    query($id: String!) {
        wordpressPost(id: { eq: $id }) {
            title {
                rendered
            }
            excerpt {
                rendered
            }
            content {
                rendered
            }
            date
            yoast_head_json {
                schema {
                    _graph {
                    articleSection
                    }
                }
                twitter_misc {
                    Geschatte_leestijd
                }
                og_image {
                    url
                }
            }
            authors {
                display_name
            }
        }
    }
`;

export const Head = () => <title>Artikel</title>