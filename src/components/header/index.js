import React from 'react';

const Header = () => (
    <div className="pageContent">
        <header className="o-header">
            <form action="" className="form-inline" id="formSearch">
                <div className="form-group mx-sm-3 mb-2">
                    <input type="text" placeholder="Buscar obras e usuários" />
                </div>&nbsp;
                <button type="submit" className="btn btn-light mb-2"> <i className="fa fa-search"> </i></button>
            </form>
        </header>

        <aside className="o-aside">
            <div className="userMenu">
                <img src="img/logo_aphore.png" alt="..." className="rounded-circle" id="userPhoto" /> <br />
                <ul>
                    <li><a href="#nome"><i className="fa fa-home"></i> Principal</a></li>
                    <li><a href="#paz"><i className="fa fa-user"></i> Perfil</a></li>
                    <li><a href="#vida"><i className="fa fa-cog"></i> Opções</a></li>
                </ul>
            </div>
        </aside>

        <div className="post">
            <div className="post_1">
                <div className="close">+</div>
                <img src="img/slide1.jpg" alt="imga1"/>
                <form>
                    <a href="#random"><i className="fa fa-plus-circle"></i> Adicionar a foto</a>
                    <input type="text" name="title" placeholder="Título" />
                    <textarea name="Descricao" placeholder="Descrição da Obra"></textarea>
                    <a href="#random" className="button">Postar</a><br />
                </form>
            </div>
        </div>
        <div className="o-main">
            <div className="content">
                <section className="hero">
                    <img alt="#random"src="img/eu.jpg" className="user_pic"/>
                    <div className="hero-content">
                        <h1>Nome do Palhaço</h1>
                        <h1>3AI</h1>
                        <p>I'm a frelance UX designer based in Toronto, Canada. I've worked with startups end
                            estabkished companies. I'm Passionat about my work</p>
                        <a href="#random" className="action-btn" id="button"><i className="fa fa-plus-circle"></i> Novo Post</a>
                    </div>
                </section>
            </div>
            <div className="card">
                <a href="img/pic01.jpg" data-lightbox="mygallery"
                    data-title="Este é um card maior com suporte a texto embaixo, que funciona como uma introdução a um conteúdo adicional. Este conteúdo é um pouco maior, para demonstração.">
                        <img className="card-img-top" src="img/pic01.jpg" alt="Imagem de capa do card" /></a>
                <div className="card-body">
                    <h5 className="card-title">Título do card</h5>
                    <p className="card-text">Este é um card maior com suporte a texto embaixo, que funciona como uma
                        introdução a um conteúdo adicional. Este conteúdo é um pouco maior, para demonstração.</p>
                </div>
                <div className="card-footer">
                    <small className="text-muted"><img alt="#"src="img/favorites.png"/> 7 Estrelas</small>
                </div>
            </div>
            <div className="card">
                <a href="img/pic01.jpg" data-lightbox="mygallery"
                    data-title="Este é um card maior com suporte a texto embaixo, que funciona como uma introdução a um conteúdo adicional. Este conteúdo é um pouco maior, para demonstração.">
                        <img className="card-img-top" src="img/pic01.jpg" alt="Imagem de capa do card" /></a>
                <div className="card-body">
                    <h5 className="card-title">Título do card</h5>
                    <p className="card-text">Este é um card maior com suporte a texto embaixo, que funciona como uma
                        introdução a um conteúdo adicional. Este conteúdo é um pouco maior, para demonstração.</p>
                </div>
                <div className="card-footer">
                    <small className="text-muted"><img alt="#"src="img/favorites.png"/> 7 Estrelas</small>
                </div>
            </div>
            <div className="card">
                <a href="img/pic01.jpg" data-lightbox="mygallery"
                    data-title="Este é um card maior com suporte a texto embaixo, que funciona como uma introdução a um conteúdo adicional. Este conteúdo é um pouco maior, para demonstração.">
                        <img className="card-img-top" src="img/pic01.jpg" alt="Imagem de capa do card" /></a>
                <div className="card-body">
                    <h5 className="card-title">Título do card</h5>
                    <p className="card-text">Este é um card maior com suporte a texto embaixo, que funciona como uma
                        introdução a um conteúdo adicional. Este conteúdo é um pouco maior, para demonstração.</p>
                </div>
                <div className="card-footer">
                    <small className="text-muted"><img alt="#"src="img/favorites.png"/> 7 Estrelas</small>
                </div>
            </div>
            <div className="card">
                <a href="img/pic01.jpg" data-lightbox="mygallery"
                    data-title="Este é um card maior com suporte a texto embaixo, que funciona como uma introdução a um conteúdo adicional. Este conteúdo é um pouco maior, para demonstração.">
                        <img className="card-img-top" src="img/pic01.jpg" alt="Imagem de capa do card" /></a>
                <div className="card-body">
                    <h5 className="card-title">Título do card</h5>
                    <p className="card-text">Este é um card maior com suporte a texto embaixo, que funciona como uma
                        introdução a um conteúdo adicional. Este conteúdo é um pouco maior, para demonstração.</p>
                </div>
                <div className="card-footer">
                    <small className="text-muted"><img alt="#"src="img/favorites.png"/> 7 Estrelas</small>
                </div>
            </div>
            <div className="card">
                <a href="img/pic01.jpg" data-lightbox="mygallery"
                    data-title="Este é um card maior com suporte a texto embaixo, que funciona como uma introdução a um conteúdo adicional. Este conteúdo é um pouco maior, para demonstração.">
                        <img className="card-img-top" src="img/pic01.jpg" alt="Imagem de capa do card" /></a>
                <div className="card-body">
                    <h5 className="card-title">Título do card</h5>
                    <p className="card-text">Este é um card maior com suporte a texto embaixo, que funciona como uma
                        introdução a um conteúdo adicional. Este conteúdo é um pouco maior, para demonstração.</p>
                </div>
                <div className="card-footer">
                    <small className="text-muted"><img alt="#"src="img/favorites.png"/> 7 Estrelas</small>
                </div>
            </div>


            <div className="card">
                <a href="img/pic01.jpg" data-lightbox="mygallery"
                    data-title="Este é um card maior com suporte a texto embaixo, que funciona como uma introdução a um conteúdo adicional. Este conteúdo é um pouco maior, para demonstração."><img
                        className="card-img-top" src="img/pic01.jpg" alt="Imagem de capa do card" /></a>
                <div className="card-body">
                    <h5 className="card-title">Título do card</h5>
                    <p className="card-text">Este é um card maior com suporte a texto embaixo, que funciona como uma
                        introdução a um conteúdo adicional. Este conteúdo é um pouco maior, para demonstração.</p>
                </div>
                <div className="card-footer">
                    <small className="text-muted"><img alt="#"src="img/favorites.png" /> 7 Estrelas</small>
                </div>
            </div>
        </div>
    </div>
    
);

export default Header;