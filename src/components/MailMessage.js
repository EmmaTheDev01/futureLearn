import React from "react";
import './emailmessage.css'
const MailMessage = () => {
    return (
        <div className="email_message">
            <div className="mail_header">
                <h3>Subject: Correction of exam results </h3>
                <h5>ug10230090@ines.ac.rw</h5>
                <span>to me</span>
            </div>
            <div className="mail_msg_text">
                Dear Sir,
                <br></br>
                <br></br>
                <br></br>
                <p>
                    I hope this email finds you in good health. have noticed some changes
                    in the posted results of our exams. I would like to ask for a follow
                    up and for more details regarding our results.
                </p>
                <p>
                    I have a concern that there must be some mistakes that you can help me
                    to present to the lecturer because, I did my best and all the answers
                    provided to my paper are as accurate as from the notes and yet I don't
                    see any reason why I would be marked third grade.
                </p>
                <p>
                    I am sorry for this unexpected email, I would like to be aware of the
                    inconveniences, as a matter of fact help our group to know where we might have done a mistake.
                </p>
                <p>Yours sincerely</p>
                <p>Habumugisha</p>
            </div>
        </div>
    );
};

export default MailMessage;
