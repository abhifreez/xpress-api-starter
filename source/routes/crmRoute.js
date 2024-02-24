import { addContact } from "../controllers/crmController"

const middleWare = (req,resp,next) => {
    console.log("middleWare Called")
    next()
}

const routes =  function (app) {
    app.use(middleWare)


    app.route('/contact')
    .get((req,res)=>{
        res.send("Contact Fetch Success")
    })
    .post(addContact)

    app.route('/contact/:contactId')
    .put((req,res)=>{
         res.send("Contact put Success")
    })
    .delete((req,res)=>{
         res.send("Contact delete Success")
    })


}


export default routes