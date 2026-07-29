const nodemailer = require("nodemailer");


const sendFeedbackMail = async(order)=>{


const transporter = nodemailer.createTransport({

service:"gmail",

auth:{

user:process.env.EMAIL_USER,

pass:process.env.EMAIL_PASS

}

});



const mailOptions = {


from:process.env.EMAIL_USER,


to:order.customer.email,


subject:"⭐ Thank you for your feedback - VaidyaCart",


html:`

<h2>Thank You ${order.customer.fullName} ❤️</h2>

<p>
Your feedback has been received successfully.
</p>


<h3>
Your Rating:
⭐ ${order.rating}/5
</h3>


<p>
We hope you enjoyed your shopping experience.
</p>


<h3>
VaidyaCart Team
</h3>

`

};



await transporter.sendMail(mailOptions);



};



module.exports = sendFeedbackMail;