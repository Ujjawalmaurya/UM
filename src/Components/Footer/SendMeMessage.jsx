
function SendMeMessage() {
  return (
     <div className="col-md-6">
                <div className="title-box-2">
                    <h5 className="title-left">
                    Send me Message
                    </h5>
                </div>
                <div>
                    <form action="" method="post" role="form" className="contactForm">
                        <div id="sendmessage">Your message has been sent. Thank you!</div>
                        <div id="errormessage"></div>
                        <div className="row">
                            <div className="col-md-12 mb-3">
                            <div className="form-group">
                                <input type="text" name="name" className="form-control" id="name" placeholder="Your Name" data-rule="minlen:4" data-msg="Please enter at least 4 chars" />
                                <div className="validation"></div>
                            </div>
                            </div>
                            <div className="col-md-12 mb-3">
                            <div className="form-group">
                                <input type="email" className="form-control" name="email" id="email" placeholder="Your Email" data-rule="email" data-msg="Please enter a valid email" />
                                <div className="validation"></div>
                            </div>
                            </div>
                            <div className="col-md-12 mb-3">
                                <div className="form-group">
                                <input type="text" className="form-control" name="subject" id="subject" placeholder="Subject" data-rule="minlen:4" data-msg="Please enter at least 8 chars of subject" />
                                <div className="validation"></div>
                                </div>
                            </div>
                            <div className="col-md-12 mb-3">
                            <div className="form-group">
                                <textarea className="form-control" name="message" rows="5" data-rule="required" data-msg="Please write something for us" placeholder="Message"></textarea>
                                <div className="validation"></div>
                            </div>
                            </div>
                            <div className="col-md-12">
                            <button type="submit" className="button button-a button-big button-rouded">Send Message</button>
                            </div>
                        </div>
                    </form>
                </div>
                </div>
  )
}

export default SendMeMessage