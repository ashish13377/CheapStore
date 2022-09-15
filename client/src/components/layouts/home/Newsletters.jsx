import React from 'react';

export const Newsletters = () => {
    return (
        <section className="new-letter">
            <div className="container">
                <div className="new-letter-inner style-2 flex">
                    <div className="new-letter-content">
                        <h3 className="heading">Newsletters</h3>
                        <p className="sub-heading">Most popular gaming digital nft market place </p>
                    </div>
                    <div className="new-letter-img">
                        <div className="form-subcribe">
                            <form id="subscribe-form" action="#" method="GET" acceptCharset="utf-8"
                                className="form-submit">
                                <input name="email"  className="email" type="email"
                                    placeholder="Enter Email Address" required />
                                <button name="submit" type="submit" id="submit"
                                    className="sc-button style letter style-2"><span>Browse More</span> </button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        );
};
