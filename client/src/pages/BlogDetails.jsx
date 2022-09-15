import React , { useState } from 'react';
import { Link } from 'react-router-dom'
import Header from '../components/header/Header';
import  Newsletters from '../components/layouts/Newsletters';
import Footer from '../components/footer/Footer';

import img1 from '../assets/images/post/post-detail-1.jpg'
import imgpost1 from '../assets/images/post/post-recent-new-1.jpg'
import imgpost2 from '../assets/images/post/post-recent-new-2.jpg'
import imgpost3 from '../assets/images/post/post-recent-new-3.jpg'
import imgpost4 from '../assets/images/post/post-related-new-1.jpg'
import imgpost5 from '../assets/images/post/post-related-new-2.jpg'
import avt from '../assets/images/avatar/avt-12.jpg'
import avt1 from '../assets/images/avatar/avt-13.jpg'
import avt2 from '../assets/images/avatar/avt-14.jpg'
import avt3 from '../assets/images/avatar/avt-15.jpg'


const BlogDetails = () => {
    const [dataCategory] = useState(
        [
            {
                name: 'Bitcoin',
                count: '5'
            },
            {
                name: 'Blockchain',
                count: '8'
            },
            {
                name: 'NFT',
                count: '3'
            },
            {
                name: 'Cryptocurrency',
                count: '2'
            },
            {
                name: 'ICO',
                count: '4'
            },
            {
                name: 'News',
                count: '5'
            },
            {
                name: 'Uncategorized',
                count: '2'
            },
        ]
    )
    const [dataRecent] = useState(
        [
            {
                img: imgpost1,
                time: ' 05 Jan 2022',
                title: 'An Overview Of The Most Common UX Design ',
            },
            {
                img: imgpost2,
                time: ' 05 Jan 2022',
                title: 'An Overview Of The Most Common UX Design ',
            },
            {
                img: imgpost3,
                time: ' 05 Jan 2022',
                title: 'An Overview Of The Most Common UX Design ',
            },
        ]
    )
    const [dataRelated] = useState(
        [
            {
                img:imgpost4,
                title: 'Comprensive Guides Server Push Design Feature',
                time: ' 05 Jan 2022'
            },
            {
                img:imgpost5,
                title: 'Comprensive Guides Server Push Design Feature',
                time: ' 05 Jan 2022'
            },
        ]
    )
    const [dataTags] = useState(
        [
            {
                name: 'Crypto',
                active: 'active'
            },
            {
                name: 'Bitcoin',
                active: ''
            },
            {
                name: 'Landing',
                active: ''
            },
            {
                name: 'Digital',
                active: ''
            },
            {
                name: 'NFTs',
                active: ''
            },
        ]
    )
    const [dataComment] = useState(
        [
            {
                img: avt1,
                name: 'Matthew A. Larrison',
                time: '25 January 2022',
                text: 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae',
                class:''
            },
            {
                img: avt2,
                name: 'Joshua S. Flores',
                time: '25 January 2022',
                text: 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae',
                class:'reply-comment'
            },
            {
                img: avt3,
                name: 'Daniel C. Stackhouse',
                time: '25 January 2022',
                text: 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae',
                class:''
            },
        ]
    )

  return <div>
    <Header />
    <section className="fl-page-title">
        <div className="overlay"></div>
        <div className="container">
            <div className="row">
                <div className="col-md-12">
                    <div className="page-title-inner flex">
                        <div className="page-title-heading">
                            <h2 className="heading">Blog Destails</h2>
                        </div>
                        <div className="breadcrumbs">
                            <ul>
                                <li><Link to="/">Home</Link></li>
                                <li>Blog Destails</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <div className="tf-section post-details">
        <div className="container">
            <div className="row">
                <div className="col-lg-8 col-md-12">
                    <article className="blog-details">
                        <div className="post-media">
                            <img src={img1} alt="Bidzen" />
                            <div className="meta">
                                <div className="item author">
                                    <Link to="#">Dale J. Barnes</Link>
                                </div>
                                <div className="item date">
                                    <Link to="#">05 Jan 2022</Link>
                                </div>
                                <div className="item comments">
                                    Comments (5)
                                </div>
                            </div>
                        </div>
                        <div className="post-content">
                            <h1 className="post-title">Ultimate Digital Clean-Up Checklist Are You Prepared For New
                                Year E-Commerce Platforms An Overview Most Common</h1>
                            <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium
                                doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore
                                veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam
                                voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia
                                consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque
                                porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci
                                velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore
                                magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum
                                exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi
                                consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit
                                esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo
                                voluptas nulla pariatur</p>
                        </div>
                        <blockquote className="block-quote">
                            <h4>Roll Out New Features Without Hurting Loyal Users Unicode Character Sets The
                                Ultim An Overview UX Design Deliverables</h4>
                            <div className="author">John B. Thomas</div>
                        </blockquote>
                        <div className="post-content">
                            <p>Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur,
                                adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et
                                dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum
                                exercitationem ullam corporis suscipit laboriosam</p>
                        </div>
                    </article>
                    <div className="post-details">
                        <div className="details-left">
                            <div className="wg-title style-2">
                                Popular Tags
                            </div>
                            <div className="wg-tags style-2">
                                <ul>
                                    <li className="active"><Link to="#">Crypto</Link></li>
                                    <li><Link to="#">Bitcoin</Link></li>
                                    <li><Link to="#">ICO Landing</Link></li>
                                </ul>
                            </div>
                        </div>
                        <div className="details-right">
                            <div className="wg-title style-2">
                                Share Post
                            </div>
                            <div className="widget-social style-3">
                                <ul>
                                    <li><Link to="#" className="active"><i className="fab fa-facebook-f"></i></Link></li>
                                    <li><Link to="#"><i className="fab fa-twitter"></i></Link></li>
                                    <li><Link to="#"><i className="fab fa-linkedin-in"></i></Link></li>
                                    <li><Link to="#"><i className="fab fa-google-plus-g"></i></Link></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="post-author style-2">
                        <div className="avatar">
                            <img src={avt} alt="Bidzen" />
                        </div>
                        <div className="content">
                            <h4><Link to="#">Herbert N. Johnson</Link></h4>
                            <div className="job">Author</div>
                            <p>Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil
                                molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla
                                pariatur must explain to you how all this mistaken idea of denouncing</p>
                            <div className="widget-social style-4">
                                <ul>
                                    <li><Link to="#" className="active"><i className="fab fa-facebook-f"></i></Link></li>
                                    <li><Link to="#"><i className="fab fa-twitter"></i></Link></li>
                                    <li><Link to="#"><i className="fab fa-linkedin-in"></i></Link></li>
                                    <li><Link to="#"><i className="fab fa-google-plus-g"></i></Link></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="widget item widget-post style-2">
                        <div className="wg-title style-2">
                            Related News
                        </div>
                        <ul className="post-new">
                            {
                                dataRelated.map((item,index)=> (
                                    <li key={index}>
                                        <div className="post-img">
                                            <img src={item.img} alt="Post New" />
                                        </div>
                                        <div className="post-content">
                                            <Link to="/blog-details" className="post-date"><i
                                                    className="far fa-calendar-week"></i> {item.time}</Link>
                                            <h6 className="title"><Link to="/blog-details">{item.title}</Link></h6>
                                        </div>
                                    </li>
                                ))
                            }
                        </ul>
                    </div>
                    <div className="widget item wg-comments">
                        <div className="wg-title">
                            People Comments
                        </div>
                        <ul>
                            {
                                dataComment.map((item,index)=>(
                                    <li key={index} className={item.class}>
                                        <div className="post-author">
                                            <div className="avatar">
                                                <img src={item.img} alt="Bidzen" />
                                            </div>
                                            <div className="content">
                                                <h4><Link to="#">{item.name}</Link></h4>
                                                <div className="job">{item.time}</div>
                                                <p>{item.text}</p>
                                                <Link to="#" className="reply">Reply</Link>
                                            </div>
                                        </div>
                                    </li>
                                ))
                            }
                        </ul>
                    </div>
                    <div className="wg-post-comments">
                        <div className="wg-title">
                            Leave a Reply
                        </div>
                        <div className="desc">We’re Ready to Help Your Buisness</div>
                        <form action="#" method="GET" acceptCharset="utf-8" className="comment-form form-submit">
                            <div className="text-wrap clearfix">
                                <fieldset className="name-wrap">
                                    <input type="text" id="name" className="tb-my-input" name="name" tabIndex="1"
                                        placeholder="Full Name" size="32" aria-required="true"
                                        required />
                                </fieldset>
                                <fieldset className="email-wrap">
                                    <input type="email" id="email" className="tb-my-input" name="email" tabIndex="2"
                                        placeholder="Email Address" size="32"
                                        required />
                                </fieldset>
                            </div>
                            <fieldset className="message-wrap">
                                <textarea id="comment-message" name="message" tabIndex="4"
                                    placeholder="Write Message" aria-required="true"></textarea>
                            </fieldset>
                            <button name="submit" type="submit" id="comment-reply"
                                className="sc-button style letter style-2"><span>Send Reply</span> </button>
                        </form>
                    </div>
                </div>
                <div className="col-lg-4 col-md-12">
                    <aside className="side-bar">
                        <div className="widget wg-search">
                            <form action="#" method="get" role="search" className="search-form">
                                <input type="search" className="search-field" placeholder="Search" name="s"
                                    title="Search for" required />
                                <button className="search search-submit" type="submit" title="Search"></button>
                            </form>
                        </div>
                        <div className="widget item wg-category">
                            <div className="wg-title">
                                Category
                            </div>
                            <ul>
                                {
                                    dataCategory.map((item,index)=> (
                                        <li key={index}><Link to="#"><span>{item.name}</span><span>({item.count})</span></Link></li>
                                    ))
                                }
                            </ul>
                        </div>
                        <div className="widget item widget-post style-3">
                            <div className="wg-title">
                                Recent News
                            </div>
                            <ul className="post-new">
                                {
                                    dataRecent.map((item,index)=> (
                                        <li key={index}>
                                            <div className="post-img">
                                                <img src={item.img} alt="Post New" />
                                            </div>
                                            <div className="post-content">
                                                <Link to="/blog-details" className="post-date"><i
                                                        className="far fa-calendar-week"></i>{item.time}</Link>
                                                <h6 className="title"><Link to="/blog-details">{item.title}</Link></h6>
                                            </div>
                                        </li>
                                    ))
                                }
                            </ul>
                        </div>
                        <div className="widget item wg-tags">
                            <div className="wg-title">
                                Popular Tags
                            </div>
                            <ul>
                                {
                                    dataTags.map((item,index)=> (
                                        <li key={index} className={item.active}><Link to="#">{item.name}</Link></li>
                                    ))
                                }
                            </ul>
                        </div>
                    </aside>
                </div>
            </div>
        </div>
    </div>
    <Newsletters />
    <Footer />
  </div>;
};

export default BlogDetails;
