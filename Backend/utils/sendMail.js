const nodemailer = require("nodemailer");

const transporter = nodemailer.createTransport({

    service: "gmail",

    auth: {

        user: process.env.EMAIL,

        pass: process.env.PASSWORD

    }

});

const sendMail = async (order) => {

    let nextStatus = "";

    switch (order.status) {

        case "placed":

            nextStatus = "shipping";

            break;

        case "shipping":

            nextStatus = "outfordelivery";

            break;

        case "outfordelivery":

            nextStatus = "delivered";

            break;

        default:

            nextStatus = "delivered";

    }

    const approveLink =
`http://localhost:5000/api/orders/approve/${order._id}/${nextStatus}`;

    const rejectLink =
`http://localhost:5000/api/orders/approve/${order._id}/${order.status}`;

    let productRows = "";

    order.items.forEach((item) => {

        productRows += `

        <tr>

            <td style="padding:8px;border:1px solid #ddd;">
                ${item.name}
            </td>

            <td style="padding:8px;border:1px solid #ddd;">
                ${item.quantity}
            </td>

            <td style="padding:8px;border:1px solid #ddd;">
                ₹${item.price}
            </td>

            <td style="padding:8px;border:1px solid #ddd;">
                ₹${item.price * item.quantity}
            </td>

        </tr>

        `;

    });

    const html = `

    <div style="font-family:Arial;padding:20px;">

        <h1 style="color:#0b8b4b;">
            🛒 New Order Received
        </h1>

        <hr>

        <h2>Customer Details</h2>

        <p>
        <b>Name :</b> ${order.customer.fullName}
        </p>

        <p>
        <b>Email :</b> ${order.customer.email}
        </p>

        <p>
        <b>Phone :</b> ${order.customer.phone}
        </p>

        <p>
        <b>Address :</b> ${order.customer.address}
        </p>

        <p>
        <b>Payment :</b> ${order.customer.payment}
        </p>

        <hr>

        <h2>Products</h2>

        <table
        style="border-collapse:collapse;width:100%;">

            <tr>

                <th style="border:1px solid #ddd;padding:10px;">
                    Product
                </th>

                <th style="border:1px solid #ddd;padding:10px;">
                    Qty
                </th>

                <th style="border:1px solid #ddd;padding:10px;">
                    Price
                </th>

                <th style="border:1px solid #ddd;padding:10px;">
                    Total
                </th>

            </tr>

            ${productRows}

        </table>

        <br>

        <h2>

            Grand Total :
            ₹${order.total}

        </h2>

        <h3>

            Current Status :
            ${order.status}

        </h3>
                <br>

        <div
        style="display:flex;
        gap:20px;
        margin-top:30px;">

            <a

            href="${approveLink}"

            style="

            background:#16a34a;

            color:white;

            padding:15px 30px;

            text-decoration:none;

            border-radius:8px;

            font-size:18px;

            font-weight:bold;

            ">

            ✅ YES

            </a>

            <a

            href="${rejectLink}"

            style="

            background:#dc2626;

            color:white;

            padding:15px 30px;

            text-decoration:none;

            border-radius:8px;

            font-size:18px;

            font-weight:bold;

            ">

            ❌ NO

            </a>

        </div>

        <br>

        <hr>

        <h3>

        VaidyaCart Admin Panel

        </h3>

        <p>

        Click YES to move order to next stage.

        </p>

    </div>

    `;

    await transporter.sendMail({

        from: process.env.EMAIL,

        to: process.env.EMAIL,

        subject: `New Order - ${order.orderId}`,

        html

    });

};

module.exports = sendMail;