// send errors to the errorHandler from back end, beefore sending to front end

function errorHandler(err, req, res, next) {
  if (err.name === 'ValidationError') {

    // console.log('error Handler', err.errors)

    const frontEndErrors = {}

    for (const key in err.errors) {//err.errors = backend errors from Mongoose
      // console.log(key) 
      // console.log(err.errors[key].message)
      frontEndErrors[key] = err.errors[key].message
    }

    // console.log(frontEndErrors)

    return res.status(422).json(frontEndErrors) //if validation error
  }

  res.sendStatus(500)
  next(err)

}

module.exports = errorHandler
