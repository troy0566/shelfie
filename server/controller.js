

  module.exports = { 
    getData: ( req, res, next ) => {
        const dbInstance = req.app.get('db');
        
        dbInstance.get_inventory()
        .then( () => res.sendStatus(200).json ( "it worked" ) )
        .catch( err => {
        res.status(500).send({errorMessage: "Oops! Something went wrong. Our engineers have been informed!"});
        console.log(err)
        } );
    }
  };
  