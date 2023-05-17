// import Nodemailer from 'nodemailer'

// const configs = {
//   host: process.env.EMAIL_HOST,
//   secure: false,
//   auth: {
//     user: process.env.EMAIL_USERNAME,
//     pass: process.env.EMAIL_PASSWORD,
//   },
// }

// let transporter = Nodemailer.createTransport(configs)

// const sendEmail = async (sendName: string, sendEmail: string, sendSub: string, sendMes: string) => {
//   console.log('email')
//   const res = await transporter.sendMail({
//     from: process.env.EMAIL_USERNAME,
//     to: sendEmail,
//     subject: sendSub,

//     text: sendMes,
//   })

//   console.log(res)
// }

// export default sendEmail
