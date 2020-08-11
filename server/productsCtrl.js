const { findAllByAltText } = require("@testing-library/react")

module.exports = {
    getProducts: (req, res) => {
        const db = req.app.get('db')

        db.get_all_product()
         .then(products => res.status(200).send(products))
         .catch(err => {
             res.status(500).send({ errorMessage: "Oops! Something went wrong. Our engineers have been informed!" });
          console.log(err)
         });
    },
    addProduct: (req,res) => {
        const dbInstance = req.app.get('db');
        const {name, price, image_url} = req.body;

        dbInstance.add_product([name, price, image_url])
        .then(() => res.sendStatus(200))
        .catch(err => {
          res.status(500).send({ errorMessage: "Oops! Something went wrong. Our engineers have been informed!" });
          console.log(err)
        });
    },
    getOneProduct: (req,res) => {
        const dbInstance = req.app.get('db');
        const { id } = req.params;

        dbInstance.get_product(id)
        .then(product => res.status(200).send(product))
        .catch(err => {
            res.status(500).send({ errorMessage: "Oops! Something went wrong. Our engineers have been informed!" });
            console.log(err)
          });
    },
    updateProduct:(req, res) => {
        const dbInstance = req.app.get('db');
        const { params, body } = req;

        dbInstance.update_product([params.id, body.price])
        .then(() => res.sendStatus(200))
        .catch(err => {
            res.status(500).send({ errorMessage: "Oops! Something went wrong. Our engineers have been informed!" });
            console.log(err)
          });
    },
    deleteProduct:(req, res) => {
        const dbInstance = req.app.get('db');
        const { id } = req.params;

        dbInstance.delete_product(id)
        .then(() => res.sendStatus(200))
        .catch(err => {
            res.status(500).send({ errorMessage: "Oops! Something went wrong. Our engineers have been informed!" });
            console.log(err)
          });
    }
    
}




