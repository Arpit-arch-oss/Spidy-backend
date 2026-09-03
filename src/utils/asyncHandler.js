const asyncHandler = (reqestHandler) => {
  (req, res, next) => {
    Promise.resolve(reqestHandler(req, res, next)).catch((err) => next(err))
  }
}



export {asyncHandler}


// const asyncHandler = () => {}
// const asyncHandler = (fn) = () => {}
// const asyncHandler = (func) => async () => {}

// const asyncHandler = (func) => async (req, res, next) => {
//   try{
//     await func(req, res, next)
//   }catch (error){
//     resstutus(error.code || 500).json({
//       success: false,
//       message: error.message
//     })
//   }
// }