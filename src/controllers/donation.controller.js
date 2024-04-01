const express = require('express');
const Donate = require('../models/donate.model');

function donationController() {
    return {
        async donation(req, res) {
            const { firstName, lastName, email, phone, address, donation, amount } = req.body;
            // Process the data (e.g., save to a database, send emails, etc.)
            // ...
            console.log('Form data received :)');
            // console.log('First Name:', firstName);
            // console.log('Last Name:', lastName);
            // console.log('Email:', email);
            // console.log('Phone:', phone);
            // console.log('Address:', address);
            // console.log('Donation:', donation);
            // console.log('Amount:', amount);

            const donate = new Donate({
                firstName: firstName,
                lastName: lastName,
                email: email,
                phone: phone,
                address: address,
                donation: donation,
                amount: amount
            })

            const saved = await donate.save()

            // const dummyData = {
            //     firstName: 'John',
            //     lastName: 'Doe',
            //     email: 'john@example.com',
            //     phone: '1234567890',
            //     address: '123 Main St',
            //     donation: 'money',
            //     amount: 500,
            //   };
            
            //   console.log('Form data received:', dummyData);

            // Respond with a success message
            return res.status(200).json({ success:true });
            //  res.json({success:true})
        }
    }
}

module.exports = donationController;