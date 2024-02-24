import mongoose  from "mongoose";
import { ContactSchema } from "../models/crmModel";

const Contact = mongoose.model("Contact", ContactSchema)

export const addContact = (req,res)=>{

    let newContact = Contact(req.body)

    newContact.save()
    .then((contact) => {
        res.status(201).json(contact);
    })
    .catch((err) => {
        console.log(err)
        res.status(500).send({ error: "Failed to save contact." });
    });

    

}