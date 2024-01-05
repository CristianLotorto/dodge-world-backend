// import User from '../models/User';

// const getAuth = async (req, res) => {
//   try {
//     const user = await User.findOne({ firebaseUid: req.headers.firebaseUid });
//     if (user) {
//       return res.status(201).json({
//         message: 'Super Admin found',
//         data: user,
//         error: false,
//       });
//     }

//     return res.status(404).json({
//       message: 'User not found',
//       data: null,
//       error: true,
//     });
//   } catch (error) {
//     return res.status(400).json({
//       message: error.toString(),
//       data: null,
//       error: true,
//     });
//   }
// };

// export default { getAuth };
