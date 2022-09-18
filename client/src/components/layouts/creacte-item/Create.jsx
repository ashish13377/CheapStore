import React from 'react';
import img from '../../../assets/images/background/img-create-item.jpg'

const Create = () => {
    return (
        <section className="tf-section create-item pd-top-0 mg-t-40">
            <div className="container">
                <div className="row">
                    <div className="col-md-12">
                        <div className="form-create-item-content">
                            <div className="form-create-item">
                                <div className="sc-heading">
                                    <h3>Create Item</h3>
                                    <p className="desc">Most popular student market place </p>
                                </div>
                                <form id="create-item-1" action="#" method="GET" acceptCharset="utf-8">

                                    <div className="input-group">
                                        <input name="name" type="text" placeholder="Item Name" required />
                                        <input name="number" type="text" placeholder="Item Price"
                                            required />
                                    </div>
                                  
                                    <textarea id="comment-message" name="message" tabIndex="4"
                                        placeholder="Description" aria-required="true"></textarea>
                                    <hr></hr>
                                    <h6 style={{}}>UPLOAD UP TO 8 PHOTOS</h6>
                                    <p style={{paddingBottom: "20px", color: "red"}}>* This field is mandatory</p>
                                    <div class="row">
                                        <div class="col" >
                                            <label className="uploadFile">
                                                <input type="file" className="inputfile form-control" name="file" />
                                                <span className="icon" ><i className="fa-solid fa-upload" ></i></span> 
                                            </label>
                                        </div>
                                        <div class="col">
                                            <label className="uploadFile">
                                                <input type="file" className="inputfile form-control" name="file" />
                                                <span className="icon" ><i className="fa-solid fa-upload" ></i></span> 
                                            </label>
                                        </div>
                                        <div class="col"> <label className="uploadFile">
                                            <input type="file" className="inputfile form-control" name="file" />
                                            <span className="icon" ><i className="fa-solid fa-upload" ></i></span> 
                                        </label></div>
                                        <div class="col"> <label className="uploadFile">
                                            <input type="file" className="inputfile form-control" name="file" />
                                            <span className="icon" ><i className="fa-solid fa-upload" ></i></span> 
                                        </label></div>
                                    </div>
                                    <div class="row">
                                        <div class="col" >
                                            <label className="uploadFile">
                                                <input type="file" className="inputfile form-control" name="file" />
                                                <span className="icon" ><i className="fa-solid fa-upload" ></i></span> 
                                               
                                           </label>
                                        </div>
                                        <div class="col">
                                            <label className="uploadFile">
                                                <input type="file" className="inputfile form-control" name="file" />
                                                <span className="icon" ><i className="fa-solid fa-upload" ></i></span> 
                                            </label>
                                        </div>
                                        <div class="col"> <label className="uploadFile">
                                            <input type="file" className="inputfile form-control" name="file" />
                                            <span className="icon" ><i className="fa-solid fa-upload" ></i></span> 
                                        </label></div>
                                        <div class="col"> <label className="uploadFile">
                                            <input type="file" className="inputfile form-control" name="file" />
                                            <span className="icon" ><i className="fa-solid fa-upload" ></i></span> 
                                        </label>
                                        </div>
                                    </div>
                                    <hr></hr>
                                    <div style={{paddingBottom: "20px"}}>
                                    <h6 style={{}}>YOUR DETAILS</h6>
                                    <p style={{paddingBottom: "20px", color: "red"}}>* This field is mandatory</p>
                                    <div className="input-group">
                                        <input name="name" type="text" placeholder="Name" required />
                                        <input name="number" type="text" placeholder="Number" required />
                                    </div>
                                    <div className="input-group">
                                        <input name="name" type="text" placeholder="Email" required />
                                        <input name="number" type="text" placeholder="Department"
                                            required />
                                    </div>
                                    <textarea id="comment-message" name="message" tabIndex="4"
                                        placeholder="Location" aria-required="true" ></textarea>
                                    </div>
                                    
                                    <button name="submit" type="submit" id="submit"
                                        className="sc-button style letter style-2"><span>Create Item</span> </button>
                                </form>
                            </div>
                            <div className="form-background">
                                <img src={img} alt="Bidzen" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Create;
