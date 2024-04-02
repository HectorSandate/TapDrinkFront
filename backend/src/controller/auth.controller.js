// auth.controller.js

import User from '../models/user.model.js';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';


// REGISTRER USER 
export const register = async (req, res) => {
  const { name, email, password } = req.body;

  try {
    // Validate input
    if(!name) {
      return res.status(400).json({message: 'Name is required'})
    }

    const userExists = await User.findOne({email});

    if(userExists) {
      return res.status(400).json({message: 'Email already in use'})  
    }

    // Hash password
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    // Create new user
    const user = await User.create({
      name, 
      email,
      password: hashedPassword
    });

    // Generate JWT token
    const token = jwt.sign(
      {userId: user._id},
      'secretkey',
      {expiresIn: '1d'}
    );

    res.status(201).json({
      message: 'User created successfully',
      token
    });

  } catch (error) {
    console.log(error);
    res.status(500).json({message: 'Server error'});
  }

}

//LOGIN USER
export const login = async (req, res) => {
  const {email, password} = req.body;

  try {
    // Validate input
    if(!email || !password) {
      return res.status(400).json({message: 'All fields are required'})
    }

    const user = await User.findOne({email});

    if(!user) {
      return res.status(404).json({message: 'User not found'})
    }

    // Check password
    const isMatch = await bcrypt.compare(password, user.password);

    if(!isMatch) {
      return res.status(400).json({message: 'Invalid credentials'});
    }

    // Generate token
    const token = jwt.sign(
      {userId: user._id}, 
      'secretkey',
      {expiresIn: '1d'}
    );

    res.json({
      message: 'Login successful',
      token
    });

  } catch (error) {
    console.log(error);
    res.status(500).json({message: 'Server error'});
  }

}

//BAJA
export const deactivateUser = async (req, res) => {
  try {
    const userId = req.params.userId; // Obtener el ID del usuario de los parámetros de la ruta

    // Actualizar el campo isActive a false
    const updatedUser = await User.findByIdAndUpdate(userId, { isActive: false }, { new: true });

    res.status(200).json({ message: 'Usuario desactivado exitosamente', user: updatedUser });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Error en el servidor' });
  }
};

// usuarios activos
export const getActiveUsers = async (req, res) => {
  try {
    // Obtener usuarios activos (donde isActive es true)
    const activeUsers = await User.find({ isActive: true });

    res.status(200).json({ users: activeUsers });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Error en el servidor' });
  }
};