const express = require('express');
const router = express.Router();

router.post('/', async (req, res) => {
  console.log(req.body)
  try {
    var nodemailer = require('nodemailer');

    var transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: 'fashiondujourlk@gmail.com',
        pass: 'fashion123email'
      }
    })

    var mailOptions = {
      from: 'Fashion DeJour',
      to: req.body.email,
      subject: 'Successfully Added Manager',
      html: '<div style="border: 1px solid #e5e5e5; padding: 15px 20px; max-width: 600px; margin: auto;"><p style="text-align: center;"><span style="font-family: tahoma, arial, helvetica, sans-serif;"><img src="https://i.imgur.com/PplxvDI.png" alt="Welcome banner image" width="421" height="366" /></span></p><p>&nbsp;</p><p><span style="font-family: tahoma, arial, helvetica, sans-serif;">Hello There,</span><br /><br /></p><p><span style="font-family: tahoma, arial, helvetica, sans-serif;">Your account has been created in our FASHION DU JOUR. The position as store manager will be carried by you. We have send you the login credentials via this email. <br><br> Email: '+req.body.email+'<br>Password: '+req.body.pw+'</span></p><p><span style="font-family: tahoma, arial, helvetica, sans-serif;">&nbsp;</span><br /><span style="font-family: tahoma, arial, helvetica, sans-serif;">Best wishes,</span><br /><span style="font-family: tahoma, arial, helvetica, sans-serif;">FASHION DU JOUR&nbsp;team</span></p><p style="text-align: center;"><span style="font-family: tahoma, arial, helvetica, sans-serif;"><img src="https://static.wixstatic.com/media/f605a0_c8d6ebe5df8f41beb1559c034c4cb9a1~mv2.jpg/v1/fill/w_500%2Ch_202%2Cal_c%2Cq_90/file.jpg" alt="Logo" width="379" height="153" /></span></p><table style="margin-top: 10px;" border="0" width="500" cellspacing="0" cellpadding="0"><tbody><tr><td style="color: #aaaaaa; font-size: 10px; font-family: tahoma;"><p><span style="font-family: tahoma, arial, helvetica, sans-serif;"><em>The content of this email is confidential and intended for the recipient specified in message only. It is strictly forbidden to share any part of this message with any third party, without a written consent of the sender. If you received this message by mistake, please reply to this message and follow with its deletion, so that we can ensure such a mistake does not occur in the future.</em></span></p></td></tr> </tbody></table></div>'
    }

    transporter.sendMail(mailOptions, function (error, info) {
      if (error) {
        console.log(error)
        res.json({ message: err })
      } else {
        console.log('Email sent: ' + info.response)
        res.json(info.response)
      }
    })
  } catch (err) {
    res.json({ message: err })
  }
})

module.exports = router
